import React from "react";
import "./Dashboard.css";
import Calendar from "../Calendar/Calendar";
import Counter from "../Counter/Counter";
import PieChart from "../PieChart/PieChart";
import LineGraph from "../LineGraph/LineGraph";
import BarGraph from "../BarGraph/BarGraph";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <div className="top-left">
        <PieChart />
      </div>
      <div className="top-right">
        <Calendar />
      </div>
      <div className="bottom-right">
        <Counter />
      </div>
      <div className="bottom-left">
        <LineGraph />
      </div>
      <div className="top-middle">
        <BarGraph />
      </div>
    </div>
  );
};

export default Dashboard;
