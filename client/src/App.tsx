import { Routes, Route } from "react-router-dom";

function Dashboard() {
  return <div>Dashboard (placeholder)</div>;
}

function Applications() {
  return <div>Applications (placeholder)</div>;
}

function ApplicationDetail() {
  return <div>Application Detail (placeholder)</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/applications/:id" element={<ApplicationDetail />} />
    </Routes>
  );
}
