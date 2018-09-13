import React from "react";
import PropTypes from "prop-types";
import ShakeResponsive from "./ShakeResponsive/ShakeResponsive";
import TextResponsive from "./TextResponsive/TextResponsive";
import BigCell from "./BigCell/BigCell";
import "./TbodyResponsive.css";

const TbodyResponsive = ({ data }) => (
  <tbody className="tbody-responsive-conatiner">
    {data.rows.map((row, index) => {
      if (data.day === 70) {
        return (
          <tr
            key={`TbodyResponsive${row.id}`}
            className="tbody-responsive-conatiner__row"
          >
            <th className="tbody-responsive-conatiner__row__th-left">
              {row.th}
            </th>
            {index === 0 ? <BigCell /> : null}
          </tr>
        );
      }
      return (
        <tr
          key={`TbodyResponsive${row.id}`}
          className="tbody-responsive-conatiner__row"
        >
          <th className="tbody-responsive-conatiner__row__th-left">{row.th}</th>
          {row.shake ? (
            <ShakeResponsive
              key={`TbodyResponsiveShake${row.id}`}
              checked={row.yes}
            />
          ) : (
            <TextResponsive
              key={`TbodyResponsiveText${row.id}`}
              text={row.text}
              checked={row.yes}
            />
          )}
        </tr>
      );
    })}
  </tbody>
);

TbodyResponsive.defaultProps = {
  data: {}
};

TbodyResponsive.propTypes = {
  data: PropTypes.instanceOf(Object)
};
export default TbodyResponsive;
