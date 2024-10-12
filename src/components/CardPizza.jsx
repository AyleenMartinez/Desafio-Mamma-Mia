import React from "react";
import "../assets/css/CardPizza.css";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
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
            <button className="botones">Ver más 👀</button>
            <button className="botones">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
