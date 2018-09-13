import React from "react";
import PropTypes from "prop-types";

import "./WeekPickerButton.css";

const WeekPickerButton = ({ src, onPress }) => (
  <button className="week-picker-button" type="button" onClick={onPress}>
    <img className="week-picker-button__img" src={src} alt="arrow" />
  </button>
);

WeekPickerButton.defaultProps = {
  src: "",
  onPress: {}
};

WeekPickerButton.propTypes = {
  src: PropTypes.string,
  onPress: PropTypes.instanceOf(Function)
};

export default WeekPickerButton;
