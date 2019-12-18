export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";

export const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  movies
});

export const GET_SERIES_SUCCESS = "GET_SERIES_SUCCESS";

export const getSeriesSuccess = series => ({
  type: GET_SERIES_SUCCESS,
  series
});

export const getMoviesType = movies => ({
  type: "GET_MOVIES_TYPE_SUCCESS",
  movies
});

export const SET_LOADING = "SET_LOADING";

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
});
