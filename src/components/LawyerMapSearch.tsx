'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    google: any;
    requestContact: (placeId: string) => void;
  }
}

interface Lawyer {
  placeId: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  photo?: string;
  isSponsored?: boolean;
  sponsorshipTier?: 'basic' | 'premium' | 'featured';
}

interface SponsoredListing {
  placeId?: string;
  name: string;
  customMessage?: string;
  tier: 'basic' | 'premium' | 'featured';
  matchKeywords?: string[];
}

export default function LawyerMapSearch() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const serviceRef = useRef<google.maps.places.PlacesService | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [searchRadius, setSearchRadius] = useState(10000); // 10km default
  const [isLoading, setIsLoading] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  
  // These would come from your database
  const sponsoredListings: SponsoredListing[] = [
    {
      placeId: 'specific_google_place_id', // Match by Google Place ID
      name: 'Premium Divorce Law Firm',
      tier: 'featured',
      customMessage: '⭐ Featured - Free Consultation Available'
    },
    {
      name: 'Johnson Family Law', // Match by name
      tier: 'premium',
      matchKeywords: ['johnson', 'family', 'law']
    }
  ];

  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.google) return;

    // Initialize map centered on user location or default
    const defaultLocation = { lat: 34.0522, lng: -118.2437 }; // LA default
    const center = userLocation || defaultLocation;

    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      center,
      zoom: 11,
      styles: [
        {
          featureType: 'poi.business',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }] // Hide default business markers
        }
      ]
    });

    serviceRef.current = new google.maps.places.PlacesService(mapInstanceRef.current);
    geocoderRef.current = new google.maps.Geocoder();
    
    // Get user's location
    if (navigator.geolocation && !userLocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const loc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(loc);
        mapInstanceRef.current?.setCenter(loc);
        searchNearbyLawyers(loc);
      });
    } else if (userLocation) {
      searchNearbyLawyers(userLocation);
    }
  }, [userLocation]);

  const searchNearbyLawyers = useCallback((location: {lat: number, lng: number}) => {
    if (!serviceRef.current) return;
    
    setIsLoading(true);
    
    const request = {
      location: new google.maps.LatLng(location.lat, location.lng),
      radius: searchRadius,
      type: 'lawyer',
      keyword: 'divorce lawyer'
    };

    serviceRef.current.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const lawyerData: Lawyer[] = results.map(place => {
          const lawyer: Lawyer = {
            placeId: place.place_id!,
            name: place.name!,
            address: place.vicinity!,
            rating: place.rating,
            reviewCount: place.user_ratings_total,
            photo: place.photos?.[0]?.getUrl({ maxWidth: 200 })
          };

          // Check if this is a sponsored listing
          const sponsored = checkIfSponsored(lawyer, sponsoredListings);
          if (sponsored) {
            lawyer.isSponsored = true;
            lawyer.sponsorshipTier = sponsored.tier;
          }

          // Create marker on map
          createMarker(place, lawyer.isSponsored, lawyer.sponsorshipTier);
          
          // Capture this data to your database (async, don't wait)
          captureLayerData(lawyer, location);
          
          return lawyer;
        });

        // Sort: Featured -> Premium -> Basic -> Regular
        const sortedLawyers = lawyerData.sort((a, b) => {
          const tierOrder = { featured: 0, premium: 1, basic: 2, undefined: 3 };
          return (tierOrder[a.sponsorshipTier || 'undefined'] - 
                  tierOrder[b.sponsorshipTier || 'undefined']);
        });

        setLawyers(sortedLawyers);
      }
      setIsLoading(false);
    });
  }, [searchRadius, sponsoredListings]);

  const createMarker = (
    place: google.maps.places.PlaceResult,
    isSponsored?: boolean,
    tier?: string
  ) => {
    if (!place.geometry?.location || !mapInstanceRef.current) return;

    // Custom marker for sponsored listings
    const markerOptions: google.maps.MarkerOptions = {
      map: mapInstanceRef.current,
      position: place.geometry.location,
      title: place.name,
    };

    if (isSponsored) {
      // Use custom icons for sponsored listings
      markerOptions.icon = {
        url: tier === 'featured' 
          ? '/icons/featured-pin.svg'
          : tier === 'premium'
          ? '/icons/premium-pin.svg' 
          : '/icons/sponsored-pin.svg',
        scaledSize: new google.maps.Size(40, 40)
      };
      
      // Sponsored markers appear on top
      markerOptions.zIndex = tier === 'featured' ? 1000 : 
                             tier === 'premium' ? 500 : 100;
    }

    const marker = new google.maps.Marker(markerOptions);
    
    // Info window with contact details
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="p-3">
          ${isSponsored ? '<span class="inline-block px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded">Sponsored</span>' : ''}
          <h3 class="font-semibold mt-1">${place.name}</h3>
          <p class="text-sm text-gray-600">${place.vicinity}</p>
          ${place.rating ? `<p class="text-sm mt-1">⭐ ${place.rating} (${place.user_ratings_total} reviews)</p>` : ''}
          <button onclick="window.requestContact('${place.place_id}')" 
                  class="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            View Contact Info
          </button>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(mapInstanceRef.current, marker);
    });
  };

  const checkIfSponsored = (
    lawyer: Lawyer, 
    sponsors: SponsoredListing[]
  ): SponsoredListing | undefined => {
    return sponsors.find(sponsor => {
      // Match by Place ID (most accurate)
      if (sponsor.placeId && sponsor.placeId === lawyer.placeId) {
        return true;
      }
      
      // Match by name keywords
      if (sponsor.matchKeywords) {
        const lawyerNameLower = lawyer.name.toLowerCase();
        return sponsor.matchKeywords.every(keyword => 
          lawyerNameLower.includes(keyword.toLowerCase())
        );
      }
      
      return false;
    });
  };

  const captureLayerData = async (lawyer: Lawyer, searchLocation: {lat: number, lng: number}) => {
    // Send to your API to store in database
    // This builds your directory over time from real searches
    try {
      await fetch('/api/lawyers/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...lawyer,
          searchLocation,
          capturedAt: new Date().toISOString(),
          // Don't send sponsorship info - that's managed separately
          isSponsored: undefined,
          sponsorshipTier: undefined
        })
      });
    } catch (error) {
      console.error('Failed to capture lawyer data:', error);
    }
  };

  const requestContact = useCallback(async (placeId: string) => {
    // Get detailed info only when user requests it
    if (!serviceRef.current) return;
    
    const request = {
      placeId,
      fields: ['name', 'formatted_phone_number', 'website', 'opening_hours']
    };
    
    serviceRef.current.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place) {
        // Track this interaction
        trackInteraction(placeId, 'contact_view');
        
        // Show contact modal
        showContactModal({
          name: place.name!,
          phone: place.formatted_phone_number,
          website: place.website,
          hours: place.opening_hours?.weekday_text
        });
      }
    });
  }, []);

  const trackInteraction = async (placeId: string, action: string) => {
    // Track user interactions for analytics
    await fetch('/api/lawyers/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ placeId, action })
    });
  };

  const showContactModal = (contact: any) => {
    // Implementation of modal display
    console.log('Contact:', contact);
  };

  const searchByLocation = useCallback(() => {
    if (!geocoderRef.current || !locationInput.trim()) {
      alert('Please enter a location to search');
      return;
    }

    setIsLoading(true);
    
    geocoderRef.current.geocode({ address: locationInput }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        
        // Update map center and search
        mapInstanceRef.current?.setCenter(location);
        mapInstanceRef.current?.setZoom(12);
        setUserLocation(location);
        searchNearbyLawyers(location);
      } else {
        alert('Could not find that location. Please try a different search.');
        setIsLoading(false);
      }
    });
  }, [locationInput, searchNearbyLawyers]);

  // Make requestContact available globally for info window
  useEffect(() => {
    window.requestContact = requestContact;
  }, [requestContact]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places`}
        onLoad={initializeMap}
      />
      
      <div className="w-full">
        {/* Search Controls */}
        <div className="space-y-4 mb-6">
          {/* Location Search Bar */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter city, state, or zip code (e.g., Los Angeles, CA)"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      searchByLocation();
                    }
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={searchByLocation}
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  disabled={isLoading}
                >
                  Search
                </button>
              </div>
            </div>
            
            <select 
              value={searchRadius} 
              onChange={(e) => setSearchRadius(Number(e.target.value))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5000}>5 km</option>
              <option value={10000}>10 km</option>
              <option value={20000}>20 km</option>
              <option value={50000}>50 km</option>
            </select>
          </div>
          
          {/* Current Location Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition((position) => {
                    const loc = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    };
                    setUserLocation(loc);
                    mapInstanceRef.current?.setCenter(loc);
                    searchNearbyLawyers(loc);
                    setLocationInput('Current Location');
                  }, () => {
                    alert('Unable to get your location. Please enter a location manually.');
                  });
                } else {
                  alert('Geolocation is not supported by your browser.');
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              disabled={isLoading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {isLoading ? 'Searching...' : 'Use My Current Location'}
            </button>
            
            <span className="text-gray-500 text-sm">
              or search by entering a location above
            </span>
          </div>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div 
              ref={mapRef} 
              className="w-full h-[600px] border border-gray-300 rounded-lg shadow-sm"
            />
          </div>
          
          {/* Results Sidebar */}
          <div className="lg:col-span-1">
            <div className="h-[600px] overflow-y-auto border border-gray-200 rounded-lg p-4 bg-white">
              <h2 className="text-xl font-semibold mb-4">Divorce Lawyers Near You</h2>
              
              {lawyers.length === 0 ? (
                <p className="text-gray-500 text-center mt-8">
                  Click "Find Divorce Lawyers Near Me" to start searching
                </p>
              ) : (
                lawyers.map((lawyer) => (
                  <div 
                    key={lawyer.placeId} 
                    className={`p-4 mb-3 border rounded-lg transition-shadow hover:shadow-md ${
                      lawyer.isSponsored 
                        ? 'border-yellow-400 bg-yellow-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {lawyer.isSponsored && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded mb-2">
                        {lawyer.sponsorshipTier === 'featured' ? '⭐ Featured' :
                         lawyer.sponsorshipTier === 'premium' ? '💎 Premium' : 
                         '✓ Sponsored'}
                      </span>
                    )}
                    
                    <h3 className="font-semibold text-gray-900">{lawyer.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{lawyer.address}</p>
                    {lawyer.rating && (
                      <p className="text-sm text-gray-700 mt-1">
                        ⭐ {lawyer.rating} ({lawyer.reviewCount} reviews)
                      </p>
                    )}
                    
                    <button 
                      onClick={() => requestContact(lawyer.placeId)}
                      className="mt-3 w-full px-3 py-2 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                    >
                      View Contact
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}