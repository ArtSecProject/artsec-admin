import React from 'react';
import { icons } from '../../constant/icon';
import { DashboardCard, DashboardLayout, MarketSelectInput, MarketPlaceProducts, MartketButton } from '../../components/common';
import { Link } from 'react-router-dom';





const Overview = () => {


  return (
    <>
      <DashboardLayout>
        <div className='mt-24 mx-6 mb-10'>

          <div className='block md:flex justify-between items-center pt-2 pb-4'>
            <h2 className='app-color app-title'>My Portfolio</h2>
            <MartketButton
              className="flex justify-between app-select items-center p-2 rounded-[10px] cursor-pointer"
              title={<Link to="/dashboard/porfolio">View All</Link>}
              icon={<icons.ArtSecArrowRight className='ml-2' />}
            />
          </div>

          {/* card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
            <DashboardCard />
          </div>
          {/* card end here */}

          {/* market place */}
          <div className='py-10'>
            <div className='block md:flex justify-start space-x-4 items-center py-2 '>
              <h2 className='app-color app-title'>Market Place</h2>
              <MarketSelectInput category="Categories">
                <option defaultValue>Abstract</option>
              </MarketSelectInput>

              <MarketSelectInput category="Sort by">
                <option defaultValue>Newest</option>
              </MarketSelectInput>
            </div>

            {/* market place items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
              <MarketPlaceProducts />
            </div>
          </div>
        </div>
      </DashboardLayout>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </>
  )
}

export default Overview