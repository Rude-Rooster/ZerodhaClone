import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../../utils.js";

function Login() {
  const [loginInfo, SetLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    SetLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("name, email, password are required");
    }
    try {
      const url = "https://zerodhaclone-qvqn.onrender.com"
      // "http://localhost:8080/auth/login"; //backend url(port)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("LoggedInUser", name);
        setTimeout(() => {
          window.location.href = "https://zerodhaclone-qvqn.onrender.com"
          // "http://localhost:3001/";
          navigate("/dashboard");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="container p-5">
      <ToastContainer />
      <h1 className="fs-2">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            autoFocus
            className="form-control"
            placeholder="Enter your email"
            value={loginInfo.email}
          />
        </div>
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="inputPassword"
          className="form-control"
          name="password"
          placeholder="Enter your password"
          value={loginInfo.password}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
        <span className="mx-3">
          Don't have an account ?
          <Link to="/signup" className="undecorated-link">
            Signup
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
