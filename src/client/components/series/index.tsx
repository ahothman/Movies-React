import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "../common/post";
import Context from "../../context";
import { getSeriesSuccess, setLoading } from "../../actions";
import { loadSeries } from "../../utils";

const Series = () => {
  // const [series, setSeries] = useState([]);
  const { state, dispatch }: any = useContext(Context);
  useEffect(() => {
    dispatch(setLoading(true));
    loadSeries(_series => {
      // setSeries(_series);
      dispatch(getSeriesSuccess(_series));
      dispatch(setLoading(false));
    });
  }, []);

  if (state.isLoading) return <p className="loading">Loading...</p>;
  return (
    <div className="container">
      {state.series.map(s => (
        <Post title={s.title} imageUrl={s.imageUrl} />
      ))}
    </div>
  );
};

export default Series;
