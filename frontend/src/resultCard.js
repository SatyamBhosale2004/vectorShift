import { useStore } from "./store";

export const ResultCard = () => {
  const result = useStore((state) => state.result);

  if (!result) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "200px",
        right: "180px",
        zIndex: 1000,

        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "16px",
        minWidth: "220px",

        boxShadow: "0 8px 24px rgba(0,0,0,.15)",
        border: "1px solid #E5E7EB",
      }}
    >
      <h4
        style={{
          margin: "0 0 12px 0",
          color: "#171F22",
        }}
      >
        Pipeline Analysis
      </h4>

      <div>Nodes: {result.num_nodes}</div>
      <div>Edges: {result.num_edges}</div>

      <div
        style={{
          marginTop: "10px",
          fontWeight: "600",
          color: result.is_dag ? "#2E7D32" : "#C62828",
        }}
      >
        DAG: {result.is_dag ? "Yes" : "No"}
      </div>
    </div>
  );
};
    