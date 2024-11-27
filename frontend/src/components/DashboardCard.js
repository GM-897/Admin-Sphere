import React from "react";
import "../styles/Cards.css";

const DashboardCard = ({ color, title, onClick }) => {
  return (
    <div className={`dashboard-card ${color}`} onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default DashboardCard;
