// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = "grab")}
        style={{
          cursor: "grab",
          minWidth: "110px",
          height: "55px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: "12px",

          background: "#1C1C1C",
          color: "#FFFFFF",

          border: "1px solid #686C70",

          boxShadow: "0 4px 10px rgba(0,0,0,.15)",

          fontWeight: "500",

          transition: "all .2s ease",
        }}
        draggable
      >
        <span style={{ color: "#fff" }}>{label}</span>
      </div>
    );
  };
  