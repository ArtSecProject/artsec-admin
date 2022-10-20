import React from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import { icons } from '../../../constant/icon';

const ArtSecModal = ({ title, children, width }) => {
  const { setIsClicked } = useStateContext();

  return (
    <div className='fixed w-[100vw] h-[100vh] top-0 right-0 left-0 bottom-0 justify-center items-center' style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "9999999" }}>
      <div className='flex justify-center items-center'>
        <div className={`${width} shadow rounded-md bg-white p-4 mt-20`}>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <div className="flex gap-3">
              <p className="font-semibold text-lg dark:text-black">{title}</p>
            </div>
            {/* chat close button */}
            <icons.CloseIcon onClick={() => setIsClicked(false)} />
          </div>
          {/* form start here */}
          {children}
          {/* form end here */}
        </div>
      </div>
    </div>
  )
}

export default ArtSecModal