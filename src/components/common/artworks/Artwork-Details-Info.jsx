import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserImg } from '../../../assets/import';
import { icons } from '../../../constant/icon';
import { tableData, tableColumn } from '../../../data/artwork-details';
import { DashboardButton } from '../button';
import { ArtSecSelectInput } from '../select-input';
import { ArtSecTable } from '../table';
import { useStateContext } from '../../../contexts/ContextProvider';
import { BuyInSplit, HoldBid, PlaceBid } from '../bid';

const ArtworkDetailsInfo = ({ details }) => {

    const { handleClick, isClicked } = useStateContext();

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDate(new Date()), 30000);
    }, []);



    return (
        <>
            {details && <div className='block sm:block md:block lg:flex space-x-1 lg:space-x-4 px-2 lg:px-1'>
                <div className='w-full sm:w-full md:w-full lg:w-[38%] px-2 lg:px-1'>
                    <h2 className='py-3 text-2xl font-bold'>{details.name}</h2>

                    <div className='flex justify-between  items-center'>
                        <div>
                            <span className='text-[15px] font-normal text-[#606C84]'>Artist</span>
                            <p className='flex items-center text-[15px] font-normal text-[#000] pt-2'> <img src={UserImg} alt="ola" className='mr-2 w-7' /> (Fake Data) Ola Samson</p>
                        </div>
                        <div>
                            <span className='text-[15px] font-normal text-[#606C84]'>Collection</span>
                            <p className='flex items-center text-[15px] font-semibold text-[#000] pt-2'> <img src={UserImg} alt="ola" className='mr-2 w-7' />(Fake Data) Abstract</p>
                        </div>
                    </div>

                    {/* listed */}
                    <div className='flex justify-between items-center py-4'>
                        <p className='text-[15px] font-normal'>Also listed and Certified in</p>
                        <p className='flex items-center space-x-2 app-color text-{15px} font-semibold'><icons.ArtSecCertified /> <Link to='#'>(Fake Data) sec.gov/edgar</Link> </p>
                    </div>

                    <div>
                        <span className='text-[#606C84] text-[15px] font-normal'> (Fake Data) Story behind this artwork</span>
                        <p className='app-text text-[15px] font-normal'>When we found Pastil, his eyes were infected and his mom was missing,
                            we brought him home for his treatment, that's how we fell in love with him and he became a member of our family.
                        </p>
                    </div>

                    <div className='flex items-center py-4'>
                        <icons.ArtSecReport className="mr-3" /> Report
                    </div>
                </div>

                {/* right cols */}
                <div className='w-full sm:w-full md:w-full lg:w-4/5 px-2 lg:px-0 pl-0 lg:pl-4'>
                    <div className='block sm:block md:flex lg:flex justify-between items-center space-y-2 lg:space-y-1'>
                        <p className='text-[15px] font-bold'>Asset Class Comparison:</p>
                        <div className='block sm:block md:flex lg:flex items-center space-x-1 lg:space-x-2 space-y-2 lg:space-y-1 '>
                            <ArtSecSelectInput className='w-full app-border rounded-lg px-2 py-3 text-2xl font-normal'>
                                <option defaultValue>S&P 500</option>
                            </ArtSecSelectInput>
                            <div className='w-full border text-center border-gray-300 rounded-lg px-16 py-1'>
                                <p className='text-[15px] font-normal'>S&P 500</p>
                                <h2 className="text-xl font-bold text-[#1B1F28]">$ 4.57</h2>
                            </div>
                        </div>
                    </div>

                    {/* time */}
                    <div className='block sm:block md:flex lg:flex justify-between items-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-1 py-4'>
                        <p className='text-[15px] font-normal text-[#1B1F28]'>Time Left:</p>
                        <div className='block sm:block md:flex lg:flex  items-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-1'>
                            <p className='app-select p-2 rounded-lg text-[15px] font-semibold text-center' >
                                {date.toLocaleDateString('en', {
                                    day: 'numeric',
                                    month: 'short',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                    hour12: true,
                                    year: 'numeric',
                                })}
                            </p>

                            <DashboardButton
                                icon={<icons.ArtSecDownload className="mr-3" />}
                                title="Deal Sheet"
                                className="flex justify-center items-center text-center space-x-2 px-5 py-3 border border-purple-900 rounded-md text-2xl"
                            />
                        </div>
                    </div>

                    {/* bid button */}
                    <div className='block sm:block md:flex lg:flex  items-center space-x-0 lg:space-x-3 space-y-2 lg:space-y-1 py-3'>
                        <DashboardButton
                            icon={<icons.ArtSecPlaceBid className="mr-3" />}
                            title="Place a Bid"
                            className="artwork-btn"
                            customFunc={() => handleClick('place_bid')}
                        />

                        <DashboardButton
                            icon={<icons.ArtSecPlaceBid className="mr-3" />}
                            title="Buy in Split"
                            className="artwork-btn"
                            customFunc={() => handleClick('buy_in_split')}
                        />

                        <DashboardButton
                            icon={<icons.ArtSecHoldBid className="mr-3" />}
                            title="Hold"
                            className="artwork-btn"
                            customFunc={() => handleClick('hold_bid')}
                        />

                    </div>

                    {/* table */}
                    <div className='pb-12 pt-4'>
                        <ArtSecTable data={tableData} column={tableColumn} />
                    </div>
                </div>
            </div>}

            {isClicked.place_bid && <PlaceBid product={details} />}
            {isClicked.buy_in_split && <BuyInSplit product={details} />}
            {isClicked.hold_bid && <HoldBid product={details} />}
        </>
    )
}

export default ArtworkDetailsInfo