// Database schema for lawyer directory
export interface Lawyer {
  id: string;
  
  // Basic Information
  name: string;
  firmName?: string;
  slug: string; // SEO-friendly URL
  
  // Location
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  
  // Contact
  phone: string;
  website?: string;
  email?: string;
  
  // Google Business Profile Data
  googlePlaceId?: string;
  googleBusinessAge?: number; // days since profile created
  googleRating?: number;
  googleReviewCount?: number;
  googleVerified?: boolean;
  lastGoogleUpdate?: Date;
  
  // Enrichment Data
  barNumber?: string;
  barAdmissionYear?: number;
  practiceAreas?: string[];
  education?: string[];
  languages?: string[];
  
  // Sponsorship/Monetization
  isSponsoredProfile: boolean;
  sponsorshipTier?: 'basic' | 'premium' | 'featured';
  sponsorshipStartDate?: Date;
  sponsorshipEndDate?: Date;
  monthlySpend?: number;
  
  // SEO & Content
  profileViews: number;
  phoneClicks: number;
  websiteClicks: number;
  directionsRequests: number;
  bio?: string; // For sponsored profiles
  specializations?: string[];
  freeConsultation?: boolean;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastEnrichedAt?: Date;
  dataSource: 'google' | 'statebar' | 'manual' | 'claimed';
  isActive: boolean;
  isVerified: boolean;
  
  // Targeting Flags
  isNewPractice: boolean; // Google profile < 1 year old
  hasNoWebsite: boolean;
  hasLowReviews: boolean; // < 5 reviews
  targetingScore: number; // 0-100 for outreach priority
}

export interface CityPage {
  state: string;
  city: string;
  slug: string;
  lawyerCount: number;
  averageRating?: number;
  population?: number;
  divorceRate?: number; // for content
  medianCost?: number; // for content
  lastUpdated: Date;
  
  // SEO Meta
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  introContent: string;
  faqContent?: string[];
}

export interface SponsorshipPackage {
  id: string;
  name: string;
  monthlyPrice: number;
  features: string[];
  
  // Benefits
  profileEnhancements: {
    showBio: boolean;
    showEducation: boolean;
    priorityPlacement: boolean;
    removedCompetitorAds: boolean;
    customCTA: boolean;
    photoGallery: boolean;
    videoIntro: boolean;
  };
  
  // Limits
  maxPhotos: number;
  maxVideos: number;
  analyticsAccess: boolean;
  leadNotifications: boolean;
}

// Targeting algorithm for new practices
export function calculateTargetingScore(lawyer: Lawyer): number {
  let score = 0;
  
  // New to Google (highest priority)
  if (lawyer.googleBusinessAge && lawyer.googleBusinessAge < 365) {
    score += 40;
  }
  
  // No website (needs digital presence)
  if (!lawyer.website) {
    score += 20;
  }
  
  // Low reviews (needs reputation building)
  if (lawyer.googleReviewCount && lawyer.googleReviewCount < 5) {
    score += 20;
  }
  
  // No existing sponsorship
  if (!lawyer.isSponsoredProfile) {
    score += 10;
  }
  
  // In major city (more competition)
  // This would check against a city population database
  score += 10;
  
  return Math.min(score, 100);
}