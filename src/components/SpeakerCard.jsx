import React from 'react'

const SpeakerCard = ({image}) => {
  return (
    <div className=" lg:w-[32%] sm:w-[49%] w-[90%] h-[620px] overflow-hidden shadow-lg flex flex-col justify-between  cursor-pointer  duration-300   mt-6 ">
    <img src={image} className="w-full h-[100%] object-cover duration-300 rounded-xl hover:transform hover:scale-105" />
   
  </div>
  )
}

export default SpeakerCard