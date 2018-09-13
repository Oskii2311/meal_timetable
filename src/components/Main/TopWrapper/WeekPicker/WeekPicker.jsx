import React, { Component } from "react";

import eventEmmiter from "../../../../shared/services/EmiterService";
import WeekPickerButton from "./WeekPickerButton/WeekPickerButton";

import "./WeekPicker.css";
import arrowLeft from "../../../../img/images/left_arrow_button.png";
import arrowRight from "../../../../img/images/right_arrow_button.png";

class WeekPicker extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getInitialState() {
    this.setState({
      week: 1
    });
  }

  componentDidMount() {
    this.getInitialState();

    eventEmmiter.on("change-week-slider", this.handleWeekChangeFromSlider);
  }

  handleWeekChangeFromSlider = value => {
    this.setState({ week: value });
  };

  previous = () => {
    const { week } = this.state;
    if (week === 1) {
      return false;
    }
    this.setState({ week: week - 1 });
    eventEmmiter.emit("change-week-header", week - 1);
    return true;
  };

  next = () => {
    const { week } = this.state;
    if (week === 12) {
      return false;
    }
    this.setState({ week: week + 1 });
    eventEmmiter.emit("change-week-header", week + 1);
    return true;
  };

  render() {
    const { week } = this.state;
    return (
      <div className="week-picker-container">
        <WeekPickerButton
          key="WeekPickerButton_Previous"
          onPress={this.previous}
          src={arrowLeft}
        />
        <div>
          Week
          <span>
            &nbsp;
            {week}
          </span>
        </div>
        <WeekPickerButton
          key="WeekPickerButton_Next"
          onPress={this.next}
          src={arrowRight}
        />
      </div>
    );
  }
}

export default WeekPicker;
