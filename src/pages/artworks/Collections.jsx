



import React from 'react'
import { CollectionDetails, DashboardLayout,   MarketPlaceProducts } from '../../components/common';


const Collections = () => {


  return (
    <DashboardLayout>

      <div className='mt-24 mx-6 mb-10'>
        <CollectionDetails />

        {/* more artwork from the creator */}
        <div className='pt-8 pb-12 mt-10'>
          {/* <AppHeading title="More from this creator" className="text-left pb-5" /> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                <MarketPlaceProducts />
              </div>

        </div>
      </div>

    </DashboardLayout>
  )
}

export default Collections