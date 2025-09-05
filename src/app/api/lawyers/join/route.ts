import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Create email transporter using GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER || 'support@smartdivorcequestions.com',
        pass: process.env.EMAIL_PASSWORD || ''
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Format the email to you (admin)
    const adminEmailHtml = `
      <h2>New Lawyer Directory Application</h2>
      
      <h3>Personal Information</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
      </ul>
      
      <h3>Law Firm Information</h3>
      <ul>
        <li><strong>Firm Name:</strong> ${formData.firmName}</li>
        <li><strong>Bar Number:</strong> ${formData.barNumber}</li>
        <li><strong>Years of Experience:</strong> ${formData.yearsExperience}</li>
        <li><strong>Website:</strong> ${formData.website || 'Not provided'}</li>
      </ul>
      
      <h3>Location</h3>
      <ul>
        <li><strong>Address:</strong> ${formData.streetAddress}</li>
        <li><strong>City:</strong> ${formData.city}</li>
        <li><strong>State:</strong> ${formData.state}</li>
        <li><strong>ZIP:</strong> ${formData.zipCode}</li>
      </ul>
      
      <h3>Practice Details</h3>
      <ul>
        <li><strong>Practice Areas:</strong> ${formData.practiceAreas.join(', ') || 'None selected'}</li>
        <li><strong>Client Types:</strong> ${formData.clientTypes.join(', ') || 'None selected'}</li>
        <li><strong>Consultation Type:</strong> ${formData.consultationType}</li>
      </ul>
      
      <h3>Sponsorship Interest</h3>
      <ul>
        <li><strong>Tier:</strong> ${formData.sponsorshipTier}</li>
        <li><strong>Comments:</strong> ${formData.comments || 'None'}</li>
      </ul>
      
      <hr>
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    `;

    // Confirmation email to the lawyer
    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #14b8a6, #0d9488); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Your Application!</h1>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <p style="font-size: 16px; color: #333;">Dear ${formData.firstName} ${formData.lastName},</p>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Thank you for applying to join the Smart Divorce Questions lawyer directory. 
            We've received your application and will review it within 24-48 hours.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #14b8a6; margin-top: 0;">What Happens Next?</h3>
            <ol style="color: #555; line-height: 1.8;">
              <li>Our team will review your application</li>
              <li>We'll verify your bar registration</li>
              <li>You'll receive an approval email with next steps</li>
              <li>Once approved, you can set up your sponsored listing</li>
            </ol>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #14b8a6; margin-top: 0;">Your Application Summary</h3>
            <p><strong>Firm:</strong> ${formData.firmName}</p>
            <p><strong>Location:</strong> ${formData.city}, ${formData.state}</p>
            <p><strong>Sponsorship Level:</strong> ${formData.sponsorshipTier}</p>
            <p><strong>Practice Areas:</strong> ${formData.practiceAreas.length} selected</p>
          </div>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
              <strong>Limited Time Offer:</strong> New lawyers get 50% off their first month!
            </p>
          </div>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 20px;">
            If you have any questions in the meantime, please don't hesitate to reach out to us 
            at support@smartdivorcequestions.com
          </p>
          
          <p style="font-size: 16px; color: #333;">
            Best regards,<br>
            <strong>The Smart Divorce Questions Team</strong>
          </p>
        </div>
        
        <div style="background: #333; padding: 20px; text-align: center;">
          <p style="color: #999; margin: 0; font-size: 14px;">
            © 2025 Smart Divorce Questions. All rights reserved.
          </p>
          <p style="color: #999; margin: 5px 0 0 0; font-size: 14px;">
            This email was sent to ${formData.email}
          </p>
        </div>
      </div>
    `;

    // Send email to admin (you)
    await transporter.sendMail({
      from: '"Smart Divorce Questions" <support@smartdivorcequestions.com>',
      to: 'ehoogasian@gmail.com',
      subject: `New Lawyer Application - ${formData.firstName} ${formData.lastName} (${formData.firmName})`,
      html: adminEmailHtml
    });

    // Send confirmation email to the lawyer
    await transporter.sendMail({
      from: '"Smart Divorce Questions" <support@smartdivorcequestions.com>',
      to: formData.email,
      subject: 'Application Received - Smart Divorce Questions Lawyer Directory',
      html: confirmationEmailHtml
    });

    // Also save to database if needed
    // You can uncomment and modify this section when ready
    /*
    const db = new Database();
    if (db.connect()) {
      await db.insertLawyerApplication(formData);
      db.close();
    }
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error processing lawyer application:', error);
    
    // Still return success to user even if email fails
    // But log the error for debugging
    return NextResponse.json({ 
      success: true, 
      message: 'Application received - we will contact you soon' 
    });
  }
}