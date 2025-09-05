// Google Maps API data collector for divorce lawyers
import { Lawyer } from './lawyer-directory-schema';

export class GoogleMapsCollector {
  private apiKey: string;
  private baseUrl = 'https://maps.googleapis.com/maps/api/place';
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  // Search for divorce lawyers in a specific city
  async searchLawyers(city: string, state: string): Promise<Partial<Lawyer>[]> {
    const lawyers: Partial<Lawyer>[] = [];
    const query = `divorce lawyers in ${city}, ${state}`;
    
    try {
      // Nearby Search API
      const searchUrl = `${this.baseUrl}/textsearch/json?query=${encodeURIComponent(query)}&key=${this.apiKey}`;
      
      let nextPageToken: string | undefined;
      let pageCount = 0;
      const maxPages = 3; // Google returns max 60 results (20 per page × 3)
      
      do {
        const url = nextPageToken 
          ? `${searchUrl}&pagetoken=${nextPageToken}`
          : searchUrl;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'OK' && data.results) {
          for (const place of data.results) {
            const lawyer = await this.extractLawyerInfo(place, city, state);
            if (lawyer) {
              lawyers.push(lawyer);
            }
          }
        }
        
        nextPageToken = data.next_page_token;
        pageCount++;
        
        // Wait 2 seconds before next request (required by Google)
        if (nextPageToken && pageCount < maxPages) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } while (nextPageToken && pageCount < maxPages);
      
    } catch (error) {
      console.error(`Error searching lawyers in ${city}, ${state}:`, error);
    }
    
    return lawyers;
  }
  
  // Get detailed information about a lawyer/firm
  async getPlaceDetails(placeId: string): Promise<any> {
    const fields = [
      'name',
      'formatted_address',
      'formatted_phone_number',
      'website',
      'rating',
      'user_ratings_total',
      'opening_hours',
      'photos',
      'reviews',
      'business_status'
    ].join(',');
    
    const url = `${this.baseUrl}/details/json?place_id=${placeId}&fields=${fields}&key=${this.apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data.result;
  }
  
  // Extract and format lawyer information
  private async extractLawyerInfo(
    place: any, 
    city: string, 
    state: string
  ): Promise<Partial<Lawyer> | null> {
    try {
      // Skip if not actually a law firm
      if (!place.types?.some((t: string) => 
        ['lawyer', 'legal', 'attorney'].some(keyword => t.includes(keyword))
      )) {
        return null;
      }
      
      // Parse address components
      const addressParts = place.formatted_address?.split(',') || [];
      const streetAddress = addressParts[0]?.trim() || '';
      const zipMatch = place.formatted_address?.match(/\d{5}(-\d{4})?/);
      const zipCode = zipMatch ? zipMatch[0] : '';
      
      // Create lawyer object
      const lawyer: Partial<Lawyer> = {
        name: place.name,
        streetAddress,
        city,
        state,
        zipCode,
        googlePlaceId: place.place_id,
        googleRating: place.rating,
        googleReviewCount: place.user_ratings_total,
        latitude: place.geometry?.location?.lat,
        longitude: place.geometry?.location?.lng,
        dataSource: 'google',
        isActive: place.business_status === 'OPERATIONAL',
        
        // Generate slug for SEO-friendly URLs
        slug: this.generateSlug(place.name),
        
        // These will be enriched with Details API
        phone: '',
        website: '',
        
        // Tracking
        profileViews: 0,
        phoneClicks: 0,
        websiteClicks: 0,
        directionsRequests: 0,
        
        // Defaults
        isSponsoredProfile: false,
        isVerified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // Determine if it's a new practice (would need Details API for this)
      lawyer.hasLowReviews = (lawyer.googleReviewCount || 0) < 5;
      
      return lawyer;
    } catch (error) {
      console.error('Error extracting lawyer info:', error);
      return null;
    }
  }
  
  // Generate SEO-friendly slug
  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  // Calculate estimated API costs
  static estimateApiCosts(cityCount: number): number {
    const searchesPerCity = 1; // One text search per city
    const resultsPerCity = 40; // Average results we might get
    const detailCallsPerCity = 10; // Selective detail calls
    
    const searchCost = 0.032; // Per text search
    const detailCost = 0.017; // Per place detail
    
    const totalSearchCost = cityCount * searchesPerCity * searchCost;
    const totalDetailCost = cityCount * detailCallsPerCity * detailCost;
    
    return totalSearchCost + totalDetailCost;
  }
}

// City prioritization for cost-effective collection
export const PRIORITY_CITIES = {
  // Top 10 metro areas by divorce rate × population
  tier1: [
    { city: 'Las Vegas', state: 'NV' },
    { city: 'Miami', state: 'FL' },
    { city: 'Phoenix', state: 'AZ' },
    { city: 'Houston', state: 'TX' },
    { city: 'Atlanta', state: 'GA' },
    { city: 'Los Angeles', state: 'CA' },
    { city: 'Dallas', state: 'TX' },
    { city: 'Orlando', state: 'FL' },
    { city: 'Tampa', state: 'FL' },
    { city: 'Jacksonville', state: 'FL' }
  ],
  
  // High-value secondary markets
  tier2: [
    { city: 'San Diego', state: 'CA' },
    { city: 'Austin', state: 'TX' },
    { city: 'Nashville', state: 'TN' },
    { city: 'Charlotte', state: 'NC' },
    { city: 'Denver', state: 'CO' },
    { city: 'Seattle', state: 'WA' },
    { city: 'Portland', state: 'OR' },
    { city: 'San Antonio', state: 'TX' },
    { city: 'Oklahoma City', state: 'OK' },
    { city: 'Albuquerque', state: 'NM' }
  ]
};