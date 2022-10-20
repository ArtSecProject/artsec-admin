
import React from 'react'

const MarketPlaceSelect = ({ category, children} ) => {
    return (
        <>
            <p className='flex justify-between space-x-2 items-center text-[15px] p-2 rounded-[10px] app-select cursor-pointer'>
                {category}:
                <select name="categories" id="" className='app-color bg-transparent font-medium pl-4 focus:ring-0 focus:outline-none'>
                    {children}
                </select>
            </p>
        </>
    )
}

export default MarketPlaceSelect