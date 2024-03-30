import React from 'react'
import vid01 from '../assets/video/vid01.gif'

const Banner = () => {
  return (
    <div className=' bg-[rgba(0,0,0,0.9)] pt-3'>
      <div className='container mx-auto flex flex-wrap'>
       <div className='px-6 md:px-4 w-full  h-auto py-10   lg:h-[86vh] flex flex-wrap items-center bg-black  justify-center lg:px-36'>
        <div className='w-full text-center md:w-1/2 md:text-start text-white '>
           <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wide'>Enjoy on your TV</h1>
           <p className='text-xl lg:text-1xl font-bold tracking-wide mt-4'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
          <div className='w-full  md:py-0 mt-8 md:mt-0 md:w-1/2 text-white'>
            <img src={vid01} alt="001" />
          </div>

       </div>
      
      </div>
    </div>
  )
}

export default Banner
