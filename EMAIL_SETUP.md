# Email Setup Instructions for Lawyer Signup Form

## Environment Variables Required

To enable email functionality for the lawyer signup form, you need to add these environment variables to your Vercel project:

### 1. EMAIL_USER
This is the Gmail address that will send the emails.
- Example: `your-email@gmail.com`

### 2. EMAIL_PASSWORD
This is an App Password (not your regular Gmail password).
- You need to generate an App Password from your Google Account settings.

## How to Set Up Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "How you sign in to Google", click on "2-Step Verification" (you need to enable this first)
4. Scroll to the bottom and click on "App passwords"
5. Select "Mail" and "Other (Custom name)"
6. Enter "Smart Divorce Questions" as the custom name
7. Click "Generate"
8. Copy the 16-character password that appears

## Adding Environment Variables to Vercel

### Option 1: Via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your "smart-divorce-questions" project
3. Go to "Settings" → "Environment Variables"
4. Add:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASSWORD` = the 16-character app password from Google

### Option 2: Via Vercel CLI
```bash
vercel env add EMAIL_USER production
# Enter your Gmail address when prompted

vercel env add EMAIL_PASSWORD production
# Enter the 16-character app password when prompted
```

## Current Email Configuration

The system is set up to:
- Send notification emails to: **ehoogasian@gmail.com** (your admin email)
- Send confirmation emails to lawyer applicants
- Use Gmail SMTP service for sending

## Testing

Once the environment variables are added:
1. Go to https://smartdivorcequestions.com/lawyers/join
2. Fill out the form with test data
3. Submit the form
4. Check ehoogasian@gmail.com for the admin notification
5. Check the email address you used in the form for the confirmation

## Fallback Behavior

If email sending fails (due to missing credentials), the form will still:
- Show success to the user
- Log the error in the server console
- Continue to work (just without sending emails)

This ensures users don't get error messages even if email isn't configured yet.