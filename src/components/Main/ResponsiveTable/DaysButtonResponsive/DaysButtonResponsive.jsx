import React from "react";
import PropTypes from "prop-types";

import "./DaysButtonResponsive.css";

const DaysButtonResponsive = ({ text, onPress }) => (
  <button
    onClick={onPress}
    type="button"
    className="days-button-responsive-button"
  >
    {text}
  </button>
);

DaysButtonResponsive.defaultProps = {
  text: "",
  onPress: {}
};

DaysButtonResponsive.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.instanceOf(Function)
};

export default DaysButtonResponsive;
