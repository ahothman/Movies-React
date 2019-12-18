import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SeriesType } from "../../../interfaces";
import Post from "../common/post";
import Context from "../../context";
import { getMoviesSuccess, setLoading } from "../../actions";
import { loadMovies } from "../../utils";

const Movies = () => {
  const { state, dispatch }: any = useContext(Context);
  useEffect(() => {
    dispatch(setLoading(true));
    loadMovies(_movies => {
      dispatch(getMoviesSuccess(_movies));
      dispatch(setLoading(false));
    });
  }, []);
  if (state.isLoading) return <p className="loading">Loading...</p>;
  return (
    <div className="container">
      {state.movies.map(m => (
        <Post title={m.title} imageUrl={m.imageUrl} />
      ))}
    </div>
  );
};

export default Movies;
