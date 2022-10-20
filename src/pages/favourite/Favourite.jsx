import React from 'react';
import { AppHeading, ArtWorkItems, DashboardLayout, FavoriteArtist, FavoriteTab } from '../../components/common';
import { useStateContext } from '../../contexts/ContextProvider';



const Projects = () => {
  const { view } = useStateContext();


  return (
    <>
      <DashboardLayout>
        <div className='mt-24 mx-6 mb-10'>

          {/* favorite art work */}
          <div>
            <AppHeading 
              title="Favorites"
              desc="This shows all your favorite artworks and artists so that you can monitor them closely."
            />
           
            <FavoriteTab
              tabText1="Artworks"
              tabText2="Artist"
            >
                {view === "tab1" ? <ArtWorkItems /> : <FavoriteArtist />}
            </FavoriteTab>

          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Projects