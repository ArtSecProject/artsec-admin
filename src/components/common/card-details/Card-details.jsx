

import React from 'react';
import { CardType, GTBank } from '../../../assets/import';

import { card } from '../../../data/added-card';
import { Div } from '../../../style-component';
import { DashboardButton } from '../button';

const CardDetails = () => {
    return (
        <>
            {card.map((item, index) => (
                <Div.CardDetails
                    key={index.id}
                    bankLogo={GTBank}
                    bankName={item.bank_name}
                    cardPan={item.card_pan}
                    cardType={CardType}
                />
            ))}
            <div className='flex justify-end items-end'>
                <DashboardButton
                    className="app-btn p-3 w-28 text-center text-white rounded-lg cursor-pointer"
                    title="Add Card"
                />
            </div>
        </>
    )
}

export default CardDetails