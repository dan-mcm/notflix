import {useSelector} from 'react-redux';
import Movie from '../components/Movie';

function Favourites(){
  const favourites = useSelector(state => state.favourites);

  return(
    <>
      <h2>Favourites</h2>
      {typeof favourites !== "undefined" ?
        Object.keys(favourites).map((key) => (
          Movie(
            favourites[key].id,
            favourites[key].title,
            favourites[key].release,
            favourites[key].poster,
            true
          )
        ))
     : "No Favourites Saved."}
    </>
  )
}

export default Favourites;
