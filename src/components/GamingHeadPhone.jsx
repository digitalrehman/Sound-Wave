import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import EarBudsCard from "./EarBudsCard";
import { ContextProduct } from "../context/ContextProduct";

const GamingHeadPhone = () => {
  let {gamingHeadphones, currency} = useContext(ContextProduct) 
  let [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(gamingHeadphones)
  })
  return (
      <div className="flex justify-center items-center flex-col w-full my-16">
        <Title
          title={"Level Up Your Game - Pro Gaming Headphones"}
          description={
            '"Dominate the competition with our top-tier gaming headphones. Experience crystal-clear audio, noise isolation, and comfort for those long gaming sessions."'
          }
        />
        <div className="flex flex-wrap sm:justify-between justify-center items-center w-full my-5">
          {products.map((item, index) => {
            return (
              <EarBudsCard
                key={index}
                id={item.id}
                currency={currency}
                image={item.img}
                price={item.price}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
  );
};

export default GamingHeadPhone;
