

import React, { useEffect, useState } from 'react';
import { Favourite1 } from '../../../assets/import';
import { data } from '../../../data/place-bid';
import { DashboardButton } from '../button';
import ArtSecModal from "../modal/Modal";
import { ArtSecConfirmInput } from '../select-input';
import ArtSectAmtInput from "../select-input/Amount-Input";
import ArtSecCheckBox from "../select-input/CheckBox";
import { icons } from '../../../constant/icon';
// import BidSuccess from './Bid-Success';


const BuyInSplit = () => {


  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <ArtSecModal width='w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2' title="Buy in Split">
      
      <>
        {/* left cols */}
        <div className='block sm:block md:block lg:flex xl:flex 2xl:flex space-x-0 lg:space-x-8 px-4 py-6 space-y-8 lg:space-y-0'>
          <div>
            <img src={Favourite1} alt="" className='w-40 h-40' />
            <div className='py-2'>
              <h2 className='app-color text-lg font-bold'>Achal</h2>
              <p className='app-text-secondary text-[15px] font-normal'>By Ola Samson</p>
              <p className='app-text font-bold text-[35px] leading-[47.66px]'>$ 456</p>
              <p className='app-text-secondary text-[15px] font-normal'>Current Price</p>
              <p className='border border-gray-300 rounded-lg p-2 text-xs mt-3'>There are only 46 units (shares) left</p>
            </div>
          </div>

          {/* right cols */}
          <div className='w-full'>
            {data.map((item, index) => (
              <div key={index.id} className='flex justify-between items-center text-center space-y-1'>
                <p className='text-[15px] font-normal app-text'>{item.desc}</p>
                <p className='app-color text-[18px] font-bold'>{item.value}</p>
              </div>
            ))}
            <div className='flex justify-between items-center text-center space-y-1'>
              <p className='text-[15px] font-normal'>Also listed and certified in</p>
              <p className='app-color text-[18px] font-bold'>sec.gov/edgar</p>
            </div>


            {/* your bid */}
            <div className='py-4'>
              <div className='flex items-center space-x-2'>
                <label htmlFor="" className="text-lg">
                  <p className='app-text'>No. of Unit</p>
                  <ArtSecConfirmInput
                    type="text"
                    name="unit"
                    placeholder="0.00"
                    width='w-full'
                    border="border-2 border-gray-300"
                    radius="rounded-lg" 
                    pad="p-3"
                    textAlign="text-left"
                  />
                </label>
                <label htmlFor="" className="text-lg">
                  <p className='app-text'>Your Bid</p>
                  <ArtSectAmtInput
                    type="text"
                    name="amount"
                    placeholder="0.00"
                  />
                </label>
              </div>
              <p className='flex justify-end items-end text-[18px] font-normal app-text py-2'>$ 760.03 Wallet Balance</p>
            </div>

            {/* offer expiration */}
            <div className=''>
              <div className='text-[18px] font-normal'>
                <p className='app-text'>Offer Expiration</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <p className='border border-gray-300 p-3 rounded-lg text-[15px] font-semibold text-center w-full' >
                  {date.toLocaleDateString('en', {
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                    year: 'numeric',
                  })}
                </p>
              </div>
              <ArtSecCheckBox type="checkbox" label="Includes Insurance" />
            </div>

            <DashboardButton
              icon={<icons.ArtSecPlaceBid className="mr-3" />}
              title="Submit Splits"
              type="submit"
              className="app-btn flex justify-center items-center text-center space-x-2 text-white cursor-pointer p-3 rounded-md mt-10"
            />
          </div>
        </div>

        {/* this modal should display on button success submit */}
        {/* <BidSuccess label={`You’ve made an offer to buy 2 units of this artwork`} /> */}
      </>
    </ArtSecModal>
  )
}

export default BuyInSplit;