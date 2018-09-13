import React from "react";
import PropTypes from "prop-types";
import "./TheadResponsive.css";

const TheadResponsive = ({ day }) => (
  <thead className="thead-responsive-container">
    <tr className="thead-responsive-container__row">
      <th className="thead-responsive-container__row__cell" />
      <th className="thead-responsive-container__row__cell">
        {day}
        &nbsp; Day
      </th>
    </tr>
  </thead>
);

TheadResponsive.defaultProps = {
  day: 0
};

TheadResponsive.propTypes = {
  day: PropTypes.number
};

export default TheadResponsive;
