import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import "../assets/css/CardPizza.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };
  return (
    <div>
      <Header
        tittle="¡Pizzería Mamma Mía!"
        description="¡Tenemos las mejores pizzas que podrás encontrar!"
      />

      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
