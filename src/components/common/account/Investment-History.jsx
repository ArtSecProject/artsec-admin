

import React from 'react';
import { InvestmentCompleted, InvestmentInProgress } from '.';
import { Div } from '../../../style-component';


const InvestmentHistory = () => {

    return (
        <>
            <div className='pb-6'>
                <Div.ArtSecHeading title="Investment History" />
            </div>


            {/* in progress */}
            <Div.Label>
                <p className='text-[15px] font-semibold py-2'>In-progress</p>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
                    <InvestmentInProgress />
                </div>
            </Div.Label>


            {/* completed */}
            <Div.Label>
                <p className='text-[15px] font-semibold py-2 mt-9'>Completed</p>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
                    <InvestmentCompleted />
                </div>
            </Div.Label>
        </>
    )
}

export default InvestmentHistory