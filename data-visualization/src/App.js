import React from "react";
import "./App.css";
import OrdinalFrame from "semiotic/lib/OrdinalFrame";
import Graph from "./components/Graph";
import Candlestick from "./components/BarLine";
import BarLine from "./components/BarLine";
import Stats from "./components/Stats";

function App() {
  const frameProps = {
    /* --- Data --- */
    data: [
      { user: "Jason", attendence: 40 },
      { user: "Njabulo", attendence: 10 },
      { user: "Tebogo", attendence: 10 },
      { user: "Collen", attendence: 20 },
    ],

    /* --- Size --- */
    size: [500, 500],
    margin: 70,

    /* --- Layout --- */
    type: { type: "bar", innerRadius: 50 },
    projection: "radial",
    dynamicColumnWidth: "attendence",

    /* --- Process --- */
    oAccessor: "user",

    /* --- Customize --- */
    style: { fill: "orange", stroke: "white" },
    title: "TCG ATTENDENCE",

    /* --- Annotate --- */
    oLabel: true,
  };

  return (
    <div className="app">
      <div className="app-header">
        <h2>ATTENDENCE</h2>
      </div>
      <div className="container">
        <OrdinalFrame {...frameProps} />
        <div className="bar__graph">
          <Graph />
        </div>
      </div>
      <div className="container">
        <BarLine />
        {/* <Stats /> */}
      </div>
    </div>
  );
}

export default App;
