import React, { useReducer } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Series from "./components/series";
import Movies from "./components/movies";
import Home from "./components/Home";

import Context from "./context";
import reducer, { intialState } from "./reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <div className="header"></div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
        </div>
      </Context.Provider>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
