

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { publicEnpoints } from '../../../config/api.request';
import { icons } from '../../../constant/icon';
import { DashboardButton } from '../button';
import { ArtSecConfirmInput } from '../select-input';


const VerifiedAccount = () => {

    const email = localStorage.getItem('email');
    const [values, setValues] = useState(
        {
            box_1: '',
            box_2: '',
            box_3: '',
            box_4: ''
        }
    );

    const navigate = useNavigate();

    const updateFieldChanged = async (e) => {
        let newArr = values;
        let otp = '';
        newArr[e.target.name] = e.target.value
        setValues(newArr);


        for (const value in values) {
            if (values[value] === "") {
                return
            }
            otp += values[value];
        }

        const credentials = {
            otp,
            email
        }

        const data = await publicEnpoints.verify_account(credentials)

        if (data.err) {
            toast.error(data.err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            localStorage.removeItem('item');
            navigate('/account-activation');
        }

    }

    return (
        <div className='space-y-2'>
            <div className="justify-center items-center text-center space-y-2">
                <center><icons.ArtSecEmailVerifyIcon /></center>
                <h2 className='text-[18px] font-semibold py-1'>You're almost there</h2>
                <p className='text-[#3C4043] text-[15px] font-normal'>

                    Please, enter the four (4) digit code sent to you <b>{email}</b> to activate your account.
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
                        name="box_1"
                        onChange={(e) => updateFieldChanged(e)}

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
                        onChange={(e) => updateFieldChanged(e)}
                        name="box_2"
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
                        onChange={(e) => updateFieldChanged(e)}
                        name="box_3"
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
                        onChange={(e) => updateFieldChanged(e)}
                        name="box_4"
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