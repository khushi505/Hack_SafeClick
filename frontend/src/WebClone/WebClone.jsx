import React, { useState } from "react";
import axios from "axios";
import "../WebClone/WebClone.css";

const WebClone = () => {
  const [site1, setSite1] = useState(""); // State for first URL
  const [site2, setSite2] = useState(""); // State for second URL
  const [output, setOutput] = useState(null); // State for API response
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading indicator

  const API_BASE_URL = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setOutput(null);
    setLoading(true);

    const trimmedSite1 = site1.trim();
    const trimmedSite2 = site2.trim();

    if (!trimmedSite1 || !trimmedSite2) {
      setError("Both URLs are required and cannot be empty.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/compare`, {
        site1: trimmedSite1,
        site2: trimmedSite2,
      });
      setOutput(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred while fetching data from the API."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analytics-container">
      <h1>Clone Websites Detection</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label htmlFor="site1">First URL:</label>
          <input
            type="text"
            id="site1"
            value={site1}
            onChange={(e) => setSite1(e.target.value)}
            placeholder="Enter first URL"
          />
        </div>
        <div className="input-group">
          <label htmlFor="site2">Second URL:</label>
          <input
            type="text"
            id="site2"
            value={site2}
            onChange={(e) => setSite2(e.target.value)}
            placeholder="Enter second URL"
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Comparing..." : "Compare"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {output && (
        <div className="output-container">
          <h2>Comparison Results</h2>
          <p>
            <strong>HTML Similarity:</strong> {output.html_similarity}
          </p>
          <p>
            <strong>Image Similarity:</strong> {output.image_similarity}
          </p>
          <p>
            <strong>WHOIS Match:</strong> {output.whois_match}
          </p>
          <p>
            <strong>Text Similarity:</strong> {output.text_similarity}
          </p>
          <p>
            <strong>Clone Detected:</strong>
            {output.clone_detected}
          </p>
        </div>
      )}
    </div>
  );
};

export default WebClone;
