import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Analytics from "./Analytics/Analytics";
import SideNavBar from "./SideNavBar/SideNavBar";
import Contact from "./Contact/Contact";
import About from "./About/About";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar Section */}
      <SideNavBar />

      {/* Content Section */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
