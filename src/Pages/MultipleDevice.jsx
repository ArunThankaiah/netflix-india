import React from 'react'
import img03 from '../assets/video/img03.avif'
const MultipleDevice = () => {
  return (
    <div>
       <div className=' bg-[rgba(0,0,0,0.9)] pt-3'>
      <div className='container mx-auto flex flex-wrap'>
       <div className='p-4 w-full h-auto py-10 lg:h-[86vh] flex flex-wrap items-center bg-black  justify-center lg:px-36'>
        <div className='w-full text-center md:w-1/2 md:text-start text-white '>
           <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wide'>Watch everywhere</h1>
           <p className='text-xl lg:text-1xl font-bold tracking-wide mt-4'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
          <div className='w-full  md:w-1/2 mt-8 md:mt-0 text-white '>
            <img src={img03} alt="001" />
          </div>

       </div>
      
      </div>
    </div>
    </div>
  )
}

export default MultipleDevice
