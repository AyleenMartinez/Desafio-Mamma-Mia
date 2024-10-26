import React, { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import "../assets/css/CardPizza.css";
import { CartContext } from "../context/CartContext";
import {PizzaContext} from "../context/PizzaContext";

const Home = () => {
  const { agregar } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);

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
            agregar={() => agregar(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
