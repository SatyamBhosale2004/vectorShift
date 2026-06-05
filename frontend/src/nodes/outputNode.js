// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { labelStyle, inputStyle } from "../nodeStyles";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {
      type:"target",
      position: Position.Left,
      id:`${id}-value`,
    },
  ];
  return (
  //   <BaseNode 
  //     title="output"
  //     handles ={handles}
  //   >
  //     <label>
  //       Name: <input value ={currName} onChange = {(e) => setCurrName(e.target.value)}/>
  //     </label>
  //     <br />
  //     <label>
  //       Type:
  //       <select value ={outputType} onChange = {(e) => setOutputType(e.target.value)}>
  //         <option value="Text">Text</option>
  //         <option value="Image">Image</option>
  //       </select>
  //     </label>
  //   </BaseNode>
  // );

      <BaseNode title="Output" handles={handles}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label style={labelStyle}>Name</label>

          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Type</label>

          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={inputStyle}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};