

import React from 'react';
import { CardType, GTBank } from '../../../assets/import';
import { Div } from '../../../style-component';
import { icons } from "../../../constant/icon";
import { card } from '../../../data/added-card';


const PaymentMethod = () => {


    return (
        <>
            <div className='pb-6'>
                <Div.ArtSecHeading title="Payment Method" />
            </div>

            {/* in progress */}
            <Div.Label>
                {card.map((item, index) => (
                    <div key={index.id} className='block sm:block md:block lg:flex space-y-2 space-x-2 mb-2'>
                        <div>
                            <Div.CardDetails
                                bankLogo={GTBank}
                                bankName={item.bank_name}
                                cardPan={item.card_pan}
                                cardType={CardType}
                                width="w-80"
                            />
                        </div>
                        <div>
                            <Div.Button
                                icon={<icons.ArtSecDelete />}
                                desc="Delete Card"
                                width='w-36'
                                color="text-white"
                                bgColor="bg-red-500"
                                padding="p-3"
                            />
                        </div>
                    </div>
                ))}

                <div className='py-3'>
                    <Div.Button
                        desc="Add a new Card"
                        width='w-36'
                        color="text-white"
                        bgColor="bg-purple-900"
                        padding="p-3"
                    />
                </div>
            </Div.Label>
        </>
    )
}

export default PaymentMethod