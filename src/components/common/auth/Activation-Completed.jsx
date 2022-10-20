


import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../../../style-component';
import { icons } from '../../../constant/icon';



const AccountActivationCompleted = () => {


    return (
        <div className='space-y-2'>
            <div className="justify-center items-center text-center space-y-2">
                <h2 className='app-color text-xl font-bold'>Account Activation Completed</h2>
            </div>
            <center>
                <icons.AccountActivationCompleted />

                <p className='text-[#3C4043] text-[15px] font-normal py-3'>
                    You can now enter the market place and start bidding for your
                    favorite African artworks, drawn by the best artists around Africa.
                </p>
            </center>

            <Link to="/">
                <Div.Button
                    desc="View Dashboard"
                    bgColor="app-btn"
                    color="text-white"
                    padding="p-3"
                    width="w-full"
                />
            </Link>
        </div>

    )
}

export default AccountActivationCompleted