import React from "react";
import { assets } from "../assets/index";

const Hero = () => {
  return (
    <div className=" flex justify-between items-center md:flex-row flex-col-reverse md:h-[90vh] h-[130vh] mt-6 z-30">
      <div className="md:w-1/2 w-full  md:h-full h-1/2 flex justify-center items-center flex-col text-white">
        <h1 className="md:text-5xl sm:text-4xl font-rock text-3xl text-center font-thin">
          Premium Sound, Premium Quality - Discover Your Perfect Audio Gear
        </h1>
        <p className="text-sm font-nowThin leading-6  my-8 text-center">
          Explore our exclusive collection of high-quality headphones and
          earbuds designed to elevate your audio experience. Whether you're a
          music enthusiast, a gamer, or just love crystal-clear sound, we have
          the perfect product for you. Shop now and immerse yourself in sound
          like never before!
        </p>
        <div className="flex gap-3 font-nowRuguler">
          <button className="bg-transparent text-white rounded-full py-2 px-4 border hover:border-none border-[#1e90ff] hover:bg-blue-700 hover:text-white duration-300">
            Shop Now
          </button>

          <button className="flex items-center gap-2 bg-transparent text-white rounded-full py-2 px-4 border hover:border-none border-[#1e90ff] hover:bg-blue-700 hover:text-white duration-300">
            Order Now <img className="invert" src={assets.rightArrow} />
          </button>
        </div>
        </div>
        <img
          className="rounded-lg md:w-1/2 w-[80%] object-cover "
          src={assets.background}
        />
    </div>
  );
};

export default Hero;
