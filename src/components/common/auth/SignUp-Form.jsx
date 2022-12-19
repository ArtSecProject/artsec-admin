import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { publicEnpoints } from '../../../config/api.request';
import { REG_SCHEMA } from '../../../config/schema';
import { Div } from '../../../style-component';
import SocialLoginSignup from './Social-Login-Signup';



const SignUp = () => {

    let navigate = useNavigate();


    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            password_confirmation: '',
        },
        validationSchema: REG_SCHEMA,
        onSubmit: async (values) => {
            setLoading(true);
            const data = await publicEnpoints.regUser(values);

            if (data.err) {
                toast.error(data.err.message, {
                    position: "top-right",
                });
                setLoading(false);
            } else {
                setLoading(false);
                localStorage.setItem('email', values.email);
                navigate('/account-verification');
            }

        }
    })

    return (
        <div className='space-y-2'>
            <div className="justify-center items-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>Create your account</h2>
                <p className='text-[#1B1F28] text-[18px] font-semibold'>Sign up with Email</p>
            </div>
            <form className="space-y-2" onSubmit={formik.handleSubmit} >
                <div className='mb-2'>
                    <Div.Label>
                        <span className="text-[#606c84]">Email Address</span>
                        <Div.Input
                            type="text"
                            name="email"
                            placeholder="email address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && <span className='text-sm text-[red]'>{formik.errors.email}</span>}
                    </Div.Label>
                </div>

                <div className='block sm:block md:block lg:flex space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 '>
                    <div>
                        <Div.Label>
                            <span className="text-[#606c84]">First Name</span>
                            <Div.Input
                                type="text"
                                name="firstname"
                                placeholder="Godwin"
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstname && formik.errors.firstname && <span className='text-sm text-[red]'>{formik.errors.firstname}</span>}
                        </Div.Label>
                    </div>
                    <div>
                        <Div.Label>
                            <span className="text-[#606c84]">Last Name</span>
                            <Div.Input
                                type="text"
                                name="lastname"
                                placeholder="Ahua"
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastname && formik.errors.lastname && <span className='text-sm text-[red]'>{formik.errors.lastname}</span>}
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
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <i className={(passwordShown ? 'bx-show' : 'bx-hide') + ' bx absolute right-12 pt-1  text-2xl text-[#606C84]'} onClick={togglePassword}></i>
                        {formik.touched.password && formik.errors.password && <span className='text-sm text-[red]'>{formik.errors.password}</span>}
                    </div>
                </Div.Label>
                <Div.Label>
                    <span className="text-[#606c84]">Confirm Password (minimum of 8 characters)</span>
                    <div className='flex'>
                        <Div.Input
                            type={passwordShown ? "text" : "password"}
                            name="password_confirmation"
                            placeholder="password"
                            value={formik.values.password_confirmation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <i className={(passwordShown ? 'bx-show' : 'bx-hide') + ' bx absolute right-12 pt-1  text-2xl text-[#606C84]'} onClick={togglePassword}></i>
                        {formik.touched.password_confirmation && formik.errors.password_confirmation && <span className='text-sm text-[red]'>{formik.errors.password_confirmation}</span>}
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

                    <Div.Button
                        desc={loading ? 'Loading ....' : 'Create Account'}
                        width="w-full"
                        bgColor="bg-purple-900"
                        padding="p-3"
                        color="text-white"
                        type="submit"
                        disabled={loading ? true : false}
                    />

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
            <ToastContainer />
        </div>
    )
}

export default SignUp