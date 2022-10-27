import { useDispatch, useSelector } from 'react-redux';

// values obtained via redux store
function AddFavourite(props) {
  const favourites = useSelector(state => state.favourites);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  return (
      <button onClick={() => dispatch({type: 'addFavourites', payload: props})}>Favourite</button>
  )
}

export default AddFavourite;
