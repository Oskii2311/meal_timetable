import React from "react";
import Nav from "./Nav/Nav";
import User from "./User/User";
import LeftSpace from "./LeftSpace/LeftSpace";
import RightSpace from "./RightSpace/RightSpace";
import "./Header.css";

const Header = () => (
  <header className="header-container">
    <LeftSpace />
    <Nav />
    <User />
    <RightSpace />
  </header>
);

export default Header;
