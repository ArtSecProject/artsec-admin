

import React from 'react'
import { DashboardButton } from '../button';
import ArtSecModal from '../modal/Modal';
import AppHeading from "../heading/Heading";
import { icons } from '../../../constant/icon';


const WithdrawalSuccessful = () => {
    return (
        <ArtSecModal width="w-96" title="Withdrawal Success">

            <div className='flex justify-center items-center space-x-2 py-4'>
                <icons.ArtSecWithdrawalSuccessIcon />
            </div>

            <div className='-mt-10'>
                <AppHeading desc={<p>Withdrawal was Successful</p>} />
            </div>

            <div className='py-3'>
                <DashboardButton
                    className="app-btn p-3 text-center rounded-lg text-white cursor-pointer"
                    title="Finish"
                />
            </div>
        </ArtSecModal>
    )
}

export default WithdrawalSuccessful