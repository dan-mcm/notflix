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
          ? Object.keys(favourites).map((key) =>
              Movie(
                favourites[key].id,
                favourites[key].title,
                favourites[key].release,
                favourites[key].poster,
                true
              )
            )
          : "No Favourites Saved."}
      </Row>
    </div>
  );
}

export default Favourites;
