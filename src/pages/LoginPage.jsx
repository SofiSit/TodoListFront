import React, { useContext, useState } from "react";
import loginRequest from "../api/loginRequest";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";
import img1 from "../assets/img/objetivos.png";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(password)
      .then(({ token }) => {
        setToken(token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div>
        <h1>Welcome to your to do list app </h1>
        <img src={img1} style={{ width: "60px", padding: "15px" }} />
      </div>

      <div style={{ color: "red" }}>{error}</div>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            padding: "5px",
            height: "35px",
            outline: "none",
            border: "none",
            color: "white",
            backgroundColor: "#f09696",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
