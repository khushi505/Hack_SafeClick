import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">SafeClick</h1>
      <p className="about-description">
        <ul className="about-bullets">
          <li> Detects phishing attempts to prevent data theft.</li>
          <li>
            Identifies clone websites to keep you away from fraudulent sources.
          </li>
          <li>
            Leverages advanced AI and machine learning models to ensure
            accuracy.
          </li>
          <li>Provides a secure and trustworthy browsing experience.</li>
        </ul>
      </p>

      <h2 className="section-title">Core Features</h2>
      <ul className="features-list">
        <li>
          <strong className="highlight-red">Malicious URL Detection - </strong>{" "}
          Instantly blocks harmful websites before they load in your browser.
        </li>
        <li>
          <strong className="highlight-red">Clone URL Detection - </strong>{" "}
          Compares suspect URLs with legitimate domains to detect phishing
          attempts.
        </li>
        <li>
          <strong className="highlight-red">Clone Website Detection -</strong>{" "}
          Analyzes visual and structural similarities to identify cloned
          websites.
        </li>
      </ul>

      <h2 className="section-title">How It Works</h2>
      <p className="about-text">
        SafeLink operates through an extension and a dashboard system:
      </p>
      <ol className="working-steps">
        <li>
          <strong>Real-Time Malicious URL Blocking:</strong> The extension
          automatically detects and blocks malicious URLs when accessed.
        </li>
        <li>
          <strong>URL and Website Clone Checker:</strong> The dashboard provides
          detailed insights into URL similarity, domain extraction, and visual
          comparisons.
        </li>
        <li>
          <strong>Advanced AI Analysis:</strong> Machine learning models, such
          as XGBoost, analyze multiple factors like HTML, WHOIS, image, and text
          similarity to ensure accurate clone detection.
        </li>
      </ol>

      <footer className="footer">
        <p>© 2025 SafeClick | Protecting Your Browsing Experience</p>
      </footer>
    </div>
  );
};

export default About;
