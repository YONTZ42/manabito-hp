import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, content } = await request.json();

    // Validation
    if (!name || !email || !content) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "form@send.manabito.info",
      to: process.env.CONTACT_EMAIL || "contact@example.com",
      replyTo: email,
      subject: `【マナビト】お問い合わせ: ${name}様より`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #243533; border-bottom: 2px solid #243533; padding-bottom: 10px;">
            新しいお問い合わせ
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0; color: #666;"><strong>お名前:</strong></p>
            <p style="margin: 8px 0; color: #243533;">${name}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0; color: #666;"><strong>メールアドレス:</strong></p>
            <p style="margin: 8px 0; color: #243533;">
              <a href="mailto:${email}" style="color: #243533;">${email}</a>
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0; color: #666;"><strong>お問い合わせ内容:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap; color: #243533;">
${content}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px;">
            このメールはマナビトのウェブサイトから送信されました。
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
