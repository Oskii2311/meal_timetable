import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

import yes from "../../../../../../img/images/YES.png";

const Text = ({ text, checked }) => (
  <td className="text-cell">
    <div className="text-container">
      <div className="text-container__text">{text}</div>
      {checked ? (
        <div className="text-container__img-container">
          <img
            className="text-container__img-container__img"
            src={yes}
            alt="yes"
          />
        </div>
      ) : null}
    </div>
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
