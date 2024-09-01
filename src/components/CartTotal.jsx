import React, { useContext } from "react";
import { ContextProduct } from "../context/ContextProduct";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  let { currency, deliveryCharge, getCartAmount,navigate } = useContext(ContextProduct);
  
  return (
    <div className="w-1/3 bg-[#0F172A] ml-auto rounded-lg p-4 my-4 shadow-lg duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-blue-600">
      <h2 className="text-lg font-nowRuguler text-white mb-4 ">Cart Total</h2>
      <div className="flex justify-between items-center">
        <p className="text-gray-100">Subtotal</p>
        <p className="text-gray-500">
          {currency} {getCartAmount()}{".00"}
        </p>
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="text-gray-100">Delivery Charge</p>
        <p className="text-gray-500">
          {currency} {deliveryCharge}{".00"}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-100">Total</p>
        <p className="text-gray-500">
          {currency} {getCartAmount() + deliveryCharge}{".00"}
        </p>
      </div>

      <button onClick={() => navigate("/order-place")} className="w-full h-10 bg-blue-600 text-white rounded-lg mt-4">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
