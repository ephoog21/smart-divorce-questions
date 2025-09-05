# Divorce Lawyer Scraper

A web scraper that collects divorce lawyer information across the United States and stores it in a Railway PostgreSQL database.

## Features

- Scrapes lawyer information from multiple sources (Avvo, Justia, FindLaw)
- Collects: lawyer name, firm name, address, phone, website, email, ratings, and more
- Stores data in Railway PostgreSQL database
- Handles duplicates with upsert logic
- Includes rate limiting and polite scraping practices
- Supports both full and test modes

## Data Collected

- **Lawyer Name**
- **Firm Name**
- **Office Address** (full address, city, state, zip)
- **Phone Number**
- **Website/Domain**
- **Email** (when available)
- **Practice Areas**
- **Bar Admission**
- **Years of Experience**
- **Rating & Review Count**
- **Source URL**

## Setup

1. **Install Python dependencies:**
```bash
cd scraper
pip install -r requirements.txt
```

2. **Set up Railway database:**
```bash
python setup_railway.py
```

This will:
- Check Railway CLI installation
- Get database credentials from your Railway project
- Create the `.env` file
- Test the database connection
- Create the lawyers table

## Usage

### Test Mode (Recommended First)
```bash
python main.py --test
```
This scrapes limited data from California only for testing.

### Scrape Specific States
```bash
python main.py --states CA NY TX FL
```

### Scrape All US States
```bash
python main.py
```

### Additional Options

- `--sources avvo justia findlaw` - Choose data sources (default: avvo)
- `--save-json` - Save results to JSON file
- `--no-database` - Skip database insertion (JSON only)

## Examples

```bash
# Test with California only, save to JSON
python main.py --test --save-json

# Scrape Texas and Florida from Avvo and Justia
python main.py --states TX FL --sources avvo justia

# Full scrape from all sources
python main.py --sources avvo justia findlaw
```

## Database Schema

The `lawyers` table includes:
- Unique constraint on (lawyer_name, firm_name, office_address)
- Indexes on state, city, and firm_name for fast queries
- Automatic timestamps for tracking when data was scraped
- Upsert logic to update existing records

## Rate Limiting

The scraper includes:
- Configurable delay between requests (default: 2 seconds)
- Random user agents
- Session management for efficiency
- Respectful scraping practices

## Monitoring Progress

The scraper provides detailed logging:
- Console output shows real-time progress
- Log files are created with timestamps
- Database statistics are displayed after completion

## Troubleshooting

1. **Database connection fails:**
   - Ensure Railway project is linked: `railway link`
   - Check DATABASE_URL in `.env` file
   - Verify PostgreSQL is added to your Railway project

2. **Scraping errors:**
   - Some pages may fail due to site changes
   - The scraper will continue and log errors
   - Failed insertions are tracked separately

3. **Rate limiting:**
   - Increase SCRAPER_DELAY in `.env` if getting blocked
   - Use fewer MAX_WORKERS for slower, safer scraping

## Legal Considerations

- This scraper respects robots.txt and rate limits
- Data is publicly available information
- Use responsibly and in compliance with websites' terms of service
- Consider reaching out to sites for API access for large-scale needs

## Output

Data is stored in your Railway PostgreSQL database and can be queried:
```sql
-- Get all lawyers in California
SELECT * FROM lawyers WHERE state = 'CA';

-- Get statistics
SELECT state, COUNT(*) as lawyer_count 
FROM lawyers 
GROUP BY state 
ORDER BY lawyer_count DESC;

-- Find lawyers by city
SELECT * FROM lawyers 
WHERE city = 'Los Angeles' AND state = 'CA';
```