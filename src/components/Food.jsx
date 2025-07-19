import React from 'react'
import {imageGridCards} from "../Utilis/apidata"
import FoodCard from './FoodCard'
const Food = () => {
  return (
    <>
    <div className='w-[80%] container mx-auto flex flex-wrap  mt-20 gap-3'>
       {
        imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} />)
       }
    </div>
    </>
  )
}

export default Food
