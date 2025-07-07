import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/signup">Signup</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/private">Private</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
