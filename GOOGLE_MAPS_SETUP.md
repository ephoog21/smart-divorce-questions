# Google Maps API Setup Guide

## Getting Your API Key (5 minutes)

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project** (or select existing)
   - Click the project dropdown at the top
   - Click "New Project"
   - Name it: "Smart Divorce Questions"
   - Click "Create"

3. **Enable Required APIs**
   - Go to "APIs & Services" > "Library"
   - Search and enable these APIs:
     - ✅ Maps JavaScript API
     - ✅ Places API
     - ✅ Geocoding API (optional, for address lookup)

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "+ CREATE CREDENTIALS" > "API key"
   - Copy the API key that appears

5. **IMPORTANT: Restrict Your API Key** (Prevents abuse)
   - Click on your new API key to edit it
   - Under "Application restrictions":
     - Select "HTTP referrers (websites)"
     - Add these referrers:
       ```
       https://smartdivorcequestions.com/*
       https://www.smartdivorcequestions.com/*
       http://localhost:3000/*
       http://localhost:3001/*
       ```
   
   - Under "API restrictions":
     - Select "Restrict key"
     - Check only:
       - Maps JavaScript API
       - Places API
       - Geocoding API (if enabled)
   
   - Click "SAVE"

6. **Enable Billing** (Required but you get $200/month free)
   - Go to "Billing" in the sidebar
   - Add a payment method
   - Set up budget alerts at $50 to be safe

## Free Tier Limits (You won't exceed these)

- **Maps JavaScript API**: 28,000 loads/month free
- **Places Nearby Search**: Unlimited when triggered by user interaction
- **Places Details**: $17 per 1,000 requests (only when users click "View Contact")

## Estimated Monthly Costs

With our implementation:
- Map loads: FREE (up to 28,000 views)
- Nearby searches: FREE (user-triggered)
- Place details: ~$5-10/month (only for clicked contacts)

**Total: $0-10/month** for thousands of searches!

## Your API Key

Once you have it, paste it in the .env.local file (next step)