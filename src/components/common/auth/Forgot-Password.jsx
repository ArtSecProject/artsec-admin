
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FORGET_PASSWORD_SCHEMA } from '../../../config/schema';
import { Div } from '../../../style-component';
import SocialLoginSignup from './Social-Login-Signup';
import { publicEnpoints } from "../../../config/api.request"



const ForgotPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: FORGET_PASSWORD_SCHEMA,
        onSubmit: async (values) => {

            setLoading(true)
            const data = await publicEnpoints.forgot_password(values);

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
                setLoading(false)
            } else {
                navigate('/account-verification');
                setLoading(false)
            }

        }
    })

    return (
        <div className='space-y-6'>
            <div className="justify-center items-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>Forgot Password</h2>
                <p className='text-[#1B1F28] text-[18px] font-semibold'>Enter your email associated with your account</p>
            </div>
            <form className="space-y-2" onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <Div.Label>
                        Email Address
                        <Div.Input
                            type="text"
                            name="email"
                            placeholder="email address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && <span className='text-sm text-[red]'>{formik.errors.email}</span>}
                    </Div.Label>
                </div>


                {/* login button */}
                <div className='pt-5'>

                    <Div.Button
                        desc={loading ? 'Loading ....' : 'Send Reset Link'}
                        width="w-full"
                        bgColor="bg-purple-900"
                        padding="p-3"
                        color="text-white"
                        type="submit"
                        disabled={loading ? true : false}
                    />

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