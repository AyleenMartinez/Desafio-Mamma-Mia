import React, { useContext } from "react";
import { useState } from "react";
import "../assets/css/LoginPage.css";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarDatos = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim() || !contraseña.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    try {
      await login(email, contraseña);
      setSuccess("Inicio de sesión exitoso");
    } catch (error) {
      console.log(error)
      setError(error.message);
    };
  };

  return (
    <div>
      <h2 className="tittle-login">Iniciar sesión</h2>
      <div>
        <form className="loginPage" onSubmit={validarDatos}>
          {error ? <p style={{ color: "red" }}>{error}</p> : null}

          {success ? <p style={{ color: "green" }}>{success}</p> : null}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              className="form-control"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
