
import React from 'react';
import { DashboardButton } from '../button';
import ArtSecModal from '../modal/Modal';
import { ArtSecCheckBox, ArtSectAmtInput } from '../select-input';
// import ConfirmWithdrawal from './Confirm-Withdrawal';
// import WithdrawalSuccessful from './Withdrawal-Successful';


const WithdrawMoney = () => {

    return (
        <ArtSecModal width="w-96" title="Withdraw Money">
            <form>

                <div className='space-y-3 py-4'>
                    <label > Withdraw Method</label>
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
                        name="bank_transfer"
                        label="Bank Transfer"
                        style={{ paddingTop: "5px" }}
                        bgColor="bg-[#E2E6EF]"
                        padx="px-4"
                        pad="p-3"
                    />

                    <ArtSecCheckBox
                        type="checkbox"
                        name="credit_debit_card"
                        label="Credit / Debit Card"
                        style={{ paddingTop: "5px" }}
                        bgColor="bg-[#E2E6EF]"
                        padx="px-4"
                        pad="p-3"
                    />

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
                            title="Continue"
                        />
                    </div>
                </div>
            </form>

            {/* this modal should be display to confirm the withdrawal */}
            {/* <ConfirmWithdrawal  */}

            {/* display this modal if withdrawal has been confirmed */}
            {/* < WithdrawalSuccessful /> */}

        </ArtSecModal>
    )
}

export default WithdrawMoney