import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { useState } from "react";
import { labelStyle, inputStyle } from "../nodeStyles";

export const DelayNode = ({id,selected}) => {
    const [seconds, setSeconds] = useState(5);
    const handles = [
        {
            type: "target",
            postion: Position.Left,
            id:`${id}-input`,
        },
        {
            type:"source",
            position: Position.Right,
            id:`${id}-output`,
        },
    ];
    return (
      <BaseNode title="Delay" handles={handles} selected={selected}>
        <label style={labelStyle}>Seconds</label>

        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          style={inputStyle}
        />
      </BaseNode>
    );
};