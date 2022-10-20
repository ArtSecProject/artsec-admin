import React from 'react';
import { icons } from "../../../constant/icon";
import AppHeading from "../heading/Heading";
import { UserImg } from "../../../assets/import"

const ArtistArtworks = () => {
  return (
    <>
      <center>
        <img src={UserImg} alt="artist" className='w-24 h-24 border-2 border-purple-900 rounded-full' />
      </center>
      <AppHeading
        title="Ola Samson"
        desc={
          <div className='flex justify-center text-center items-center space-x-3'>
            <p>Joined Sept. 2022</p>
            <p className='flex items-center'><icons.ArtSecMap className='app-text-secondary mr-1' />Nigeria</p>
          </div>
        }
      />

      <div className='-mt-10'>
        <AppHeading
          desc={
            <p className='flex justify-center items-center text-center mx-40'>
              A professional artist and with an arsenal consisting of a variety of art techniques,
              genres, and manners I in. I cooperate with leading magazines and agencies of many
              countries, the art is published in the USA, UK, Australia, Ukraine, Russia, etc.
            </p>
          }
        />
      </div>

      {/* social handle links */}
      <div className='justify-center items-center text-center py-3'>
        <p className='app-text-secondary'>Follow Ola’s Socials</p>
        <div className='flex space-x-2 justify-center items-center pt-2 pb-4'>
          <icons.ArtSecWhatsApp className="cursor-pointer" />
          <icons.ArtSecFacebook2 className="cursor-pointer" />
          <icons.ArtSecInstagram className="cursor-pointer" />
          <icons.ArtSecTwitter2 className="cursor-pointer" />
        </div>

        <p className='flex justify-center items-center app-text-secondary cursor-pointer'>
          <icons.ArtSecArtistDomain className="mr-2" />
            olasamson.com
        </p>
      </div>

      <div className='flex justify-center items-center space-x-10 py-3'>
        <p className='flex items-center text-lg font-bold app-color cursor-pointer'><icons.ArtSecFavourite className="mr-2" /> Add to Favourite</p>
        <div className='flex items-center space-x-3'>
          <p className="p-4 rounded-full app-select cursor-pointer"><icons.ArtSecShare /></p>
          <p className="px-[25px] py-[18px] rounded-full app-select cursor-pointer"><icons.ArtSecMenuDot /></p>
        </div>
      </div>
      {/* social links end */}


    </>
  )
}

export default ArtistArtworks