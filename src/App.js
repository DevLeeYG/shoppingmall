import "./App.css";
import Nav from "./components/Nav";
import { Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Shoes from "./components/Shoes";
import About from "./pages/About";
import dummyData from "./dummyData/shoesdata";
import styled from "styled-components";
import axios from "axios";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [data, setData] = useState(dummyData);
  const [close, setClose] = useState(true);
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(false);

  const response = () => {
    axios
      .get(`https://codingapple1.github.io/shop/data${count}.json`)
      .then((result) => {
        setLoading(!loading);
        setData([...data, ...result.data]);
        setCount(count + 1);
        setLoading(loading);
      })
      .catch((err) => {
        if (err) {
          setClose(!close);
          setLoading(!loading);
          setTimeout(() => {
            setLoading(loading);
          }, 1000);
        }
      });
  };

  return (
    <div>
      <Nav />
      {loading ? <div className="loading">loading...</div> : null}
      <Route exact path="/">
        <div className="moon">
          <div>
            <div>Just Do it!</div>

            <div> Nike AirMax</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {data.map((el, idx) => {
              return <Shoes data={data[idx]} />;
            })}
          </div>
        </div>
      </Route>

      {close ? (
        <Button>
          <button
            onClick={() => {
              response();
            }}
            className="btn btn-danger"
          >
            더보기
          </button>
        </Button>
      ) : null}

      <Route path="/about/:id">
        <About data={data} />
      </Route>

      <Footer className="footer" />
    </div>
  );
};

export default App;
