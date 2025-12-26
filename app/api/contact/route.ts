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

    // Email template (Naver Mail compatible - using bgcolor attributes)
    const emailHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>새로운 문의</title>
</head>
<body bgcolor="#f3f4f6" style="margin:0; padding:0; font-family:Arial, sans-serif; font-size:14px; color:#333333;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f3f4f6">
    <tr>
      <td align="center" style="padding:20px 10px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border:1px solid #dddddd;">
          <!-- Header -->
          <tr>
            <td bgcolor="#0A1628" style="padding:24px 30px;">
              <font color="#ffffff" style="font-size:20px; font-weight:bold;">새로운 문의가 도착했습니다</font>
              <br/>
              <table border="0" cellspacing="0" cellpadding="0" style="margin-top:10px;">
                <tr>
                  <td bgcolor="#EF4444" style="padding:4px 12px; border-radius:4px;">
                    <font color="#ffffff" style="font-size:13px; font-weight:bold;">${escapeHtml(categoryMap[category] || category)}</font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Content Table -->
          <tr>
            <td style="padding:0;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="100" bgcolor="#f8fafc" style="padding:14px 20px; border-bottom:1px solid #e5e7eb; font-weight:bold; color:#0A1628;">이름</td>
                  <td style="padding:14px 20px; border-bottom:1px solid #e5e7eb; color:#374151;"><strong>${escapeHtml(name)}</strong></td>
                </tr>
                <tr>
                  <td width="100" bgcolor="#f8fafc" style="padding:14px 20px; border-bottom:1px solid #e5e7eb; font-weight:bold; color:#0A1628;">회사명</td>
                  <td style="padding:14px 20px; border-bottom:1px solid #e5e7eb; color:#374151;">${escapeHtml(company)}</td>
                </tr>
                <tr>
                  <td width="100" bgcolor="#f8fafc" style="padding:14px 20px; border-bottom:1px solid #e5e7eb; font-weight:bold; color:#0A1628;">이메일</td>
                  <td style="padding:14px 20px; border-bottom:1px solid #e5e7eb;"><a href="mailto:${escapeHtml(email)}" style="color:#3B82F6;">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td width="100" bgcolor="#f8fafc" style="padding:14px 20px; border-bottom:1px solid #e5e7eb; font-weight:bold; color:#0A1628;">전화번호</td>
                  <td style="padding:14px 20px; border-bottom:1px solid #e5e7eb;"><a href="tel:${escapeHtml(phone)}" style="color:#3B82F6;">${escapeHtml(phone)}</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message -->
          <tr>
            <td style="padding:20px;">
              <font style="font-weight:bold; color:#0A1628;">문의 내용</font>
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:10px;">
                <tr>
                  <td bgcolor="#f8fafc" style="padding:16px; border:1px solid #e5e7eb;">
                    <font color="#374151" style="white-space:pre-wrap; line-height:1.7;">${escapeHtml(message)}</font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ${attachments.length > 0 ? `
          <!-- Attachments -->
          <tr>
            <td bgcolor="#f8fafc" style="padding:16px 20px; border-top:1px solid #e5e7eb;">
              <font style="font-weight:bold; color:#0A1628;">첨부 파일 (${attachments.length}개)</font>
              <br/><br/>
              ${attachments.map(att => `<font color="#374151">📎 ${escapeHtml(att.filename)}</font><br/>`).join('')}
            </td>
          </tr>
          ` : ''}
          <!-- Footer -->
          <tr>
            <td bgcolor="#f8fafc" align="center" style="padding:20px; border-top:1px solid #e5e7eb;">
              <font color="#6b7280" style="font-size:12px;">
                이 메일은 라온토탈솔루션 웹사이트 문의 폼을 통해 자동 발송되었습니다.<br/>
                <strong>라온토탈솔루션</strong> | <a href="mailto:rts@raontotalsolution.co.kr" style="color:#3B82F6;">rts@raontotalsolution.co.kr</a> | 02-575-3051
              </font>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Plain text fallback for email clients that don't support HTML
    const emailText = `
새로운 문의가 도착했습니다
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[${categoryMap[category] || category}]

■ 이름: ${name}
■ 회사명: ${company}
■ 이메일: ${email}
■ 전화번호: ${phone}

■ 문의 내용:
${message}
${attachments.length > 0 ? `
■ 첨부 파일 (${attachments.length}개):
${attachments.map(att => `  - ${att.filename}`).join('\n')}
` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
이 메일은 라온토탈솔루션 웹사이트 문의 폼을 통해 자동 발송되었습니다.
라온토탈솔루션 | rts@raontotalsolution.co.kr | 02-575-3051
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "라온토탈솔루션 문의 <onboarding@resend.dev>", // Resend 기본 발신 주소
      to: ["rts@raontotalsolution.co.kr"],
      replyTo: email, // 고객 이메일로 답장 가능
      subject: `[${categoryMap[category]}] ${company} - ${name}님의 문의${attachments.length > 0 ? ` (첨부 ${attachments.length}개)` : ''}`,
      html: emailHtml,
      text: emailText,
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
