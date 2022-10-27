import { useState, useRef, useEffect } from 'react';
import axios from "axios"
import Movie from "../components/Movie";
import { Pagination } from 'antd';


// page variable likely useful for pagination
function searchQuery(query, page, setSearchResult, setTotalResults, setCurrentPage, setTotalPages) {
  console.log(`searchQuery Client DEBUG: http://localhost:9000/moviesearchdb/${query}/${page}`)
  return axios.get(`http://localhost:9000/moviedb/moviesearch/${query}/${page}`) //TODO url parse protection
    .then((movies) => {
      console.log(`passed variables`, query, page)
      console.log(movies.data)
      setSearchResult(movies.data.results)
      setTotalResults(movies.data.total_results)
      setCurrentPage(movies.data.page)
      setTotalPages(movies.data.total_pages)
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // trying to prevent initial mount render of searchQuery
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
     isInitialMount.current = false;
    } else {
     searchQuery(searchTerm, currentPage, setSearchResult, setTotalResults, setCurrentPage, setTotalPages)
    }

  }, [currentPage])

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
      <button onClick={() =>  searchQuery(searchTerm, currentPage, setSearchResult, setTotalResults, setCurrentPage, setTotalPages)}>Search</button><br/>
      <div>
        {(totalResults === 0) ? 'No Results Found.' :
        <Pagination
          showSizeChanger={false}
          defaultPageSize={20}
          total={totalPages}
          showTotal={total => `Total ${total} items`}
          onChange={(page) => setCurrentPage(page)}
        />}
        <br/><br/>
        <div>
          {searchResult.map(film => Movie(
            film.id,
            film.original_title,
            film.release_date,
            generatePosterURL(film.poster_path)
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search;
