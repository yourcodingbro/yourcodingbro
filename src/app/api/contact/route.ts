import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  budget: z.string().min(1),
  message: z.string().min(20),
});

const budgetLabels: Record<string, string> = {
  "under-1k": "Under $1,000",
  "1k-5k": "$1,000 – $5,000",
  "5k-15k": "$5,000 – $15,000",
  "15k-plus": "$15,000+",
  "not-sure": "Not sure yet",
};

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    const limit = checkRateLimit(ip);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "rate_limit", message: limit.message },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
      );
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const { name, email, budget, message } = parsed.data;
    const budgetLabel = budgetLabels[budget] ?? budget;

    await resend.emails.send({
      from: "YourCodingBro Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "hello@yourcodingbro.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #020817; color: #f0f6ff; padding: 32px; border-radius: 16px;">
          <div style="border-bottom: 1px solid #1e3a5f; padding-bottom: 24px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 24px; color: #38bdf8;">New Project Inquiry</h1>
            <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">via YourCodingBro contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #f0f6ff; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #38bdf8;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Budget</td>
              <td style="padding: 8px 0; color: #f0f6ff; font-size: 14px;">${budgetLabel}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #0c1a2e; border: 1px solid #1e3a5f; border-radius: 12px;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #1e3a5f;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
