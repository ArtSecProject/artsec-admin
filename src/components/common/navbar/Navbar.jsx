import React, { useEffect } from 'react';
import { icons } from '../../../constant/icon';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { UserImg } from '../../../assets/import';
import { useStateContext } from '../../../contexts/ContextProvider';
import { user_profile } from '../../../data/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth.slice';


const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-3 w-3 right-2 top-2"
      />
      {icon}
    </button>
  </>
);



const Navbar = () => {
  const { setActiveMenu, screenSize, setScreenSize, } = useStateContext();

  // a state to determined the actual size of the screen
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const dispatch = useDispatch();


  return (
    <>
      <div className='flex justify-between p-2 md:mx-6 items-center navbar mb-10 bg-white'>
        <div className='md:hidden'>
          <NavButton
            title="Menu"
            customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            color="#000"
            icon={<icons.ArtSecMenuIcon />}
          />
        </div>

        <div className='hidden md:flex items-center rounded-md bg-[#F2F3F8] px-4 py-2 w-96'>
          <AiOutlineSearch className='text-lg block float-left cursor-pointer mr-2' />
          <input type={"search"} placeholder="search" className='text-base bg-transparent w-full focus:outline-none ' />
        </div>

        {/* Navbar Right */}
        <div className="flex">

          <NavButton
            dotColor="green"
            color="#000"
            icon={<icons.ArtSecBell className="w-[20px] h-[20px]" />}
          />
          <>
            <div
              className="flex items-center gap-3 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <p className='hidden md:block'>
                <span className="text-[#202223] font-normal ml-1 text-[16px]">Godwin</span>
              </p>
              <div className='flex items-center space-x-2 user_dropdown'>
                <img src={UserImg} alt="profile-img" className='w-12 h-12' />
                <BsChevronDown className="text-gray-400 text-14 menu-trigger" />
                <div class="dropdown-content">
                  {/* <p>Hello World!</p> */}
                  <ul>
                    {user_profile.map((item, index) => (
                      <>
                        <li key={index.id} className={`w-full cursor-pointer hover:bg-transparent  ${item.spacing ? "mt-9" : "mt-2 "}`}>
                          <NavLink
                            to={`/dashboard/${item.path}`}
                            className="flex items-center space-x-2"
                          >
                            <span className='text-base block float-left text-purple-900'>{item.icon}</span>
                            <span className={`text-sm font-medium duration-300`}>{item.title}</span>
                          </NavLink>
                        </li>
                      </>
                    ))}

                    {/* logout action button */}
                    <div onClick={() => dispatch(logout())}>
                      <span className='text-base block float-left text-purple-900'><icons.LogoutIcon /></span>
                      <span className={`text-sm font-medium duration-300 text-red-600`}>Logout</span>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

          </>
        </div>


      </div>

    </>
  );
};

export default Navbar;
