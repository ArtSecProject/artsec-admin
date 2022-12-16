
import React, { useState } from 'react';
import { DashboardButton } from '../button';
import { CardDetails } from '../card-details';
import ArtSecModal from '../modal/Modal';
import { ArtSecCheckBox, ArtSectAmtInput } from '../select-input';

const AddMoney = () => {

  const [paymentType, setPaymentType] = useState(false);

  const handleCardType = (e) => {
    e.preventDefault();
    setPaymentType(!paymentType);
  }


  return (
    <ArtSecModal width="w-96" title="Add Money">
      <form>
        <div className='space-y-3 py-4'>
          Payment Method
          <ArtSecCheckBox
            type="checkbox"
            name="paypal"
            label="Paypal"
            style={{ paddingTop: "5px" }}
            bgColor="bg-[#E2E6EF]"
            padx="px-4"
            pad="p-3"
          />


          <ArtSecCheckBox
            type="checkbox"
            name="paypal"
            label="Select or Add Card"
            style={{ paddingTop: "5px" }}
            bgColor="bg-[#E2E6EF]"
            padx="px-4"
            pad="p-3"
            customFunc={(e) => (handleCardType(e))}
          />


          {/* ADDED CARDS TO DISPLAY ON INPUT SELECTION  */}
          {paymentType ?
            <CardDetails /> : null
          }

          <div className='pt-8 space-y-10'>
            Amount
            <ArtSectAmtInput
              type="text"
              name="amt"
              placeholder="0.00"
              style={{ paddingTop: "5px" }}
            />

            <DashboardButton
              className="w-full p-3 text-center app-btn text-white rounded-lg cursor-pointer"
              title="Fund Wallet"
            />
          </div>


        </div>

      </form>
    </ArtSecModal>
  )
}

export default AddMoney