import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the necessary components from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/login"; // Import your Login component
import App from "./components/App"; // Import your main application component

ReactDOM.render(
  <Router>
    <GoogleOAuthProvider clientId="648369435906-6ntpjmo6q4ii0qassgjjv18ftct06bqb.apps.googleusercontent.com">
      {" "}
      {/* Provide your Google OAuth client ID */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route for Login component */}
        <Route path="/App" element={<App />} /> {/* Route for App component */}
      </Routes>
    </GoogleOAuthProvider>
  </Router>,
  document.getElementById("root")
);
