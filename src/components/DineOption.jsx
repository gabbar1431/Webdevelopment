import React from 'react'
import {dineoutRestaurants} from "../Utilis/dineData"
import DineCard from "./DineCard"

const DineOption = () => {
  return (
         <div className="w-[80%] mx-auto mt-20 mb-20">
             <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
             <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 hide-scrollbar">
                {
                 dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
                }
             </div>
 
         </div>
     )
}

export default DineOption
