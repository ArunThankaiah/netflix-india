import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[rgba(0,0,0,0.9)] pt-3'>
    <div className='container mx-auto flex flex-wrap'>
     <div className='p-4 w-full h- lg:h-[44vh]   bg-black   lg:px-36 '>
      <p className='text-base  text-white mt-8'>Questions? Call <span className='underline'>000-800-919-1694</span></p>
      <div className='text-gray-400 flex justify-between pr-80 mt-8 '>
        <div className='flex flex-col leading-10'>
        <a herf="#" className='underline'>FAQ</a>
        <a herf="#" className='underline'>Investor Relations</a>
        <a herf="#" className='underline'>Privacy</a>
        <a herf="#" className='underline'>Speed Test</a>
        </div>
        <div className='flex flex-col leading-10'>
        <a herf="#" className='underline'>Help Centre</a>
        <a herf="#" className='underline'>Jobs </a>
        <a herf="#" className='underline'>Cookie Preferences</a>
        <a herf="#" className='underline'>Legal Notices</a>
        </div>
        <div className='flex flex-col leading-10'>
        <a herf="#" className='underline'>Account</a>
        <a herf="#" className='underline'>Ways to Watch</a>
        <a herf="#" className='underline'>Corporate Information</a>
        <a herf="#" className='underline'>Only on Netflix</a>
        </div>
        <div className='flex flex-col leading-10'>
        <a herf="#" className='underline'>Media Centre</a>
        <a herf="#" className='underline'>Terms of Use</a>
        <a herf="#" className='underline'>Contact Us</a>
       
        </div>
      
      
      </div>
     

     </div>
    
    </div>
  </div>
  )
}

export default Footer
