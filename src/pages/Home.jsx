import React from "react";
import Hero from "../components/Hero";
import EarBuds from "../components/EarBuds";
import Headphones from "../components/Headphones";
import GamingHeadPhone from "../components/GamingHeadPhone";
import FeatureArticle from "../components/FeatureArticle";
import Speakers from "../components/Speakers";

const Home = () => {
  return (
    <div>
      <Hero />
      <EarBuds/>
      <Headphones/>
      <GamingHeadPhone/>
      <FeatureArticle/>
      <Speakers/>
     
    </div>
  );
};

export default Home;
