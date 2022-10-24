import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../store/features/auth/authSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
