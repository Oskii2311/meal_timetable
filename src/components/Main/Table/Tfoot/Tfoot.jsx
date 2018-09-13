import React from "react";
import FootterCell from "./FototerCell/FootterCell";
import Printer from "./Printer/Printer";
import Workout from "./Workout/Workout";
import DATA from "../../../../shared/data/Data";

import "./Tfoot.css";

const Tfoot = () => {
  const prepareData = () => {
    const preparedData = [];
    for (let i = 0; i <= 5; i += 1) {
      preparedData[i] = DATA[i].tfoot;
    }

    return preparedData;
  };
  const correctData = prepareData();

  return (
    <tfoot className="tfoot-container">
      <tr className="tfoot-container__row">
        <th className="th-left" />
        {correctData.map((cell, index) => (
          <FootterCell key={`FooterCell${index}`} props={{ diet: cell.diet }} />
        ))}
        <Printer />
      </tr>
      <tr className="tfoot-container__row">
        <Workout />
        {correctData.map((cell, index) => (
          <FootterCell key={`FooterCell${index}`} props={{ gym: cell.gym }} />
        ))}
      </tr>
    </tfoot>
  );
};

export default Tfoot;
