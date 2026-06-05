// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';


export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };
  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-value`,
    },
  ];
  return (
    <BaseNode title="Input" handles={handles}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>
          <label
            style={{
              fontSize: "12px",
              color: "#64748B",
              display: "block",
              marginBottom: "4px",
              fontWeight: "500",
            }}
          >
            Name
          </label>

          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              outline: "none",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontSize: "12px",
              color: "#64748B",
              display: "block",
              marginBottom: "4px",
              fontWeight: "500",
            }}
          >
            Type
          </label>

          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              background: "#FFFFFF",
              fontSize: "14px",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};