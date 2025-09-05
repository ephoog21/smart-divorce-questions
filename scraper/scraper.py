import requests
from bs4 import BeautifulSoup
import time
import re
import logging
from fake_useragent import UserAgent
from urllib.parse import urljoin, urlparse
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
import os
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class LawyerScraper:
    def __init__(self):
        self.ua = UserAgent()
        self.delay = float(os.getenv('SCRAPER_DELAY', 2))
        self.max_workers = int(os.getenv('MAX_WORKERS', 5))
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': self.ua.random,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
        })
        
    def extract_email(self, text):
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, text)
        return emails[0] if emails else None
    
    def extract_phone(self, text):
        phone_patterns = [
            r'(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}',
            r'\d{3}[-.\s]?\d{3}[-.\s]?\d{4}',
            r'\(\d{3}\)\s*\d{3}-\d{4}',
        ]
        for pattern in phone_patterns:
            phones = re.findall(pattern, text)
            if phones:
                return phones[0]
        return None
    
    def clean_text(self, text):
        if not text:
            return None
        text = ' '.join(text.split())
        text = text.strip()
        return text if text else None
    
    def parse_address(self, address_text):
        if not address_text:
            return None, None, None, None
        
        zip_pattern = r'\b\d{5}(?:-\d{4})?\b'
        state_pattern = r'\b([A-Z]{2})\b'
        
        zip_match = re.search(zip_pattern, address_text)
        zip_code = zip_match.group() if zip_match else None
        
        state_match = re.search(state_pattern, address_text)
        state = state_match.group() if state_match else None
        
        city = None
        if state:
            city_pattern = rf'([^,]+),\s*{state}'
            city_match = re.search(city_pattern, address_text)
            if city_match:
                city = city_match.group(1).strip()
        
        return address_text, city, state, zip_code
    
    def scrape_avvo_lawyers(self, state_code, page_limit=5):
        lawyers = []
        base_url = f"https://www.avvo.com/divorce-separation-lawyers/{state_code}.html"
        
        for page in range(1, page_limit + 1):
            try:
                url = base_url if page == 1 else f"{base_url}?page={page}"
                response = self.session.get(url, timeout=10)
                
                if response.status_code != 200:
                    logger.warning(f"Failed to fetch {url}: Status {response.status_code}")
                    continue
                
                soup = BeautifulSoup(response.content, 'html.parser')
                
                lawyer_cards = soup.find_all('div', class_='v-lawyer-card')
                
                for card in lawyer_cards:
                    lawyer_data = self.parse_avvo_lawyer_card(card, url)
                    if lawyer_data:
                        lawyers.append(lawyer_data)
                
                logger.info(f"Scraped page {page} for {state_code}: Found {len(lawyer_cards)} lawyers")
                time.sleep(self.delay)
                
            except Exception as e:
                logger.error(f"Error scraping page {page} for {state_code}: {e}")
                continue
        
        return lawyers
    
    def parse_avvo_lawyer_card(self, card, source_url):
        try:
            lawyer_data = {
                'lawyer_name': None,
                'firm_name': None,
                'office_address': None,
                'city': None,
                'state': None,
                'zip_code': None,
                'phone_number': None,
                'website': None,
                'email': None,
                'practice_areas': None,
                'bar_admission': None,
                'years_experience': None,
                'rating': None,
                'review_count': None,
                'source_url': source_url
            }
            
            name_elem = card.find('span', class_='u-vertical-padding-half')
            if name_elem:
                lawyer_data['lawyer_name'] = self.clean_text(name_elem.get_text())
            
            firm_elem = card.find('span', class_='text-muted')
            if firm_elem:
                lawyer_data['firm_name'] = self.clean_text(firm_elem.get_text())
            
            address_elem = card.find('span', class_='u-margin-right-half')
            if address_elem:
                address_text = self.clean_text(address_elem.get_text())
                lawyer_data['office_address'], lawyer_data['city'], lawyer_data['state'], lawyer_data['zip_code'] = self.parse_address(address_text)
            
            phone_elem = card.find('span', class_='overridable-lawyer-phone-copy')
            if phone_elem:
                lawyer_data['phone_number'] = self.clean_text(phone_elem.get_text())
            
            rating_elem = card.find('span', class_='nv-rating')
            if rating_elem:
                try:
                    lawyer_data['rating'] = float(rating_elem.get_text().strip())
                except:
                    pass
            
            review_elem = card.find('span', class_='u-nowrap')
            if review_elem:
                review_text = review_elem.get_text()
                review_match = re.search(r'(\d+)\s+review', review_text)
                if review_match:
                    lawyer_data['review_count'] = int(review_match.group(1))
            
            practice_elem = card.find('div', class_='u-margin-bottom-half')
            if practice_elem:
                lawyer_data['practice_areas'] = self.clean_text(practice_elem.get_text())
            
            return lawyer_data
            
        except Exception as e:
            logger.error(f"Error parsing lawyer card: {e}")
            return None
    
    def scrape_justia_lawyers(self, state_code, city_limit=10):
        lawyers = []
        base_url = f"https://lawyers.justia.com/family-law/divorce/{state_code}"
        
        try:
            response = self.session.get(base_url, timeout=10)
            if response.status_code != 200:
                logger.warning(f"Failed to fetch Justia {state_code}: Status {response.status_code}")
                return lawyers
            
            soup = BeautifulSoup(response.content, 'html.parser')
            city_links = soup.find_all('a', href=re.compile(rf'/family-law/divorce/{state_code}/'))[:city_limit]
            
            for city_link in city_links:
                city_url = urljoin(base_url, city_link['href'])
                city_lawyers = self.scrape_justia_city(city_url)
                lawyers.extend(city_lawyers)
                time.sleep(self.delay)
            
        except Exception as e:
            logger.error(f"Error scraping Justia for {state_code}: {e}")
        
        return lawyers
    
    def scrape_justia_city(self, city_url):
        lawyers = []
        
        try:
            response = self.session.get(city_url, timeout=10)
            if response.status_code != 200:
                return lawyers
            
            soup = BeautifulSoup(response.content, 'html.parser')
            lawyer_blocks = soup.find_all('div', class_='lawyer')
            
            for block in lawyer_blocks:
                lawyer_data = self.parse_justia_lawyer_block(block, city_url)
                if lawyer_data:
                    lawyers.append(lawyer_data)
            
            logger.info(f"Scraped {len(lawyers)} lawyers from {city_url}")
            
        except Exception as e:
            logger.error(f"Error scraping Justia city {city_url}: {e}")
        
        return lawyers
    
    def parse_justia_lawyer_block(self, block, source_url):
        try:
            lawyer_data = {
                'lawyer_name': None,
                'firm_name': None,
                'office_address': None,
                'city': None,
                'state': None,
                'zip_code': None,
                'phone_number': None,
                'website': None,
                'email': None,
                'practice_areas': None,
                'bar_admission': None,
                'years_experience': None,
                'rating': None,
                'review_count': None,
                'source_url': source_url
            }
            
            name_elem = block.find('strong', class_='lawyer-name')
            if name_elem:
                lawyer_data['lawyer_name'] = self.clean_text(name_elem.get_text())
            
            firm_elem = block.find('span', class_='lawyer-firm')
            if firm_elem:
                lawyer_data['firm_name'] = self.clean_text(firm_elem.get_text())
            
            address_elem = block.find('span', class_='lawyer-address')
            if address_elem:
                address_text = self.clean_text(address_elem.get_text())
                lawyer_data['office_address'], lawyer_data['city'], lawyer_data['state'], lawyer_data['zip_code'] = self.parse_address(address_text)
            
            contact_elem = block.find('span', class_='lawyer-phone')
            if contact_elem:
                contact_text = contact_elem.get_text()
                phone = self.extract_phone(contact_text)
                if phone:
                    lawyer_data['phone_number'] = phone
            
            website_elem = block.find('a', class_='lawyer-website')
            if website_elem:
                lawyer_data['website'] = website_elem.get('href')
            
            return lawyer_data
            
        except Exception as e:
            logger.error(f"Error parsing Justia lawyer block: {e}")
            return None
    
    def scrape_findlaw_lawyers(self, state_code, page_limit=5):
        lawyers = []
        state_name = self.get_state_name(state_code).lower().replace(' ', '-')
        base_url = f"https://lawyers.findlaw.com/{state_name}/divorce-lawyers.html"
        
        for page in range(1, page_limit + 1):
            try:
                url = base_url if page == 1 else f"{base_url}?page={page}"
                response = self.session.get(url, timeout=10)
                
                if response.status_code != 200:
                    logger.warning(f"Failed to fetch FindLaw {url}: Status {response.status_code}")
                    continue
                
                soup = BeautifulSoup(response.content, 'html.parser')
                lawyer_listings = soup.find_all('div', class_='listing')
                
                for listing in lawyer_listings:
                    lawyer_data = self.parse_findlaw_listing(listing, url)
                    if lawyer_data:
                        lawyers.append(lawyer_data)
                
                logger.info(f"Scraped FindLaw page {page} for {state_code}: Found {len(lawyer_listings)} lawyers")
                time.sleep(self.delay)
                
            except Exception as e:
                logger.error(f"Error scraping FindLaw page {page} for {state_code}: {e}")
                continue
        
        return lawyers
    
    def parse_findlaw_listing(self, listing, source_url):
        try:
            lawyer_data = {
                'lawyer_name': None,
                'firm_name': None,
                'office_address': None,
                'city': None,
                'state': None,
                'zip_code': None,
                'phone_number': None,
                'website': None,
                'email': None,
                'practice_areas': None,
                'bar_admission': None,
                'years_experience': None,
                'rating': None,
                'review_count': None,
                'source_url': source_url
            }
            
            name_elem = listing.find('h3', class_='lawyer-name')
            if name_elem:
                lawyer_data['lawyer_name'] = self.clean_text(name_elem.get_text())
            
            firm_elem = listing.find('p', class_='law-firm')
            if firm_elem:
                lawyer_data['firm_name'] = self.clean_text(firm_elem.get_text())
            
            address_elem = listing.find('p', class_='address')
            if address_elem:
                address_text = self.clean_text(address_elem.get_text())
                lawyer_data['office_address'], lawyer_data['city'], lawyer_data['state'], lawyer_data['zip_code'] = self.parse_address(address_text)
            
            phone_elem = listing.find('a', class_='phone-link')
            if phone_elem:
                lawyer_data['phone_number'] = self.clean_text(phone_elem.get_text())
            
            website_elem = listing.find('a', class_='website-link')
            if website_elem:
                lawyer_data['website'] = website_elem.get('href')
            
            return lawyer_data
            
        except Exception as e:
            logger.error(f"Error parsing FindLaw listing: {e}")
            return None
    
    def get_state_name(self, state_code):
        states = {
            'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
            'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
            'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
            'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
            'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
            'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
            'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
            'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
            'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
            'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
            'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
            'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
            'WI': 'Wisconsin', 'WY': 'Wyoming'
        }
        return states.get(state_code.upper(), state_code)
    
    def scrape_multiple_states(self, state_codes, sources=['avvo']):
        all_lawyers = []
        
        for state_code in state_codes:
            logger.info(f"Starting scrape for {state_code}")
            state_lawyers = []
            
            if 'avvo' in sources:
                avvo_lawyers = self.scrape_avvo_lawyers(state_code)
                state_lawyers.extend(avvo_lawyers)
            
            if 'justia' in sources:
                justia_lawyers = self.scrape_justia_lawyers(state_code)
                state_lawyers.extend(justia_lawyers)
            
            if 'findlaw' in sources:
                findlaw_lawyers = self.scrape_findlaw_lawyers(state_code)
                state_lawyers.extend(findlaw_lawyers)
            
            logger.info(f"Completed scraping {state_code}: Found {len(state_lawyers)} total lawyers")
            all_lawyers.extend(state_lawyers)
        
        return all_lawyers
    
    def save_to_json(self, lawyers, filename='lawyers_data.json'):
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(lawyers, f, indent=2, ensure_ascii=False)
        logger.info(f"Saved {len(lawyers)} lawyers to {filename}")