import React from 'react';
import { data } from '../../../data/trends';
// import { TrendChart } from '../charts';

const Trends = () => {
    return (
        <>
            {data.map((item, id) => (
                <div key={id} className='border border-black p-4 rounded-md'>
                    <div className='block sm:block md:block lg:flex xl:flex 2xl:flex space-x-2'>
                        {item.img}
                        <div className='space-y-7 items-center'>
                            <div>
                                <p className='text-[18px] font-semibold'>{item.title}</p>
                                <p className='text-[15px] font-normal text-[#1B1F28]'>{item.product_by}</p>
                            </div>
                            <div className='flex space-x-4 justify-end items-center text-right'>
                                <p className='text-[15px] font-normal text-[#1B1F28]'>{item.bid}</p>
                                <p className='text-[18px] font-semibold'>$ {item.rate}</p>
                            </div>
                        </div>
                    </div>

                    {/* trend chart */}
                    {/* <div className='py-2'> <TrendChart /></div> */}
                </div>
            ))}
        </>
    )
}

export default Trends