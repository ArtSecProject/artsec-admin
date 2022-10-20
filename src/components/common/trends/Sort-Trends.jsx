

import React from 'react'
// import { ArtSecSelectInput } from '../select-input';
import { ArtSecSelectInput } from "..";
import CompareTrend from "./Compare-Trend"

const SortTrend = () => {
    return (
        <div className='block sm:block md:block lg:flex xl:flex justify-between items-center mt-10 space-y-2'>
            <div className='flex justify-center items-center space-x-3'>
                <ArtSecSelectInput
                    className="bg-transparent font-medium p-2 border border-black focus:ring-0 focus:outline-none rounded-md"
                >
                    <option defaultValue>Last 7 Days</option>
                </ArtSecSelectInput>

                <ArtSecSelectInput
                    className="bg-transparent font-medium p-2 border border-black focus:ring-0 focus:outline-none rounded-md"
                >
                    <option defaultValue>Best Performing</option>
                </ArtSecSelectInput>
            </div>
            <CompareTrend />
        </div>
    )
}

export default SortTrend