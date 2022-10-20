

import React from 'react'
import { DashboardLayout, UserInvestmentHistory, } from '../../components/common'

const InvestmentHistory = () => {
  return (
    <DashboardLayout>
      <div className='mt-24 mx-6 mb-10'>
        <div className='w-full sm:w-full md:w-full lg:w-full'>
          <UserInvestmentHistory />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default InvestmentHistory