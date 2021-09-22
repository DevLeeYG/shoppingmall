import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  background-color: black;
  color: white;
  position: absolute;

left: 0;

bottom: 0;

width: 100%;

padding: 15px 0;

text-align: center

}
`;

const Footer = () => {
  return <Foot>Copyright © All rights reserved </Foot>;
};

export default Footer;
