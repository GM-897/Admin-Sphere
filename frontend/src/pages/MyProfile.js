import React, { useState, useEffect } from "react";
import api from "../utils/api";

const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await api.get("/users/me"); // Replace with actual API endpoint
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile? This action is irreversible."
    );
    if (confirmDelete) {
      try {
        await api.delete("/users/me");
        alert("Your profile has been deleted.");
        // Redirect to another page if needed
      } catch (error) {
        console.error("Error deleting profile:", error);
      }
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-profile">
      <h1>My Profile</h1>
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Role:</strong> {profile.role}
      </p>
      <button className="delete-btn" onClick={handleDeleteProfile}>
        Delete My Profile
      </button>
    </div>
  );
};

export default MyProfile;
