import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Detail from '../pages/Detail'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/details/:id' element={<Detail/>}/>
    </Routes>
  )
}

export default MainRoutes