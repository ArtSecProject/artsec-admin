import React from 'react'
import { AdminList } from '../../../data'

const AdminActivity = () => {
    return (
        <div className="bg-white rounded-md p-5 border border-[#E6EDFF] overflow-y-scroll h-96">
            <div className='flex justify-between items-center border-b-2 border-gray-100 pb-2 text-[14px]'>
                <h3>Admin Activities</h3>
                <h3 className='cursor-pointer'>View All</h3>
            </div>
            {AdminList.map((item, index) => (
                <div key={index.id} className='flex justify-between items-center py-2'>
                    <div className='flex items-center'>
                        <div className='w-12 border-2 rounded-full border-white shadow mr-2' >
                            {item.img}
                        </div>
                        <div className='text-[14px]'>
                            <h3>{item.name}</h3>
                            <span className='text-gray-300'>{item.role}</span>
                        </div>
                    </div>
                    <div className='text-[14px]'>
                        {item.status}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminActivity