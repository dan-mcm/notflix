const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv').config();

const theMovieDBURI = `https://api.themoviedb.org/3`;

// private API configured via .env variables
const apiKey = process.env.API_KEY

// redirect api query using private apiKey
function movieQuery(key){
  return axios.get(`${theMovieDBURI}/movie/550?api_key=${key}`)
    .then(res => res)
    .catch(err => err)
}

function movieSearchQuery(key, query, page){
  return axios.get(`${theMovieDBURI}/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

// fetches key, then gets apiquery based on it (maybe async await better)
router.get("/moviesearch/:query/:page", function(req, res, next){
  movieSearchQuery(apiKey, req.params.query, req.params.page)
  .then(result => res.send(result))
  .catch(err => console.log(err))
})



module.exports = router;
