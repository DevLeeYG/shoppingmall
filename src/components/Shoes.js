import { useContext } from "react";
import styled from "styled-components";
import { sparecontext } from "../App";
const Shoes = ({ data, idx }) => {
  let spare = useContext(sparecontext);

  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`}
        width="100px"
      />
      <h4>{data.title}</h4>
      <p>
        {data.content}&{data.price}
      </p>
    </div>
  );
};

export default Shoes;
