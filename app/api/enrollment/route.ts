import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend lazily to avoid build-time errors
const getResend = () => {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

interface EnrollmentData {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredStartDate?: string
  fundingSource: string
  hasHighSchoolDiploma: boolean
  agreeToTerms: boolean
}

export async function POST(request: NextRequest) {
  try {
    const body: EnrollmentData = await request.json()

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "hasHighSchoolDiploma",
      "agreeToTerms",
    ]

    for (const field of requiredFields) {
      if (!body[field as keyof EnrollmentData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Validate that user has high school diploma
    if (!body.hasHighSchoolDiploma) {
      return NextResponse.json(
        { error: "High School Diploma or GED is required for enrollment" },
        { status: 400 }
      )
    }

    // Validate that user agreed to terms
    if (!body.agreeToTerms) {
      return NextResponse.json(
        { error: "You must agree to the terms and conditions" },
        { status: 400 }
      )
    }

    const applicationId = `APP-${Date.now()}`
    const fullName = `${body.firstName} ${body.lastName}`

    // Send notification email to admissions team
    const resend = getResend()
    if (resend) {
      try {
        await resend.emails.send({
          from: "Institute for AI Innovation <noreply@instituteforaiinnovation.org>",
          to: ["dbutler@eulaproperties.com"],
          subject: `New Enrollment Application: ${fullName}`,
          html: `
            <h2>New Enrollment Application</h2>
            <p><strong>Application ID:</strong> ${applicationId}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Preferred Start Date:</strong> ${body.preferredStartDate || "Not specified"}</p>
            <p><strong>Funding Source:</strong> ${body.fundingSource}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
        })

        // Send confirmation email to applicant
        await resend.emails.send({
          from: "Institute for AI Innovation <noreply@instituteforaiinnovation.org>",
          to: [body.email],
          subject: "Application Received - Institute for AI Innovation",
          html: `
            <h2>Thank You for Your Application!</h2>
            <p>Dear ${body.firstName},</p>
            <p>We have received your enrollment application for the AI Capability Specialist Certificate program.</p>
            <p><strong>Application ID:</strong> ${applicationId}</p>
            <p>Our admissions team will review your application and contact you within 1-2 business days to discuss next steps.</p>
            <h3>What to Expect:</h3>
            <ul>
              <li>A phone call from our admissions team</li>
              <li>Information about your funding options${body.fundingSource === "wioa" ? " (WIOA voucher assistance)" : ""}</li>
              <li>Program schedule and start date options</li>
            </ul>
            <p>If you have any questions in the meantime, please reply to this email or call us at (713) 903-4699.</p>
            <p>Best regards,<br>Institute for AI Innovation<br>Admissions Team</p>
          `,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        // Continue even if email fails - we still want to return success
      }
    }

    // Log the enrollment data
    console.log("New enrollment application received:", {
      applicationId,
      name: fullName,
      email: body.email,
      phone: body.phone,
      preferredStartDate: body.preferredStartDate || "Not specified",
      fundingSource: body.fundingSource,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Enrollment application submitted successfully",
        data: {
          applicationId,
          name: fullName,
          email: body.email,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing enrollment application:", error)
    return NextResponse.json(
      { error: "Failed to process enrollment application" },
      { status: 500 }
    )
  }
}
