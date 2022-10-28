import AddFavourite from "./AddFavourite";
import RemoveFavourite from "./RemoveFavourite";
import { Col } from "antd";

// some custom inline styles to overwrite antd
const borderStyle = {
  borderStyle: "ridge",
  maxHeight: "360px",
  color: "white",
  backgroundColor: "darkred",
};

const maxDimensions = {
  maxWidth: "300px",
  maxHeight: "360px",
};

const imageDimensions = {
  maxWidth: "300px",
  maxHeight: "200px",
};

function Movie(id, title, release, poster, isFavourite) {
  return (
    <Col style={maxDimensions} xs={24} md={10} xl={6}>
      <div style={borderStyle}>
        <h3>{title}</h3>
        <p>Released: {release}</p>
        <img style={imageDimensions} src={poster} alt={title} />
        <br />
        <br />
        {!isFavourite ? (
          <>
            <AddFavourite
              id={id}
              title={title}
              release={release}
              poster={poster}
              isFavourite={isFavourite}
            />
            <br />
          </>
        ) : (
          <>
            <RemoveFavourite
              id={id}
              title={title}
              release={release}
              poster={poster}
              isFavourite={isFavourite}
            />
            <br />
          </>
        )}
      </div>
    </Col>
  );
}

export default Movie;
