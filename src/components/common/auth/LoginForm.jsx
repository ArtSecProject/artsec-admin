
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { LOGIN_SCHEMA } from '../../../config/schema';
import { fetchAuthUser } from '../../../redux/auth.slice';
import { Div } from '../../../style-component';
import SocialLoginSignup from './Social-Login-Signup';



const LoginForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, user, loading } = useSelector(state => state.auth);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LOGIN_SCHEMA,
        onSubmit: async (values) => {
            try{

                await dispatch(fetchAuthUser(values)).unwrap();

                navigate('/dashboard')

                toast.success('Successfully logged in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
            } catch (err) {
                console.log(err);
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    })


    return (
        <div className='space-y-6'>
            <div className="justify-center items-center space-y-2">
                <h2 className='app-color text-xl sm:text-xl md:text-xl lg:text-3xl font-bold'>Sign In to your Account</h2>
                <p className='text-[#1B1F28] text-[18px] font-semibold'>Sign In with Email</p>
            </div>
            <form className="space-y-2" onSubmit={formik.handleSubmit} autoComplete="off" >
                <div className='mb-3'>
                    <Div.Label>
                        Email Address
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
                <Div.Label>
                    <span className="text-[#606c84]">Password </span>
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
                    </div>
                    {formik.touched.password && formik.errors.password && <span className='text-sm text-[red]'>{formik.errors.password}</span>}
                </Div.Label>


                {/* checkbox */}
                <p className="justify-center items-center"><input type="checkbox" className='mr-2' />Stay signed in</p>

                {/* login button */}
                <div className='pt-5'>

                    <Div.Button
                        type="submit"
                        desc={loading ? 'Loading ....' : 'Sign In'}
                        width="w-full"
                        bgColor="bg-purple-900"
                        padding="p-3"
                        color="text-white"
                        disabled={loading ? true : false}
                    />

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
            {error && <ToastContainer />}
        </div>
    )
}

export default LoginForm