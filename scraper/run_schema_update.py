import sys
sys.path.insert(0, r'C:\Users\edhoo\AppData\Roaming\Python\Python313\site-packages')
import psycopg2
from dotenv import load_dotenv
import os

load_dotenv('../.env.local')

# Connect to database
conn = psycopg2.connect(os.getenv('DATABASE_URL'))
cur = conn.cursor()

print("Updating database schema...")

# Read and execute SQL file
with open('update_schema.sql', 'r') as f:
    sql_commands = f.read()

# Split by semicolon and execute each command
commands = [cmd.strip() for cmd in sql_commands.split(';') if cmd.strip() and not cmd.strip().startswith('--')]

success_count = 0
error_count = 0

for i, command in enumerate(commands, 1):
    if command and not command.strip().startswith('/*'):
        try:
            cur.execute(command)
            success_count += 1
            # Show first 60 chars of command
            cmd_preview = ' '.join(command.split()[:10])[:60]
            print(f"[OK] [{i}] {cmd_preview}...")
        except psycopg2.ProgrammingError as e:
            if "already exists" in str(e):
                print(f"[->] [{i}] Skipped (already exists)")
                success_count += 1
            else:
                print(f"[X] [{i}] Error: {e}")
                error_count += 1
        except Exception as e:
            print(f"[X] [{i}] Error: {e}")
            error_count += 1

conn.commit()
cur.close()
conn.close()

print(f"\n[DONE] Schema update completed!")
print(f"   Successful: {success_count}")
print(f"   Errors: {error_count}")