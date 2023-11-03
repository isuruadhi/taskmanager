import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss"; // Import the SCSS file for styling

function Login() {
  const navigate = useNavigate();

  const responseMessage = (response) => {
    console.log(response);

    // Redirect to the '/app' route on successful login
    navigate("/App");
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  );
}

export default Login;
