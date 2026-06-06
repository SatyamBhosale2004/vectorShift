# VectorShift Frontend Technical Assessment

## Candidate Information

**Name:** Satyam Bhosale

---

## Overview

This project is my submission for the VectorShift Frontend Technical Assessment.

The solution covers all four parts of the assignment:

### Part 1 – Node Abstraction
- Created a reusable `BaseNode` component.
- Refactored existing nodes to use the abstraction.
- Added five additional custom nodes:
  - API Node
  - Database Node
  - Email Node
  - Delay Node
  - Condition Node

### Part 2 – Styling
- Redesigned the workflow builder interface.
- Added a consistent design system across:
  - Toolbar
  - Workflow Canvas
  - Nodes
  - Controls
  - Minimap
  - Submit Section

### Part 3 – Text Node Logic
- Text node automatically detects variables in the format:

```text
{{variable}}
```

- Dynamically creates input handles for detected variables.
- Automatically adjusts node height based on content and variables.

### Part 4 – Backend Integration
- Connected frontend and backend using FastAPI.
- Submit button sends workflow nodes and edges to backend.
- Backend returns:
  - Number of Nodes
  - Number of Edges
  - DAG Validation Result
- Results are displayed in the UI.

---

## Running the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend URL:

```text
http://localhost:3000
```

---

## Running the Backend

Install dependencies:

```bash
pip install fastapi uvicorn
```

Run the backend:

```bash
cd backend
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

---

## Features

- Drag-and-drop workflow builder
- Reusable node architecture
- Dynamic text variable handles
- Custom node types
- Node deletion support
- DAG validation
- Pipeline analysis
- Responsive workflow canvas

---

Thank you for reviewing my submission.