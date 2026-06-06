import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ResultCard } from './resultCard';

function App() {
  return (
    <div
      style={{
        background: "#1C1C1C",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
