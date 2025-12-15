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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { category, name, company, email, phone, message } = body;

    // Validation
    if (!category || !name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: "모든 필수 항목을 입력해주세요." },
        { status: 400 }
      );
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
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0A1628 0%, #1A2D47 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-top: none;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #0A1628;
      margin-bottom: 5px;
      display: block;
    }
    .value {
      color: #4b5563;
      padding: 10px;
      background: #f9fafb;
      border-radius: 4px;
      border-left: 3px solid #3B82F6;
    }
    .category-badge {
      display: inline-block;
      background: #EF4444;
      color: white;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
    }
    .message-box {
      background: #f9fafb;
      padding: 15px;
      border-radius: 4px;
      border-left: 3px solid #3B82F6;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>💼 새로운 문의가 도착했습니다</h1>
  </div>
  <div class="content">
    <div class="field">
      <span class="label">문의 구분</span>
      <div class="value">
        <span class="category-badge">${categoryMap[category] || category}</span>
      </div>
    </div>

    <div class="field">
      <span class="label">이름</span>
      <div class="value">${name}</div>
    </div>

    <div class="field">
      <span class="label">회사명</span>
      <div class="value">${company}</div>
    </div>

    <div class="field">
      <span class="label">이메일</span>
      <div class="value">
        <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
      </div>
    </div>

    <div class="field">
      <span class="label">전화번호</span>
      <div class="value">
        <a href="tel:${phone}" style="color: #3B82F6; text-decoration: none;">${phone}</a>
      </div>
    </div>

    <div class="field">
      <span class="label">문의 내용</span>
      <div class="message-box">${message}</div>
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
      subject: `[${categoryMap[category]}] ${company} - ${name}님의 문의`,
      html: emailHtml,
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
