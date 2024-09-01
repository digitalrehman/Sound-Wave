import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextProduct } from "../context/ContextProduct";
import ProductDescription from "./ProductDescription";
import RelatedProduct from "./RelatedProduct";

const DescriptionCard = () => {
  let { id } = useParams();
  let { products, earbuds, gamingHeadphones, currency, addToCart } =
    useContext(ContextProduct);
  let totalProducts = [...products, ...earbuds, ...gamingHeadphones];
  let [imges, setImages] = useState("");
  let [size, setSize] = useState("");

  let [stocks, setStock] = useState(true);
  let [product] = totalProducts.filter((item, index) => item.id == id);
  useEffect(() => {
    setImages(product.img[0]);
    setSize(product.size);
    setStock(product.inStock);
  }, [id]);
  if (!product)
    return (
      <div className="text-2xl text-white font-bold font-nowRuguler text-center mt-7">
        Product not found
      </div>
    );
  let price = parseFloat(product.price).toFixed(2);
  return (
    <div className="">
      <div className="flex w-full md:h-screen md:flex-row flex-col my-5">
        <div className="md:w-[45%] md:h-[75%] w-full flex md:flex-row flex-col gap-1">
          <div className="md:w-[20%] w-full sm:h-[20vh] h-[13vh] md:h-full flex md:flex-col flex-row justify-between">
            {product.img.map((value, index) => {
              return (
                <img
                  key={index}
                  onClick={() => setImages(value)}
                  src={value}
                  alt={value}
                  className="md:w-full w-[24%] h-full md:h-[24%] object-cover rounded "
                />
              );
            })}
          </div>
          <div className="md:w-[80%] w-full h-30vh">
            <img src={imges} className="w-full h-full object-cover rounded" />
          </div>
        </div>
        <div className="md:w-[55%] w-full md:px-11 py-2 mt-4 md:mt-0 font-nowThin text-white">
          <h1 className="font-nowRuguler md:text-2xl text-xl">
            {product.name}
          </h1>
          <p className="my-1 text-gray-400">Brand Sound Wave</p>
          <div className="flex items-center gap-3 mb-2">
            {product.ratingStar.map((value, index) => (
              <img key={index} src={value} className="size-3" />
            ))}
            <span className="text-gray-400">({product.rating})</span>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="">Price</h1>
            <h1 className="text-gray-300 text-sm">
              {price} {currency}
            </h1>
          </div>
          <p className="text-xs leading-5 my-2">
            {product.description.slice(0, 500) + ".."}{" "}
            <span className="text-blue-500 cursor-pointer">Read More</span>
          </p>
          <p className="">
            InStock :{" "}
            <span
              className={`text-md font-nowRuguler ${
                stocks ? "text-green-700" : "text-red-700"
              } `}
            >
              {product.inStock.toString().toUpperCase()}
            </span>
          </p>
          <div className="flex gap-2">
            {product.sizes.map((value, index) => (
              <button
                onClick={() => setSize(value)}
                key={index}
                className={`border w-8 h-8 my-2 border-gray-300 rounded ${
                  size === value ? "bg-blue-700 text-white" : "text-gray-300"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
          <button
            onClick={() => addToCart(product.id, size)}
            className="px-5 py-2 mt-3 mb-1 bg-white active:bg-blue-700 active:text-white text-black font-nowRuguler rounded"
          >
            Add to cart
          </button>
          <hr className="md:w-10/12  my-2" />
          <div className="text-sm text-gray-500 my-5">
            <p>100% Orignal product</p>
            <p>Cash on delivery in this product</p>
            <p>easy return and change policy within 7 days</p>
          </div>
        </div>
      </div>
      <div>
        <ProductDescription
          description={product.description}
          features={product.features}
        />
      </div>
      <div className="w-full my-7">
        <RelatedProduct
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
    </div>
  );
};

export default DescriptionCard;
