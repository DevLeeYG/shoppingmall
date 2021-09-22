import { useContext, useState } from "react";
import { Route, Link, useParams } from "react-router-dom";

import { sparecontext } from "../App";

const About = ({ data, spare, orderItem }) => {
  const { id } = useParams();
  let sp = useContext(sparecontext);

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
        <p>가격:{finder.price}</p>
        재고:{sp[id]}
        <button
          onClick={() => {
            orderItem(id);
          }}
          className="btn btn-danger"
        >
          주문하기
        </button>
        <Link to="/">
          <button className="btn btn-danger">뒤로가기</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
