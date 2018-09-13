import React from "react";

import ShopCard from "./ShopCard/ShopCard";
import appleLogo from "../../../img/images/apple.png";
import androidLogo from "../../../img/images/android.png";

import "./Footter.css";

const buttonsFirst = [
  {
    text: "Buy now"
  }
];
const buttonsSecond = [
  {
    text: "iOS",
    logo: appleLogo
  },
  {
    text: "Android",
    logo: androidLogo
  }
];
const buttonsThird = [
  {
    text: "Read FAQs"
  }
];

const Footter = () => (
  <div className="footter-container">
    <ShopCard
      key="ShopCard1"
      buttons={buttonsFirst}
      title="Running out of products?"
    />
    <ShopCard
      key="ShopCard2"
      buttons={buttonsSecond}
      title={[
        "Bod",
        <span key="bullet1" className="bullet">
          &#8226;
        </span>,
        "ē Trainer in your pocket"
      ]}
    />
    <ShopCard
      key="ShopCard3"
      buttons={buttonsThird}
      title="Frequently Asked Questions"
    />
  </div>
);
export default Footter;
