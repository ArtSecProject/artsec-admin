

import React from 'react';
import ArtSecModal from "../modal/Modal";
import { icons } from '../../../constant/icon';
import { DashboardButton } from '../button';
import { Link } from 'react-router-dom';

const BidSuccess = ({ label }) => {
    return (
        <ArtSecModal width="w-96" title="Congratulation">
            <center className="py-5">
                <icons.ArtSecCongratulation />
                <p className='app-text text-lg pt-5'>{label}</p>
            </center>
            
            <div className='justify-center items-center text-center'>
                <Link to="#">
                    <DashboardButton
                        title="See Details"
                        className="w-full p-3 app-btn rounded-md text-lg font-bold text-white mb-3"
                    />
                </Link>

                <Link to="/dashboard/overview" className='app-color text-lg font-bold'>Go to Market Place</Link>
            </div>
        </ArtSecModal>
    )
}

export default BidSuccess