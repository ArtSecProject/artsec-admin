

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MartketButton } from ".";
import { icons } from "../../../constant/icon";


const MarketPlaceProduct = () => {
    const { access_token } = useSelector(state => state.auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {

            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${access_token}}`, "Content-type": "application/json"
                    },
                };
                const { data } = await axios.get('https://artsec-service-cjfd8.ondigitalocean.app/api/v1/get_products', config);
                setProducts(data.data.data)
            } catch (err) {
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        })();
    }, [access_token])

    console.log(products);

    return (
        <>
            {
                products.map((item, index) => (
                    <div key={index} className="bg-white shadow">
                        <img src={'https://artsec-service-cjfd8.ondigitalocean.app/api/v1/get_path?img_path=' + item.img} alt="" className="w-full h-48" />
                        <div className="p-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className='text-[18px] font-semibold'>{item?.title}</p>
                                    <p className='text-[15px] font-normal text-[#1B1F28]'>{item?.product_by}</p>
                                </div>
                                <MartketButton
                                    className="flex justify-between items-center p-2 bg-[#D1FAEC] border border-[#36D39E] rounded-[10px] cursor-pointer text-[#1B1F28]"
                                    title={item?.rate}
                                    icon={<icons.ArtSecPlaceBid className='mr-2' />}
                                />
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <div>
                                    <p className='text-[15px] font-normal text-[#606C84]'>{item?.sales}</p>
                                    <p className='text-[18px] font-semibold'>$ {item.sale_price}</p>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal text-[#606C84]'>{item?.purchase}</p>
                                    <p className='text-[18px] font-semibold'>$ {item.purchase_price}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2">
                                <Link to="/dashboard/artwork-details">
                                    <MartketButton
                                        className="flex justify-between items-center px-8 py-2 border border-[#4B006E] rounded-md cursor-pointer app-color hover:bg-[#4b006e] hover:text-white"
                                        title={<icons.ArtSecPlaceBid className='mr-2' />}
                                        icon={<icons.ArtSecFavourite />}
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