

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MartketButton } from ".";
import { privateEndpoints } from "../../../config/api.request";
import { marketPlace } from "../../../data/market-place";


const MarketPlaceProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await privateEndpoints.getProducts();
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
                setProducts(data.data.data)
            }
        })();
    }, [])

    console.log(products);

    return (
        <>
            {
                marketPlace.map((item, index) => (
                    <div key={index} className="bg-white shadow">
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

                            <div className="flex justify-between items-center py-2">
                                <Link to="/dashboard/artwork-details">
                                    <MartketButton
                                        className="flex justify-between items-center px-8 py-2 border border-[#4B006E] rounded-md cursor-pointer app-color hover:bg-[#4b006e] hover:text-white"
                                        title={item.bid}
                                        icon={item.bid_icon}
                                    />
                                </Link>
                                <div>
                                    {item.favourite}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default MarketPlaceProduct