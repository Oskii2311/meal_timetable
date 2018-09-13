import React from "react";
import PropTypes from "prop-types";
import Shake from "./Shake/Shake";
import Text from "./Text/Text";
import BigCell from "./BigCell/BigCell";
import TbodyRowTh from "./TbodyRowTh/TbodyRowTh";

import "./TbodyRow.css";

const TbodyRow = ({ data }) => {
  const prepareHours = dataWithPeriod => {
    const hours = dataWithPeriod.split(" ");
    return {
      hour: hours[0],
      period: hours[1]
    };
  };
  const { hour, period } = prepareHours(data[0].th);
  return (
    <tr className="tbody-row-container">
      <TbodyRowTh hour={hour} period={period} />
      {data.map(
        (cell, index) =>
          cell.shake ? (
            <Shake
              key={`Shake${index}`}
              checked={cell.yes}
              choosen={cell.choosen}
            />
          ) : (
            <Text key={`Text${index}`} text={cell.text} checked={cell.yes} />
          )
      )}
      {data[0].id === 1 ? <BigCell /> : null}
    </tr>
  );
};

TbodyRow.defaultProps = {
  data: {}
};

TbodyRow.propTypes = {
  data: PropTypes.instanceOf(Object)
};

export default TbodyRow;
