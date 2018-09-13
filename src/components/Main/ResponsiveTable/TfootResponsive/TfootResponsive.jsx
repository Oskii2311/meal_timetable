import React from "react";
import PropTypes from "prop-types";
import dumbbellTrue from "../../../../img/images/dumbbell_true.png";
import dumbbellFalse from "../../../../img/images/dumbbell_false.png";
import printer from "../../../../img/images/printer.png";
import "./TfootResponsive.css";

const TfootResponsive = ({ data }) => {
  const dumbbell = data.gym ? dumbbellTrue : dumbbellFalse;
  return (
    <tfoot className="tfoot-responsive-container">
      <tr className="tfoot-responsive-container__row">
        <th className="tfoot-responsive-container__row__th" />
        <td className="tfoot-responsive-container__row__cell">{data.diet}</td>
      </tr>
      <tr className="tfoot-responsive-container__row">
        <th className="tfoot-responsive-container__row__th">
          Workout
          <div className="tfoot-responsive-container__row__th__arrow-right" />
        </th>
        <td className="tfoot-responsive-container__row__cell">
          <img src={dumbbell} alt="dumbbell" />
        </td>
      </tr>
      <tr className="tfoot-responsive-container__row">
        <th colSpan="2" className="tfoot-responsive-container__row__th">
          <div className="tfoot-responsive-container__row__th__printer">
            Print
            <img src={printer} alt="printer" />
          </div>
        </th>
      </tr>
    </tfoot>
  );
};

TfootResponsive.defaultProps = {
  data: {}
};

TfootResponsive.propTypes = {
  data: PropTypes.instanceOf(Object)
};

export default TfootResponsive;
