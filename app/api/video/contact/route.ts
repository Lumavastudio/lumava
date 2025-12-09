export const runtime = "nodejs";

// @ts-ignore  ← رفع خطای nodemailer
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TO_EMAIL = process.env.TO_EMAIL || "";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT || 0);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const CONTACT_API_SECRET = process.env.CONTACT_API_SECRET || "";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const secretHeader = req.headers.get("x-contact-secret") || "";
    if (CONTACT_API_SECRET && secretHeader !== CONTACT_API_SECRET) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!name || !email || !message)
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });

    if (!validateEmail(email))
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });

    const html = `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p>IP: ${(req as any).ip || "unknown"}</p>
    `;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && TO_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Website Contact" <${SMTP_USER}>`,
        to: TO_EMAIL,
        subject: `New contact from ${name} – ${email}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html,
      });

      return NextResponse.json({ ok: true });
    }

    console.log("Contact (no SMTP configured):", { name, email, message });
    return NextResponse.json({ ok: true, note: "no-smtp" });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { ok: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
