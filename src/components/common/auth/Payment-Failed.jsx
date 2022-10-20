

import React from 'react'
import { DashboardButton } from '../button';
import ArtSecModal from '../modal/Modal';
import AppHeading from "../heading/Heading";
import { icons } from '../../../constant/icon';
import { Link } from 'react-router-dom';


const AccountPaymentFailed = () => {
    return (
        <ArtSecModal width="w-96" title="Opps! Payment Failed">

            <div className='flex justify-center items-center space-x-2 py-4'>
                <icons.PaymentFailed />
            </div>

            <div className='-mt-10'>
                <AppHeading desc={<p>Sorry, your wallet top up failed due to an error.</p>} />
            </div>

            <div className='py-3'>
                <Link to='/fund-wallet'>
                    <DashboardButton
                        className="app-btn p-3 text-center rounded-lg text-white cursor-pointer"
                        title="Try Again"
                    />
                </Link>
            </div>
        </ArtSecModal>
    )
}

export default AccountPaymentFailed