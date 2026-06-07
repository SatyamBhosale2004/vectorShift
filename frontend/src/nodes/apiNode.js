import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { useState } from "react";
import { labelStyle, inputStyle } from "../nodeStyles";

export const ApiNode = ({id,selected}) => {

    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");

    const handles = [
        {
            type: "source",
            position: Position.Right,
            id:`${id}-response`,
        },
        {
            type: "target",
            position: Position.Left,
            id:`${id}-request`
        }
    ];

    return (
      <BaseNode title="API" handles={handles} selected={selected}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <label style={labelStyle}>URL</label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              style={inputStyle}
            >
              <option>GET</option>
              <option>POST</option>
            </select>
          </div>
        </div>
      </BaseNode>
    );
};