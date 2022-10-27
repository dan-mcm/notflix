import AddFavourite from './AddFavourite';

function Movie(id, title, release, poster) {
  return (
    <>
      <h2>{title}</h2>
      <i>{release}</i><br />
      <img src={poster} alt={title}/>
      <br />
      <AddFavourite
        id={id}
        title={title}
        release={release}
        poster={poster}
      />
    </>
  )
}

export default Movie
