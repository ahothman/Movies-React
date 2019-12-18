import {
  GET_MOVIES_SUCCESS,
  GET_SERIES_SUCCESS,
  SET_LOADING
} from "../actions";

export const intialState = {
  series: [],
  movies: [],
  isLoading: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies };
    case GET_SERIES_SUCCESS:
      return { ...state, series: action.series };
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default reducer;
