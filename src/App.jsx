import React from "react";
import Home from "./pages/Home";
import Basket from "./components/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Basket />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
