
import React, { useState } from "react";
import { CreditCardIcon } from "./Credit-Card-Icon";
import { Div } from "../../../style-component";
import valid from "card-validator";
import { icons } from "../../../constant/icon";

export const PaymentForm = ( ) => {
    const [cardType, setCartType] = useState("");

    const onCardChange = (value) => {
        setCartType("");

        if (value.length < 2) {
            return;
        }

        const info = valid.number(value);

        if (!info.card) {
            setCartType(info.card.type);
        }
    }

    return (
        <form id="credit_card">
            <div className='space-y-2'>
                <div>
                    <Div.Label>
                        Card Number
                        <Div.FundCardBox
                            type="tel"
                            name="card_number"
                            placeholder="5554 6666 3332 4444"
                            cardTypeIcon={cardType ? <CreditCardIcon brand={cardType} /> : <icons.MasterCard /> }
                            onChange={() => (onCardChange)}
                            icon={<icons.ArtSecInputSuccess />}
                            width="w-full"
                            required
                        />
                    </Div.Label>
                </div>

                <div className='flex space-x-2'>
                    <Div.Label>
                        Expiry Date
                        <Div.Input
                            id="expiry_date"
                            type="text"
                            name="card_expiry_date"
                            placeholder="03 / 22"
                            onChange={onCardChange}
                            maxLength={5}
                            pattern="\d*"
                            required
                        />
                    </Div.Label>
                    <Div.Label>
                        CVV Number
                        <Div.Input
                            type="text"
                            name="card_cvv"
                            placeholder="876"
                            maxLength={3}
                            required
                        />
                    </Div.Label>
                </div>

                <Div.Label>
                    Card Pin
                    <Div.Input
                        type="text"
                        name="card_pin"
                        placeholder="Card Pin"
                        maxLength={4}
                        required
                    />
                </Div.Label>

                <Div.CheckBoxInput
                    type="checkbox"
                    name="save_card"
                    label="Save this card"
                    style={{ paddingTop: "5px" }}
                />
            </div>
        </form>
    );
}

export default PaymentForm
