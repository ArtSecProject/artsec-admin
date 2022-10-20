

import React from 'react'

const Heading = ({ title, desc }) => {
  return (
    <div className='block justify-center items-center text-center space-y-2 pt-10'>
        <h2 className='app-color font-bold text-2xl'>{title}</h2>
        <p className='app-text font-normal text-[15px]'>{desc}</p>
    </div>
  )
}

export default Heading