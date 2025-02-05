import { useEffect, useRef } from "react";
import "../Counter/Counter.css";

const Counter = () => {
  const countRef = useRef(null);

  // Function to animate the number
  const animateNumber = (element, target) => {
    let current = 0;
    const duration = 3000; // Total animation duration
    const steps = 100; // Number of steps in the animation
    const stepDuration = duration / steps; // Duration per step
    const increment = Math.ceil(target / steps); // Increment per step

    const updateNumber = () => {
      current = Math.min(current + increment, target); // Increment the number
      element.innerText = current.toLocaleString() + "+"; // Update the displayed number

      if (current < target) {
        setTimeout(updateNumber, stepDuration); // Continue animation
      }
    };

    updateNumber();
  };

  useEffect(() => {
    if (countRef.current) {
      animateNumber(countRef.current, 742); // Set the target number to 742
    }
  }, []);

  return (
    <div className="main">
      <p className="website-scanned-text">WEBSITE SCANNED</p>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side (Count) */}
          <div className="flip-card-front">
            <div ref={countRef} className="animated-number">
              0+
            </div>
          </div>
          {/* Back Side (Graph) */}
          <div className="flip-card-back">
            <div className="graph-container">
              <svg
                viewBox="0 0 300 100"
                className="graph"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Graph Line */}
                <path
                  d="M0 50 Q50 20, 100 60 T200 40 T300 50"
                  stroke="red"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Dotted Vertical Line */}
                <line
                  x1="200"
                  y1="40"
                  x2="200"
                  y2="70"
                  stroke="red"
                  strokeWidth="2"
                  strokeDasharray="4"
                />
                {/* Circle on the Line */}
                <circle cx="200" cy="40" r="5" fill="white" />
                {/* Text Above the Circle */}
                <text
                  x="190"
                  y="30"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  742
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
