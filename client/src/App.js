import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MentorForm from "./components/MentorForm";
import Sidebar from "./components/Sidebar";
import "./style.css"; // Ensure this contains your styles
import './style.css';


function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar for Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentor-form" element={<MentorForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
