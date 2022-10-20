
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../../../style-component';
import SocialLoginSignup from './Social-Login-Signup';



const LoginForm = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const result = Object.fromEntries(data.entries());
        console.log(result);
    }

    return (
        <div className='space-y-6'>
            <div className="justify-center items-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>Sign In to your Account</h2>
                <p className='text-[#1B1F28] text-[18px] font-semibold'>Sign In with Email</p>
            </div>
            <form className="space-y-2" onSubmit={onSubmit} autoComplete="off" >
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
                <Div.Label>
                    <span className="text-[#606c84]">Password </span>
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
                <p className="justify-center items-center"><input type="checkbox" className='mr-2' />Stay signed in</p>

                {/* login button */}
                <div className='pt-5'>
                    <Link to="">
                        <Div.Button
                            type="submit"
                            desc="Sign In"
                            width="w-full"
                            bgColor="bg-purple-900"
                            padding="p-3"
                            color="text-white"
                        />
                    </Link>
                </div>

                {/* forgot detail */}
                <div className='block sm:block md:block lg:flex xl:flex py-4 justify-between items-center text-[#1B1F28] text-[15px]'>
                    <p>Don't have an account ? <Link to="/create-account" className='text-blue-500'>Sign Up</Link></p>
                    <Link to="#"><p className='text-blue-500'>forgot password ?</p></Link>
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

export default LoginForm