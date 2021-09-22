import React from "react";
import { Route, Link, useParams } from "react-router-dom";

const About = ({ data }) => {
  const { id } = useParams();
  let finder = data.find(function (el) {
    return el.id == id;
  });
  return (
    <div className="container">
      <div className="row">
        <img
          src={`https://codingapple1.github.io/shop/shoes${finder.id + 1}.jpg`}
          width="100%"
          alt=""
        />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{finder.title}</h4>
        <p>{finder.content}</p>
        <p>{finder.price}</p>
        <button className="btn btn-danger">주문하기</button>
        <Link to="/">
          <button className="btn btn-danger">뒤로가기</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
