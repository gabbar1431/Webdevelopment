import React from 'react'
import DineOption from "./components/DineOption"
import Food from "./components/Food"
import GroceryOption from "./components/GroceryOption"
import Header from "./components/Header"
const Home = () => {
  return (
    <>
    <Header />
    <Food />
    <GroceryOption />
    <DineOption />
    </>
  )
}

export default Home
