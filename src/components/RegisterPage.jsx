import React from "react";
import { useState } from "react";
import '../assets/css/RegisterPage.css';

const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      return;
    }
    
    setSuccess("Registro exitoso");
  };

  return (
    <>
      <form className="registerPage" onSubmit={validarDatos}>

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
            name="password"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
