import React, { Component } from "react";
import Table from "./Table/Table";
import ResponsiveTable from "./ResponsiveTable/ResponsiveTable";
import TopWrapper from "./TopWrapper/TopWrapper";
import Footter from "./Footter/Footter";
import "./Main.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    });
    window.addEventListener("resize", () => {
      this.setState({
        windowWidth: window.innerWidth
      });
    });
  }

  render() {
    const { windowWidth } = this.state;
    return (
      <div className="main-container">
        <TopWrapper />
        {windowWidth <= 1080 ? <ResponsiveTable /> : <Table />}
        <Footter />
      </div>
    );
  }
}

export default Main;
