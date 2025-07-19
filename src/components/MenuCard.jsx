import React, { useState } from 'react'
import RestInfo from './RestInfo'

const MenuCard = ({menuItems,foodSelected}) => {
    const [isOpen,setIsOpen]=useState(true)
    
    
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>)
                }
            </div>
            </div>
        )
    }
    if(!isOpen){
        return(
        <div className='w-full '>
            <div className='flex justify-between w-full'>
            <p className='text-3xl font-bold mb-4'>{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
        <div className='w-full bg-gray-200 py-4 rounded-xl mt-2 mb-2'></div>
        </div>
        )
    }
    
   if(foodSelected==='veg'){
    return(
        <div className='w-full pt-6'>
        <div className='flex justify-between w-full'>
         <p className='text-3xl font-bold mb-4'>{menuItems.title}</p>
         <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
         </div>

<div>
     
  {
     menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
  } 
  </div>
 </div>
    )
   }
   if(foodSelected==='nonveg'){
    return(
        <div className='w-full pt-6'>
        <div className='flex justify-between w-full'>
         <p className='text-3xl font-bold mb-4'>{menuItems.title}</p>
         <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
         </div>

<div>
     
  {
     menuItems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
  } 
  </div>
 </div>
            // <div>non veg hu</div>
    )
   }

  return (
   
       
    <div className='w-full pt-6'>
           <div className='flex justify-between w-full'>
            <p className='text-3xl font-bold mb-4'>{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>

<div>
        
     {
        menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
     } 
     </div>
    </div>
    
  )
}

export default MenuCard
