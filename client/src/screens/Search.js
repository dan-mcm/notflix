import { useState } from 'react';
import axios from "axios"

// page variable likely useful for pagination
function searchQuery(query, page, setSearchResult) {
  console.log(`searchQuery Client DEBUG: http://localhost:9000/moviesearchdb/${query}/${page}`)
  return axios.get(`http://localhost:9000/moviedb/moviesearch/${query}/${page}`) //TODO url parse protection
    .then((movies) => {
      console.log(`passed variables`, query, page)
      console.log(movies.data)
      setSearchResult(movies.data)
    })
    .catch((err) => console.log(`searchQuery Debug - ${err}`));
}

function Search(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
      <button onClick={() => searchQuery(searchTerm, 1, setSearchResult)}>Search</button><br/>
      Searching For: {searchTerm}<br/>
      search Result: {JSON.stringify(searchResult)}<br/>
    </div>
  )
}

export default Search;
