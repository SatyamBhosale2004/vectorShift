// llmNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
export const LLMNode = ({ id, selected }) => {

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style:{top: "33%"},
    },
    {
      type:"target",
      position: Position.Left,
      id:`${id}-prompt`,
      style:{top: "66%"},
    },
    {
      type: "source",
      position: Position.Right,
      id:`${id}-response`,
    },
  ];

  return (
    <BaseNode title="LLM" handles={handles} selected={selected}>
      <div
        style={{
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        Large Language Model
      </div>
    </BaseNode>
  );
};
