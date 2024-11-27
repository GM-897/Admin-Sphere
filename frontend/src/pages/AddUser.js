import React, { useState } from "react";
import Modal from "../components/Modal";
import api from "../utils/api";

const AddUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    designation: "",
    status: "active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users", formData);
      alert("User added successfully!");
      setFormData({ name: "", role: "", designation: "", status: "active" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <button onClick={() => setIsModalOpen(true)} className="open-modal-btn">
        Add User
      </button>
      <Modal
        title="Add New User"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Designation:
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <button type="submit" className="submit-btn">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
