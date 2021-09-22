import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  background-color: black;
  color: white;

  left: 0;

  bottom: 0;

  width: 100%;

  padding: 15px 0;

  text-align: center;
`;

const Footer = () => {
  return <Foot>Copyright © All rights reserved </Foot>;
};

export default Footer;
