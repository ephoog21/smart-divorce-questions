import requests
from bs4 import BeautifulSoup
import time
import re
import logging
from urllib.parse import urljoin, quote
import json
import os
from dotenv import load_dotenv
import random

load_dotenv()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class AlternativeLawyerScraper:
    def __init__(self):
        self.delay = float(os.getenv('SCRAPER_DELAY', 3))
        self.session = requests.Session()
        
        # Use more realistic headers
        self.headers_list = [
            {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                'DNT': '1',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1'
            },
            {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
            }
        ]
        
    def get_random_headers(self):
        return random.choice(self.headers_list)
    
    def extract_email(self, text):
        if not text:
            return None
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, text)
        return emails[0] if emails else None
    
    def extract_phone(self, text):
        if not text:
            return None
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
    
    def parse_address_components(self, address_text):
        if not address_text:
            return None, None, None, None
        
        # Common state abbreviations
        states = {
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
            'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
            'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
            'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
            'WI', 'WY'
        }
        
        zip_pattern = r'\b\d{5}(?:-\d{4})?\b'
        zip_match = re.search(zip_pattern, address_text)
        zip_code = zip_match.group() if zip_match else None
        
        state = None
        for st in states:
            if f' {st} ' in address_text or address_text.endswith(f' {st}'):
                state = st
                break
        
        city = None
        if state:
            city_pattern = rf'([^,]+),\s*{state}'
            city_match = re.search(city_pattern, address_text)
            if city_match:
                city = city_match.group(1).strip()
        
        return address_text, city, state, zip_code
    
    def scrape_nolo_lawyers(self, state, city=None):
        """Scrape from Nolo.com lawyer directory"""
        lawyers = []
        
        try:
            base_url = "https://www.nolo.com/lawyers/divorce-child-custody-support"
            state_lower = state.lower()
            
            if city:
                url = f"{base_url}/{state_lower}/{city.lower().replace(' ', '-')}"
            else:
                url = f"{base_url}/{state_lower}"
            
            logger.info(f"Scraping Nolo: {url}")
            
            response = self.session.get(url, headers=self.get_random_headers(), timeout=15)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Find lawyer listings
                lawyer_cards = soup.find_all('div', class_='lawyer-listing') or \
                              soup.find_all('div', class_='directory-item') or \
                              soup.find_all('article', class_='lawyer')
                
                for card in lawyer_cards[:20]:  # Limit to 20 per page
                    lawyer_data = self.parse_nolo_lawyer(card, url, state)
                    if lawyer_data and lawyer_data['lawyer_name']:
                        lawyers.append(lawyer_data)
                
                logger.info(f"Found {len(lawyers)} lawyers from Nolo")
            else:
                logger.warning(f"Nolo returned status {response.status_code}")
                
        except Exception as e:
            logger.error(f"Error scraping Nolo: {e}")
        
        time.sleep(self.delay)
        return lawyers
    
    def parse_nolo_lawyer(self, card, source_url, state):
        try:
            lawyer_data = {
                'lawyer_name': None,
                'firm_name': None,
                'office_address': None,
                'city': None,
                'state': state,
                'zip_code': None,
                'phone_number': None,
                'website': None,
                'email': None,
                'practice_areas': 'Divorce and Family Law',
                'bar_admission': None,
                'years_experience': None,
                'rating': None,
                'review_count': None,
                'source_url': source_url
            }
            
            # Try various selectors
            name_elem = card.find(['h2', 'h3', 'h4'], class_=re.compile('name|title')) or \
                       card.find('a', class_=re.compile('lawyer-name'))
            if name_elem:
                lawyer_data['lawyer_name'] = self.clean_text(name_elem.get_text())
            
            firm_elem = card.find(class_=re.compile('firm|company|office'))
            if firm_elem:
                lawyer_data['firm_name'] = self.clean_text(firm_elem.get_text())
            
            address_elem = card.find(class_=re.compile('address|location'))
            if address_elem:
                address_text = self.clean_text(address_elem.get_text())
                lawyer_data['office_address'], lawyer_data['city'], _, lawyer_data['zip_code'] = \
                    self.parse_address_components(address_text)
            
            phone_elem = card.find(class_=re.compile('phone|tel'))
            if phone_elem:
                phone = self.extract_phone(phone_elem.get_text())
                if phone:
                    lawyer_data['phone_number'] = phone
            
            return lawyer_data
            
        except Exception as e:
            logger.error(f"Error parsing Nolo lawyer: {e}")
            return None
    
    def scrape_lawyers_com(self, state, city=None):
        """Scrape from Lawyers.com directory"""
        lawyers = []
        
        try:
            base_url = "https://www.lawyers.com"
            if city:
                url = f"{base_url}/find-a-lawyer/practice/divorce-separation.html/{state}/{city.replace(' ', '-')}"
            else:
                url = f"{base_url}/find-a-lawyer/practice/divorce-separation.html/{state}"
            
            logger.info(f"Scraping Lawyers.com: {url}")
            
            response = self.session.get(url, headers=self.get_random_headers(), timeout=15)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Find lawyer cards
                lawyer_cards = soup.find_all('div', class_='lawyer-info') or \
                              soup.find_all('div', class_='listing-item')
                
                for card in lawyer_cards[:20]:
                    lawyer_data = self.parse_lawyers_com_lawyer(card, url, state)
                    if lawyer_data and lawyer_data['lawyer_name']:
                        lawyers.append(lawyer_data)
                
                logger.info(f"Found {len(lawyers)} lawyers from Lawyers.com")
            else:
                logger.warning(f"Lawyers.com returned status {response.status_code}")
                
        except Exception as e:
            logger.error(f"Error scraping Lawyers.com: {e}")
        
        time.sleep(self.delay)
        return lawyers
    
    def parse_lawyers_com_lawyer(self, card, source_url, state):
        try:
            lawyer_data = {
                'lawyer_name': None,
                'firm_name': None,
                'office_address': None,
                'city': None,
                'state': state,
                'zip_code': None,
                'phone_number': None,
                'website': None,
                'email': None,
                'practice_areas': 'Divorce and Family Law',
                'bar_admission': None,
                'years_experience': None,
                'rating': None,
                'review_count': None,
                'source_url': source_url
            }
            
            # Extract name
            name_elem = card.find(['h2', 'h3'], class_=re.compile('lawyer|attorney|name'))
            if name_elem:
                lawyer_data['lawyer_name'] = self.clean_text(name_elem.get_text())
            
            # Extract firm
            firm_elem = card.find(class_=re.compile('firm|office'))
            if firm_elem:
                lawyer_data['firm_name'] = self.clean_text(firm_elem.get_text())
            
            # Extract address
            address_elem = card.find(class_=re.compile('address'))
            if address_elem:
                address_text = self.clean_text(address_elem.get_text())
                lawyer_data['office_address'], lawyer_data['city'], _, lawyer_data['zip_code'] = \
                    self.parse_address_components(address_text)
            
            # Extract phone
            phone_text = card.get_text()
            phone = self.extract_phone(phone_text)
            if phone:
                lawyer_data['phone_number'] = phone
            
            return lawyer_data
            
        except Exception as e:
            logger.error(f"Error parsing Lawyers.com lawyer: {e}")
            return None
    
    def scrape_martindale_hubbell(self, state, city=None):
        """Scrape from Martindale-Hubbell directory"""
        lawyers = []
        
        try:
            if city:
                url = f"https://www.martindale.com/by-location/divorce-lawyers/{city.lower().replace(' ', '-')}-{state.lower()}-attorneys/"
            else:
                url = f"https://www.martindale.com/by-location/divorce-lawyers/{state.lower()}-attorneys/"
            
            logger.info(f"Scraping Martindale-Hubbell: {url}")
            
            response = self.session.get(url, headers=self.get_random_headers(), timeout=15)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Find lawyer listings
                lawyer_cards = soup.find_all('article', class_='lawyer') or \
                              soup.find_all('div', class_='serp-lawyer')
                
                for card in lawyer_cards[:15]:
                    lawyer_data = self.parse_martindale_lawyer(card, url, state)
                    if lawyer_data and lawyer_data['lawyer_name']:
                        lawyers.append(lawyer_data)
                
                logger.info(f"Found {len(lawyers)} lawyers from Martindale-Hubbell")
            else:
                logger.warning(f"Martindale-Hubbell returned status {response.status_code}")
                
        except Exception as e:
            logger.error(f"Error scraping Martindale-Hubbell: {e}")
        
        time.sleep(self.delay)
        return lawyers
    
    def parse_martindale_lawyer(self, card, source_url, state):
        try:
            lawyer_data = {
                'lawyer_name': None,
                'firm_name': None,
                'office_address': None,
                'city': None,
                'state': state,
                'zip_code': None,
                'phone_number': None,
                'website': None,
                'email': None,
                'practice_areas': 'Divorce and Family Law',
                'bar_admission': None,
                'years_experience': None,
                'rating': None,
                'review_count': None,
                'source_url': source_url
            }
            
            # Extract lawyer info
            name_elem = card.find(['h2', 'h3'], class_=re.compile('lawyer-name|attorney-name'))
            if name_elem:
                lawyer_data['lawyer_name'] = self.clean_text(name_elem.get_text())
            
            firm_elem = card.find(class_=re.compile('law-firm|firm-name'))
            if firm_elem:
                lawyer_data['firm_name'] = self.clean_text(firm_elem.get_text())
            
            # Get full text for phone extraction
            card_text = card.get_text()
            phone = self.extract_phone(card_text)
            if phone:
                lawyer_data['phone_number'] = phone
            
            return lawyer_data
            
        except Exception as e:
            logger.error(f"Error parsing Martindale lawyer: {e}")
            return None
    
    def scrape_state_with_multiple_sources(self, state, cities=None):
        """Scrape a state using multiple sources"""
        all_lawyers = []
        
        # Major cities for each state (sample)
        default_cities = {
            'CA': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
            'TX': ['Houston', 'Dallas', 'Austin', 'San Antonio'],
            'FL': ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
            'NY': ['New York', 'Buffalo', 'Rochester', 'Albany'],
            'IL': ['Chicago', 'Springfield', 'Rockford', 'Peoria'],
            'PA': ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Allentown'],
            'OH': ['Columbus', 'Cleveland', 'Cincinnati', 'Dayton'],
            'GA': ['Atlanta', 'Augusta', 'Columbus', 'Savannah'],
            'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
            'MI': ['Detroit', 'Grand Rapids', 'Lansing', 'Ann Arbor']
        }
        
        cities_to_search = cities or default_cities.get(state, [None])
        
        for city in cities_to_search[:3]:  # Limit to 3 cities per state
            logger.info(f"Scraping {state} - {city if city else 'Statewide'}")
            
            # Try different sources
            nolo_lawyers = self.scrape_nolo_lawyers(state, city)
            all_lawyers.extend(nolo_lawyers)
            
            lawyers_com = self.scrape_lawyers_com(state, city)
            all_lawyers.extend(lawyers_com)
            
            martindale = self.scrape_martindale_hubbell(state, city)
            all_lawyers.extend(martindale)
            
            # Add delay between cities
            time.sleep(self.delay * 2)
        
        # Remove duplicates based on name and firm
        seen = set()
        unique_lawyers = []
        for lawyer in all_lawyers:
            key = (lawyer.get('lawyer_name'), lawyer.get('firm_name'))
            if key not in seen and lawyer.get('lawyer_name'):
                seen.add(key)
                unique_lawyers.append(lawyer)
        
        logger.info(f"Total unique lawyers for {state}: {len(unique_lawyers)}")
        return unique_lawyers