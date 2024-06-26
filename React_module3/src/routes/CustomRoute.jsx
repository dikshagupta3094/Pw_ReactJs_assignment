import React from 'react'
import GalleryList from '../Components/GalleryList'
import GalleryDetails from '../Components/GalleryDetails'
import { Route, Routes } from 'react-router-dom'

function CustomRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<GalleryList/>}/>
        <Route path='/photos/:id' element = {<GalleryDetails/>}/>
      </Routes>
    </div>
  )
}

export default CustomRoute
