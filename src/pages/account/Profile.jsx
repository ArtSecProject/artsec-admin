

import React from 'react'
import { DashboardLayout, UserProfile } from '../../components/common'

const Profile = () => {
  return (
    <DashboardLayout>
      <div className='mt-24 mx-6 mb-10'>
        <div className='w-full sm:w-full md:w-full lg:w-2/3'>
          <UserProfile />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Profile