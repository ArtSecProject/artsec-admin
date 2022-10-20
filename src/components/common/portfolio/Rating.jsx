import React from 'react'
import { AppHeading } from '..'
import { total } from '../../../data/portfolio'

const Rating = () => {
    return (
        <div>
            <AppHeading title={<h2 className='text-black'>Portfolio Overview</h2>} />

            {/* portfolio total summary */}
            <AppHeading
                title={<p className='app-color'>$ 5.676638 <span className='text-sm font-medium mt-2 pl-3'>USD</span></p>}
                desc={<p className='text-[#606C84]'>Total Portfolio Values</p>}
            />

            <AppHeading desc={<p className='text-lg font-semibold pb-4 md:pb-6'>Your portfolio appreciated <span className='text-green-600'>$ 3.56 %</span> and is up to <span className='text-green-600'>$ 3.56 %</span> today</p>} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 py-4">
                {
                    total.map((item, index) => (
                        <div key={index.id} className="justify-center items-center text-center p-3 bg-white sm:bg-white md:bg-white lg:bg-none xl:bg-none shadow sm:shadow md:shadow lg:shadow-none xl:shadow-none rate-border">
                            <div className='flex space-x-3 justify-center items-center'>
                                <p className='flex space-x-3 text-2xl font-semibold'>$ {item.rate} </p>
                                <span className='text-sm mt-2 text-[#606C84] pl-4'>{item.currency}</span>
                            </div>
                            <p className='text-[#606C84]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Rating


