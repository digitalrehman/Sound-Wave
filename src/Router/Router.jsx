import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Product from "../pages/Product";
import OrderPlace from "../pages/OrderPlace";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order-place" element={<OrderPlace />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
