import React from 'react'
import { Link } from 'react-router'
const Header = () => {
  return (
    <header className='bg-[#ff5200] font-serif'>
    <div className='flex justify-between  py-8 px-40'>
  <img className='w-40 h-12' src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>
    <div className='font-serif text-white text-base font-bold flex gap-10 items-center '>
        <a target='_blank' href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
        <a target='_blank' href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
        <a className='border border-white py-3 px-4 rounded-2xl' target='_blank' href="https://www.swiggy.com/corporate/">Get The App</a>
        <a className='border border-black bg-black py-3 px-6 rounded-2xl' target='_blank' href="https://www.swiggy.com/corporate/">Sign in</a>
    </div>
    </div>
    <div className='pt-16 pb-8 relative'>
        <img className='h-130 w-60 absolute left-0 top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"/>
        <img className='h-130 w-60 absolute right-0 top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"/>
        <div className='text-5xl text-white font-bold max-w-[60%] container mx-auto text-center'>
            Order Food and groceries. Discovers best resturants. Swiggy it!
        </div>
        <div className='max-w-[70%] container mx-auto flex gap-5 mt-10 justify-center'>
            <input className='bg-white w-[25%] text-1xl px-6 py-4 rounded-2xl' type="text" placeholder='Enter your delivery location' />
            <input className='bg-white w-[45%] text-1xl px-6 py-4 rounded-2xl'  type="text" placeholder='Serach for restaurant, item or more' />
        </div>
    </div>
    <div className='max-w-[80%] container mx-auto flex'>
       <Link to="/restaurants">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" />
            </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" />
        </a>
        <a href="https://www.swiggy.com/dineout">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" />
        </a>
        <a href="https://www.swiggy.com/genie">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" />
        </a>

    </div>
</header>
  )
}

export default Header
