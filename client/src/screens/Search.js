import { useState } from 'react';
import axios from "axios"
import Movie from "../components/Movie";

// page variable likely useful for pagination
function searchQuery(query, page, setSearchResult, setTotalResults) {
  console.log(`searchQuery Client DEBUG: http://localhost:9000/moviesearchdb/${query}/${page}`)
  return axios.get(`http://localhost:9000/moviedb/moviesearch/${query}/${page}`) //TODO url parse protection
    .then((movies) => {
      console.log(`passed variables`, query, page)
      console.log(movies.data)
      setSearchResult(movies.data.results)
      setTotalResults(movies.data.total_results)
    })
    .catch((err) => console.log(`searchQuery Debug - ${err}`));
}

// sometimes get a null poster, in that case using fillmurray placeholder
function generatePosterURL(potentialPoster) {
  let poster;
  if(potentialPoster == null){
    // placeholder image if none found in right size
    poster = 'https://www.fillmurray.com/200/300';
  } else {
    poster = `https://image.tmdb.org/t/p/w200/${potentialPoster}`;
  }
  return poster
}

// TODO add pagination...
function Search(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return(
    <div>
      <h2>Search</h2>
      <p>Search Elements Here</p>
      <input
        type="text"
        placeholder="Enter Search..."
        value={searchTerm}
        onChange={handleChange}
      />{'   '}
      <button onClick={() => searchQuery(searchTerm, 1, setSearchResult, setTotalResults)}>Search</button><br/>
      <p>
        Searching For: {searchTerm}<br/>
        Totals Results: {totalResults}<br />
        {(totalResults === 0) ? "No Results Found" :
        searchResult.map(film => Movie(
          film.id,
          film.original_title,
          film.release_date,
          generatePosterURL(film.poster_path),
        ))
      }
      </p>
    </div>
  )
}

export default Search;
