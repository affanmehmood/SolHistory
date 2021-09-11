import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home.jsx";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./Navbar";
import Footer from "./ReusableCompnents/footer.jsx";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column flex-sm-column">

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/download" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
