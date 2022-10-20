

import React from "react";
import { Link } from "react-router-dom";
import { collection } from "../../../data/collection-data";



const ArtworksCollection = () => {
    return (
        <>
            {
                collection.map((item, index) => (
                    <Link to="/dashboard/collection-details">
                        <div key={index.id} className="bg-white shadow">
                            {item.img}
                            <div className="p-2">
                                <div className="flex justify-between items-center py-2">
                                    <div>
                                        <p className='text-[18px] font-semibold app-color'>{item.title}</p>
                                        <p className='text-[15px] font-normal'>{item.artwork_values} Artworks</p>
                                    </div>
                                    <div className="justify-end items-end text-right ">
                                        <p className='text-[18px] font-semibold'>$ {item.collected_values}</p>
                                        <p className='text-[15px] font-normal app-text-secondary'>Collected Values</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default ArtworksCollection