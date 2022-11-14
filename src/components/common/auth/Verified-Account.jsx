

import React from 'react';
import { icons } from '../../../constant/icon';
import { DashboardButton } from '../button';
import { ArtSecConfirmInput } from '../select-input';


const VerifiedAccount = () => {


    return (
        <div className='space-y-2'>
            <div className="justify-center items-center text-center space-y-2">
                <center><icons.ArtSecEmailVerifyIcon /></center>
                <h2 className='text-[18px] font-semibold py-1'>You're almost there</h2>
                <p className='text-[#3C4043] text-[15px] font-normal'>
                    Please, enter the four (4) digit code sent to you <b>godwincahua@gmail.com</b> to activate your account.
                </p>
                {/* <p className='text-[#3C4043] text-[15px] font-normal'>
                    Didn’t receive an email? Check your spam folder or try
                    <span className='text-blue-500 cursor-pointer ml-1'>
                        resending it.
                    </span>
                </p> */}
                <div className='flex justify-center items-center space-x-2 py-4'>
                    <ArtSecConfirmInput
                        type="text"
                        placeholder="0"
                        maxLength={1}
                        width="w-10"
                        border='border border-purple-900'
                        radius="rounded-[3px]"
                        pad="p-2"
                        textAlign="text-center"
                    />

                    <ArtSecConfirmInput
                        type="text"
                        placeholder="0"
                        maxLength={1}
                        width="w-10"
                        border='border border-purple-900'
                        radius="rounded-[3px]"
                        pad="p-2"
                        textAlign="text-center"
                    />

                    <ArtSecConfirmInput
                        type="text"
                        placeholder="0"
                        maxLength={1}
                        width="w-10"
                        border='border border-purple-900'
                        radius="rounded-[3px]"
                        pad="p-2"
                        textAlign="text-center"
                    />

                    <ArtSecConfirmInput
                        type="text"
                        placeholder="0"
                        maxLength={1}
                        width="w-10"
                        border='border border-purple-900'
                        radius="rounded-[3px]"
                        pad="p-2"
                        textAlign="text-center"
                    />

                </div>

                <div className='py-3'>
                    <DashboardButton
                        className="app-btn p-3 text-center rounded-lg text-white cursor-pointer"
                        title="Confirm"
                    />
                </div>
            </div>

        </div>
    )
}

export default VerifiedAccount