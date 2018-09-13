import React from "react";
import PropTypes from "prop-types";

import shake from "../../../../../../img/images/shake_opacity.png";
import shakeChoosen from "../../../../../../img/images/shake_choosen.png";

import yes from "../../../../../../img/images/YES.png";
import "./Shake.css";

const Shake = ({ checked, choosen }) => (
  <td className="shake-cell">
    <div className="shake-container">
      <div className="shake-container__top">
        <div className="shake-container__top__text">
          Bod
          <span key="bullet9" className="bullet">
            &#8226;
          </span>
          ē Shake
        </div>
        {checked ? (
          <div className="shake-container__top__img">
            <img src={yes} alt="yes" />
          </div>
        ) : null}
      </div>
      <div className="shake-container__bottom">
        {choosen ? (
          <img src={shakeChoosen} alt="shake" />
        ) : (
          <img src={shake} alt="shake" />
        )}
      </div>
    </div>
  </td>
);

Shake.defaultProps = {
  checked: false,
  choosen: false
};

Shake.propTypes = {
  checked: PropTypes.bool,
  choosen: PropTypes.bool
};

export default Shake;
