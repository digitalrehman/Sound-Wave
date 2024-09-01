import React, { useContext, useEffect, useRef, useState } from "react";
import { assets, navbar } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { ContextProduct } from "../context/ContextProduct";

const Navbar = () => {
  let { setSearchVisible, cartCount } = useContext(ContextProduct);
  let [toggle, setToggle] = useState(false);
  let navbars = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        navbars.current.classList.add("bg-[#0F172A]");
      } else {
        navbars.current.classList.remove("bg-[#0F172A]");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div
      ref={navbars}
      className="py-2 flex justify-between items-center sticky font-nowRuguler top-0 z-50"
    >
      <Link to="/">
        <div className="flex items-center gap-1 flex-col justify-center">
          <img src={assets.logo} className="w-20" />
          <h2 className="text-xs text-white">Sound Wave</h2>
        </div>
      </Link>
      <ul className=" hidden sm:flex items-center gap-3 text-white">
        {navbar.map((item, index) => {
          return (
            <li key={index} className="relative text-md">
              <NavLink className="cursor-pointer" to={item.url}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 items-center">
        <img
          onClick={() => setSearchVisible(true)}
          className="hover:cursor-pointer"
          src={assets.search}
        />
        <Link to="/cart" className="relative">
          <img className="hover:cursor-pointer" src={assets.cart} />
          {cartCount() > 0 ? (
            <div className="absolute top-4 -right-1 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-xs text-white">
              {cartCount()}
            </div>
          ) : null}
        </Link>
        <div className="relative group">
          <img className="hover:cursor-pointer" src={assets.profile} />
          <div className="group-hover:block hidden absolute pt-4 rounded-lg right-0 bg-gradient-to-r from-indigo-500">
            <div className="flex flex-col gap-4 w-40 px-8 py-3 ">
              <p className="text-white cursor-pointer hover:translate-x-2 hover:text-black duration-300">
                Profile
              </p>
              <p className="text-white cursor-pointer hover:translate-x-2 hover:text-black duration-300">
                Order
              </p>
              <p className="text-white cursor-pointer hover:translate-x-2 hover:text-black duration-300">
                Logout
              </p>
            </div>
          </div>
        </div>
        <img
          onClick={() => setToggle(true)}
          className="sm:hidden ml-6 hover:cursor-pointer"
          src={assets.menu}
        />
      </div>

      {/* small screen navbar  */}
      <div
        className={`h-screen w-full fixed top-0 left-0 bottom-0 right-0 bg-[#0F172A] z-50 flex flex-col items-center text-white sm:hidden transition-all duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center w-full px-11 py-3 ">
          <div className="flex items-center gap-1 flex-col justify-center z-50">
            <img src={assets.logo} className="w-20" />
            <h2 className="text-xs text-white">Sound Wave</h2>
          </div>
          <img
            onClick={() => setToggle(false)}
            className="hover:cursor-pointer"
            src={assets.close}
          />
        </div>

        <div className="w-full flex flex-col px-6 gap-8 mt-20">
          {navbar.map((item, index) => {
            return (
              <NavLink
                onClick={() => setToggle(false)}
                key={index}
                className="cursor-pointer border-b"
                to={item.url}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
