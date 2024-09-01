import React from 'react'
import { speakers } from '../assets/index';
import Title from './Title';
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full my-16">
    <Title
      title={"Level Up Your Game - Pro Gaming Headphones"}
      description={
        '"Dominate the competition with our top-tier gaming headphones. Experience crystal-clear audio, noise isolation, and comfort for those long gaming sessions."'
      }
    />
    <div className="flex flex-wrap sm:justify-between justify-center items-center w-full my-5">
      {speakers.map((item, index) => {
        return (
          <SpeakerCard
          id={index}
            key={index}
            image={item.img}
          />
        );
      })}
    </div>
  </div>
  )
}

export default Speakers