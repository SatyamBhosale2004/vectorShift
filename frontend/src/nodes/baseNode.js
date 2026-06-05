import {Handle} from "reactflow";

export const BaseNode = ({
    title,
    handles,
    children
}) => {

    return (
      <div
        style={{
          width: 260,
          minHeight: 120,
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          padding: 10,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflow: "visible",
        }}
      >
        {handles?.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
          />
        ))}
          <div
            style={{
              color: "#282C2D",

              fontSize: "16px",

              fontWeight: "700",

              paddingBottom: "10px",

              borderBottom: "1px solid #E5E5E5",

              marginBottom: "12px",
            }}
          >
            {title}
          </div>
        <div>{children}</div>
      </div>
    );
};

