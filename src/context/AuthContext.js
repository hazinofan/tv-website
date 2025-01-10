import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  // Function to handle admin login
  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setAdmin(res.data.token);
      localStorage.setItem("admin_token", res.data.token);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Login failed" };
    }
  };

  // Function to handle admin logout
  const logout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    setAdmin(null);
    localStorage.removeItem("admin_token");
  };

  // Check if admin is logged in (Token stored in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setAdmin(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
