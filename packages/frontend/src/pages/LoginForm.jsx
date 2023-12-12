// src/components/LoginForm.js

import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = ({ setToken, setState }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const url =`${process.env.REACT_APP_INTERNAL_API_URL}/login`;
      const response = await axios.post(url, {
        username,
        password,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      const newToken = response.data.token;
      setToken(newToken, setState);
    } catch (error) {
      alert("Invalid credentials");
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
