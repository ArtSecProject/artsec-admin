import React from 'react';
import { icons } from '../../../constant/icon';

const SearchInput = () => {
    return (
        <>
            <div class="flex items-center">
                 <div className="flex items-center border rounded-md bg-white px-2.5 py-2">
                    <icons.SearchIcon className="text-lg block float-left cursor-pointer mr-2"/>
                    <input type={"search"} placeholder="search" className="text-base bg-transparent w-full focus:outline-none" />
                </div>
            </div>
        </>
    )
}

export default SearchInput