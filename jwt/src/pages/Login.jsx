import React, { useState } from "react"; 
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import '../App'; // Asegúrate de importar el archivo CSS

const Login = () => {
  const { login, token } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  if (token) return <Navigate to="/" />;

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar Sesión</h2>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default Login;
