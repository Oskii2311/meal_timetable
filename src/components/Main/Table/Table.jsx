import React from "react";
import Thead from "./Thead/Thead";
import Tbody from "./Tbody/Tbody";
import Tfoot from "./Tfoot/Tfoot";
import "./Table.css";

const Table = () => (
  <div>
    <table cellSpacing="0">
      <Thead />
      <Tbody />
      <Tfoot />
    </table>
  </div>
);

export default Table;
