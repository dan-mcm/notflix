import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { Button, Divider, Pagination, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// page variable likely useful for pagination
function searchQuery(
  query,
  page,
  setSearchResult,
  setTotalResults,
  setCurrentPage,
  setTotalPages
) {
  console.log(
    `searchQuery Client DEBUG: http://localhost:9000/moviesearchdb/${query}/${page}`
  );
  return axios
    .get(`http://localhost:9000/moviedb/moviesearch/${query}/${page}`) //TODO url parse protection
    .then((movies) => {
      setSearchResult(movies.data.results);
      setTotalResults(movies.data.total_results);
      setCurrentPage(movies.data.page);
      setTotalPages(movies.data.total_pages);
    })
    .catch((err) => console.log(`searchQuery Debug - ${err}`));
}

// sometimes get a null poster, in that case using fillmurray placeholder
function generatePosterURL(potentialPoster) {
  let poster;
  if (potentialPoster == null) {
    // placeholder image if none found in right size
    poster = "https://www.fillmurray.com/200/300";
  } else {
    poster = `https://image.tmdb.org/t/p/w200/${potentialPoster}`;
  }
  return poster;
}

// TODO add pagination...
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
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
      searchQuery(
        searchTerm,
        currentPage,
        setSearchResult,
        setTotalResults,
        setCurrentPage,
        setTotalPages
      );
    }
  }, [currentPage]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="Search">
      <h2>Movie Search</h2>
      <Divider />
      <input
        type="text"
        placeholder="Enter Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {"   "}
      <Button
        type="danger"
        icon={<SearchOutlined />}
        onClick={() =>
          searchQuery(
            searchTerm,
            currentPage,
            setSearchResult,
            setTotalResults,
            setCurrentPage,
            setTotalPages
          )
        }
      >
        Search
      </Button>
      <br />
      <br />
      {totalResults === 0 ? (
        "No Results Found."
      ) : (
        <Pagination
          showSizeChanger={false}
          defaultPageSize={20}
          total={totalPages}
          showTotal={(total) => `Total ${total} items`}
          onChange={(page) => setCurrentPage(page)}
        />
      )}
      <br />
      <br />
      <Row gutter={[16, 16]} justify="center">
        {searchResult.map((film) => (
          <Movie
            id={film.id}
            title={film.original_title}
            release={film.release_date}
            poster={generatePosterURL(film.poster_path)}
          />
        ))}
      </Row>
    </div>
  );
}

export default Search;
