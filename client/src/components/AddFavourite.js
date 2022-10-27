import { useDispatch } from 'react-redux';

// values obtained via redux store
function AddFavourite(props) {
  //Use for all the dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({type: 'addFavourites', payload: props})}>Favourite</button>
    </div>
  )
}

export default AddFavourite;
