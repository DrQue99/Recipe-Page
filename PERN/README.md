# PERN - Animal sightings App

Full stack web app using Postgres, Express, React, and Node.

## Set-up:

#### Postrgres database:

- Set up the database using PostgreSQL. Install [PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew), using [homebrew](https://brew.sh/). Restore the pern database by running:

```
CREATE DATABASE pern
psql pern < pern.sql 
```

#### Server:

- Start with `npm install` to install necessary dependencies in the 'server' folder.

- Create a .env file following the format in .env.example and change USERNAME to the username of your machine. 

- Run the Express server by running `node index.js`

#### Client:

- Start with `npm install` to install necessary dependencies in the 'client' folder. Run `npm start` to run the app

#### API: 

- Once both servers are running (Express on port 3000 and React on 3001), open [http://localhost:3001](http://localhost:3001/) to view it in your browser.

