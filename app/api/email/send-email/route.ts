import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_T35r54uX_Q2tqhc3cDdP5KrtWT6vvAdNu");

export const POST = async (req: any) => {
  if (req.method === "POST") {
    const { from, to = "saifsep17@gmail.com", html } = req.body;
    try {
      await resend.emails.send({
        from,
        to,
        subject: "Query regarding services",
        html,
      });

      return NextResponse.json({
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({
        message: "Failed to send email. Please try again later.",
      });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
};
