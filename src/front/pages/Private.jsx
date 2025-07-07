import React from "react";
import { useNavigate } from "react-router-dom";

export default function Private() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>¡Bienvenido a tu área privada! 🎉</h2>
      <p>Aquí solo entran usuarios autenticados.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
