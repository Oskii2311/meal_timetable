import React, { Component } from "react";

import TbodyResponsive from "./TbodyResponsive/TbodyResponsive";
import TheadResponsive from "./TheadResponsive/TheadResponsive";
import TfootResponsive from "./TfootResponsive/TfootResponsive";
import DaysButtonResponsive from "./DaysButtonResponsive/DaysButtonResponsive";
import DATA from "../../../shared/data/Data";

import "./ResponsiveTable.css";

class ResponsiveTable extends Component {
  constructor() {
    super();
    this.state = {
      day: 64,
      data: 0
    };
  }

  next = () => {
    const { day, data } = this.state;
    if (day === 70) {
      return false;
    }
    this.setState({ day: day + 1, data: data + 1 });
    return true;
  };

  previous = () => {
    const { day, data } = this.state;
    if (day === 64) {
      return false;
    }
    this.setState({ day: day - 1, data: data - 1 });
    return true;
  };

  current = () => {
    this.setState({ day: 65, data: 1 });
    return true;
  };

  render() {
    const { day, data } = this.state;
    return (
      <div className="wrapper">
        <table className="responsive-table-container">
          <TheadResponsive day={day} />
          <TbodyResponsive data={DATA[data]} />
          <TfootResponsive data={DATA[data].tfoot} />
        </table>
        <div className="buttons-wrapper">
          <DaysButtonResponsive text="Previous" onPress={this.previous} />
          <DaysButtonResponsive text="Current" onPress={this.current} />
          <DaysButtonResponsive text="Next" onPress={this.next} />
        </div>
      </div>
    );
  }
}

export default ResponsiveTable;
