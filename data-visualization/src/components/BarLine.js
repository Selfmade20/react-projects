import React from 'react'
import OrdinalFrame from "semiotic/lib/OrdinalFrame"

function BarLine() {
  const frameProps = { 
    /* --- Data --- */
      data: [{ absent: 5, present: 150, month: "Jan" },
        { absent: 7, present: 100, month: "Feb" },
        { absent: 2, present: 120, month: "Mar" },
      ],
    
    /* --- Size --- */
      size: [700,500],
      margin: { top: 60, bottom: 50, left: 60, right: 60 },
    
    /* --- Layout --- */
      type: {
        type: "point",
        customMark: d => {
          if (d.rIndex === 1) {
            return <circle r={6} fill={"#E0488B"} />;
          }
          return <rect height={d.scaledValue} width={20} x={-10} fill={"#ac58e5"} />;
        }
      },
      connectorType: function(e){return 0!==e.rIndex&&e.rIndex},
      oPadding: 10,
    
    /* --- Process --- */
      oAccessor: "month",
      rAccessor: ["present","absent"],
      rExtent: [0],
    
    /* --- Customize --- */
      style: { fill: "green", opacity: 1, stroke: "white" },
      connectorStyle: { stroke: "green", strokeWidth: 3 },
      title: 
      (
        <text>
          <tspan fill={"#E0488B"}>Absent</tspan> vs{" "}
          <tspan fill={"#ac58e5"}>Present</tspan>
        </text>
      )
      ,
      axes: 
      [
        {
          key: "present-axis",
          orient: "right",
          ticks: 3,
          tickValues: [0, 25, 50, 75, 100, 125, 150, 175, 200],
          label: (
            <text fontWeight="bold" fill={"#ac58e5"}>
              Present
            </text>
          )
        },
        {
          key: "absent-axis",
          orient: "left",
          tickValues: [0, 1, 2, 3, 4, 5, 6, 7],
          label: (
            <text fontWeight="bold" fill={"#E0488B"}>
              Absent
            </text>
          )
        }
      ]
      ,
      multiAxis: true,
    
    /* --- Draw --- */
      renderOrder: ["pieces","connectors"],
    
    /* --- Interact --- */
      pieceHoverAnnotation: [{ type: "highlight", style: { stroke: "white", fill: "none", strokeWidth: 4, strokeOpacity: 0.5 } },
        { type: "frame-hover" }],
    
    /* --- Annotate --- */
      tooltipContent: d => {
        const bothValues = [
          <div style={{ color: "#ac58e5", marginLeft: 20}} key={"1"}>
            Present: {d.present}
          </div>,
          <div style={{ color: "#E0488B", marginLeft: 20}} key="2">
            Absent: {d.absent}
          </div>
        ];
        const content = d.rIndex === 0 ? bothValues : bothValues.reverse();
        return (
          <div style={{ fontWeight: 900 }} className="tooltip-content">
            {content}
          </div>
        );
      }
      ,
      oLabel: true
    }

  return (
    <div>
      <OrdinalFrame {...frameProps} />
    </div>
  )
}

export default BarLine
