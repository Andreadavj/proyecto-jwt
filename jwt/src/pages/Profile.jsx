import React, { useEffect } from "react";
import { useUser } from "../contexts/UserContext";

const Profile = () => {
  const { user, getProfile, logout } = useUser();

  useEffect(() => {
    getProfile();
  }, []);

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
