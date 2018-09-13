import React from "react";
import PropTypes from "prop-types";

import "./CardButton.css";
import arrowRight from "../../../../img/images/button_arrow.png";

const CardButton = ({ text, logo }) => (
  <button type="button" className="card-button">
    {logo ? <img src={logo} alt="logo" /> : null}
    {text}
    <img className="card-button__arrow" src={arrowRight} alt="arrow" />
  </button>
);

CardButton.defaultProps = {
  text: "",
  logo: ""
};

CardButton.propTypes = {
  text: PropTypes.string,
  logo: PropTypes.string
};

export default CardButton;
