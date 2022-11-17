

import React from 'react';
import { icons } from '../../../constant/icon';


const VerifiedAccount = () => {

    const email = localStorage.getItem('email')

    return (
        <div className='space-y-2'>
            <div className="justify-center items-center text-center space-y-2">
                <center><icons.ArtSecEmailVerifyIcon /></center> 
                <h2 className='text-[18px] font-semibold py-1'>You're almost there</h2>
                <p className='text-[#3C4043] text-[15px] font-normal'>
                    Please activate your account by clicking on the link we’ve just sent to your <b>{email}</b>.
                </p>
                <p className='text-[#3C4043] text-[15px] font-normal'>
                    Didn’t receive an email? Check your spam folder or try
                    <span className='text-blue-500 cursor-pointer ml-1'>
                        resending it.
                    </span>
                </p>
            </div>

        </div>
    )
}

export default VerifiedAccount