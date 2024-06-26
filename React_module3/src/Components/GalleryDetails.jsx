import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function GalleryDetails() {
    const {id} = useParams()
    const [GalleryData,setGalleryData] = useState({})
    
    const data = async()=>{
      let response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      setGalleryData({
       title: response.data.photo.title,
       description:response.data.photo.description,
       url:response.data.photo.url
      })
      console.log(response.data)
    }

    useEffect(()=>{
      data()
    },[])
  return (
    <div className='flex border  gap-10 p-6 bg-blue-950 w-[80%]  mx-auto max-w-screen-lg rounded-lg shadow-lg shadow-blue-500'>
      <img src= {GalleryData.url} className=' w-60 h-56 border rounded-lg shadow-lg shadow-blue-700 '/>
    <div className='flex flex-col justify-center text-white'>
      <h1 className='text-4xl p-2  font-bold'>{GalleryData.title}</h1>
      <p className='text-xl p-2  font-thin'>{GalleryData.description}</p>
    </div> 
    </div>
  )
}

export default GalleryDetails
