import "./App.css";
import Nav from "./components/Nav";
import { Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Shoes from "./components/Shoes";
import About from "./pages/About";
import dummyData from "./dummyData/shoesdata";

const App = () => {
  const [data, setData] = useState(dummyData);

  return (
    <div>
      <Nav />
      <Route exact path="/">
        <div className="moon">
          <div>
            <div>Just Do it!</div>

            <div> Nike AirMax</div>
          </div>
        </div>
        <Shoes data={data} />
      </Route>
      <Route path="/about/:id">
        <About data={data} />
      </Route>
      <Footer className="footer" />
    </div>
  );
};

export default App;
