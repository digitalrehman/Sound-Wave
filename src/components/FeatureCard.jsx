import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({name, image , id}) => {
  return (
    <div className=" lg:w-[32%] sm:w-[49%] w-[90%] h-[580px] rounded-lg shadow-lg flex flex-col justify-between hover:shadow-yellow-700  border border-blue-700 cursor-pointer  duration-300  hover:transform hover:scale-105 mt-6 ">
    <img src={image} className="w-full h-[90%] object-cover rounded-t-lg" />
    <div className="bg-gradient-to-r from-cyan-700 to-blue-900   flex justify-center h-[10%] flex-col px-5 rounded-b-lg">
      <h1 className=" text-base font-nowRuguler text-white">
        {name}
      </h1>
    </div>
  </div>
  )
}

export default FeatureCard