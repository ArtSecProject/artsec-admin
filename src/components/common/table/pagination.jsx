
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const Pagination = ({ dataPerPage, totalData, paginate }) => {

//     const pageNumbers = [];
//     for (let i = 1; i <= dataPerPage; i++) {
//         pageNumbers.push(i);
//     }

//     const [currentButton, setCurrentButton] = useState(1);
//     const [arrOfCurrBtn, setArrOfCurrBtn] = useState([]);

//     useEffect(() => {
//         let tempPageNumbers = [...pageNumbers]
//         if(currentButton >= 1 && currentButton <= 3) {
//             tempPageNumbers = [1, 2, 3, 4, ' > ', pageNumbers.length]
//         }
//         else if(currentButton === 4) {
//             const sliced = pageNumbers.slice(0, 5)
//             tempPageNumbers = [...sliced, ' < ', pageNumbers.length]
//         }
//         setArrOfCurrBtn(tempPageNumbers)
//     },[currentButton, pageNumbers])

//     return (
//         <nav className="flex justify-between items-center pt-4 mt-2">
//             <ul className='inline-flex items-center -space-x-px pagination-container'>
//                 <Link to="#" className=''
//                     onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
//                 >
//                     Prev
//                 </Link>
//                 {pageNumbers.map(number => (
//                     <li key={number}>
//                         <Link
//                             onClick={() => paginate(number)}
//                             to="#"
//                             className={currentButton === number && "active"}
//                         >
//                             {number}
//                         </Link>
//                     </li>
//                 ))}
//                 <Link to="#"
//                     onClick={() => setCurrentButton((prev) => prev === pageNumbers.length ? prev : prev + 1)}
//                 >
//                     Next
//                 </Link>
//             </ul>
//         </nav>
//     )
// }

// export default Pagination