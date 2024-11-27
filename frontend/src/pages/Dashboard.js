import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="card-grid">
        <DashboardCard
          color="pink"
          title="Current Users"
          onClick={() => navigate("/users")}
        />
        <DashboardCard
          color="green"
          title="Role Management"
          onClick={() => navigate("/roles")}
        />
        <DashboardCard
          color="blue"
          title="My Profile"
          onClick={() => navigate("/profile")}
        />
        <DashboardCard
          color="yellow"
          title="Add New User"
          onClick={() => navigate("/add-user")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
