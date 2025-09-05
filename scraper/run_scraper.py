#!/usr/bin/env python
import os
import sys
import logging
from datetime import datetime
from dotenv import load_dotenv
import argparse
import json

from alternative_scraper import AlternativeLawyerScraper
from database import Database

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def main():
    parser = argparse.ArgumentParser(description='Alternative divorce lawyer scraper')
    parser.add_argument('--states', nargs='+', help='List of state codes to scrape (e.g., CA NY TX)')
    parser.add_argument('--test', action='store_true', help='Test mode - scrape only one state')
    parser.add_argument('--save-json', action='store_true', help='Save results to JSON file')
    parser.add_argument('--no-database', action='store_true', help='Skip database insertion')
    
    args = parser.parse_args()
    
    # Determine which states to scrape
    if args.test:
        states_to_scrape = ['CA']
        logger.info("Running in TEST mode - will scrape California only")
    elif args.states:
        states_to_scrape = args.states
    else:
        # Start with major states
        states_to_scrape = ['CA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI']
    
    logger.info(f"Starting alternative scraper for states: {', '.join(states_to_scrape)}")
    
    # Initialize scraper
    scraper = AlternativeLawyerScraper()
    
    # Scrape all states
    all_lawyers = []
    for state in states_to_scrape:
        logger.info(f"Processing state: {state}")
        state_lawyers = scraper.scrape_state_with_multiple_sources(state)
        all_lawyers.extend(state_lawyers)
        logger.info(f"Completed {state}: {len(state_lawyers)} lawyers found")
    
    logger.info(f"Total lawyers scraped: {len(all_lawyers)}")
    
    # Save to JSON if requested
    if args.save_json or len(all_lawyers) > 0:
        filename = f'lawyers_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json'
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(all_lawyers, f, indent=2, ensure_ascii=False)
        logger.info(f"Data saved to {filename}")
    
    # Insert into database
    if not args.no_database and len(all_lawyers) > 0:
        logger.info("Connecting to Railway database...")
        db = Database()
        
        if db.connect():
            logger.info("Inserting lawyers into database...")
            inserted, failed = db.bulk_insert_lawyers(all_lawyers)
            logger.info(f"Database insertion complete: {inserted} inserted, {failed} failed")
            
            # Get statistics
            stats = db.get_statistics()
            if stats:
                logger.info("=" * 50)
                logger.info("Database Statistics:")
                logger.info(f"  Total lawyers in DB: {stats['total_lawyers']}")
                logger.info(f"  States covered: {stats['states_covered']}")
                logger.info(f"  Unique firms: {stats['unique_firms']}")
                logger.info(f"  Cities covered: {stats['cities_covered']}")
                logger.info(f"  Last scrape: {stats['last_scrape']}")
                logger.info("=" * 50)
            
            db.close()
        else:
            logger.error("Failed to connect to database")
    
    logger.info("Scraping process completed!")
    return 0 if len(all_lawyers) > 0 else 1

if __name__ == "__main__":
    sys.exit(main())