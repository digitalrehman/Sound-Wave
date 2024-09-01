import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import EarBudsCard from './EarBudsCard';
import { ContextProduct } from '../context/ContextProduct';

const Headphones = () => {
  let {products, currency} = useContext(ContextProduct) 
  let [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(products)
  })
  return (
    <div className='flex justify-center items-center flex-col w-full my-16'>
         <Title title={"Elevate Your Sound - Premium Headphones"}  description={'"Discover our range of high-performance headphones designed to deliver immersive sound, unmatched comfort, and stylish design. Perfect for music lovers and audiophiles who crave the best in audio quality."'} />
         <div className="flex flex-wrap sm:justify-between justify-center items-center w-full my-5">
    {
        products.map((item, index) => {
          return (
            <EarBudsCard id={item.id} key={item.id} currency={currency} image={item.img} price={item.price} name={item.name} />
          );
        })
    }
      </div>
    </div>
  )
}

export default Headphones