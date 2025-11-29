import { NextRequest, NextResponse } from 'next/server';

// POST /api/partner - Handle partner registration form submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      companyName,
      contactPerson,
      email,
      phone,
      country,
      businessType,
      message
    } = body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !phone || !country || !businessType) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = {
      to: 'admin@muchglow.com',
      subject: `New Partner Application: ${companyName}`,
      html: `
        <h2>New Partner Registration</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Contact Person:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${contactPerson}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Country:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${country}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business Type:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${businessType}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px; color: #666;">
          Submitted on: ${new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'short'
          })}
        </p>
      `,
      text: `
New Partner Registration

Company Name: ${companyName}
Contact Person: ${contactPerson}
Email: ${email}
Phone: ${phone}
Country: ${country}
Business Type: ${businessType}
${message ? `Message: ${message}` : ''}

Submitted on: ${new Date().toLocaleString()}
      `
    };

    // Option 1: Use existing MuchGlow API
    try {
      const apiPayload = {
        salonName: companyName,
        phoneNumber: phone.replace(/[^\d+]/g, ''),
        contactName: contactPerson,
        country: country,
        email: email,
        city: businessType,
        instaAccount: message || null,
      };

      const apiResponse = await fetch('https://api.muchglow.com/api/v1/salon/RegisterSalon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiPayload),
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json().catch(() => ({}));
        console.error('API registration failed:', errorData);
      }
    } catch (apiError) {
      console.error('Error calling MuchGlow API:', apiError);
    }

    // Option 2: Send email using a service (configure as needed)
    // For production, you would integrate with:
    // - AWS SES
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - etc.

    // Example with environment variables (to be configured):
    // const SMTP_HOST = process.env.SMTP_HOST;
    // const SMTP_PORT = process.env.SMTP_PORT;
    // const SMTP_USER = process.env.SMTP_USER;
    // const SMTP_PASS = process.env.SMTP_PASS;

    // For now, log the email content (replace with actual email sending)
    console.log('Partner registration email:', emailContent);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully! We will contact you within 24 hours.',
    });

  } catch (error) {
    console.error('Partner registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}

// GET /api/partner - Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: 'Partner Registration API',
    email: 'admin@muchglow.com'
  });
}
