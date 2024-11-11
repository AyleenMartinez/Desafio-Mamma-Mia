import React from "react";
import "../assets/css/ProfilePage.css";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useUser();
  return (
    <div className="container-profile">
      <h2>Tu cuenta</h2>
      <div className="email-profile">
        <h5>{email}</h5>
      </div>
      <div className="body-profile">
        <p>Mis datos</p>
        <p>Mis pedidos</p>
        <p>Cambiar contraseña</p>
      </div>
      <div className="btn-profile">
        <button onClick={logout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;
