import React from 'react'

const DashboardButton = ({ title, icon, className, customFunc, }) => {
  return (
    <p className={className}
      onClick={customFunc}
    >
      {icon} {title}
    </p>
  )
}

export default DashboardButton