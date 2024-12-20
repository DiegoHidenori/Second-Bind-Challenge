# To set up the backend

- Installed the dependencies and created some files like .env and .gitignore
- Created the schema.sql and setup.js for setting up the database
- run "psql -U admin -f db/schema.sql"
- run "node config/setup.js"

# Steps to run the application

1. Install PostgreSQL and create the database
2. Run database setup:

- npm install
- node setup.js (RUN ONCE TO APPLY THE DB SCHEMA)
- npm start
