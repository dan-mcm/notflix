function Movie(title, release, poster) {
  return (
    <div>
      <h2>{title}</h2>
      <i>{release}</i><br />
      <img src={poster} alt={title}/>
    </div>
  )
}

export default Movie
