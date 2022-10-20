

import React from 'react';
import { MarketItem1 } from '../../../assets/import';
import { TrendChart } from '../charts';
import { ArtSecSelectInput } from '../select-input';
import { collection2 } from '../../../data/collection-data';



const CollectionDetails = () => {
    return (
        <>
            <div className='block sm:block md:block lg:flex space-x-0 lg:space-x-3 py-4 px-2 lg:px-1 lg:py-0 space-y-4 lg:space-y-0'>
                {/* image products */}
                <div className='w-full sm:w-full md:w-full lg:w-80 xl:w-80 2xl:w-80'>
                    <div className='w-full sm:w-full md:w-full lg:w-80 h-full sm:h-full md:h-full lg:h-28'>
                        <img src={MarketItem1} alt="artwork_name" className='w-full h-full sm:h-full md:h-full lg:h-28' />
                    </div>

                    <div className=''>
                        <h2 className='py-3 text-2xl font-bold app-color'>Achal</h2>
                        <p className='text-[18px] font-normal app-text-secondary pb-3'>13 Artworks</p>
                        <div>
                            <span className='text-[#606C84] text-[15px] font-normal'>Description</span>
                            <p className='app-text text-[15px] font-normal'>When we found Pastil, his eyes were infected and his mom was missing,
                                we brought him home for his treatment, that's how we fell in love with him and he became a member of our family.
                            </p>
                        </div>
                    </div>
                </div>

                {/* charts col */}
                <div className='w-full sm:w-full md:w-full lg:w-2/4 px-2 lg:px-1'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 pb-2'>
                        {collection2.map((item, index) => (
                            <div key={index.id} className='border border-gray-300 p-3 rounded-lg'>
                                <p className='text-[15px] font-normal'>{item.title}</p>
                                <h2 className="text-2xl font-bold text-[#1B1F28]">$ {item.rate}</h2>
                            </div>
                        ))}
                    </div>

                    {/* charts */}
                    <div className='border border-gray-300 rounded-md p-3'>
                        <div className='flex justify-between items-center pb-3'>
                            <p className="text-lg font-normal">Performance over time</p>
                            <ArtSecSelectInput className="bg-[#F2F3F8] rounded-[10px] p-2">
                                <option value="">All Time</option>
                            </ArtSecSelectInput>
                        </div>
                        <TrendChart />
                    </div>
                </div>

                {/* right cols */}

                <div className='space-y-2 lg:space-y-2'>
                    <p className='text-[15px] font-bold'>Asset Class Comparison:</p>
                    <div className='space-y-2 lg:space-y-2 '>
                        <ArtSecSelectInput className='w-full app-border rounded-lg px-2 py-3 text-2xl font-normal'>
                            <option defaultValue>S&P 500</option>
                        </ArtSecSelectInput>
                        <div className='w-full border text-center border-gray-300 rounded-lg px-16 py-1'>
                            <p className='text-[15px] font-normal'>S&P 500</p>
                            <h2 className="text-xl font-bold text-[#1B1F28]">$ 4.57</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionDetails