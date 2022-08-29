import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  console.log(pizza);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62f5fe50612c13062b44104a.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (err) {
        alert("something bad happened");
      }
    }
    fetchPizza();
  }, []);

  if(!pizza){
return "Loading..."
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
