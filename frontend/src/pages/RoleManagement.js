import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import RoleDropdown from "../components/RoleDropdown";
import api from "../utils/api";

const RoleManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await api.get("/users");
      const rolesRes = await api.get("/roles");
      setUsers(usersRes.data);
      setRoles(rolesRes.data.map((role) => role.name));
    };
    fetchData();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    await api.put(`/users/${userId}`, { role: newRole });
    setUsers((prev) =>
      prev.map((user) => (user._id === userId ? { ...user, role: newRole } : user))
    );
  };

  return (
    <div className="role-management">
      <h1>Role Management</h1>
      <Table
        columns={["Name", "Role", "Actions"]}
        data={users.map((user) => ({
          Name: user.name,
          Role: (
            <RoleDropdown
              roles={roles}
              selectedRole={user.role}
              onChange={(newRole) => handleRoleChange(user._id, newRole)}
            />
          ),
          Actions: <button onClick={() => console.log("Edit")}>Edit</button>,
        }))}
      />
    </div>
  );
};

export default RoleManagement;
