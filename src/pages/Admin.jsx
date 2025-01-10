import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/admin/dashboard"); // Redirect on success
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex h-screen bg-purple-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img className="w-20 mx-auto mb-5" src="/assets/favicon.png" alt="Admin Logo" />
        </header>
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div>
            <label className="block mb-2 text-purple-500">Email</label>
            <input
              className="w-full p-2 mb-6 text-purple-700 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-purple-500">Password</label>
            <input
              className="w-full p-2 mb-6 text-purple-700 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              className="w-full bg-purple-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <footer></footer>
      </div>
    </div>
  );
}
