import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../LineGraph/LineGraph.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += 1;

      // Update data every second
      setDataPoints((prevData) => [
        ...prevData.slice(-19),
        Math.floor(Math.random() * 10) + 1,
      ]);
      setLabels((prevLabels) => [...prevLabels.slice(-19), `${counter}s`]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Surfing Time Activity",
        data: dataPoints,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        tension: 0.3, // Smooth line
        fill: true, // Fill area under the curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000, // Smooth animation update
      easing: "easeInOutQuad",
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white", // Legend text color
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (seconds)",
          color: "white",
          font: {
            size: 14, // Adjust font size
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Surfing Intensity",
          color: "white", // Y-axis title color
          font: {
            size: 14, // Adjust font size
          },
        },

        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };

  return (
    <div className="surfing-time-graph">
      <h2>Live Website Surfing Time</h2>
      <div style={{ position: "relative", height: "230px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
