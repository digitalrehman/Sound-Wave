import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ContextProduct } from "../context/ContextProduct";
import EarBudsCard from "./EarBudsCard";
import { Link } from "react-router-dom";

const EarBuds = () => {
  let {earbuds, currency} = useContext(ContextProduct) 
  let [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(earbuds)
  })
  return (
    <div className="flex justify-center items-center flex-col w-full my-16">
      <Title title={"High-Quality Earbuds"}  description={'"Premium quality earbuds with perfect fit, unmatched comfort, and superior sound for your lifestyle needs. "'} />
      <div className="flex flex-wrap sm:justify-between justify-center items-center w-full my-5">
    {
        products.map((item, index) => {
          return (
            
            <EarBudsCard key={index} id={item.id} currency={currency} image={item.img} price={item.price} name={item.name} />
          );
        })
    }
      </div>
    </div>
  );
};

export default EarBuds;
