import React from "react";
import "../assets/css/CardPizza.css";
import { useNavigate } from "react-router-dom";


const CardPizza = ({id, name, price, ingredients, img, desc, agregar }) => {
  const navigate = useNavigate();
  const irAPizza = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>

        <div className="ingredients">
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>🍕{ingredient}🍕</li>
            ))}
          </ul>
        </div>
        <p>{desc}</p>
        <div className="price-btn">
          <p className="price">Precio: ${price.toLocaleString()}</p>
          <div className="btn">
            <button className="botones" onClick={irAPizza}>Ver más 👀</button>
            <button className="botones" onClick={agregar}>
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
