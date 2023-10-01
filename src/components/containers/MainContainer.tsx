// import React from "react"
// import List from "./List";

// // let Dummy = [{
// //     label: "todo",
// //     lists:['list1','list2','list3']
// // },
// //     {
// //         label: "doing",
// //         lists:["asdfgghj"]
// //     }

// // ]

// const MainContainer = () => {
//   return (
//     <div className="flex">
//           {Dummy?.map((data,idx) => {
//               return (
//                   <div key={data.label} >
//                       <p>
//                           {data.label}
//                       </p>
//                       <List data={data} />
//                   </div>
//           )
//       })}
//     </div>
//   )
// };

// export default MainContainer;

import React from "react";
import { BsThreeDots } from "react-icons/bs";
import List from "./List";
const MainContainer = () => {
  return (
    <div className="bg-black rounded-lg flex flex-col w-[275px] px-3 py-2 text-sm ml-3">
      <div className="flex justify-between">
        <input type="text" placeholder="ToDo" className="bg-transparent text-lg focus:bg-slate-800 rounded-md px-2" />
              <BsThreeDots className="text-slate-100" size={20} />
      </div>
      <div className="my-3">
        <List />
      </div>
      <div>
        <button className="text-slate-300">+ Add a card</button>
      </div>
    </div>
  );
};

export default MainContainer;
