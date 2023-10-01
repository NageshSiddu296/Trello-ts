// import React from "react";

// interface dataType{
//     data : {
//       label:string,
//       lists:string[]
//     }
//   }
// const List = ({data}:dataType) => {
//   return (
//     <div>
//       <p className="flex flex-col">
//         {data?.lists?.map((items) => (
//           <div>{items}</div>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default List;


import React from 'react'

const List = () => {
  return (
      <div className='bg-slate-800 rounded-md ml-3'>
          <input type="text" className='bg-transparent text-lg'/>
    </div>
  )
}

export default List