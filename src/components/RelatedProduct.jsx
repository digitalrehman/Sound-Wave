import React, { useContext } from "react";
import Title from "./Title";
import { ContextProduct } from "../context/ContextProduct";
import EarBudsCard from "./EarBudsCard";

const RelatedProduct = ({ subCategory, category }) => {
    let { products, earbuds, gamingHeadphones, currency } =
    useContext(ContextProduct);
  let totalProducts = [...products, ...earbuds, ...gamingHeadphones];
  let relatedProducts = totalProducts.filter(
    (product) =>
      product.subCategory === subCategory && product.category === category
  );
  if (relatedProducts.length === 0) {
    return <div>No related products found.</div>;
  }
  
  return (
    <div className=" w-full items-center flex flex-col">
      <Title
        title={"Related Product"}
        description={
          "Discover more products in the subCategory  within the category brand."
        }
      />
      <div className="flex flex-wrap gap-2 justify-center items-center w-full my-5">
      {
        relatedProducts.slice(0,4).map((item, index) => {
          return (
            
            <EarBudsCard key={index} id={item.id} currency={currency} image={item.img} price={item.price} name={item.name} />
          );
        })
    }
      </div>
    </div>
  );
};

export default RelatedProduct;
