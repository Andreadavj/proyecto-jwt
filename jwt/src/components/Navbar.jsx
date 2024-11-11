import React from "react";
import { useUser } from "../contexts/UserContext";

const Navbar = () => {
  const { token, logout } = useUser();

  return (
    <nav>
      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <a href="/login">Login</a>
      )}
      {/* Other navbar links */}
    </nav>
  );
};

export default Navbar;
