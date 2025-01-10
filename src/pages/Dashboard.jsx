import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { admin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!admin) {
    navigate("/admin/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="text-3xl font-bold">Welcome to Admin Dashboard</h2>
      <button
        className="mt-5 px-6 py-2 bg-red-500 text-white font-bold rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
