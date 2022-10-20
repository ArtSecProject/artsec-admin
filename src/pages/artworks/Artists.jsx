

import React from 'react'
import { ArtistArtworks, ArtworkCollections, DashboardLayout, FavoriteTab, MarketPlaceProducts } from '../../components/common';
import { useStateContext } from '../../contexts/ContextProvider';

const Details = () => {
  const { view } = useStateContext();

  return (
    <DashboardLayout>
      <div className='mt-24 mx-6 mb-10'>
        <ArtistArtworks />

        {/* more artwork from the creator */}
        <div className='pt-8 pb-12 -mt-10'>
          {/* <AppHeading title="More from this creator" className="text-left pb-5" /> */}
          <FavoriteTab
            tabText1="All Artworks"
            tabText2="Collections"
          >
            {view === "tab1" ?
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                <MarketPlaceProducts />
              </div>
              :
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                <ArtworkCollections />
              </div>
            }
          </FavoriteTab>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default Details