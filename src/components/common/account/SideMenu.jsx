

import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div>
        <ul className='space-y-3 side__menu'>
            <li><Link to="dashboard/user-account">Profile</Link></li>
            <li>Notification</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default SideMenu