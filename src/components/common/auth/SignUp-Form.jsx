


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../../../style-component';
import SocialLoginSignup from './Social-Login-Signup';



const SignUp = () => {


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className='space-y-2'>
            <div className="justify-center items-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>Create your account</h2>
                <p className='text-[#1B1F28] text-[18px] font-semibold'>Sign up with Email</p>
            </div>
            <form className="space-y-2">
                <div className='mb-2'>
                    <Div.Label>
                        <span className="text-[#606c84]">Email Address</span>
                        <Div.Input
                            type="text"
                            name="email"
                            placeholder="email address"
                        />
                    </Div.Label>
                </div>

                <div className='block sm:block md:block lg:flex space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 '>
                    <div>
                        <Div.Label>
                            <span className="text-[#606c84]">First Name</span>
                            <Div.Input
                                type="text"
                                name="first_name"
                                placeholder="Godwin"
                            />
                        </Div.Label>
                    </div>
                    <div>
                        <Div.Label>
                            <span className="text-[#606c84]">Last Name</span>
                            <Div.Input
                                type="text"
                                name="last_name"
                                placeholder="Ahua"
                            />
                        </Div.Label>
                    </div>
                </div>
                <Div.Label>
                    <span className="text-[#606c84]">Password (minimum of 8 characters)</span>
                    <div className='flex'>
                        <Div.Input
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            placeholder="password"
                        />
                        <i className={(passwordShown ? 'bx-show' : 'bx-hide') + ' bx absolute right-12 pt-1  text-2xl text-[#606C84]'} onClick={togglePassword}></i>
                    </div>
                </Div.Label>


                {/* checkbox */}
                <p className="justify-center items-center text-[15px] text-[#1B1F28]">
                    <input type="checkbox" className='mr-2' />
                    I have read and agreed to the Terms and condition
                </p>

                <p className="justify-center items-center text-[15px] text-[#1B1F28]">
                    <input type="checkbox" className='mr-2' />
                    I want to receive emails and newsletters on updates
                </p>

                {/* login button */}
                <div className='pt-5'>
                    <Link to="/account-verification">
                        <Div.Button
                            desc="Create Account"
                            width="w-full"
                            bgColor="app-btn"
                            padding="p-3"
                            color="text-white"
                        />
                    </Link>
                </div>

                {/* forgot detail */}
                <div className='block sm:block md:block lg:flex xl:flex py-4 justify-between items-center text-[#1B1F28] text-[15px]'>
                    <p>Already have an account? <Link to="/" className='text-blue-500'>Login</Link></p>
                </div>

                {/* sign in with social platform */}
                <div className='flex justify-center items-center text-center py-2'>
                    <p className='bg-white p-2 rounded-full shadow w-10'> Or </p>
                </div>

                <p className='text-[#1B1F28] text-[18px] font-semibold text-center'>Sign In with Socials</p>
                <SocialLoginSignup />
            </form>
        </div>
    )
}

export default SignUp