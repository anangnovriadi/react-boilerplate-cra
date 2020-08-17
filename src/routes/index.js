import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";

class routes extends Component {
  render() {
    console.log(process.env.REACT_APP_NAME);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    );
  }
}

export default routes;
