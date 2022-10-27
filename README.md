# Notflix

A React JS application with a Redux store, powered by an Express/Node backend using [The Movie Database API](https://developers.themoviedb.org/3).

## Project Overview

The repo contains two JS projects.
* Client - Contains the main React application, using a Redux store (bootstraped with CRA)
* Server - Contains the Express/Node server (used for calling TMDB API) (bootstraped with Express)

## Running Locally
To run the application:
```
cd client
npm run start
```
To run the server:
```
cd server
npm run start
```

App was developed on Windows 11 device with following:
```
node v19.0.0
npm 8.19.2
```

## Environmental Variables
The server uses an **API_KEY** env variable to make calls to The Movie Database API.
You can read up on how to obtain a key [here](https://developers.themoviedb.org/3/getting-started/authentication).

The project uses dotenv, enabling you to use .env files in the `server` root directory.

```
API_KEY=your-personal-key-here
```
