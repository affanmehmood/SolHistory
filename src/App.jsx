import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home.jsx";
import Rarity from "./Rarity";
import NavBar from "./Navbar";
import Footer from "./ReusableCompnents/footer.jsx";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column flex-sm-column pb-5 bg-g">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rarity" component={Rarity} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
