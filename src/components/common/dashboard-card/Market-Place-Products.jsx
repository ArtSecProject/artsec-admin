import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MartketButton } from ".";
import { DataLoader } from "..";
import { icons } from "../../../constant/icon";
import { app } from "../../../config/app";
import { privateEndpoints } from "../../../config/api.request";
import { useSelector } from "react-redux";

const imgUrl = app.imgBaseUrl;

const MarketPlaceProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { access_token } = useSelector(state => state.auth)


    useEffect(() => {

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        privateEndpoints.fetchProducts(setProducts, access_token);
    }, [])



    return (
        <>
            {isLoading ? <DataLoader /> :
                <>
                    {
                        products.map((item, index) => (
                            <div key={index} className="bg-white shadow">
                                <img src={imgUrl + item.img} alt="No ProductImage" className="w-full h-48" />

                                <div className="p-2">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className='text-[18px] font-semibold'>{item.name}</p>
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
                                            <p className='text-[15px] font-normal text-[#606C84]'>Sale Price</p>
                                            <p className='text-[18px] font-semibold'>$ {item.sale_price}</p>
                                        </div>
                                        <div>
                                            <p className='text-[15px] font-normal text-[#606C84]'>Purchase Price</p>
                                            <p className='text-[18px] font-semibold'>$ {item.purchase_price}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-2">
                                        <Link to={"/dashboard/artwork-details/" + item.id}>
                                            <MartketButton
                                                className="flex justify-between items-center px-8 py-2 border border-[#4B006E] rounded-md cursor-pointer app-color hover:bg-[#4b006e] hover:text-white"
                                                title='Place a Bid'
                                                icon={<icons.ArtSecPlaceBid className='mr-2' />}
                                            />
                                        </Link>
                                        <div onClick={() => privateEndpoints.handleLike(item.id, setProducts, products)}>

                                            {item.favourite ? <icons.ArtSecLike className="cursor-pointer text-[2rem] text-red-700" /> : <icons.ArtSecDislike className="cursor-pointer text-[2rem] text-[#4B006E]" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </>
            }
        </>
    )
}

export default MarketPlaceProduct