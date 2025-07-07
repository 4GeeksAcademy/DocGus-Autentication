import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la App</h1>
      <p>Selecciona una opción:</p>
      <Link to="/signup">Registrarse</Link> | <Link to="/login">Iniciar sesión</Link>
    </div>
  );
}
