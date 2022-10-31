import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import { Divider, Row } from "antd";

function Favourites() {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className="Favourites">
      <h2>Movie Favourites</h2>
      <Divider />
      <Row gutter={16} justify="center">
        {typeof favourites !== "undefined"
          ? Object.keys(favourites).map((key) => (
              <Movie
                id={favourites[key].id}
                title={favourites[key].title}
                release={favourites[key].release}
                poster={favourites[key].poster}
                isFavourite={true}
              />
            ))
          : "No Favourites Saved."}
      </Row>
    </div>
  );
}

export default Favourites;
