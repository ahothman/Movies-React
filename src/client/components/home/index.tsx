import React from "react";
import CustomLink from "../common/customLink";

const Home = () => {
  return (
    <div className="container">
      <CustomLink title="Popular Movies" href="/movies" />
      <CustomLink title="Popular Series" href="/series" />
    </div>
  );
};

export default Home;
