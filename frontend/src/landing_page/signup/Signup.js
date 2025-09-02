import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {handleSuccess, handleError} from "../../utils.js";

function Signup() {
  const [signupInfo, SetSignupInfo] = useState({
    name:'',
    email:'',
    password:''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const{name, value} = e.target;
    console.log(name, value);
    const copySignupInfo = {...signupInfo};
    copySignupInfo[name] = value;
    SetSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const {name, email, password} = signupInfo;
    if(!name || !email || !password){
      return handleError("name, email, password are required");
    }
    try{
      const url = "https://zerodhaclone-qvqn.onrender.com/auth/signup" 
// "http://localhost:8080/auth/signup"; //backend url(port)
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const{success, message, error} = result;
      if(success){
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000)
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
      console.log(result);
    }catch(err){
      handleError(err);
    }
  }

  return (
    <div className="container p-5">
      <ToastContainer />
      <h1 className="fs-2">Signup</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="form-control"
            autoFocus
            placeholder="Enter your name"
            value={signupInfo.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={signupInfo.email}
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
          placeholder="Enter password"
          value={signupInfo.password}
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be atleast 4 characters long.
        </div>
        <button type="submit" className="btn btn-primary mt-3">Signup</button>
        <span className="mx-3">
          Already have an account ?{" "}
          <Link to="/login" className="undecorated-link">
            Login
          </Link>
        </span>
      </form>
      
    </div>
  );
}

export default Signup;
