import React from 'react'

const ProductDescription = ({description,features}) => {
  return (
    <div>
        <div className='font-nowRuguler text-md flex mt-8 '>
            <button className='px-4 py-2 bg-[rgba(0,0,0,0.54)] text-white '>Description</button>
            <button className='px-4 py-2 bg-[rgba(0,0,0,0.54)] text-white '>Review (122)</button>
        </div>
        <div className=' p-3 text-white text-xs leading-5 font-nowThin bg-[rgba(0,0,0,0.54)]'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProductDescription