import React from 'react'

const Button = ({ title, icon, className }) => {
  return (
    <p className={className}
    >{icon} {title} </p>
  )
}

export default Button