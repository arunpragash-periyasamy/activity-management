const TableShimmer = ({rows, columns}:{rows:number, columns:number}) => {
     return (<div className="m-4 flex items-center justify-center">
       <div className="w-full animate-pulse space-y-4">
         {[...Array(rows)].map((_, idx) => (
           <div key={idx} className="flex space-x-4">
             {[...Array(columns)].map((_, cellIdx) => (
               <div
                 key={cellIdx}
                 className="h-6 w-1/3 bg-gray-400 dark:bg-gray-600 rounded-lg"
               ></div>
             ))}
           </div>
         ))}
       </div>
     </div>)
}

export default TableShimmer;