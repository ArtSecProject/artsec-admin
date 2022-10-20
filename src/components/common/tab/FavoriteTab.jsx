import React from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';

const Tab = ({ children, tabText1, tabText2 }) => {
    const { view, setView, } = useStateContext();

  return (
    <>
        <div className="tab">
            <div className='flex justify-center items-center space-x-4 py-8'>
                <h3
                    className='bg-white px-4 py-2 font-semibold text-2xl'
                    onClick={() => setView("tab1")}
                    style={{ color: view === "tab1" ? "#000" : "", borderBottom: view === "tab1" ? "2px solid #4B006E" : "",  }}
                >
                    
                    {tabText1}
                </h3>
                <h3
                    className='bg-white px-4 py-2 font-semibold text-2xl'
                    onClick={() => setView("tab2")}
                    style={{ color: view === "tab2" ? "#000" : "", borderBottom: view === "tab2" ? "2px solid #4B006E" : "" }}
                >
                    {tabText2}
                </h3>
            </div>
        </div>
        <div className='pt-4'>
            {children}
        </div>
    </>
  )
}

export default Tab;