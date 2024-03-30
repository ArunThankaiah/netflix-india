import React from 'react'
import kids from '../assets/video/kids.png'
const Create = () => {
  return (
    <div>
       <div className=' bg-[rgba(0,0,0,0.9)] pt-3'>
      <div className='container mx-auto flex flex-wrap'>
       <div className='p-4 w-full h-auto py-10 lg:h-[86vh] flex flex-wrap items-center bg-black  justify-center lg:px-36'>
       <div className='w-full md:w-1/2 text-white'>
            <img src={kids} alt="001" />
          </div>
        <div className='w-full text-center mt-8 md:mt-0 md:w-1/2 md:text-start text-white '>
           <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wide'>Create profiles for kids</h1>
           <p className='text-xl lg:text-1xl font-bold tracking-wide mt-4'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
          

       </div>
      
      </div>
    </div>
    </div>
  )
}

export default Create
