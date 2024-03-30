import React,{useId} from 'react'
import netflix from '../assets/assts/netflix.png'
const Nav = () => {
  
  return (
    <div className=' bg-[rgba(0,0,0,0.9)] '>
    <div className='container mx-auto '>
     <div className='p-4 w-full  min-h-screen relative flex flex-wrap items-center bg-[url("./assets/assts/netflix-octobre-contenus-2022.jpg")] justify-center lg:px-36 bg-cover bg-center '>  
     <div className='w-full absolute top-0 left-0 right-0 bottom-0 h-auto lg:min-h-screen bg-[rgba(0,0,0,0.5)]  '>
     <nav className='w-full px-2 flex lg:flex md:px-24 lg:px-36 items-center justify-between bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)]'>
           <div className='flex flex-wrap'>
           <img src={netflix} alt="netlix" className='w-36 h-24 '  />
           </div>
           <div className='flex gap-x-2 md:gap-x-4 items-center justify-center'>
           <div >
            <select className='text-white text-sm px-1  md:text-base md:px-4 py-1 border border-gray-600 rounded-md bg-[rgba(0,0,0,0.5)]'>
              <option value="English">English</option>
              <option value="Malayalam">Malayalam</option>
            </select>
           </div>
            <div>
              <button className='px-3 py-1 flex text-sm md:text-base text-  items-center tracking-wider bg-red-600 text-white rounded-md hover:bg-red-800'>Sign In</button>
            </div>
           </div>
           
       </nav>

       <div className='flex flex-col pb-20 md:pb-0 mt-16 md:mt-36 text-white items-center justify-center text-center  tracking-wider'>
       <div className='flex'>
       <h1 className='w-full text-xl md:text-3xl lg:text-5xl font-extrabold tracking-wider '>Unlimited movies, TV shows and more</h1>
       </div>
        <div className='flex'>
        <p className='flex text-sm md:1xl lg:text-2xl text-center font-extrabold mt-4 tracking-wider '>Watch anywhere. Cancel anytime.</p>
        </div>
       <div className='flex'>
       <p className='flex text-sm md:1xl lg:text-2xl text-center font-extrabold mt-4 tracking-wider'>Ready to watch? Enter your email to create or restart your membership.</p>
       </div>
       <div className='flex gap-x-4 mt-8 '>
       <div className='md:flex gap-x-4' >
            <input type="email" placeholder='Email address' className=' py-2 md:pr-32 md:py-4 pl-4 rounded-md bg-[rgba(0,0,0,0.5)] text-white border border-gray-600'/>
        <button className='w-full flex   py-2 text-center justify-center mt-4 md:mt-0 md:flex items-center tracking-wider bg-red-600 px-6 rounded-md hover:bg-red-800'>Get Started <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

          </span>
          </button>
            </div>
       </div>
        </div>

     </div>
    </div>
    </div>
  </div>
  )
}

export default Nav
