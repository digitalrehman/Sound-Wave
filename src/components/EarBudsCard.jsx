import React from "react";
import { Link } from "react-router-dom";

const EarBudsCard = ({ image, name, id, price, currency }) => {
  return (
    <div className="lg:w-[23.5%] sm:w-[49%] w-[90%] h-[270px] rounded-lg shadow-lg flex flex-col justify-between hover:shadow-blue-700 border hover:border-y-blue-600 hover:border-x-pink-600 border-x-blue-600 border-y-pink-600 cursor-pointer duration-300 hover:transform hover:scale-105 mt-6">
      <img
        src={image[0]}
        className="w-full h-[75%] object-cover rounded-t-lg"
      />
      <div className="bg-gradient-to-r from-indigo-500 h-[25%] px-5 flex flex-col justify-between rounded-b-lg">
        <Link
          to={`/product/${id}`}
          className="flex flex-col justify-center h-full"
        >
          <h1 className="text-sm font-nowRuguler text-white truncate">
            {name}
          </h1>
          <p className="text-xs text-slate-200 font-nowThin mt-1">
            <span className="font-semibold">price</span>:{" "}
            <span>
              {currency}
              {price}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EarBudsCard;
