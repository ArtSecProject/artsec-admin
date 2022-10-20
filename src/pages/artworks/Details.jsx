

import React from 'react'
import { AppHeading, ArtWorkDetails, DashboardLayout, MarketPlaceProducts } from '../../components/common'

const Details = () => {
  return (
    <DashboardLayout>
      <div className='mt-24 mx-6 mb-10'>
        <ArtWorkDetails />

        {/* more artwork from the creator */}
        <div className='pt-8 pb-12'>
          <AppHeading title="More from this creator" className="text-left pb-5" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
            <MarketPlaceProducts />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Details