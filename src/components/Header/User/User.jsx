import React from "react";
import "./User.css";
import arrow from "../../../img/images/arrow_down_menu_top.png";

const User = () => (
  <div className="user-container">
    <div className="user-container__avatar" />
    <div className="user-container__user-name">Olivia Wilde</div>
    <button className="user-container__arrow" type="button">
      <img src={arrow} alt="arrow" />
    </button>
  </div>
);

export default User;
