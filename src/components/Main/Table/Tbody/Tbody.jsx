import React from "react";

import TbodyRow from "./TbodyRow/TbodyRow";
import DATA from "../../../../shared/data/Data";
import "./Tbody.css";

const Tbody = () => {
  const TBODY_SHAPE = [[], [], [], [], []];

  const prepareData = shape => {
    shape.forEach((el, index) => {
      for (let i = 0; i <= 5; i += 1) {
        el.push(DATA[i].rows[index]);
      }
    });

    return shape;
  };
  const correctData = prepareData(TBODY_SHAPE);
  return (
    <tbody className="tbody-conatiner">
      {correctData
        ? correctData.map((data, i) => (
            <TbodyRow key={`TbodyRow${i}`} data={data} />
          ))
        : null}
    </tbody>
  );
};

export default Tbody;
