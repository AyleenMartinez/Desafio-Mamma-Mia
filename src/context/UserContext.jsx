import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setToken(false);
  }, []);

  const logout = () => {
    setEmail(null);
    setToken(false);
  };

  const login = async (correo, clave) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: correo,
        password: clave,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } else {
      throw new Error("Credenciales incorrectas");
    }
  };

  const register = async (correo, clave) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: correo,
        password: clave,
      }),
    });
    const data = await response.json();
    setToken(data.token);
    setEmail(data.email);
  };

  const obtenerDatos = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setEmail(data.email);
  };

  return (
    <UserContext.Provider
      value={{ token, email, logout, login, register, obtenerDatos }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
