import React, { useContext, useEffect, useState } from "react";
import { ContextProduct } from "../context/ContextProduct";
import Title from "./Title";
import { assets } from "../assets";
import CartTotal from "./CartTotal";

const CartItem = () => {
  let {
    products,
    earbuds,
    gamingHeadphones,
    currency,
    cartItem,
    removeFromCart,
    updateQuantity,
  } = useContext(ContextProduct);
  let totalProducts = [...products, ...earbuds, ...gamingHeadphones];
  let [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (let item in cartItem) {
      for (let items in cartItem[item]) {
        tempData.push({
          id: item,
          size: items,
          quantity: cartItem[item][items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div>
      <Title
        title={"Your cart items"}
        description={"All your items in one place"}
      />
      <div className="flex justify-center items-center flex-col w-full my-16">
        <div className="w-full">
          {cartData.length > 0 ? (
            cartData.map((item, index) => {
              let productData = totalProducts.find(
                (product) => product.id == item.id
              );
              return (
                <div
                  key={item.id}
                  className="hover:bg-[#0F172A] rounded-lg py-3 px-6 border-b border-gray-600 flex justify-between items-center w-full my-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        productData
                          ? productData.img[0]
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      className="w-20 h-20 object-cover rounded"
                      alt="product"
                    />
                    <div className="flex flex-col justify-between gap-1">
                      <h1 className="text-base font-nowRuguler text-white ">
                        {productData ? productData.name : "Product"}
                      </h1>
                      <div className="flex flex-col">
                        <div className="text-sm font-nowRuguler text-white">
                          <span>Price :</span>{" "}
                          <span className="text-blue-500">
                            {currency}
                            {productData.price}
                          </span>
                        </div>
                        <div className="text-sm font-nowRuguler text-white flex items-center gap-1">
                          <span>Size :</span>{" "}
                          <span className="text-blue-500">{item.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white flex items-center justify-center gap-3 border-b p-3 rounded-lg border-gray-600 ">
                      <input type="number" defaultValue={item.quantity} onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, Number(e.target.value))} min={1} className="p-1 w-12 border-none outline-none text-center rounded bg-gray-700" />
                     
                    <h1 className="text-md font-nowThin text-white">
                      {currency}
                      {productData.price * item.quantity}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-3 items-end justify-center">
                    <h1 className="text-md flex items-center gap-2 font-nowThin text-white">
                      Remove
                      <img
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="invert w-4 h-4"
                        src={assets.closeWhite}
                      />
                    </h1>
                    <button className="text-sm flex items-center gap-2 font-nowThin text-white">
                      Add to favorites
                      <img src={assets.heart} alt="heart" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center">
              <h1 className="text-3xl font-bold font-nowRuguler text-white">
                Your cart is empty
              </h1>
            </div>
          )}
        </div>
      </div>
      <CartTotal/>
    </div>
  );
};

export default CartItem;
