import React from 'react'
import {groceryGridCards} from "../Utilis/Grocydata"
import GroCard from './GroCard'

const GroceryOption = () => {
  return (
     <div className='w-[80%] container mx-auto mt-20'>
     <h2 className='text-2xl font-bold'>Shop groceries on Instamart</h2>
       <div className='w-[100%] container mx-auto flex  flex-nowrap  overflow-x-auto mt-5 gap-3 hide-scrollbar'>
       
          {
           groceryGridCards.map((foodData)=><GroCard key={foodData.id} foodData={foodData} />)
          }
       </div>
       </div>
  )
}

export default GroceryOption
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// pizza hut : https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=60379&submitAction=ENTER
// kfc :       https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=405025&submitAction=ENTER