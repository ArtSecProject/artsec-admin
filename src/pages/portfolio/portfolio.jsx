import React from 'react';
import { PortfolioDetails, DashboardLayout, ArtSecSelectInput, PortfolioRating,  } from '../../components/common';



const Portfolio = () => {

  return (
    <>
      <DashboardLayout>
        <div className='mt-24 mx-6 mb-10'>

        {/* Portfolio Rating */}
        <PortfolioRating />

          {/* Portfolio Sorting */}
          <div className='block sm:block md:flex lg:flex justify-between items-center py-6 space-y-2 md:space-y-0'>
            <h2 className='app-color app-title'>My Portfolio</h2>
            <div className='block sm:block md:flex lg:flex space-x-0 md:space-x-2 space-y-2 md:space-y-0 justify-center items-center'>
              <ArtSecSelectInput
                className="w-full app-select font-medium focus:ring-0 focus:outline-none p-2 rounded-md"
              >
                <option defaultValue>Sort by</option>
              </ArtSecSelectInput>

              <ArtSecSelectInput
                className="w-full app-select font-medium focus:ring-0 focus:outline-none p-2 rounded-md"
              >
                <option defaultValue>Filter</option>
              </ArtSecSelectInput>
            </div>
          </div>


          {/* Portfolio Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 pb-0 md:pb-5">
            <PortfolioDetails />
          </div>
          {/* card end here */}
        </div>
      </DashboardLayout>
    </>
  )
}

export default Portfolio