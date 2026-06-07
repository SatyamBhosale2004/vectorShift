import {Handle} from "reactflow";

export const BaseNode = ({
    title,
    handles,
    children,
    minHeight = 140,
    selected,
}) => {
    return (
      <div
        style={{
          width: 260,
          minHeight: minHeight,
          background: "#ffffff",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflow: "visible",

          border: selected ? "2px solid #748B91" : "1px solid #D1D5DB",

          boxShadow: selected
            ? "0 0 0 4px rgba(116,139,145,.25), 0 12px 30px rgba(0,0,0,.15)"
            : "0 4px 12px rgba(0,0,0,.08)",
          transform: selected ? "translateY(-2px)" : "translateY(0)",

          transition: "all 0.2s ease",
          cursor: "pointer",
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

