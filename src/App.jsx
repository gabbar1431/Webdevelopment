import React from 'react'
import './App.css'
import Restaurants from "./components/Restaurants"
import Home from './Home'
import RestaurantsMenu from "./components/RestaurantsMenu"
import { BrowserRouter,Routes,Route } from 'react-router'
import SearchFood from './components/SearchFood'
import SecondaryHome from './components/SecondaryHome'
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from './components/Checkout'
function App() {
  

  return (
    <>
     <Provider store={store}>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />}></Route>
      <Route element={<SecondaryHome></SecondaryHome>}>
     <Route path='/restaurants' element={<Restaurants />}></Route>
     <Route path='/delhi/city/:id' element={<RestaurantsMenu />}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood />}></Route>
        </Route>
         <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
