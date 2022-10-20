import React from 'react';


const Table = ({ data = null, column = null, loading, }) => {

    if (loading) {
        return <center><h2>loading data...</h2></center>
    }

    // turning the header data to capital letter
    const getCaps = (head, field) => {
        if (head) return head.toUpperCase();
        return field.toUpperCase();
    };

    return (
        <div className='overflow-x-auto relative  sm:rounded-lg'>
            <table className='w-full text-sm text-left text-black'>
                <thead className='text-xs text-black uppercase bg-[#F8F9FD] '>
                    <tr>
                        {column &&
                            column.map((head, index) => (

                                <th className='py-4 px-6' key={index}>
                                    {getCaps(head.header, head.field)}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((row) => (
                            <tr className='bg-white border-b border-gray-200 hover:bg-[#F8F9FD]'>
                                {column.map((col) => (
                                    <>
                                        <td className='py-4 px-6'>{row[col.field]}</td>
                                    </>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            {data ? null : <p className='justify-center text-center items-center'>No data to display</p>}
        </div>
    )
}

export default Table

