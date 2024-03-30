import React from 'react'
import img02 from '../assets/video/img02.gif'

const Download = () => {
  return (
    <div className=' bg-[rgba(0,0,0,0.9)] pt-3'>
    <div className='container mx-auto flex flex-wrap'>
     <div className='p-4 w-full h-auto py-10 lg:h-[86vh] flex flex-wrap items-center bg-black  justify-center lg:px-36'>
     <div className='w-full md:w-1/2 text-white items-center justify-center flex '>
          <img src={img02} alt="001" className='rounded-xl w-auto h-80' />
        </div>
      <div className='w-full text-center md:w-1/2 mt-8 md:mt-0 md:text-start text-white '>
         <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wides'>Download your shows to watch offline</h1>
         <p className='text-xl lg:text-1xl font-bold tracking-wide mt-4'>Save your favourites easily and always have something to watch.</p>
      </div>
        

     </div>
    
    </div>
  </div>
  )
}

export default Download
