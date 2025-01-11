import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    return JSON.parse(localStorage.getItem("admin")) || null;
  });

  // Check if admin is authenticated
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("https://platinium-backend.onrender.com/api/auth/status", { withCredentials: true });

      if (response.data.authenticated) {
        setAdmin(true);
        localStorage.setItem("admin", JSON.stringify(true)); // Persist login state
      } else {
        setAdmin(false);
        localStorage.removeItem("admin");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setAdmin(false);
      localStorage.removeItem("admin");
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Admin login function
  const login = async (email, password) => {
    try {
      const response = await axios.post("https://platinium-backend.onrender.com/api/auth/login", { email, password }, { withCredentials: true });

      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token); // Store token
        setAdmin(true);
        return true; // Indicate success
      }
    } catch (error) {
      console.error("Login error:", error);
      return false; // Indicate failure
    }
  };

  // Admin logout function
  const logout = async () => {
    try {
      await axios.post("https://platinium-backend.onrender.com/api/auth/logout", {}, { withCredentials: true });
      setAdmin(false);
      localStorage.removeItem("admin");
      localStorage.removeItem("adminToken"); // Remove token
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
