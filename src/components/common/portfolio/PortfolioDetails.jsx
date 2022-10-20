import React from 'react';
import portfolio from '../../../data/portfolio';
import { icons } from '../../../constant/icon';
import { DashboardButton } from '../../common';
import { Link } from 'react-router-dom';

const PortfolioDetails = () => {

    return (
        <>
            {portfolio.map((item, index) => (
                <div key={index} className='justify-between items-center bg-white space-x-1 rounded-md'>
                    <div className='flex space-x-2 '>
                        <img src={item.img} alt="" className='w-28 h-full rounded-bl-md rounded-tl-md' />
                        <div className='pb-2'>
                            <p className='app-name'>{item.title}</p>
                            <p className='text-[15px] font-normal text-[#606C84]'>{item.name}</p>

                            <p className='text-[15px] font-normal pt-3 text-[#606C84]'>{item.desc}</p>
                            <p className='app-name'>{item.rate}</p>

                            <p className='pt-2 text-[#606C84] text-[15px]'>{item.appr}</p>
                            <div className='flex justify-start items-center text-center'>
                                <p className='text-[#36D39E] text-base' >{item.rankIcon}</p>
                                <p className='app-name text-[#36D39E]'>{item.rankTotal}</p>
                                <span className='text-[12px] text-[#606C84] pl-1'>{item.weeks}</span>
                            </div>
                        </div>
                    </div>
                    <DashboardButton
                        className="flex justify-center items-center space-x-2 bg-white hover:bg-[#4B006E] px-3 sm:px-3 md:px-3 lg:px-8 py-2 border border-[#4B006E] rounded-md cursor-pointer app-color hover:text-white"
                        title={<Link to="">View Certificate</Link>}
                        icon={<icons.ArtSecCertificate />}
                    />
                </div>

            ))}
        </>
    )
}

export default PortfolioDetails