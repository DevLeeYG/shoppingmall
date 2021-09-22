import { useState } from "react";
import styled from "styled-components";
import dummyData from "../dummyData/shoesdata";

const Div = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Shoes = ({ data }) => {
  return (
    <Div>
      {data.map((el, idx) => (
        <div>
          <img
            width="200px"
            alt=""
            src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`}
          />
          {el.title}
          {el.content}
        </div>
      ))}
    </Div>
  );
};

export default Shoes;
