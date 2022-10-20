

import React from 'react'
import { DashboardButton } from '../button';
import ArtSecModal from '../modal/Modal';
import AppHeading from "../heading/Heading";
import { ArtSecConfirmInput } from '../select-input';


const ConfirmWithdrawal = () => {
  return (
    <ArtSecModal width="w-96" title="Confirm Withdrawal">
      <div className='-mt-10'>
        <AppHeading desc="We’ve just sent you a verification code to your email address 
         sam***@gmail.com please enter the verification code." />
      </div>

      <div className='flex justify-center items-center space-x-2 py-4'>
        <ArtSecConfirmInput
          type="text"
          placeholder="0"
          maxLength={1}
          width="w-10"
          border='border border-purple-900'
          radius="rounded-[3px]" 
          pad="p-2"
          textAlign="text-center"
        />

        <ArtSecConfirmInput
          type="text"
          placeholder="0"
          maxLength={1}
          width="w-10"
          border='border border-purple-900'
          radius="rounded-[3px]" 
          pad="p-2"
          textAlign="text-center"
        />

        <ArtSecConfirmInput
          type="text"
          placeholder="0"
          maxLength={1}
          width="w-10"
          border='border border-purple-900'
          radius="rounded-[3px]" 
          pad="p-2"
          textAlign="text-center"
        />

        <ArtSecConfirmInput
          type="text"
          placeholder="0"
          maxLength={1}
          width="w-10"
          border='border border-purple-900'
          radius="rounded-[3px]" 
          pad="p-2"
          textAlign="text-center"
        />

      </div>

      <div className='-mt-10'>
        <AppHeading
          desc={
            <p>Didn’t receive a code?
              <b className='app-color cursor-pointer ml-2'>Resend</b>
            </p>
          }
        />
      </div>

      <div className='py-3'>
        <DashboardButton
          className="app-btn p-3 text-center rounded-lg text-white cursor-pointer"
          title="Confirm"
        />
      </div>
    </ArtSecModal>
  )
}

export default ConfirmWithdrawal