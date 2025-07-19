import React from 'react'

const GroCard = ({foodData}) => {
  return (
    <div className='flex-none'>
      
    <a href={foodData?.action?.link}>
    <img className='w-40 h-50 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} />

</a>
  <h1 className='flex font-bold justify-center'>{foodData?.action?.text}</h1>
   </div>
  )
}

export default GroCard
