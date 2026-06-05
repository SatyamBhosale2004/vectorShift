// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { labelStyle, inputStyle } from "../nodeStyles";
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    {
      type:"source",
      position: Position.Right,
      id:`${id}-output`
    },
  ];

  return (
  //   <BaseNode 
  //     title="Text"
  //     handles ={handles}
  //   >
  //     <label>
  //       Text: <input value={currText} onChange = {(e) => setCurrText(e.target.value)}/>
  //     </label>
  //   </BaseNode>
  // );

      <BaseNode title="Text" handles={handles}>
      <div>
        <label style={labelStyle}>Text</label>

        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={4}
          style={{
            ...inputStyle,
            resize: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};