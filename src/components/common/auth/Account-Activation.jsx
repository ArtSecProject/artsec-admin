




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Div } from '../../../style-component';
import { icons } from '../../../constant/icon';
import { toast } from 'react-toastify';
import { publicEnpoints } from '../../../config/api.request';




const AccountActivation = () => {



    const [values, setValues] = useState([
        {
            name: 'country',
            value: '',
            err_msg: 'Please select a country'

        },
        {
            name: 'phone_no',
            value: '',
            err_msg: 'Please enter phone number'

        },
        {
            name: 'identity_document',
            value: null,
            err_msg: 'Please upload identity document'

        },
        {
            name: 'start_investment_with',
            value: '',
            err_msg: 'Please specify start with investment days'

        },

        {
            name: 'invest_in',
            value: '',
            err_msg: 'Please specify an invest in days'

        },

    ]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        let tempArr = [...values]
        tempArr.forEach(v => {
            if (v.name === e.target.name) {
                if (e.target.type === 'file') {
                    v.value = e.target.files[0];
                } else {
                    v.value = e.target.value;
                }
            }

        });

        setValues(tempArr);

        console.log(values);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const err = [];

        values.forEach(v => {
            if (v.value === null || v.value === '') {
                err.push(v.name);
            }

        });

        if (err.length > 0) {

            toast.error('Complete all fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }


        formData.append('country', values[0].value);
        formData.append('phone_no', values[1].value);
        formData.append('identity_document', values[2].value, 'document.png');
        formData.append('start_investment_with', values[3].value);
        formData.append('invest_in', values[4].value);
        formData.append('email', localStorage.getItem('email'))

        const data = await publicEnpoints.complete_register(formData)

        if (data.err) {
            toast.error(data.err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            localStorage.removeItem('email');
            navigate('/dashboard');
        }


    }



    return (
        <div className='space-y-2'>
            <div className="justify-center items-center text-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>
                    By activating, you become a member of ArtSec Community.
                </h2>
            </div>
            <form className="space-y-2" onSubmit={(e) => handleSubmit(e)} >
                <div className='pb-2'>
                    <Div.Label>
                        <span className="text-[#606c84]">Country</span>
                        <Div.SelectInput name="country" onChange={(e) => { handleChange(e) }}>
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
                            name="phone_no"
                            placeholder="+2348138885517"
                            onChange={(e) => { handleChange(e) }}
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
                            name='identity_document'
                            type="file"
                            value=""
                            accept="png jpeg pdf"
                            onChange={(e) => { handleChange(e) }}
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
                        <Div.SelectInput name="invest_in" onChange={(e) => { handleChange(e) }}>
                            <option defaultValue>Select...</option>
                            <option value="5">In 5 Days</option>
                        </Div.SelectInput>
                    </Div.Label>

                    <Div.Label>
                        <span className="text-[#606c84]" >How much do you want to start with?</span>
                        <Div.AmountInput
                            type="text"
                            name="start_investment_with"
                            placeholder="0.00"
                            onChange={(e) => { handleChange(e) }}
                            icon={<icons.ArtSecCurrencyIcon />}

                        />
                    </Div.Label>
                </div>

                {/* login button */}
                <div className='pt-5'>

                    <Div.Button
                        desc="Continue"
                        width="w-full"
                        bgColor="bg-purple-900"
                        padding="p-3"
                        color="text-white"
                        type="submit"
                    />

                </div>

                {/* skip step */}
                <p className='flex justify-end items-end'>Skip ?</p>
            </form >

        </div >
    )
}

export default AccountActivation