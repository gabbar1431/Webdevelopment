import React from 'react'
import { useParams } from 'react-router'
import { useEffect ,useState } from 'react'
import MenuCard from './MenuCard'
import { Link } from "react-router";
const RestaurantsMenu = () => {
    let {id}=useParams()

     const [RestDataa,setRestData]=useState([])
     const [selected,setSelected]=useState(true)
        useEffect(()=>{
            async function fetchData() {
                const proxyServer="https://cors-anywhere.herokuapp.com/"
                const swiggyApi=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=${id}`

              const reslove=await fetch(proxyServer+swiggyApi) 
              const data= await reslove.json()
              const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
              const fliterData=tempData.filter((items)=>'title' in items?.card?.card) 
              setRestData(fliterData);
            }
            fetchData()
           
           
        } ,[])
        console.log(RestDataa)
  return (
    <div>
     <div className="w-[80%] mx-auto mt-20 mb-20">
              
             <Link to={`/city/delhi/${id}/search`}>
                       <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
                       </Link>
            </div>  
    
    <div className='w-[80%] '>
       <div className='flex gap-6 ml-45 mt-12'>
            <button className={`text-xl px-6 py-2 border rounded-2xl ${selected==='veg'?"bg-green-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-xl px-6 py-2 border rounded-2xl ${selected==='nonveg'?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
        </div>
   <div className='w-full mx-auto ml-45'>
     {
      RestDataa.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
     }
   </div>
   </div>
   </div>
  )
}

export default RestaurantsMenu
