import os
import sys
import logging
from datetime import datetime
from dotenv import load_dotenv
import argparse
import json

from scraper import LawyerScraper
from database import Database

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(f'scraper_log_{datetime.now().strftime("%Y%m%d_%H%M%S")}.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

def main():
    parser = argparse.ArgumentParser(description='Scrape divorce lawyer information across the US')
    parser.add_argument('--states', nargs='+', help='List of state codes to scrape (e.g., CA NY TX)')
    parser.add_argument('--sources', nargs='+', default=['avvo'], 
                       choices=['avvo', 'justia', 'findlaw'], 
                       help='Data sources to scrape from')
    parser.add_argument('--save-json', action='store_true', help='Save results to JSON file')
    parser.add_argument('--no-database', action='store_true', help='Skip database insertion')
    parser.add_argument('--test', action='store_true', help='Test mode - scrape only one state with limited pages')
    
    args = parser.parse_args()
    
    if args.test:
        states_to_scrape = ['CA']
        logger.info("Running in TEST mode - will scrape limited data from California only")
    elif args.states:
        states_to_scrape = args.states
    else:
        states_to_scrape = [
            'CA', 'TX', 'FL', 'NY', 'PA', 'IL', 'OH', 'GA', 'NC', 'MI',
            'NJ', 'VA', 'WA', 'AZ', 'MA', 'IN', 'TN', 'MO', 'MD', 'WI',
            'MN', 'CO', 'AL', 'SC', 'LA', 'KY', 'OR', 'OK', 'CT', 'UT',
            'IA', 'NV', 'AR', 'MS', 'KS', 'NM', 'NE', 'WV', 'ID', 'HI',
            'NH', 'ME', 'MT', 'RI', 'DE', 'SD', 'ND', 'AK', 'VT', 'WY'
        ]
    
    logger.info(f"Starting scraper for states: {', '.join(states_to_scrape)}")
    logger.info(f"Using sources: {', '.join(args.sources)}")
    
    scraper = LawyerScraper()
    
    if args.test:
        scraper.delay = 1
        page_limit = 2
        logger.info("Test mode: Using 1 second delay and limiting to 2 pages per source")
        
        test_lawyers = []
        for source in args.sources:
            if source == 'avvo':
                lawyers = scraper.scrape_avvo_lawyers('CA', page_limit=page_limit)
                test_lawyers.extend(lawyers)
            elif source == 'justia':
                lawyers = scraper.scrape_justia_lawyers('CA', city_limit=2)
                test_lawyers.extend(lawyers)
            elif source == 'findlaw':
                lawyers = scraper.scrape_findlaw_lawyers('CA', page_limit=page_limit)
                test_lawyers.extend(lawyers)
        
        all_lawyers = test_lawyers
    else:
        all_lawyers = scraper.scrape_multiple_states(states_to_scrape, sources=args.sources)
    
    logger.info(f"Total lawyers scraped: {len(all_lawyers)}")
    
    if args.save_json:
        filename = f'lawyers_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json'
        scraper.save_to_json(all_lawyers, filename)
        logger.info(f"Data saved to {filename}")
    
    if not args.no_database:
        logger.info("Connecting to database...")
        db = Database()
        
        if db.connect():
            logger.info("Creating lawyers table if not exists...")
            if db.create_lawyers_table():
                logger.info("Inserting lawyers into database...")
                inserted, failed = db.bulk_insert_lawyers(all_lawyers)
                logger.info(f"Database insertion complete: {inserted} inserted, {failed} failed")
                
                stats = db.get_statistics()
                if stats:
                    logger.info("Database Statistics:")
                    logger.info(f"  Total lawyers: {stats['total_lawyers']}")
                    logger.info(f"  States covered: {stats['states_covered']}")
                    logger.info(f"  Unique firms: {stats['unique_firms']}")
                    logger.info(f"  Cities covered: {stats['cities_covered']}")
                    logger.info(f"  Last scrape: {stats['last_scrape']}")
            
            db.close()
        else:
            logger.error("Failed to connect to database. Please check your DATABASE_URL in .env file")
            if all_lawyers and not args.save_json:
                logger.info("Saving data to JSON as fallback...")
                filename = f'lawyers_fallback_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json'
                scraper.save_to_json(all_lawyers, filename)
    
    logger.info("Scraping process completed!")

if __name__ == "__main__":
    main()