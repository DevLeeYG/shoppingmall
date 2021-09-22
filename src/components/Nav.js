import React from "react";
import styled from "styled-components";

const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 40px;
  color: white;
  .logo {
    font-size: 50px;
  }
  .navbar__menu {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .navbar__munu__item {
    padding: 22px 44px;
    font-size: 25px;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid transparent;
    border-color: white;

    margin-right: 100px;
    &:hover {
      background-color: wheat;
      transition: 300ms;
    }
  }
`;

const Nav = () => {
  return (
    <Navi id="navbar">
      <h1 className="logo">Nike</h1>
      <div className="navbar__menu">
        <div className="navbar__munu__item active">Home</div>
        <div className="navbar__munu__item">About</div>
      </div>
    </Navi>
  );
};

export default Nav;
