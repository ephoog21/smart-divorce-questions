import { NextRequest, NextResponse } from 'next/server';

// This captures lawyer data from user searches progressively
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // In production, save to your Railway PostgreSQL database
    // For now, we'll show the structure
    
    const lawyerData = {
      google_place_id: data.placeId,
      name: data.name,
      address: data.address,
      rating: data.rating,
      review_count: data.reviewCount,
      photo_url: data.photo,
      
      // Location data for geo-queries
      search_lat: data.searchLocation.lat,
      search_lng: data.searchLocation.lng,
      
      // Metadata
      first_seen: new Date().toISOString(),
      last_seen: new Date().toISOString(),
      search_count: 1, // Increment if already exists
      
      // These fields get populated later
      phone: null,
      website: null,
      claimed: false,
      verified: false,
      sponsored: false
    };
    
    // TODO: Insert or update in database
    // Use upsert logic: if google_place_id exists, increment search_count and update last_seen
    
    console.log('Captured lawyer data:', lawyerData);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error capturing lawyer data:', error);
    return NextResponse.json({ error: 'Failed to capture data' }, { status: 500 });
  }
}