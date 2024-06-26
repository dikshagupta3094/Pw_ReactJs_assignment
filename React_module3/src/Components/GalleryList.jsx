import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
// import LoopIcon from '@mui/icons-material/Loop';
function GalleryList() {
    const [isloading,setLoading] = useState(true)
    const [galleryURL,setGalleryURL] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20`)
    const [data,setData] = useState(null)
    const downloadData = async()=>{
      //fetched data 
      let response = await axios.get(galleryURL)
      console.log("Data::",response.data);
      setData(response.data)
      setLoading(!isloading)
  
    }

    useEffect(()=>{
      downloadData() 
    },[])
    return (  
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {isloading ? 'Loading....': data && data.photos.map((photo)=> <Gallery key={photo.id} image = {photo.url} title = {photo.title} id = {photo.id}/>)}
    </div>
  )
}

export default GalleryList
