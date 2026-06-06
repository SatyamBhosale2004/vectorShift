// submit.js
import { useStore } from "./store";
export const SubmitButton = () => {

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const setResult = useStore((state) => state.setResult);
  const handleSubmit = async () => {
    try {

      const response = await fetch(
        "http://localhost:8000/pipelines/parse",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

    return (
      <div
        style={{
          position: "absolute",
          top: "200px",
          right: "45px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            background: "#1C1C1C",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    );
}
