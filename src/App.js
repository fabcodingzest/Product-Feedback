import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages";
import CreateFeedback from "./pages/CreateFeedback";

function App() {
  return (
    <div className=" bg-grey w-full min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-8 lg:py-14 max-w-5xl">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateFeedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
