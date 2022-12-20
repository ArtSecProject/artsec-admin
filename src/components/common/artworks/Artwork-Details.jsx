import React, { useEffect, useState } from 'react';
import { TrendChart } from '../charts';
import { MarketItem1 } from "../../../assets/import";
import { icons } from "../../../constant/icon";
import { ArtSecSelectInput, ArtWorkDeatilsInfo } from "../../common"
import { data, social } from '../../../data/artwork-details-data';
import { useParams } from 'react-router-dom';
import { privateEndpoints } from '../../../config/api.request';




const ArtworkDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState();

  console.log(id);

  useEffect(() => {
    privateEndpoints.getProduct(setProduct, id)
  }, [id])



  return (
    <>
      <div className='block sm:block md:block lg:flex justify-center space-x-1 lg:space-x-4 py-4 px-2 lg:px-1'>
        {/* image products */}
        <img src={MarketItem1} alt="artwork_name" className='w-full sm:w-full md:w-full lg:w-96' />

        {/* charts col */}
        <div className='w-full sm:w-full md:w-full lg:w-2/3 px-2 lg:px-1'>
          {/* social links */}
          <div className='block sm:block md:flex lg:flex xl:flex justify-between pb-2'>
            <div className='flex justify-center items-center space-x-2 lg:space-x-2'>
              <p className='flex items-center'><icons.ArtSecFavourite className="mr-2" />75 favourite</p>
              <p className='flex items-center'><icons.ArtSecEye className="mr-2" /> 6.3k views</p>
            </div>

            <div className='flex justify-center items-center space-x-2 text-center'>
              <p>Share:</p>
              {social.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </div>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 pb-2'>
            {data.map((item, index) => (
              <div key={index.id} className='border border-gray-300 p-3 rounded-lg'>
                <p className='text-[15px] font-normal'>{item.name}</p>
                <h2 className="text-2xl font-bold text-[#1B1F28]">$ {item.rate}</h2>
              </div>
            ))}
          </div>

          {/* charts */}
          <div className='border border-gray-300 rounded-md p-3'>
            <div className='flex justify-between items-center pb-3'>
              <p className="text-lg font-normal">Trends</p>
              <ArtSecSelectInput className="bg-[#F2F3F8] rounded-[10px] p-2">
                <option value="">All Time</option>
              </ArtSecSelectInput>
            </div>
            <TrendChart />
          </div>
        </div>
      </div>

      {/* // section 2 */}

      <ArtWorkDeatilsInfo details={product} />

    </>

  )
}

export default ArtworkDetails