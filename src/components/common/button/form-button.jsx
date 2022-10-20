import React from 'react'

const FormButton = ({ item, bgColor }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, }}
        className='flex w-32 justify-center items-center rounded-md p-2.5 cursor-pointer text-white'
      >
        {item}
      </button>
    </div>
  )
}

export default FormButton