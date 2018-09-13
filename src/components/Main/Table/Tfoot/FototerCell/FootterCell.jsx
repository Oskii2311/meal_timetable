import React from "react";
import PropTypes from "prop-types";
import "./FootterCell.css";
import dumbbellTrue from "../../../../../img/images/dumbbell_true.png";
import dumbbellFalse from "../../../../../img/images/dumbbell_false.png";

const FootterCell = ({ props }) => {
  const { diet, gym } = props;
  const dumbbell = gym ? dumbbellTrue : dumbbellFalse;
  return (
    <td className="footter-cell">
      <div className="footter-cell__container">
        {diet ? <p>{diet}</p> : <img src={dumbbell} alt="dumbbell" />}
      </div>
    </td>
  );
};

FootterCell.defaultProps = {
  props: {},
  diet: "",
  gym: false
};

FootterCell.propTypes = {
  props: PropTypes.instanceOf(Object),
  diet: PropTypes.string,
  gym: PropTypes.bool
};

export default FootterCell;
