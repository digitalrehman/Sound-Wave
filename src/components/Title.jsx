import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='flex items-center flex-col text-white justify-center py-7 md:w-[55%] text-center w-full'>
      <div className='flex items-center gap-3'>
      <h1 className='font-nowRuguler text-2xl '>{title}</h1>
        <hr className='w-12 border-white border-2' />
      </div>
    <p className='font-nowThin text-center text-gray-400 text-sm py-3'>{description}</p>
    </div>
  )
}

export default Title