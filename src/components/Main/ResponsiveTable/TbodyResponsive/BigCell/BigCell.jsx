import React from "react";

import smile from "../../../../../img/images/smile.png";
import freeDay from "../../../../../img/images/free_day_text.png";

import "./BigCell.css";

const BigCell = () => (
  <td className="big-cell" rowSpan="5">
    <div className="big-cell__text">
      <img src={freeDay} alt="free day" />
    </div>
    <div className="big-cell__smile">
      <img src={smile} alt="smile" />
    </div>
  </td>
);

export default BigCell;
