const initialFavouritesState = { favourites: [] };

export const favouritesReducer = function (
  state = initialFavouritesState,
  action
) {
  switch (action.type) {
    case "addFavourites":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.payload.id]: action.payload,
        },
      };
    case "removeFavourites":
      return {
        ...state,
        favourites: Object.keys(state.favourites)
          .filter((item) => item !== action.payload.toString())
          .reduce(
            (object, item) => ({ ...object, [item]: state.favourites[item] }),
            {}
          ),
      };
    default:
      return state.favourites;
  }
};
