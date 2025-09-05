-- Update the existing lawyers table with new fields for Google Maps integration
-- Run this in your Railway PostgreSQL database

-- Add Google Places specific fields
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS google_place_id VARCHAR(255) UNIQUE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS google_business_age INTEGER; -- days since profile created
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS google_rating DECIMAL(2,1);
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS google_review_count INTEGER DEFAULT 0;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS google_verified BOOLEAN DEFAULT FALSE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS last_google_update TIMESTAMP;

-- Add location coordinates for map display
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS latitude DECIMAL(10, 8);
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS longitude DECIMAL(11, 8);

-- Add search tracking
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS search_count INTEGER DEFAULT 0;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS last_searched_at TIMESTAMP;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS first_seen_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Add sponsorship fields
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS is_sponsored BOOLEAN DEFAULT FALSE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS sponsorship_tier VARCHAR(20); -- 'basic', 'premium', 'featured'
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS sponsorship_start_date DATE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS sponsorship_end_date DATE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS monthly_spend DECIMAL(10, 2);

-- Add interaction tracking
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS profile_views INTEGER DEFAULT 0;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS phone_clicks INTEGER DEFAULT 0;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS website_clicks INTEGER DEFAULT 0;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS directions_requests INTEGER DEFAULT 0;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS contact_form_submissions INTEGER DEFAULT 0;

-- Add profile enhancements for sponsored lawyers
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS custom_description TEXT;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS custom_badge VARCHAR(50);
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS highlight_color VARCHAR(7); -- hex color
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS priority_rank INTEGER DEFAULT 999;

-- Add lawyer profile claiming
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS is_claimed BOOLEAN DEFAULT FALSE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS claimed_by_email VARCHAR(255);
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS claimed_at TIMESTAMP;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS verification_token VARCHAR(255);
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT FALSE;

-- Add data quality fields
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS data_source VARCHAR(50) DEFAULT 'google_maps';
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS data_quality_score INTEGER DEFAULT 0; -- 0-100
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS has_website BOOLEAN DEFAULT FALSE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS has_email BOOLEAN DEFAULT FALSE;
ALTER TABLE lawyers ADD COLUMN IF NOT EXISTS has_phone BOOLEAN DEFAULT FALSE;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lawyers_google_place_id ON lawyers(google_place_id);
CREATE INDEX IF NOT EXISTS idx_lawyers_location ON lawyers(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_lawyers_sponsored ON lawyers(is_sponsored, sponsorship_tier);
CREATE INDEX IF NOT EXISTS idx_lawyers_search_count ON lawyers(search_count DESC);
CREATE INDEX IF NOT EXISTS idx_lawyers_city_state_sponsored ON lawyers(city, state, is_sponsored);

-- Create a view for sponsored lawyers with active sponsorships
CREATE OR REPLACE VIEW active_sponsored_lawyers AS
SELECT * FROM lawyers
WHERE is_sponsored = TRUE
  AND sponsorship_end_date >= CURRENT_DATE
ORDER BY 
  CASE sponsorship_tier
    WHEN 'featured' THEN 1
    WHEN 'premium' THEN 2
    WHEN 'basic' THEN 3
    ELSE 4
  END,
  priority_rank,
  google_rating DESC;

-- Create a view for targetable lawyers (for outreach)
CREATE OR REPLACE VIEW targetable_lawyers AS
SELECT 
  *,
  CASE 
    WHEN google_business_age < 365 AND google_review_count < 5 THEN 100
    WHEN google_business_age < 365 THEN 80
    WHEN google_review_count < 5 THEN 70
    WHEN NOT has_website THEN 60
    WHEN google_review_count < 10 THEN 50
    ELSE 30
  END as targeting_score
FROM lawyers
WHERE is_sponsored = FALSE
  AND google_place_id IS NOT NULL
ORDER BY targeting_score DESC;

-- Create table for tracking lawyer interactions
CREATE TABLE IF NOT EXISTS lawyer_interactions (
  id SERIAL PRIMARY KEY,
  lawyer_id INTEGER REFERENCES lawyers(id),
  google_place_id VARCHAR(255),
  interaction_type VARCHAR(50), -- 'view', 'phone_click', 'website_click', 'directions', 'contact_form'
  user_ip VARCHAR(45),
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for sponsorship history
CREATE TABLE IF NOT EXISTS sponsorship_history (
  id SERIAL PRIMARY KEY,
  lawyer_id INTEGER REFERENCES lawyers(id),
  tier VARCHAR(20),
  amount DECIMAL(10, 2),
  start_date DATE,
  end_date DATE,
  payment_method VARCHAR(50),
  stripe_payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  cancelled_at TIMESTAMP,
  cancellation_reason TEXT
);

-- Sample query to get sponsored lawyers for a specific location
-- This is what your API will use
/*
SELECT 
  l.*,
  SQRT(
    POW(69.1 * (latitude - $1), 2) +
    POW(69.1 * ($2 - longitude) * COS(latitude / 57.3), 2)
  ) AS distance
FROM lawyers l
WHERE 
  l.is_sponsored = TRUE
  AND l.sponsorship_end_date >= CURRENT_DATE
  AND SQRT(
    POW(69.1 * (latitude - $1), 2) +
    POW(69.1 * ($2 - longitude) * COS(latitude / 57.3), 2)
  ) < $3  -- radius in miles
ORDER BY 
  CASE l.sponsorship_tier
    WHEN 'featured' THEN 1
    WHEN 'premium' THEN 2
    WHEN 'basic' THEN 3
  END,
  distance;
*/