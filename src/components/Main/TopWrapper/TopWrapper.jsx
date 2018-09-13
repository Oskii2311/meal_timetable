import React from "react";

import WeekPicker from "./WeekPicker/WeekPicker";
import MenuPicker from "./MenuOptions/MenuOptions";
import WeekTimeLine from "./WeekTimeLine/WeekTimeLine";

import "./TopWrapper.css";

const TopWrapper = () => (
  <div className="top-wrapper-container">
    <WeekTimeLine />
    <WeekPicker />
    <MenuPicker />
  </div>
);

export default TopWrapper;
