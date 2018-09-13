import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="nav-container">
    <button type="button" className="nav-container__hamburger" />
    <ul className="nav-container__list">
      <li className="nav-container__list__item">
        <a className="nav-container__list__item__link" href="dashboard">
          DASHBOARD
        </a>
      </li>
      <li className="nav-container__list__item">
        <a className="nav-container__list__item__link" href="recipes">
          RECIPES
        </a>
      </li>
      <li className="nav-container__list__item">
        <a className="nav-container__list__item__link" href="chalenge">
          CHALLENGE
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
