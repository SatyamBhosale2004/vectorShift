import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { useState } from "react";
import { labelStyle, inputStyle } from "../nodeStyles";


export const DatabaseNode = ({id,selected}) => {
    const [table,setTable] = useState("");  

    const handles = [
        {
            type: "target",
            position: Position.Left,
            id:`${id}-query`
        },
        {
            type: "source",
            position: Position.Right,
            id:`${id}-result`,
        },
    ];

    return (
      <BaseNode title="Database" handles={handles} selected={selected}>
        <label style={labelStyle}>Table</label>

        <input
          value={table}
          onChange={(e) => setTable(e.target.value)}
          style={inputStyle}
        />
      </BaseNode>
    );
};