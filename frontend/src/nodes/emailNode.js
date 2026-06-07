import { Position } from "reactflow";
import { useState } from "react";
import { BaseNode } from "./baseNode";
import { labelStyle, inputStyle } from "../nodeStyles";
export const EmailNode = ({id,selected}) => {
    const [recipient, setRecipient] = useState("");
    const handles = [
        {
            type: "target",
            position: Position.Left,
            id:`${id}-content`,
        },
        {
            type: "source",
            position: Position.Right,
            id:`${id}-sent`,
        },
    ];
    return (
      <BaseNode title="Email" handles={handles} selected={selected}>
        <label style={labelStyle}>
          To:
          <input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={inputStyle}
          />
        </label>
      </BaseNode>
    );
};