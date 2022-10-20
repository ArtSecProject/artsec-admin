

import React from 'react';
import { icons } from '../../../constant/icon';

const AmountInput = ({ name, type, placeholder, ...rest }) => {
    return (
        <div className='flex justify-center text-center items-center border-2 border-gray-300 rounded-lg space-x-2 px-4 py-2'>
            <icons.ArtSecCurrencyIcon /> <icons.ArtSecCurrencyLineIcon />
            <input type={type} name={name} placeholder={placeholder} {...rest} className='w-full text-2xl border-none focus:outline-none focus:ring-0 bg-transparent' />
        </div>
    )
}

export default AmountInput