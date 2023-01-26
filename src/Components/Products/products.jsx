import React from "react";
import Card from "../Card/card";

export default function Products() {
  const myProducts = [
    {
      id: 1,
      title: "fahrrad",
      price: 1200,
    },
    {
      id: 2,
      title: "ski",
      price: 1000,
    },
    {
      id: 3,
      title: "rollschuhe",
      price: 500,
    },
    {
      id: 4,
      title: "scooter",
      price: 450,
    },
    {
      id: 5,
      title: "bmx",
      price: 1500,
    },
  ];
  return (
    <div>
      {myProducts.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}
