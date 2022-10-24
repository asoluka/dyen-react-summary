import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../store/features/auth/authSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
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
