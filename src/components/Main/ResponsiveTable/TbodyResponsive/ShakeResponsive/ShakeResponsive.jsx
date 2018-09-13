import React from "react";
import PropTypes from "prop-types";
import shake from "../../../../../img/images/shake_opacity.png";
import yes from "../../../../../img/images/YES.png";
import "./ShakeResponsive.css";

const ShakeResponsive = ({ checked }) => (
  <td className="shake-responsive-cell">
    <div className="shake-responsive-cell__text">
      Bod
      <span key="bullet8" className="bullet">
        &#8226;
      </span>
      ē Shake
    </div>
    <img className="shake-responsive-cell__shake" src={shake} alt="shake" />
    {checked ? (
      <div className="shake-responsive-cell__img">
        <img src={yes} alt="yes" />
      </div>
    ) : null}
  </td>
);

ShakeResponsive.defaultProps = {
  checked: false
};

ShakeResponsive.propTypes = {
  checked: PropTypes.bool
};
export default ShakeResponsive;
