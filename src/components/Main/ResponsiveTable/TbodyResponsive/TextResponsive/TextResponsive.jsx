import React from "react";

import PropTypes from "prop-types";
import "./TextResponsive.css";

import yes from "../../../../../img/images/YES.png";

const Text = ({ text, checked }) => (
  <td className="text-responsive-cell">
    <div className="text-responsive-cell__text">{text}</div>
    {checked ? (
      <div className="text-responsive-cell__img">
        <img src={yes} alt="yes" />
      </div>
    ) : null}
  </td>
);

Text.defaultProps = {
  checked: false,
  text: []
};

Text.propTypes = {
  checked: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string])
};

export default Text;
