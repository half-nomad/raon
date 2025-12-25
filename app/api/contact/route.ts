import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate Limiting 설정
const RATE_LIMIT = 10; // 시간당 최대 요청 수
const RATE_WINDOW = 60 * 60 * 1000; // 1시간 (밀리초)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// 오래된 엔트리 정리 (메모리 관리)
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

// Rate Limit 체크
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // 주기적으로 오래된 엔트리 정리
  if (rateLimitMap.size > 1000) {
    cleanupRateLimitMap();
  }

  if (!record || now > record.resetTime) {
    // 새 윈도우 시작
    const resetTime = now + RATE_WINDOW;
    rateLimitMap.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: RATE_LIMIT - 1, resetTime };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count, resetTime: record.resetTime };
}

// 클라이언트 IP 추출
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

// Category mapping for email
const categoryMap: Record<string, string> = {
  "compressor-valve": "압축기밸브",
  "compressor-ring": "압축기 링&패킹",
  "frame-parts": "프레임부품",
  "repair-service": "수리서비스",
  materials: "소재",
  general: "일반문의",
};

// 허용 파일 타입
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Sanitize filename to prevent path traversal and special characters
function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^\w\s.\-가-힣]/g, '_')  // 특수문자 제거 (한글 허용)
    .replace(/\.{2,}/g, '.')           // 연속 점 제거
    .substring(0, 255);                // 길이 제한
}

export async function POST(request: NextRequest) {
  try {
    // Rate Limiting 체크
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      const retryAfter = Math.ceil((rateLimit.resetTime - Date.now()) / 1000);
      return NextResponse.json(
        { error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(RATE_LIMIT),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(Math.ceil(rateLimit.resetTime / 1000)),
          },
        }
      );
    }

    const formData = await request.formData();

    const category = formData.get("category") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("files") as File[];

    // Validation
    if (!category || !name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: "모든 필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "유효한 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    // Phone format validation
    const phoneRegex = /^[\d\-+() ]{9,20}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "유효한 전화번호를 입력해주세요." },
        { status: 400 }
      );
    }

    // Input length validation
    const MAX_NAME_LENGTH = 100;
    const MAX_COMPANY_LENGTH = 200;
    const MAX_MESSAGE_LENGTH = 5000;

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: "이름이 너무 깁니다. (최대 100자)" },
        { status: 400 }
      );
    }
    if (company.length > MAX_COMPANY_LENGTH) {
      return NextResponse.json(
        { error: "회사명이 너무 깁니다. (최대 200자)" },
        { status: 400 }
      );
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "메시지가 너무 깁니다. (최대 5000자)" },
        { status: 400 }
      );
    }

    // 파일 검증 및 처리
    const attachments: { filename: string; content: Buffer }[] = [];

    for (const file of files) {
      if (file.size > 0) {
        // 타입 검증
        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
          return NextResponse.json(
            { error: `지원하지 않는 파일 형식입니다: ${file.name}` },
            { status: 400 }
          );
        }

        // 크기 검증
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: `파일 크기가 5MB를 초과합니다: ${file.name}` },
            { status: 400 }
          );
        }

        // 파일을 Buffer로 변환
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        attachments.push({
          filename: sanitizeFilename(file.name),
          content: buffer,
        });
      }
    }

    // Email template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 650px;
      margin: 0 auto;
      padding: 20px;
      background: #f3f4f6;
    }
    .container {
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #0A1628 0%, #1A2D47 100%);
      color: white;
      padding: 24px 30px;
    }
    .header h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
    }
    .header .badge {
      display: inline-block;
      background: #EF4444;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 8px;
    }
    .content {
      padding: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table tr {
      border-bottom: 1px solid #e5e7eb;
    }
    table tr:last-child {
      border-bottom: none;
    }
    table th {
      background: #f8fafc;
      color: #0A1628;
      font-weight: 600;
      text-align: left;
      padding: 14px 20px;
      width: 120px;
      vertical-align: top;
      font-size: 14px;
    }
    table td {
      padding: 14px 20px;
      color: #374151;
      font-size: 14px;
    }
    table td a {
      color: #3B82F6;
      text-decoration: none;
    }
    table td a:hover {
      text-decoration: underline;
    }
    .message-section {
      padding: 20px;
      border-top: 1px solid #e5e7eb;
    }
    .message-label {
      font-weight: 600;
      color: #0A1628;
      margin-bottom: 10px;
      font-size: 14px;
    }
    .message-box {
      background: #f8fafc;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      white-space: pre-wrap;
      word-wrap: break-word;
      color: #374151;
      font-size: 14px;
      line-height: 1.7;
    }
    .attachments-section {
      padding: 16px 20px;
      background: #f8fafc;
      border-top: 1px solid #e5e7eb;
    }
    .attachments-label {
      font-weight: 600;
      color: #0A1628;
      margin-bottom: 10px;
      font-size: 14px;
    }
    .attachment-item {
      display: inline-block;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      padding: 6px 12px;
      border-radius: 6px;
      margin: 4px 4px 4px 0;
      font-size: 13px;
      color: #374151;
    }
    .footer {
      padding: 20px;
      text-align: center;
      color: #6b7280;
      font-size: 12px;
      border-top: 1px solid #e5e7eb;
      background: #f8fafc;
    }
    .footer p {
      margin: 4px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>새로운 문의가 도착했습니다</h1>
      <span class="badge">${escapeHtml(categoryMap[category] || category)}</span>
    </div>

    <div class="content">
      <table>
        <tr>
          <th>이름</th>
          <td><strong>${escapeHtml(name)}</strong></td>
        </tr>
        <tr>
          <th>회사명</th>
          <td>${escapeHtml(company)}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td>
        </tr>
      </table>

      <div class="message-section">
        <div class="message-label">문의 내용</div>
        <div class="message-box">${escapeHtml(message)}</div>
      </div>

      ${attachments.length > 0 ? `
      <div class="attachments-section">
        <div class="attachments-label">첨부 파일 (${attachments.length}개)</div>
        <div>
          ${attachments.map(att => `<span class="attachment-item">📎 ${escapeHtml(att.filename)}</span>`).join('')}
        </div>
      </div>
      ` : ''}
    </div>

    <div class="footer">
      <p>이 메일은 라온토탈솔루션 웹사이트 문의 폼을 통해 자동 발송되었습니다.</p>
      <p><strong>라온토탈솔루션</strong> | rts@raontotalsolution.co.kr | 02-575-3051</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "라온토탈솔루션 문의 <onboarding@resend.dev>", // Resend 기본 발신 주소
      to: ["rts@raontotalsolution.co.kr"],
      replyTo: email, // 고객 이메일로 답장 가능
      subject: `[${categoryMap[category]}] ${escapeHtml(company)} - ${escapeHtml(name)}님의 문의${attachments.length > 0 ? ` (첨부 ${attachments.length}개)` : ''}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
          "X-RateLimit-Reset": String(Math.ceil(rateLimit.resetTime / 1000)),
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
