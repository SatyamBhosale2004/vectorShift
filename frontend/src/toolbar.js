// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
      <div
        style={{
          background: "#E5E5E5",
          borderRadius: "16px",
          padding: "16px",
          marginBottom: "16px",
          boxShadow: "0 8px 24px rgba(15,23,42,.06)",
        }}
      >
        <h3
          style={{
            margin: "0 0 12px 0",
            color: "#1C1C1C",
            fontSize: "16px",
          }}
        >
          Workflow Components
        </h3>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <DraggableNode type="customInput" label="Input" />
          <DraggableNode type="llm" label="LLM" />
          <DraggableNode type="customOutput" label="Output" />
          <DraggableNode type="text" label="Text" />
          <DraggableNode type="api" label="Api" />
          <DraggableNode type="condition" label="Condition" />
          <DraggableNode type="database" label="Database" />
          <DraggableNode type="email" label="Email" />
          <DraggableNode type="delay" label="Delay" />
        </div>
      </div>
    );
};
