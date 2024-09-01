import React, { useContext, useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';
import Title from './Title';
import { ContextProduct } from '../context/ContextProduct';

const FeatureArticle = () => {
  let {latestProducts, currency} = useContext(ContextProduct) 
  let [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(latestProducts)
  })
  return (
    <div className="flex justify-center items-center flex-col w-full my-16">
    <Title
      title={"In-Depth Insights - Explore Our Featured Articles"}
      description={
        '"Dive into expert advice, product reviews, and the latest trends in audio technology. Stay informed and make the best choices for your audio needs."'
      }
    />
    <div className="flex flex-wrap sm:justify-between justify-center items-center w-full my-5">
      {products.map((item, index) => {
        return (
          <FeatureCard
            id={item.id}
            key={index}
            image={item.img}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </div>
  </div>
  )
}

export default FeatureArticle