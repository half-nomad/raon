import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(request: NextRequest) {
  try {
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
          filename: file.name,
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
      <span class="badge">${categoryMap[category] || category}</span>
    </div>

    <div class="content">
      <table>
        <tr>
          <th>이름</th>
          <td><strong>${name}</strong></td>
        </tr>
        <tr>
          <th>회사명</th>
          <td>${company}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td><a href="tel:${phone}">${phone}</a></td>
        </tr>
      </table>

      <div class="message-section">
        <div class="message-label">문의 내용</div>
        <div class="message-box">${message}</div>
      </div>

      ${attachments.length > 0 ? `
      <div class="attachments-section">
        <div class="attachments-label">첨부 파일 (${attachments.length}개)</div>
        <div>
          ${attachments.map(att => `<span class="attachment-item">📎 ${att.filename}</span>`).join('')}
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
      subject: `[${categoryMap[category]}] ${company} - ${name}님의 문의${attachments.length > 0 ? ` (첨부 ${attachments.length}개)` : ''}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
