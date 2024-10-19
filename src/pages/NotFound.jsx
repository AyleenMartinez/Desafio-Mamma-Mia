import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../public/images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <img
        src={notFoundImage}
        alt="Imagen referencial a notFound (gato escondido)"
      />
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;
