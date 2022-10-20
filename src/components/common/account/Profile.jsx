

import React from 'react'
import { Div } from '../../../style-component';
import { UserImg } from "../../../assets/import"

// import SideMenu from './SideMenu';

const Profile = () => {
    return (
        <>
            <div className='pb-6'>
                <Div.ArtSecHeading title="Profile" desc="Personal Information" />
            </div>

            <div className='py-4'>
                <img src={UserImg} alt="" className='rounded-full border-2 border-purple-900 w-24 h-24' />
            </div>

            <div className='block sm:block md:block lg:flex justify-start items-center space-x-0 lg:space-x-2 space-y-3 lg:space-y-2'>
                <div className='space-y-2'>
                    <Div.Label>
                        First Name
                        <Div.Input
                            type="text"
                            name="first_name"
                            placeholder="Samson"
                        />
                    </Div.Label>
                </div>

                <div>
                    <Div.Label>
                        Middle Name (Optional)
                        <Div.Input
                            type="text"
                            name="other_name"
                            placeholder="Ola Samson"
                        />
                    </Div.Label>
                </div>

                <div className='space-y-2'>
                    <Div.Label>
                        Last Name
                        <Div.Input
                            type="text"
                            name="last_name"
                            placeholder="Ola"
                        />
                    </Div.Label>
                </div>
            </div>

            <div className='w-full block sm:block md:block lg:flex justify-start items-center space-x-0 lg:space-x-2 space-y-3 lg:space-y-2'>
                <div className='w-full space-y-2'>
                    <Div.Label>
                        Date of Birth
                        <Div.Input
                            type="date"
                            name="dob"
                        />
                    </Div.Label>
                </div>

                <div className='w-full'>
                    <Div.Label >
                        Phone Number
                        <Div.Input
                            type="tel"
                            name="phone_number"
                            placeholder="+234 8138885517"
                        />
                    </Div.Label>
                </div>
            </div>

            <div className='w-full block sm:block md:block lg:flex justify-center items-center space-x-0 lg:space-x-2 space-y-3 lg:space-y-2'>
                <div className='w-full '>
                    <Div.Label>
                        Country
                        <Div.SelectInput>
                            <option defaultValue>Select...</option>
                        </Div.SelectInput>
                    </Div.Label>
                </div>

                <div className='w-full'>
                    <Div.Label >
                        State or Region
                        <Div.SelectInput>
                            <option defaultValue>Select...</option>
                        </Div.SelectInput>
                    </Div.Label>
                </div>
            </div>

            <div className='w-full block sm:block md:block lg:flex  items-center space-x-0 lg:space-x-2 space-y-3 lg:space-y-2'>
                <div className='w-full space-x-2'>
                    <Div.Label>
                        City or Town
                        <Div.SelectInput>
                            <option defaultValue>Select...</option>
                        </Div.SelectInput>
                    </Div.Label>
                </div>

                <div className='w-full'>
                    <Div.Label >
                        Zip Code
                        <Div.Input
                            type="text"
                            name="zip_code"
                            placeholder="1015511" />
                    </Div.Label>
                </div>
            </div>


           <div className='space-y-2 pt-2'>
           <Div.Label >
                Street Address
                <Div.Input
                    type="text"
                    name="zip_code"
                    placeholder="Ajah Lagos" />
            </Div.Label>
           </div>

            <div className='flex justify-end items-end py-4'>
                <Div.Button
                    desc="Save"
                    width="w-36"
                    bgColor="app-btn"
                    color="text-white"
                    submit="submit"
                    padding="p-2"
                />
            </div>
        </>
    )
}

export default Profile