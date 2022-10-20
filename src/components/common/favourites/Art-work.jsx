import React from 'react';
import { MartketButton } from '../dashboard-card';
import { DashboardButton } from '../button';
import { data } from '../../../data/favorite-artwork';

const ArtWork = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center gap-3'>
            {
                data.map((item, id) => (
                    <div key={id} className='block sm:block md:block lg:flex xl:flex 2xl:flex space-y-2 md:space-y-0 space-x-0 md:space-x-2 bg-white shadow'>
                        {item.img}
                        <div className="p-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className='text-[18px] font-semibold'>{item.title}</p>
                                    <p className='text-[15px] font-normal text-[#1B1F28]'>{item.product_by}</p>
                                </div>
                                <MartketButton
                                    className="flex justify-between items-center p-2 bg-[#D1FAEC] border border-[#36D39E] rounded-[10px] cursor-pointer text-[#1B1F28]"
                                    title={item.rate}
                                    icon={item.rate_icon}
                                />
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <div>
                                    <p className='text-[15px] font-normal text-[#606C84]'>{item.sales}</p>
                                    <p className='text-[18px] font-semibold'>$ {item.sales_amt}</p>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal text-[#606C84]'>{item.purchase}</p>
                                    <p className='text-[18px] font-semibold'>$ {item.purchase_amt}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center space-x-2 py-2">
                                <DashboardButton
                                    className="flex w-full justify-center items-center px-3 sm:px-3 md:px-3 lg:px-8 py-2 border border-[#4B006E] rounded-md cursor-pointer app-color"
                                    title={item.bid}
                                    icon={item.bid_icon}
                                />
                                <div>
                                    <DashboardButton
                                        className="flex w-full justify-center items-center bg-red-600 px-3 sm:px-3 md:px-3 lg:px-8 py-2 border border-red-600 rounded-md cursor-pointer text-white"
                                        title={item.delete}
                                        icon={item.delete_icon}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ArtWork