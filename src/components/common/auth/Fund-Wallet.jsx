
import React, { useState } from 'react';
import { Div } from '../../../style-component';
import { icons } from '../../../constant/icon';
import { CardPaymentForm } from '../Payment-Card-Form';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../contexts/ContextProvider';
import AccountPaymentConfirmed from './Payment-Confirmed';
import { DashboardButton } from '../button';

const FundWallet = () => {
    const { handleClick, isClicked } = useStateContext();
    const [paymentType, setPaymentType] = useState(false);


    const handleCardType = (e) => {
        setPaymentType(!paymentType);
    }

    return (
        <>
            <form>
                <div className='space-y-3'>
                    <div className='mb-3'>
                        <Div.Label>
                            Amount
                            <Div.AmountInput
                                type="text"
                                icon={<icons.ArtSecCurrencyIcon />}
                                placeholder="0.00"
                            />
                        </Div.Label>
                    </div>

                    <Div.Label>
                        <span>Payment Method</span>
                        <Div.CheckBoxInput
                            type="checkbox"
                            name="paypal"
                            label="Paypal"
                            style={{ paddingTop: "5px" }}
                            bgColor="bg-[#E2E6EF]"
                            padx="px-4"
                            pad="p-3"
                        />
                    </Div.Label>

                    <Div.CheckBoxInput
                        type="checkbox"
                        name="card"
                        label="Card"
                        style={{ paddingTop: "5px" }}
                        bgColor="bg-[#E2E6EF]"
                        padx="px-4"
                        pad="p-3"
                        customFunc={(e) => (handleCardType(e))}
                    />


                    {/* ADDED CARDS TO DISPLAY ON INPUT SELECTION  */}
                    {paymentType ?
                        <CardPaymentForm />
                        : null
                    }

                    <div className='pt-3'>
                        <DashboardButton
                            className="app-btn text-white border text-lg font-semibold border-[#4B006E] cursor-pointer p-3 rounded-md justify-center items-center text-center"
                            title="Fund Wallet"
                            customFunc={() => handleClick("payment_confirmed")}
                        />
                    </div>

                    <div className='flex justify-between items-center app-color'>
                        <Link to="/account-activation"><span>Go Back</span></Link>
                        <span>Skip</span>
                    </div>
                </div>
            </form>
            {isClicked.payment_confirmed && <AccountPaymentConfirmed />}
        </>
    )
}

export default FundWallet