import React from "react";
import PropTypes from "prop-types";
import "./TbodyRowTh.css";

const TbodyRowTh = ({ hour, period }) => (
  <th className="tbody-row-th-container">
    {hour}
    <span className="tbody-row-th-container__period">
      &nbsp;
      {period}
    </span>
  </th>
);

TbodyRowTh.defaultProps = {
  hour: "",
  period: ""
};

TbodyRowTh.propTypes = {
  hour: PropTypes.string,
  period: PropTypes.string
};

export default TbodyRowTh;
