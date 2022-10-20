import React from 'react';
import { DashboardLayout, ArtSecSelectInput, WalletRating, ArtSecTable, DashboardButton, AddMoney, WithdrawMoney, StartBiding } from '../../components/common';
import { useStateContext } from '../../contexts/ContextProvider';
import { tableColumn, tableData } from '../../data/tableData';



const Wallet = () => {

  const { handleClick, isClicked } = useStateContext();

  return (
    <>
      <DashboardLayout>
        <div className='mt-24 mx-6 mb-10'>

          {/* wallet Rating */}
          <WalletRating />

          {/* wallet button for transaction */}
          <div className='block md:flex space-x-0 md:space-x-3 space-y-2 md:space-y-0 justify-center items-center pb-4 pt-9'>

            {/* START BIDING */}
            <DashboardButton
              className="app-color border text-lg font-semibold border-[#4B006E] cursor-pointer p-3 rounded-md justify-center items-center text-center"
              title="Start Biding"
              customFunc={() => handleClick("start_biding")}
            />

            {/* WITHDRAW MONEY */}
            <DashboardButton
              className="app-color border text-lg font-semibold border-[#4B006E] cursor-pointer p-3 rounded-md justify-center items-center text-center"
              title="Withdraw"
              customFunc={() => handleClick("withdraw_money")}
            />
          </div>

          {isClicked.withdraw_money && <WithdrawMoney />}
          {isClicked.start_biding && <StartBiding />}


          {/* ADD MONEY */}
          <div className='block md:flex justify-center items-center text-white pb-9'>
            <DashboardButton
              className="app-btn text-lg font-semibold p-3 rounded-md justify-center items-center cursor-pointer text-center"
              title="Add Money"
              customFunc={() => handleClick('add_money')}
            />
          </div>
          {isClicked.add_money && <AddMoney />}

          {/* Transaction Button end here */}


          {/* wallet Sorting */}
          <div className='block sm:block md:flex lg:flex justify-between items-center py-6 space-y-2 md:space-y-0'>
            <h2 className='app-color app-title'>Transaction History</h2>
            <div className='block sm:block md:flex lg:flex space-x-0 md:space-x-2 space-y-2 md:space-y-0 justify-center items-center'>
              <ArtSecSelectInput
                className="w-full app-select font-medium focus:ring-0 focus:outline-none p-2 rounded-md"
              >
                <option defaultValue>All Tranx.</option>
              </ArtSecSelectInput>

              <ArtSecSelectInput
                className="w-full app-select font-medium focus:ring-0 focus:outline-none p-2 rounded-md"
              >
                <option defaultValue>All Time</option>
              </ArtSecSelectInput>
            </div>
          </div>

          {/* wallet table */}
          <div className='pb-12'>
            <ArtSecTable data={tableData} column={tableColumn} />
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Wallet