import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <di className="flex relative justify-center items-center h-full">
            <div className='flex justify-center items-center mx-auto text-center '>
                <div className='my-[5rem] mx-auto'>
                    <h2 className='text-purple-900 text-[20rem] font-bold'>404</h2>
                    <p className='text-[20px] font-medium'>The page you're trying to access is not found</p>
                    <span className='text-purple-900 font-semibold text-[18px]'><Link to="/">Click here</Link></span>
                </div>
            </div>
        </di>
    )
}
export default NotFound