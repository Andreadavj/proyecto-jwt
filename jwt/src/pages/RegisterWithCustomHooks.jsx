import React from "react";
import useInput from "../hooks/useInput";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const RegisterWithCustomHooks = () => {
  const email = useInput("");
  const password = useInput("");
  const { register, token } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email.value, password.value);
  };

  // Redirect if the user is already authenticated
  if (token) return <Navigate to="/" />;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        {...email} // spreads `value` and `onChange` from `useInput`
      />
      <input
        type="password"
        placeholder="Password"
        {...password} // spreads `value` and `onChange` from `useInput`
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterWithCustomHooks;
