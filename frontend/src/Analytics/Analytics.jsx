import React from "react";
import Loader from "../Loader/Loader"; // Loader Component
import URLClone from "../URLClone/URLClone"; // URL Clone Checker Component
import WebClone from "../WebClone/WebClone"; // Web Clone Detector Component
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-layout">
      {/* Left Panel: Web Clone Detector */}
      <div className="left-panel">
        <WebClone />
      </div>

      {/* Center Panel: Loader */}
      <div className="loader-panel">
        <Loader />
      </div>

      {/* Right Panel: URL Clone Checker */}
      <div className="right-panel">
        <URLClone />
      </div>
    </div>
  );
};

export default Analytics;
