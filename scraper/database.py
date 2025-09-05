import os
try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
except ImportError:
    import psycopg2_binary as psycopg2
    from psycopg2_binary.extras import RealDictCursor
from dotenv import load_dotenv
import logging

load_dotenv()

logger = logging.getLogger(__name__)

class Database:
    def __init__(self):
        self.connection = None
        self.cursor = None
        
    def connect(self):
        try:
            database_url = os.getenv('DATABASE_URL')
            if not database_url:
                raise ValueError("DATABASE_URL not found in environment variables")
            
            self.connection = psycopg2.connect(database_url)
            self.cursor = self.connection.cursor(cursor_factory=RealDictCursor)
            logger.info("Database connection established")
            return True
        except Exception as e:
            logger.error(f"Database connection failed: {e}")
            return False
    
    def create_lawyers_table(self):
        try:
            create_table_query = """
            CREATE TABLE IF NOT EXISTS lawyers (
                id SERIAL PRIMARY KEY,
                lawyer_name VARCHAR(255),
                firm_name VARCHAR(255),
                office_address TEXT,
                city VARCHAR(100),
                state VARCHAR(50),
                zip_code VARCHAR(20),
                phone_number VARCHAR(50),
                website VARCHAR(500),
                email VARCHAR(255),
                practice_areas TEXT,
                bar_admission VARCHAR(255),
                years_experience INTEGER,
                rating DECIMAL(3,2),
                review_count INTEGER,
                source_url TEXT,
                scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(lawyer_name, firm_name, office_address)
            );
            
            CREATE INDEX IF NOT EXISTS idx_lawyers_state ON lawyers(state);
            CREATE INDEX IF NOT EXISTS idx_lawyers_city ON lawyers(city);
            CREATE INDEX IF NOT EXISTS idx_lawyers_firm ON lawyers(firm_name);
            """
            
            self.cursor.execute(create_table_query)
            self.connection.commit()
            logger.info("Lawyers table created successfully")
            return True
        except Exception as e:
            logger.error(f"Failed to create lawyers table: {e}")
            self.connection.rollback()
            return False
    
    def insert_lawyer(self, lawyer_data):
        try:
            insert_query = """
            INSERT INTO lawyers (
                lawyer_name, firm_name, office_address, city, state, 
                zip_code, phone_number, website, email, practice_areas,
                bar_admission, years_experience, rating, review_count, source_url
            ) VALUES (
                %(lawyer_name)s, %(firm_name)s, %(office_address)s, %(city)s, %(state)s,
                %(zip_code)s, %(phone_number)s, %(website)s, %(email)s, %(practice_areas)s,
                %(bar_admission)s, %(years_experience)s, %(rating)s, %(review_count)s, %(source_url)s
            )
            ON CONFLICT (lawyer_name, firm_name, office_address) 
            DO UPDATE SET
                phone_number = EXCLUDED.phone_number,
                website = EXCLUDED.website,
                email = EXCLUDED.email,
                practice_areas = EXCLUDED.practice_areas,
                bar_admission = EXCLUDED.bar_admission,
                years_experience = EXCLUDED.years_experience,
                rating = EXCLUDED.rating,
                review_count = EXCLUDED.review_count,
                updated_at = CURRENT_TIMESTAMP
            RETURNING id;
            """
            
            self.cursor.execute(insert_query, lawyer_data)
            self.connection.commit()
            result = self.cursor.fetchone()
            return result['id'] if result else None
        except Exception as e:
            logger.error(f"Failed to insert lawyer: {e}")
            self.connection.rollback()
            return None
    
    def bulk_insert_lawyers(self, lawyers_list):
        inserted_count = 0
        failed_count = 0
        
        for lawyer in lawyers_list:
            result = self.insert_lawyer(lawyer)
            if result:
                inserted_count += 1
            else:
                failed_count += 1
        
        logger.info(f"Bulk insert completed: {inserted_count} inserted, {failed_count} failed")
        return inserted_count, failed_count
    
    def get_lawyers_by_state(self, state):
        try:
            query = "SELECT * FROM lawyers WHERE state = %s ORDER BY city, lawyer_name"
            self.cursor.execute(query, (state,))
            return self.cursor.fetchall()
        except Exception as e:
            logger.error(f"Failed to fetch lawyers by state: {e}")
            return []
    
    def get_statistics(self):
        try:
            query = """
            SELECT 
                COUNT(*) as total_lawyers,
                COUNT(DISTINCT state) as states_covered,
                COUNT(DISTINCT firm_name) as unique_firms,
                COUNT(DISTINCT city || ', ' || state) as cities_covered,
                MAX(scraped_at) as last_scrape
            FROM lawyers;
            """
            self.cursor.execute(query)
            return self.cursor.fetchone()
        except Exception as e:
            logger.error(f"Failed to get statistics: {e}")
            return None
    
    def close(self):
        if self.cursor:
            self.cursor.close()
        if self.connection:
            self.connection.close()
        logger.info("Database connection closed")