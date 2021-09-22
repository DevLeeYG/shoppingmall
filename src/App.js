import "./App.css";
import Nav from "./components/Nav";
import { Router, Route, Link, Switch } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="moon">
        <div>
          <div>Just Do it!</div>

          <div> Nike AirMax</div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default App;
