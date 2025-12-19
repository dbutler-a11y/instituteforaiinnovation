import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend lazily to avoid build-time errors
const getResend = () => {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

interface ContactData {
  name: string
  email: string
  phone?: string
  inquiryType?: string
  message: string
}

const inquiryTypeLabels: Record<string, string> = {
  general: "General Question",
  enrollment: "Enrollment Inquiry",
  partnership: "Partnership Opportunity",
  investor: "Investor Inquiry",
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json()

    // Validate required fields
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }

    if (!body.email || !body.email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const contactId = `CONTACT-${Date.now()}`
    const inquiryLabel = body.inquiryType
      ? inquiryTypeLabels[body.inquiryType] || body.inquiryType
      : "General"

    // All inquiries go to the main admin email
    const recipientEmail = "dbutler@eulaproperties.com"

    // Send notification email
    const resend = getResend()
    if (resend) {
      try {
        await resend.emails.send({
          from: "Institute for AI Innovation <noreply@instituteforaiinnovation.org>",
          to: [recipientEmail],
          replyTo: body.email,
          subject: `[${inquiryLabel}] Contact Form: ${body.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Contact ID:</strong> ${contactId}</p>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryLabel}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <hr>
            <h3>Message:</h3>
            <p>${body.message.replace(/\n/g, "<br>")}</p>
          `,
        })

        // Send confirmation email to sender
        await resend.emails.send({
          from: "Institute for AI Innovation <noreply@instituteforaiinnovation.org>",
          to: [body.email],
          subject: "We Received Your Message - Institute for AI Innovation",
          html: `
            <h2>Thank You for Contacting Us!</h2>
            <p>Dear ${body.name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p><strong>Reference ID:</strong> ${contactId}</p>
            <h3>Your Message:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${body.message.replace(/\n/g, "<br>")}</p>
            <p>For urgent matters, you can reach us at (713) 903-4699.</p>
            <p>Best regards,<br>Institute for AI Innovation</p>
          `,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        // Continue even if email fails
      }
    }

    // Log the contact form data
    console.log("New contact form submission received:", {
      contactId,
      name: body.name,
      email: body.email,
      phone: body.phone || "Not provided",
      inquiryType: inquiryLabel,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        data: {
          contactId,
          name: body.name,
          email: body.email,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to process contact form submission" },
      { status: 500 }
    )
  }
}
