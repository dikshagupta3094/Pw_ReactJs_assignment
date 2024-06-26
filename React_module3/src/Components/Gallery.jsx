import React from 'react'
import { Link } from 'react-router-dom'

function Gallery(props) {
  return (
   <div>
 
   <Link to={`/photos/${props.id}`}>
   <div key={props.id} className='p-3 m-3 border-2 rounded-md w-60 flex flex-col justify-center items-center hover:bg-[#ccffee] hover:-translate-y-4 ease-in-out duration-500'>
            <p className='p-2 text-center font-semibold'>{props.title}</p>
            {/* <p>{props.id}</p> */}
            <img src={props.image} className='w-44 h-44 rounded-lg mb-4'/>
        </div>
   </Link>
       
    
   </div>
  )
}

export default Gallery
