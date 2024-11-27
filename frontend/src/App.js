import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CurrentUsers from "./pages/CurrentUsers";
import RoleManagement from "./pages/RoleManagement";
import MyProfile from "./pages/MyProfile";
import AddUser from "./pages/AddUser";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      {/* <nav className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Current Users</Link>
        <Link to="/roles">Role Management</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/add-user">Add New User</Link>
      </nav> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<CurrentUsers />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
