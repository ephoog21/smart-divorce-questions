import os
import subprocess
import sys
from dotenv import load_dotenv, set_key

def check_railway_cli():
    try:
        result = subprocess.run(['railway', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            print("[OK] Railway CLI is installed")
            return True
    except FileNotFoundError:
        print("[X] Railway CLI is not installed")
        print("Please install it from: https://docs.railway.app/develop/cli")
        return False

def get_railway_database_url():
    try:
        result = subprocess.run(
            ['railway', 'variables', 'get', 'DATABASE_URL'],
            capture_output=True,
            text=True,
            cwd=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        )
        
        if result.returncode == 0:
            database_url = result.stdout.strip()
            if database_url:
                print("[OK] Found DATABASE_URL from Railway")
                return database_url
        
        print("Trying to get PostgreSQL connection details...")
        
        commands = [
            ['railway', 'variables', 'get', 'PGHOST'],
            ['railway', 'variables', 'get', 'PGPORT'],
            ['railway', 'variables', 'get', 'PGUSER'],
            ['railway', 'variables', 'get', 'PGPASSWORD'],
            ['railway', 'variables', 'get', 'PGDATABASE']
        ]
        
        values = {}
        for cmd in commands:
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                cwd=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            )
            if result.returncode == 0:
                key = cmd[3]
                values[key] = result.stdout.strip()
        
        if all(k in values for k in ['PGHOST', 'PGPORT', 'PGUSER', 'PGPASSWORD', 'PGDATABASE']):
            database_url = f"postgresql://{values['PGUSER']}:{values['PGPASSWORD']}@{values['PGHOST']}:{values['PGPORT']}/{values['PGDATABASE']}"
            print("[OK] Constructed DATABASE_URL from Railway PostgreSQL variables")
            return database_url
        
    except Exception as e:
        print(f"Error getting Railway database URL: {e}")
    
    return None

def setup_env_file():
    env_file = '.env'
    
    if os.path.exists(env_file):
        print(f"Loading existing {env_file}")
        load_dotenv()
    else:
        print(f"Creating new {env_file}")
        with open(env_file, 'w') as f:
            f.write("")
    
    database_url = os.getenv('DATABASE_URL')
    
    if not database_url:
        print("\nAttempting to get DATABASE_URL from Railway...")
        database_url = get_railway_database_url()
        
        if database_url:
            set_key(env_file, 'DATABASE_URL', database_url)
            print(f"[OK] DATABASE_URL saved to {env_file}")
        else:
            print("\n[X] Could not get DATABASE_URL from Railway")
            print("\nPlease do one of the following:")
            print("1. Link your Railway project: railway link")
            print("2. Add a PostgreSQL database to your Railway project")
            print("3. Manually add DATABASE_URL to .env file")
            print("\nExample DATABASE_URL format:")
            print("postgresql://username:password@host:port/database")
            return False
    else:
        print("[OK] DATABASE_URL already configured in .env")
    
    if not os.getenv('SCRAPER_DELAY'):
        set_key(env_file, 'SCRAPER_DELAY', '2')
        print("[OK] Set default SCRAPER_DELAY=2")
    
    if not os.getenv('MAX_WORKERS'):
        set_key(env_file, 'MAX_WORKERS', '5')
        print("[OK] Set default MAX_WORKERS=5")
    
    return True

def test_database_connection():
    from database import Database
    
    print("\nTesting database connection...")
    db = Database()
    
    if db.connect():
        print("[OK] Successfully connected to database")
        
        if db.create_lawyers_table():
            print("[OK] Lawyers table created/verified")
        else:
            print("[X] Failed to create lawyers table")
            return False
        
        db.close()
        return True
    else:
        print("[X] Failed to connect to database")
        return False

def main():
    print("=== Railway Database Setup for Lawyer Scraper ===\n")
    
    if not check_railway_cli():
        sys.exit(1)
    
    if not setup_env_file():
        sys.exit(1)
    
    if test_database_connection():
        print("\n[OK] Setup completed successfully!")
        print("\nYou can now run the scraper:")
        print("  python main.py --test  # Test mode with limited data")
        print("  python main.py --states CA NY TX  # Scrape specific states")
        print("  python main.py  # Scrape all US states")
    else:
        print("\n[X] Setup failed. Please check your database configuration.")
        sys.exit(1)

if __name__ == "__main__":
    main()