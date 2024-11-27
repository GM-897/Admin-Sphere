import React from "react";

const RoleDropdown = ({ roles, selectedRole, onChange }) => {
  return (
    <select value={selectedRole} onChange={(e) => onChange(e.target.value)}>
      {roles.map((role, index) => (
        <option key={index} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
};

export default RoleDropdown;
