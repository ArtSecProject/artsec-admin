
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MartketButton } from ".";
import { DataLoader } from "..";
import { icons } from "../../../constant/icon";
import { app } from "../../../config/app";
import { handleLike } from "../../../config/api.request";

const baseUrl = app.apiBaseUrl;
const imgUrl = app.imgBaseUrl;

const MarketPlaceProduct = () => {
    const { access_token, user } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    
    useEffect(() => {

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        (async () => {

            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${access_token}`, "Content-type": "application/json"
                    },
                };
                const { data } = await axios.get(`${baseUrl}/get_products`, config);
                setProducts(data.data.data);

            } catch (err) {
                toast.error(err.message, {
                    position: "top-right",
                });
            }

        })();
    }, [access_token])


    console.log(products);

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
                                        <div onClick={() => handleLike(item.id, user, access_token, baseUrl, setProducts, products)}>

                                            {item.favourite ? <icons.ArtSecFavourite color="red" /> : <icons.ArtSecFavourite color="orange" />}
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