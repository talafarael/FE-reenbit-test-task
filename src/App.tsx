import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
function App() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <div className="App">
      <button onClick={() => login()}>Sign in with Google 🚀</button>
    </div>
  );
}

export default App;
