

import React, { useState } from 'react';
import { Favourite1 } from '../../../assets/import';
import { data } from '../../../data/place-bid';
import { DashboardButton } from '../button';
import ArtSecModal from "../modal/Modal";
import { ArtSecConfirmInput } from '../select-input';
import ArtSectAmtInput from "../select-input/Amount-Input";
import ArtSecCheckBox from "../select-input/CheckBox";
import { icons } from '../../../constant/icon';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import BidSuccess from './Bid-Success';
import { userRequest } from '../../../config/api.config';


const BuyInSplit = ({ product }) => {

  const { user } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [shareUnit, setShareUnit] = useState("");
  const [expDate, setExpDate] = useState("");
  const [bidSuccess, setBidSuccess] = useState(false);



  const splitBid = async () => {
    setIsLoading(true);

    if (amount === '') {
      toast.warn('Amount field is required', {
        position: "top-right",
      });
      return;
    }

    if (shareUnit === '') {
      toast.warn('Unit field is required', {
        position: "top-right",
      });
      return;
    }

    if (expDate === '') {
      toast.warn('Date field is required', {
        position: "top-right",
      });
      return;
    }

    const payload = {
      product_id: product.id.toString(),
      user_id: user.id.toString(),
      share: shareUnit,
      expiry_date: expDate,
      status: "HOLD",
      amount: amount
    }

    console.log(payload);

    try {
      const { data } = await userRequest.post('/v1/add_bid', payload);
      setIsLoading(false);
      setBidSuccess(true);
      console.log(data);
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
      });
      setIsLoading(false);
    }

  }

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
                    name="share"
                    placeholder="0.00"
                    width='w-full'
                    border="border-2 border-gray-300"
                    radius="rounded-lg" 
                    pad="p-3"
                    textAlign="text-left"
                    onChange={(e) => setShareUnit(e.target.value)}
                  />
                </label>
                <label htmlFor="" className="text-lg">
                  <p className='app-text'>Your Bid</p>
                  <ArtSectAmtInput
                    type="text"
                    name="amount"
                    placeholder="0.00"
                    onChange={(e) => setAmount(e.target.value)}
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
              <p className='border border-gray-300 p-3 rounded-lg text-[15px] font-semibold  w-full' >
                  <input type="date" name='expiry_date' value={expDate} onChange={(e) => setExpDate(e.target.value)} />
                </p>
              </div>
              <ArtSecCheckBox type="checkbox" label="Includes Insurance" />
            </div>

            <div onClick={splitBid}>
              {isLoading ?
                <DashboardButton
                  title="Spliting Bid..."
                  disabled
                  className="app-btn flex justify-center items-center text-center space-x-2 text-white cursor-pointer p-3 rounded-md mt-10"
                /> :
                <DashboardButton
                  icon={<icons.ArtSecPlaceBid className="mr-3" />}
                  title="Split Bid"
                  type="submit"
                  className="app-btn flex justify-center items-center text-center space-x-2 text-white cursor-pointer p-3 rounded-md mt-10"
                />}
            </div>
          </div>
        </div>

        {/* this modal should display on button success submit */}
        {/* <BidSuccess label={`You’ve made an offer to buy 2 units of this artwork`} /> */}
        {bidSuccess && < BidSuccess label={`You’ve made an offer to buy ${shareUnit} units of this artwork`} />}
      </>
    </ArtSecModal>
  )
}

export default BuyInSplit;