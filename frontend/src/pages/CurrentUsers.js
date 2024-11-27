import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import api from "../utils/api";

const CurrentUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get("/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="current-users">
      <h1>Current Users</h1>
      <Table
        columns={["S No", "Name", "Role", "Status"]}
        data={users.map((user, index) => ({
          "S No": index + 1,
          Name: user.name,
          Role: user.role,
          Status: user.status,
        }))}
      />
    </div>
  );
};

export default CurrentUsers;
