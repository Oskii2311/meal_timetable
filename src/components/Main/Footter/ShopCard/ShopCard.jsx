import React from "react";
import PropTypes from "prop-types";
import CardButton from "../CardButton/CardButton";

import "./ShopCard.css";

const ShopCard = ({ buttons, title }) => (
  <div className="shop-card-container">
    <h2 className="shop-card-container__title">{title}</h2>
    <span className="shop-card-container__text">
      Timeam expetenda at ius. Cu vero perpetua accusamus sit. Vim ei porro
      oblique adipiscing, laudem molestie in est. An nisl recteque cum, soluta
      mollis usu eu.
    </span>
    <div className="shop-card-container__buttons">
      {buttons
        ? buttons.map(button => (
            <CardButton
              key={button.text}
              text={button.text}
              logo={button.logo}
            />
          ))
        : null}
    </div>
  </div>
);

ShopCard.defaultProps = {
  buttons: {},
  title: ""
};

ShopCard.propTypes = {
  buttons: PropTypes.instanceOf(Object),
  title: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string])
};

export default ShopCard;
