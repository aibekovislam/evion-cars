import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Detail from '../pages/Detail'
import BuyElectroCar from '../pages/BuyElectroCar'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/details/:id/form' element={<BuyElectroCar/>} />
    </Routes>
  )
}

export default MainRoutes