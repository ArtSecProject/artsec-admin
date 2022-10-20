
import React from 'react';
import { icons } from '../../../constant/icon';
import { data } from '../../../data/favorite-artist';
import { DashboardButton } from '../button';



const Artists = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center items-center gap-2'>

            {
                data.map((item, id) => (
                    <div key={id} className='block sm:block md:block lg:block xl:block 2xl:block space-y-2 md:space-y-0 space-x-0 md:space-x-2 border border-black justify-center items-center  px-5 py-5'>
                        <center>
                           {item.img}
                            <h2 className='app-color py-4 font-semibold text-xl'>{item.title}</h2>
                            <p className='flex justify-center items-center pb-3'><icons.ArtSecMap className='mr-3 text-gray-400' /> Nigeria</p>
                            <div className='flex justify-center items-center space-x-4'>
                                <DashboardButton
                                    className="flex justify-center items-center bg-red-600 px-3 sm:px-3 md:px-3 lg:px-8 py-2 border border-red-600 rounded-md cursor-pointer text-white"
                                    title="remove"
                                    icon={<icons.ArtSecDelete />}
                                />
                                <div>
                                    <p className="font-semibold text-lg">3</p>
                                    <p className='font-normal text-[15px]'>Artwork</p>
                                </div>
                            </div>
                        </center>
                    </div>
                ))
            }

        </div>
    )
}

export default Artists