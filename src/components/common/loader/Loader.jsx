import React from 'react';
import { icons } from "../../../constant/icon";

const Loader = () => {
    return (


            <div class="fixed top-0 bottom-0 right-0 left-0 bg-white bg-opacity-[0.80] z-10 h-full w-full flex items-center justify-center">
                <div class="flex items-center space-x-5">
                   <icons.DataLoader />
                    <span class="text-xl">Fetching...</span>
                </div>
            </div>


    )
}

export default Loader