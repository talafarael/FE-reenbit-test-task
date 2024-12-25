import React, { useState } from "react";
import axios from "axios";

export const OAuth2Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/oauth/auth/google";
  };

  return <button onClick={handleLogin}>sign in from google</button>;
};

export default OAuth2Login;
