import React from 'react'
import XYFrame from "semiotic/lib/XYFrame"
import { scaleTime } from "d3-scale"
import DividedLine from "semiotic/lib/DividedLine"
import { AnnotationXYThreshold } from "react-annotation"

function Stats() {
    const frameProps = { 
        /* --- Data --- */
          lines: [{ label: "Apple Stock", coordinates: [{ date: "1/2/2003", close: 14.8 },
                { date: "12/31/2002", close: 14.32 },] }],
        
        /* --- Size --- */
          size: [700,300],
          margin: { top: 50, left: 40, right: 20, bottom: 40 },
        
        /* --- Process --- */
          xScaleType: scaleTime(),
          xAccessor: function(e){return new Date(e.date)},
          yAccessor: "close",
          yExtent: [0],
        
        /* --- Customize --- */
          axes: [{ orient: "left", tickFormat: function(e){return"$"+e} },
            { orient: "bottom", ticks: 6, tickFormat: function(e){return e.getFullYear()} }],
        
        /* --- Draw --- */
          customLineMark: ({ d, i, xScale, yScale }) => {
            return (
              <DividedLine
                key={`threshold-${i}`}
                data={[d]}
                parameters={p => {
                  if (p.close > 100) {
                    return { stroke: "#ac58e5", fill: "none" }
                  }
                  return { stroke: "#9fd0cb", fill: "none" }
                }}
                customAccessors={{ x: d => xScale(d.x), y: d => yScale(d.y) }}
                lineDataAccessor={d => d.data}
              />
            )
          },
        
        /* --- Interact --- */
          hoverAnnotation: true,
        
        /* --- Annotate --- */
          annotations: [
            {
              className: "dot-com-bubble",
              type: "bounds",
              bounds: [{ date: new Date("1/2/1997") }, { date: new Date("1/2/2001") }],
              label: "The dot-com bubble",
              dx: 250,
              color: "#533f82"
            },
            {
              type: "x",
              date: "7/9/1997",
              note: {
                label: "Steve Jobs Returns",
                align: "middle",
                lineType: null,
                wrap: 100
              },
              color: "#3f4482",
              dy: -10,
              dx: 0,
              connector: { end: "none" }
            },
            {
              type: "x",
              date: "8/15/1998",
              note: { label: "iMac Release", align: "middle", lineType: null, wrap: 50 },
              color: "#3f4482",
              dy: -10,
              dx: 0,
              connector: { end: "none" }
            },
            {
              type: "x",
              date: "10/23/2001",
              note: { label: "iPod Release", align: "middle", lineType: null, wrap: 50 },
              color: "#3f4482",
              dy: -10,
              dx: 0,
              connector: { end: "none" }
            },
            {
              type: AnnotationXYThreshold,
              note: {
                label: "Above $100",
                lineType: null,
                orientation: "topBottom",
                align: "middle"
              },
              color: "#ac58e5",
              date: "7/1/1999",
              close: 100,
              subject: {
                x1: 250,
                x2: 400
              },
              dx: 0,
              dy: -20
            },
            {
              type: "enclose",
              note: {
                label: "Stock Split 2:1",
                orientation: "leftRight",
                align: "middle",
                lineType: null,
                wrap: 50
              },
              dy: 0,
              dx: 80,
              color: "#E0488B",
              connector: { end: "none" },
              coordinates: [
                {
                  date: "6/21/2000",
                  close: 55.62
                },
                {
                  date: "6/20/2000",
                  close: 101.25
                }
              ]
            }
          ],
          tooltipContent: d => (
            <div className="tooltip-content">
              <p>Date: {d.date}</p>
              <p>Closing Price: ${d.close}</p>
            </div>
          )
        }
    return (
        <div>
            <XYFrame {...frameProps} />
        </div>
    )
}

export default Stats
