import React from "react";
import "../assets/css/ProfilePage.css";

export default function Profile() {
  return (
    <div className="container-profile">
      <h2>Tu cuenta</h2>
      <div className="email-profile">
      <h5>gatoconrollitos@gmail.com</h5>
      </div>
      <div className="body-profile">
      <p>Mis datos</p>
      <p>Mis pedidos</p>
      <p>Cambiar contraseña</p>
      </div>
      <div className="btn-profile">
        <button>Cerrar Sesión</button>
      </div>
    </div>
  );
}
