import React from "react";
import Router from "./Router/Router";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { assets } from "./assets/index";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-full">
      <img
        src={assets.shadow}
        alt="logo"
        className="fixed top-0 left-0 -z-20"
      />
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Router />
      <Footer/>
    </div>
  );
};

export default App;
