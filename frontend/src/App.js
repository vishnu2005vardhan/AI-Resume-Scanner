import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AISuggestions from "./pages/AISuggestions";
import ATSReport from "./pages/ATSReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8 bg-gray-100">

          <Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/ats" element={<ATSReport />} />
<Route path="/ai" element={<AISuggestions />} />
</Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;