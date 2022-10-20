




import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../../../style-component';
import { icons } from '../../../constant/icon';



const AccountActivation = () => {

    return (
        <div className='space-y-2'>
            <div className="justify-center items-center text-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>
                    By activating, you become a member of ArtSec Community.
                </h2>
            </div>
            <form className="space-y-2">
                <div className='pb-2'>
                    <Div.Label>
                        <span className="text-[#606c84]">Country</span>
                        <Div.SelectInput>
                            <option defaultValue>Select...</option>
                            <option value="ngn">Nigeria</option>
                        </Div.SelectInput>
                    </Div.Label>
                </div>

                <div className='pb-3'>
                    <Div.Label>
                        <span className="text-[#606c84]">Phone Number</span>
                        <Div.Input
                            type="tel"
                            name="phone_number"
                            placeholder="+2348138885517"
                        />
                    </Div.Label>
                </div>

                <Div.Label>
                    <span className="text-[#606c84]">Upload any form of valid identification</span>
                    <div className="drag_input">
                        <div className='drag__input__label'>
                            <center><icons.ArtSecFileUpload className='text-3xl text-[#94A0B8]' /></center>
                            <span>National ID, Driver’s Licence, International Passport, etc.</span>
                            <p>Drag and drop or browse files on your computer</p>
                        </div>
                        <input
                            type="file"
                            value=""
                            accept="png jpeg pdf"
                        />
                    </div>
                </Div.Label>

                {/* <Div.Label>
                    Enter National ID Number
                    <Div.Input
                        type="text"
                        placeholder="National ID Numver"
                    />
                </Div.Label> */}

                <div className='block sm:block md:block lg:flex space-x-0 lg:space-x-2'>
                    <Div.Label>
                        <span className="text-[#606c84]">When do you want to start investing?</span>
                        <Div.SelectInput>
                            <option defaultValue>Select...</option>
                            <option value="5">In 5 Days</option>
                        </Div.SelectInput>
                    </Div.Label>

                    <Div.Label>
                        <span className="text-[#606c84]">How much do you want to start with?</span>
                        <Div.AmountInput
                            type="text"
                            name="amount"
                            placeholder="0.00"
                            icon={<icons.ArtSecCurrencyIcon />}
                        />
                    </Div.Label>
                </div>

                {/* login button */}
                <div className='pt-5'>
                    <Link to="/fund-wallet">
                        <Div.Button
                            desc="Continue"
                            width="w-full"
                            bgColor="app-btn"
                            padding="p-3"
                            color="text-white"
                        />
                    </Link>
                </div>

                {/* skip step */}
                <p className='flex justify-end items-end'>Skip ?</p>
            </form>
        </div>
    )
}

export default AccountActivation