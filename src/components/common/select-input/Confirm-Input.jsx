

import React from 'react';

const ConfirmInput = ({type, name, width, border, pad, textAlign, radius, placeholder, id, ...rest}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} id={id} {...rest} className={`${width} ${pad} ${textAlign} ${border} focus:bg-purple-900
     focus:text-white focus:outline-none focus:ring-0 ${radius}`} required/>
  )
}

export default ConfirmInput


