
import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../../../style-component';
import SocialLoginSignup from './Social-Login-Signup';



const ForgotPassword = () => {


    return (
        <div className='space-y-6'>
            <div className="justify-center items-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>Forgot Password</h2>
                <p className='text-[#1B1F28] text-[18px] font-semibold'>Enter your email associated with your account</p>
            </div>
            <form className="space-y-2">
                <div className='mb-3'>
                    <Div.Label>
                        Email Address
                        <Div.Input
                            type="text"
                            name="email"
                            placeholder="email address"
                        />
                    </Div.Label>
                </div>


                {/* login button */}
                <div className='pt-5'>
                    <Link to="#">
                        <Div.Button
                            desc="Send Reset Link"
                            width="w-full"
                            bgColor="app-btn"
                            padding="p-3"
                            color="text-white"
                        />
                    </Link>
                </div>

                {/* forgot detail */}
                <div className='block sm:block md:block lg:flex xl:flex py-4 justify-center items-center text-[#1B1F28] text-[15px]'>
                    <p>Don't have an account ? <a href="/create-account" className='text-blue-500'>Sign Up</a></p>
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

export default ForgotPassword