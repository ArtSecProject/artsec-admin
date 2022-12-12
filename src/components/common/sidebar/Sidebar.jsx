import React, { useState } from 'react';
import { MenuItem } from '../../../data/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { icons } from "../../../constant/icon";
import { useStateContext } from '../../../contexts/ContextProvider';



const Sidebar = ({ children }) => {
    const [open ] = useState(true);

    const { activeMenu, setActiveMenu, screenSize, } = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    };


    const activeLink = 'flex items-center gap-x-4 cursor-pointer w-screen ';
    const normalLink = ' flex items-center gap-x-4 cursor-pointer pl-2';

    return (
        <div className='flex overflow-auto md:overflow-hidden md:hover:overflow-auto'>
            {activeMenu && (
                <div className={`app-sidebar-bg h-screen py-5 ${open ? "w-72" : "w-0"} duration-300 fixed overflow-y-auto`} style={{ zIndex: '1000' }}>

                    {/* logo */}
                    <div className='flex justify-center space-x-3 md:justify-center items-center pb-5'>
                        <center onClick={handleCloseSidebar}> <a href="//squid-app-e4g6h.ondigitalocean.app"><icons.ArtSecLogo /></a></center>

                        {/* sidebar close and open button */}

                        <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <icons.CloseIcon />
                        </button>

                        {/* sidebar close and open button end */}
                    </div>

                    <div className='bg-[#F8F5FE] p-4 mb-3'>
                        <div className='flex justify-start items-center space-x-2 pb-2'>
                            <icons.PortfolioBalance /> <p>Profile Balance </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className='text-2xl font-bold text-[#1B1F28]'>$ 3,460.67 <span className='text-[10px] text-[#1B1F28]'>USD</span></h2>
                                <span className='text-sm text-gray-400'>Total Value</span>
                            </div>
                            <div className='bg-white p-2 rounded-md shadow text-center justify-center cursor-pointer'><Link to="/dashboard/porfolio">Details</Link></div>
                        </div>
                    </div>

                    <div className='bg-[#F1F5FF] p-4'>
                        <div className='flex justify-start items-center space-x-2 pb-2'>
                            <icons.WalletBalance /> <p>Wallet </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className='text-2xl font-bold text-[#1B1F28]'>$ 3,460.67 <span className='text-[10px] text-[#1B1F28]'>USD</span></h2>
                                <span className='text-sm text-gray-400'>Total Value</span>
                            </div>
                            <div className='bg-white p-2 rounded-md shadow text-center justify-center cursor-pointer'><Link to="/dashboard/wallet">Details</Link></div>
                        </div>
                    </div>

                    {/* sidebar menu items */}
                    <div>
                        <ul className='pt-2'>
                            {MenuItem.map((item, index) => (
                                <>
                                    <li key={index} className={`w-full text-[#4B006E] text-sm flex items-center gap-x-28 cursor-pointer hover:bg-transparent  ${item.spacing ? "mt-9" : "mt-2 "}`}>
                                        <NavLink
                                            to={`/dashboard/${item.path}`}
                                            className={({ isActive }) => isActive ? activeLink : normalLink}
                                            style={({ isActive }) => ({ color: isActive ? "#fff" : "", backgroundColor: isActive ? "#4B006E" : "", padding: isActive ? "15px 15px 15px 10px" : "", })}
                                        >
                                            <span className='text-3xl block float-left pl-2'>{item.icon}</span>
                                            <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{item.title}</span>
                                        </NavLink>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            )}


            {/* home page */}
            <div className={` min-h-screen w-full  ${open ? 'md:ml-72' : 'ml-20'}`}>
                <div className="navbar fixed w-full sm:w-full md:w-[70%] lg:fixed lg:w-[80%]">
                    <Navbar />
                </div>
                {children}
                {/* footer */}
                <div className='hidden sm:hidden md:hidden lg:flex xl:flex justify-center items-center space-x-5 sidebar-link-bg  p-2 text-xs mt-2 text-white left-0 right-0 bottom-0 fixed' style={{ zIndex: "10000" }}>
                    <div>
                        <p>(c) 2022, ArtSec</p>
                    </div>
                    <div>Powered by: <Link to="https://artsec.com">ArtSec</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar