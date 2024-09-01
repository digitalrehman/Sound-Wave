import { createContext, useEffect, useState } from "react";
import {
  assets,
  products,
  earbuds,
  gamingHeadphones,
  latestProducts,
  speakers,
  navbar,
} from "../assets/index";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
let ContextProduct = createContext();
let ProviderProduct = (props) => {
  let currency = "$";
  let deliveryCharge = 10;
  let totalProducts = [...products, ...earbuds, ...gamingHeadphones];
  let [searchVisible, setSearchVisible] = useState(false);
  let [search, setSearch] = useState("");
  let [cartItem, setCartItem] = useState({});
  let navigate = useNavigate()
  let addToCart = (id, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    let cartData = structuredClone(cartItem);

    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItem(cartData);
  };

  let cartCount = () => {
    let count = 0;
    for (let item in cartItem) {
      for (let size in cartItem[item]) {
        try {
          if (cartItem[item][size] > 0) {
            count += cartItem[item][size];
          }
        } catch (err) {
          console.log(err);
        }
      }
      return count;
    }
  };

  let updateQuantity = (id, size, quantity) => {
    let cartData = structuredClone(cartItem);
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] = quantity;
      } else {
        cartData[id][size] = quantity;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = quantity;
    }
    setCartItem(cartData);
  };

  let removeFromCart = (id, size) => {
    let cartData = structuredClone(cartItem);
    if (cartData[id]) {
      if (cartData[id][size]) {
        delete cartData[id][size];
        if (Object.keys(cartData[id]).length === 0) {
          delete cartData[id];
        }
      }
    }
    setCartItem(cartData);
  };

  let getCartAmount = () => {
    let total = 0;
    for (let item in cartItem) {
      let itemInfo = totalProducts.find((product) => product.id == item);
      if (itemInfo) {
        for (let items in cartItem[item]) {
          total += itemInfo.price * cartItem[item][items];
        }
      } else {
        console.warn(`Product with id ${item} not found in totalProducts.`);
      }
    }
    return total;
  };
  
  

  let values = {
    setSearchVisible,
    searchVisible,
    setSearch,
    search,
    assets,
    currency,
    deliveryCharge,
    getCartAmount,
    products,
    earbuds,
    gamingHeadphones,
    latestProducts,
    speakers,
    navbar,
    cartItem,
    addToCart,
    cartCount,
    updateQuantity,
    removeFromCart,
    navigate
  };
  return (
    <ContextProduct.Provider value={values}>
      {props.children}
    </ContextProduct.Provider>
  );
};
export { ProviderProduct, ContextProduct };
