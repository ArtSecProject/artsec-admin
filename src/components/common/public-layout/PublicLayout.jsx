import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../../constant/icon';



const PublicLayout = ({ children }) => {

  return (
    <div className='bg-white' style={{ width: "100%", height: "100%", position: "center", top: '0', left: '0', right: '0', bottom: '0', zIndex: "9999999" }}>
      <div className='pb-4'>
        <center className="block sm:block md:hidden lg:hidden">
          <Link to="/"><icons.ArtSecLogo className='w-36 mt-6' /></Link>
        </center>
        <div className='px-8 py-8 hidden sm:hidden md:block lg:block '>
          <Link to="/"><icons.ArtSecLogo className='w-36 mt-6' /></Link>
        </div>
        <div className={`absolute  md:right-1/3 md:top-16 bg-white bg-opacity-2 dark:bg-white p-8 rounded-lg md:w-1/3 shadow-md`}>
          {/* form start here */}
          {children}
          {/* form end here */}
        </div>
        <div className='absolute px-8 py-8 hidden sm:hidden md:block lg:block right-0 bottom-0'>
          <p className='flex items-center'>Need Help? <icons.ArtSecChatBot className='ml-2 cursor-pointer' /></p>
        </div>
      </div>
    </div>
  )
}

export default PublicLayout