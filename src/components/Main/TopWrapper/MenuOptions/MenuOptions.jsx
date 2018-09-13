import React from "react";

import "./MenuOptions.css";

import broccoli from "../../../../img/images/broccoli.png";
import cheese from "../../../../img/images/cheese.png";
import meat from "../../../../img/images/meat.png";
import fishFalse from "../../../../img/images/fish_false.png";
import chickenFalse from "../../../../img/images/chicken_false.png";

const MENU_ITEMS = [
  { item: broccoli, alt: "broccoli" },
  { item: cheese, alt: "cheese" },
  { item: meat, alt: "meat" },
  { item: fishFalse, alt: "fish" },
  { item: chickenFalse, alt: "chicken" }
];

const MenuOptions = () => (
  <div className="menu-options-container">
    SELECT YOUR PROTEIN OPTIONS
    <div className="menu-options-container__options">
      {MENU_ITEMS.map(item => (
        <img
          key={item.alt}
          className="menu-options-container__options__img"
          src={item.item}
          alt={item.alt}
        />
      ))}
    </div>
  </div>
);

export default MenuOptions;
