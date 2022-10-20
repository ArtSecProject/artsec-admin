
import React from 'react'
import { DashboardButton } from '../button';
import ArtSecModal from '../modal/Modal';
import AppHeading from "../heading/Heading";
import { icons } from '../../../constant/icon';
import { Link } from 'react-router-dom';


const AccountPaymentConfirmed = () => {
    return (
        <ArtSecModal width="w-96" title="Payment Confirmed">

            <div className='flex justify-center items-center space-x-2 py-4'>
                <icons.ArtSecWithdrawalSuccessIcon />
            </div>

            <div className='-mt-10'>
                <AppHeading desc={<p>Wallet Balance</p>} />
                <center className='text-[#0DA471] text-4xl'>$ 686</center>
            </div>

            <div className='py-3'>
                <Link to="/account-activation-completed">
                    <DashboardButton
                        className="app-btn p-3 text-center rounded-lg text-white cursor-pointer"
                        title="Finish"
                    />
                </Link>
            </div>
        </ArtSecModal>
    )
}

export default AccountPaymentConfirmed