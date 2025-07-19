import React, { useEffect, useState } from 'react'
import RestData from './RestData'
import Shimmer from './Shimmer'

const Restaurants = () => {
    const [RestDataa,setRestData]=useState([])
    useEffect(()=>{
        async function fetchData() {
            const proxyServer="https://cors-anywhere.herokuapp.com/"
            const swiggyApi="https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8373&lng=80.9165&is-seo-homepage-enabled=true"
          const reslove=await fetch(proxyServer+swiggyApi) 
          const data= await reslove.json() 
          setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData()
       
       
    } ,[])
     if(RestDataa.length==0)
            return <Shimmer />
    
    // console.log("hi shyam ")
    // console.log(RestData);
  return (
    <div className='flex flex-wrap w-[80%] mx-auto gap-5 mt-20'>
       {
        RestDataa?.map((restInfo)=><RestData key={restInfo?.info?.id} restInfo={restInfo} />)
       }
    </div>
  )
}

export default Restaurants
