import { NextRequest, NextResponse } from 'next/server';

// Sponsorship tiers and pricing
export const SPONSORSHIP_TIERS = {
  basic: {
    price: 99, // per month
    features: [
      'Highlighted listing',
      'Basic badge',
      'Contact info visible',
      'Up to 3 photos'
    ]
  },
  premium: {
    price: 299,
    features: [
      'Priority placement',
      'Premium badge',
      'Custom description',
      'Up to 10 photos',
      'Direct contact button',
      'Monthly analytics report'
    ]
  },
  featured: {
    price: 599,
    features: [
      'Top placement always',
      'Featured badge',
      'Full profile customization',
      'Unlimited photos',
      'Video introduction',
      'Weekly analytics',
      'Competitor ad removal',
      'Priority support'
    ]
  }
};

// GET sponsored lawyers for a location
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const radius = searchParams.get('radius') || '10'; // km
  
  try {
    // In production, query your database for sponsored lawyers near this location
    // Example query:
    /*
    SELECT * FROM lawyers 
    WHERE sponsored = true 
      AND ST_DWithin(
        geography(ST_MakePoint(longitude, latitude)),
        geography(ST_MakePoint($1, $2)),
        $3 * 1000
      )
    ORDER BY 
      sponsorship_tier = 'featured' DESC,
      sponsorship_tier = 'premium' DESC,
      sponsorship_tier = 'basic' DESC,
      distance ASC
    */
    
    // Mock data for demonstration
    const sponsoredLawyers = [
      {
        placeId: 'ChIJxxxxxxxxxxxxxx',
        name: 'Smith & Associates Divorce Law',
        tier: 'featured',
        customBadge: '⭐ Featured Partner',
        customDescription: 'Specializing in amicable divorces with 20+ years experience',
        cta: 'Free Consultation'
      },
      {
        placeId: 'ChIJyyyyyyyyyyyyyy',
        name: 'Johnson Family Law',
        tier: 'premium',
        customBadge: '💎 Premium',
        customDescription: 'Compassionate representation for all family matters'
      }
    ];
    
    return NextResponse.json({ sponsored: sponsoredLawyers });
  } catch (error) {
    console.error('Error fetching sponsored lawyers:', error);
    return NextResponse.json({ error: 'Failed to fetch sponsored lawyers' }, { status: 500 });
  }
}

// POST create new sponsorship
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the lawyer exists in your database
    // Process payment (Stripe integration)
    // Create sponsorship record
    
    const sponsorship = {
      lawyer_id: data.lawyerId,
      google_place_id: data.placeId,
      tier: data.tier,
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
      amount: SPONSORSHIP_TIERS[data.tier as keyof typeof SPONSORSHIP_TIERS].price,
      status: 'active',
      custom_description: data.customDescription,
      custom_badge: data.customBadge,
      contact_email: data.contactEmail,
      contact_phone: data.contactPhone
    };
    
    // TODO: Save to database
    
    return NextResponse.json({ 
      success: true, 
      sponsorship,
      message: 'Sponsorship activated successfully'
    });
  } catch (error) {
    console.error('Error creating sponsorship:', error);
    return NextResponse.json({ error: 'Failed to create sponsorship' }, { status: 500 });
  }
}