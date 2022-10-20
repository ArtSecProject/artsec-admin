import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../../constant/icon'



const ForgotForm = () => {
    return (
        <div className='space-y-6'>
            <div className='pb-6'>
                <h2 className='text-[30px] font-bold py-2'>Reset Password</h2>
                <p className='text-gray-400'>Please, kindly enter your email address</p>
            </div>
            <center><icons.LoginIcon /></center>
            <div>
                Email Address
                <input type="email" placeholder='email address' className='w-full p-2 border border-gray-300 outline-none rounded-md' />
            </div>
            <p className='flex justify-end mr-4'>Remembered <Link to="/" className='ml-2 text-blue-500'>Click here</Link></p>
            <div>
                <p className='w-full p-2 text-center bg-red-600 cursor-pointer text-white rounded-md'><Link to="/email-verification">Reset</Link></p>
            </div>
        </div>
    )
}

export default ForgotForm