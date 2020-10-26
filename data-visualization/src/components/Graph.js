import React from "react";
import OrdinalFrame from "semiotic/lib/OrdinalFrame";

function Graph() {
  const frameProps = {
    /* --- Data --- */
    data: [
      { user: "Jason", attendence: 40 },
      { user: "Njabulo", attendence: 10 },
      { user: "Tebogo", attendence: 10 },
      { user: "Collen", attendence: 20 },
    ],

    /* --- Size --- */
    size: [400, 400],

    /* --- Layout --- */
    type: "bar",

    /* --- Process --- */
    oAccessor: "user",
    rAccessor: "attendence",

    /* --- Customize --- */
    style: { fill: "blue", stroke: "white",  fontFamily: 'Verdana' },
    title: "TCG ATTENDENCE",

    /* --- Annotate --- */
    oLabel: true,
  };

  return (
    <div>
      <OrdinalFrame {...frameProps} />
    </div>
  );
}

export default Graph;
