const initialFavouritesState = { favourites:[] };

export const favouritesReducer = function (state=initialFavouritesState, action) {
  switch (action.type) {
    case "addFavourites":
      return {
        ...state,
        favourites: { ...state.favourites, [action.payload.id]: action.payload },
      };
    default:
      return state.favourites;
  }
}
