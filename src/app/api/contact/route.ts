import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // 1. Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "请填写您的姓名 / Please enter your name" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "请填写有效的电子邮箱 / Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "请填写您的咨询内容 / Please enter your message" },
        { status: 400 }
      );
    }

    const targetRecipient = process.env.CONTACT_RECEIVER_EMAIL || "lilinji@genetind.com";
    const mailSubject = `[官网客户留言] ${subject?.trim() || "生命科学业务咨询"} - 来自 ${name.trim()}`;
    const timestamp = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // 2. Format HTML Email Content
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f4f6f9; margin: 0; padding: 30px 15px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #059669, #06b6d4); padding: 25px 30px; color: #ffffff; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
        .header p { margin: 5px 0 0 0; font-size: 13px; opacity: 0.9; }
        .content { padding: 30px; }
        .item { margin-bottom: 18px; }
        .label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 4px; letter-spacing: 0.5px; }
        .value { font-size: 15px; color: #0f172a; line-height: 1.5; font-weight: 500; }
        .message-box { background: #f8fafc; border-radius: 8px; padding: 18px; border-left: 4px solid #10b981; font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap; word-break: break-word; margin-top: 10px; }
        .footer { background: #f8fafc; padding: 18px 30px; font-size: 12px; color: #94a3b8; border-top: 1px solid #edf2f7; text-align: center; }
        .button { display: inline-block; background: #10b981; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>GeneTind 官网客户咨询通知</h1>
          <p>提交时间：${timestamp} (北京时间)</p>
        </div>
        <div class="content">
          <div class="item">
            <div class="label">客户姓名 / Name</div>
            <div class="value">${escapeHtml(name)}</div>
          </div>
          <div class="item">
            <div class="label">客户邮箱 / Email</div>
            <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #059669; text-decoration: none;">${escapeHtml(email)}</a></div>
          </div>
          <div class="item">
            <div class="label">联系电话 / Phone</div>
            <div class="value">${phone ? escapeHtml(phone) : "未提供"}</div>
          </div>
          <div class="item">
            <div class="label">咨询主题 / Subject</div>
            <div class="value">${subject ? escapeHtml(subject) : "通用业务咨询"}</div>
          </div>
          <div class="item">
            <div class="label">留言详情 / Message</div>
            <div class="message-box">${escapeHtml(message)}</div>
          </div>
          <div style="text-align: center; margin-top: 25px;">
            <a href="mailto:${escapeHtml(email)}?subject=Re: ${encodeURIComponent(mailSubject)}" class="button" style="color: #ffffff;">直接回复此客户 (Reply)</a>
          </div>
        </div>
        <div class="footer">
          本邮件由 GeneTind 吉因丰科技官网自动生成，接收邮箱：${targetRecipient}
        </div>
      </div>
    </body>
    </html>
    `;

    // 3. Check if SMTP credentials exist in environment
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      // Development / Fallback mode: SMTP not configured yet
      console.warn(
        `[Contact Form Notice] SMTP credentials are not configured in environment variables.\n` +
        `Simulated delivery for: ${mailSubject}\n` +
        `Target: ${targetRecipient}\n` +
        `From: ${name} <${email}>\n` +
        `Message: ${message}`
      );

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "留言已登记。如需真实发送邮件到 " + targetRecipient + "，请在 .env.local 中配置企业邮箱 SMTP 发信账号。",
        recipient: targetRecipient,
      });
    }

    // 4. Send via Real SMTP Transporter
    const isSecure = smtpPort === 465;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailFrom = process.env.SMTP_FROM || `"GeneTind 官网通知" <${smtpUser}>`;

    const info = await transporter.sendMail({
      from: mailFrom,
      to: targetRecipient,
      replyTo: email,
      subject: mailSubject,
      html: htmlContent,
      text: `GeneTind 官网新留言\n\n姓名: ${name}\n邮箱: ${email}\n电话: ${phone || "未提供"}\n主题: ${subject || "无"}\n内容:\n${message}\n\n提交时间: ${timestamp}`,
    });

    console.log(`[Contact API] Email successfully delivered to ${targetRecipient}, messageId: ${info.messageId}`);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "邮件发送服务异常，请稍后再试或直接发信至 service@genetind.com",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
