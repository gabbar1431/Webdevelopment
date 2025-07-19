import React from 'react'

const FoodCard = ({foodData}) => {
  return (
 <>
 <a href={foodData?.action?.link}>
 <img className='w-40 h-50 ' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} />
 </a>
 </>
  )
}

export default FoodCard
