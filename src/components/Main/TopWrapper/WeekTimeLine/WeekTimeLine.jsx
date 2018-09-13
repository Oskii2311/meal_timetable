import React, { Component } from "react";
import eventEmmiter from "../../../../shared/services/EmiterService";

import "./WeekTimeLine.css";

class WeekTimeLine extends Component {
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
    eventEmmiter.on("change-week-header", this.handleWeekChangeFromHeader);
  }

  getclass(currentWeek, week) {
    const defaultClass = "week-time-line-container__wrapper-top__option";
    if (currentWeek === week) {
      return `${defaultClass} active`;
    }
    if (currentWeek < week) {
      return `${defaultClass} future`;
    }
    return defaultClass;
  }

  weekClick = event => {
    const value = parseInt(event.target.attributes.value.nodeValue, 10);

    this.setState({ week: value });

    eventEmmiter.emit("change-week-slider", value);
  };

  handleWeekChangeFromHeader = value => {
    this.setState({ week: value });
  };
   x = () => {
    const x =() => {
      console.log(this);
    }
  }
  y =() => {
    console.log(this)
  }


  render() {
    const x = new this.x;
console.log(x.x)
    this.y();
    return (
      <div className="week-time-line-container">
        <span className="week-time-line-container__text">
          YOUR 12 WEEK PROGRESS
        </span>

        <div className="week-time-line-container__wrapper-top">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => {
            const { week } = this.state;
            const className = this.getclass(week, index);
            return (
              <div
                key={`${index}bullet`}
                onClick={this.weekClick}
                className={className}
                role="presentation"
                value={index}
              />
            );
          })}
        </div>
        <div className="week-time-line-container__wrapper-bottom">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(week => (
            <div
              key={`${week}number`}
              className="week-time-line-container__wrapper-bottom__number"
            >
              {week}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WeekTimeLine;
