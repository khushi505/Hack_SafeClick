import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import "../PieChart/PieChart.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const PieChart = () => {
  const chartData = {
    labels: ["Correct Predictions", "Incorrect Predictions"],
    datasets: [
      {
        label: "Model Accuracy",
        data: [92, 8], // Example: 91% correct, 9% incorrect
        backgroundColor: ["red", "#000000"], // Green and Black
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff", // White color for the legend
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        display: false,
        text: "3D Model Accuracy Distribution",
        color: "#ffffff", // White color for the title
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    animation: {
      duration: 2000, // Smooth animation
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="three-d-piechart">
      <h2>3D Model Accuracy</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
