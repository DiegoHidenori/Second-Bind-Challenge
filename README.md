# How to run the application

- Since the application has been deployed, you can open the URL "https://second-bind-challenge-sigma.vercel.app/books" on the browser.

# Notes:

- The backend was initially made to use a local database, but later changed to a database deployed using Heroku.

# Initial steps taken to set up the backend

- Installed the dependencies and created some files like .env and .gitignore
- Created the schema.sql and setup.js for setting up the database
- run "psql -U admin -f db/schema.sql"
- run "node config/setup.js"

# Steps to run the application (NO LONGER USABLE. Made for the local testing)

1. Install PostgreSQL and create a user, from which you make the environment variables to use on the application.
2. Run setup:

- npm install
- node setup.js (RUN ONCE TO APPLY THE DB SCHEMA)
- npm start
