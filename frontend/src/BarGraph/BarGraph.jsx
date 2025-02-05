import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../BarGraph/BarGraph.css";

// Register components you want to use in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = () => {
  // Sample data
  const data = {
    labels: [
      "dogbuddy.com",
      "japanallpass.com",
      "phoenix.ca",
      "cryptoboss.top",
      "combit.com.br",
      "pokerdom-ai.top",
    ],
    datasets: [
      {
        label: "Malicious Websites",
        data: [12, 19, 8, 15, 3, 10],
        // Red shades for all bars
        backgroundColor: [
          "rgba(255, 0, 0, 0.8)",
          "rgba(255, 60, 60, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 120, 120, 0.8)",
          "rgba(255, 150, 150, 0.8)",
          "rgba(255, 200, 200, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    // Use plugin options to change text color to white
    plugins: {
      legend: {
        labels: {
          color: "#fff", // Legend text color
        },
      },
      title: {
        display: true,
        text: "Testing Phase",
        color: "#fff", // Chart title color
        font: {
          size: 20, // Set font size here (in pixels)
        },
      },
    },
    // Change axis ticks/grid to white or lighter shade for contrast
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255,255,255,0.2)",
        },
      },
    },
  };

  return (
    <div className="bar-chart-container">
      {/* style here ensures the canvas background is black */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
