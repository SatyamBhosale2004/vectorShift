// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { labelStyle, inputStyle } from "../nodeStyles";
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const variables = currText.match(/{{(.*?)}}/g) || [];
  const parsedVariables = variables.map((variables) => 
    variables
  .replace("{{","")
  .replace("}}","")
);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    {
      type:"source",
      position: Position.Right,
      id:`${id}-output`
    },
    ...parsedVariables.map(
      (variable,index) => ({
        type: "target",
        position: Position.Left,
        id:`${id}-${variable}`,

        style: {
          top:
            60 + index * 30,
        },
      })
    ),
  ];

  return (
      <BaseNode title="Text" handles={handles} minHeight={160 + parsedVariables.length * 30}> 
      <div>
        <label style={{
          ...labelStyle,
          display: "block",
          marginBottom: "8px",
          }}>Text</label>

        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={
            Math.max(
              4,
              currText.split("\n").length
            )
          }
          style={{
            ...inputStyle,
            resize: "none",
            marginTop: "8px",
          }}
        />
      </div>
      {parsedVariables.map(
        (variable, index) => (
          <div 
            key = {variable}
            style = {{
              position: "absolute",
              left: "-90px",
              top: 58 + index * 34,

              fontSize: "12px",
              color: "#1c1c1c",
              fontWeight: "600",
              width:"50px",
              textAlign: "right",
            }}
          >
            {variable}
          </div>
        )
      )}
    </BaseNode>
  );
};