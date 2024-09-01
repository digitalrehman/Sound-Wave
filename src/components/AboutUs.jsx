import React from "react";
import { aboutCard, assets } from "../assets";
import Title from "./Title";

const AboutUs = () => {
  return (
    <div className="w-full flex-col">
      <div className="flex flex-col  sm:h-[60vh] h-auto sm:flex-row justify-between w-full my-10">
        <img
          src={assets.gamingRoom}
          className="sm:w-[40%] h-full object-cover w-full rounded-md"
          alt="...loading"
        />
        <div className="sm:w-1/2 h-full w-full">
          <Title
            title={"About Us"}
            description={"Your Ultimate Destination for Premium Audio Gear"}
          />
          <p className="text-white font-nowThin text-sm">
            Welcome to Sound Wave, your go-to online store for high-quality
            earbuds, headphones, and gaming headsets. Our goal is to provide you
            with the best audio experience, whether you're enjoying your
            favorite tunes, diving into intense gaming sessions, or just looking
            for the perfect everyday headphones.
          </p>
          <p className="text-white my-2">
            At SoundWave, we strive to create a welcoming and supportive
            environment where customers feel heard, understood, and valued. We
            believe that every customer deserves to enjoy their favorite audio
            equipment, and we're committed to providing that experience at a
            price that's right for everyone.
          </p>
        </div>
      </div>
      <div className="w-full flex my-6 flex-col text-white">
        <h1 className="text-3xl my-2 font-semibold font-nowRuguler">Our Mission</h1>
        <p className="font-nowThin indent-20 text-sm">
          Our mission is simple: to provide you with the best in audio
          technology and innovation. We understand that the right headphones or
          earbuds can transform your listening experience, whether you're tuning
          into your favorite music, engaging in intense gaming sessions, or just
          enjoying a quiet moment. That's why we carefully curate our collection
          to include only the most reliable and cutting-edge products available
          on the market.
        </p>
      </div>
      <div className="w-full text-white mt-11">
        <h1 className="text-3xl font-nowRuguler font-semibold">Why Choose Sound Waves</h1>
        <div className="flex w-full justify-center flex-wrap gap-2 mt-8 md:mt-0">
          {aboutCard.map((card, index) => (
            <div className="md:w-[28%] sm:w-[45%] w-[90%] px-3 cursor-pointer py-2 border border-y-pink-700 border-x-blue-700 hover:border-y-blue-700 hover:border-x-pink-700 border-gray-500 rounded-md sm:my-7 hover:translate-y-1 duration-300">
              <h1 className="text-xl font-semibold font-nowRuguler my-2">{card.title}</h1>
              <p className="text-xs leading-5 text-gray-400 font-nowThin">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
