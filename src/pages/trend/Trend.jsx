import React from 'react';
import { AppHeading, DashboardLayout, SortTrend, Trends } from '../../components/common';



const Media = () => {

  // const { isClicked, handleClick } = useStateContext();
  // const [tableData, setTableData] = useState([]);
  // const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  //     setTableData(res.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);


  return (
    <>

      <DashboardLayout>
        <div className='mt-24 mx-6 mb-10'>

          {/* favorite art work */}
          <div>
            <AppHeading
              title="Trends"
              desc="These are top Arts on ArtSec, ranked by bids made on them."
            />

              <SortTrend />
             <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center gap-3 py-8'>
              <Trends />
             </div>
            
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Media