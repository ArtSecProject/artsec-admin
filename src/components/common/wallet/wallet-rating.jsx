

import React from 'react'
import { AppHeading } from '..'

const WalletRating = () => {
    return (
        <>
            <AppHeading title={<h2 className='text-black'>Wallet</h2>} />

            {/* portfolio total summary */}
            <AppHeading
                title={<p className='app-color'>$ 5.676638 <span className='text-sm font-medium mt-2 pl-3'>USD</span></p>}
                desc={<p className='text-[#606C84]'>Total Balance</p>}
            />
        </>
    )
}

export default WalletRating