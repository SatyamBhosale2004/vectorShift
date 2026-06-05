// submit.js

export const SubmitButton = () => {

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
