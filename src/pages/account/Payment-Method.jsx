



import React from 'react'
import { DashboardLayout, PaymentMethod } from '../../components/common'

const Payment__Method = () => {
  return (
    <DashboardLayout>
      <div className='mt-24 mx-6 mb-10'>
        <div className='w-full sm:w-full md:w-full lg:w-full'>
          <PaymentMethod/>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Payment__Method