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

function Movie(props) {
  return (
    <Col style={maxDimensions} xs={24} md={10} xl={6}>
      <div style={borderStyle}>
        <h3>{props.title}</h3>
        <p>Released: {props.release}</p>
        <img style={imageDimensions} src={props.poster} alt={props.title} />
        <br />
        <br />
        {!props.isFavourite ? (
          <>
            <AddFavourite
              id={props.id}
              title={props.title}
              release={props.release}
              poster={props.poster}
              isFavourite={props.isFavourite}
            />
            <br />
          </>
        ) : (
          <>
            <RemoveFavourite
              id={props.id}
              title={props.title}
              release={props.release}
              poster={props.poster}
              isFavourite={props.isFavourite}
            />
            <br />
          </>
        )}
      </div>
    </Col>
  );
}

export default Movie;
