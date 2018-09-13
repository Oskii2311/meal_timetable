import React from "react";
import printer from "../../../../../img/images/printer.png";

import "./Printer.css";

const Printer = () => (
  <td rowSpan="2" className="pritner-cell">
    <div className="printer-cell__container">
      <div className="printer-cell__container__printer">
        <img src={printer} alt="printer" />
      </div>
      <div>Print</div>
    </div>
  </td>
);

export default Printer;
