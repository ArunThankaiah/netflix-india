import React,{useState} from 'react'

const Frequently = () => {
  
  //1st row
  const [close, setClose] = useState(false)
  const showClass = close ? 'display' : 'hidden'
  const closeClass = `${showClass} pt-4 `

  //2nd row
  const [closeTwo, setCloseTwo] = useState(false)
  const showTwoClass = closeTwo ? 'display' : 'hidden'
  const closeTwoClass = `${showTwoClass} pt-4`
  //3rd row
  const [closeThree, setCloseThree] = useState(false)
  const showThreeClass = closeThree ? 'display' : 'hidden'
  const closeThreeClass = `${showThreeClass} pt-4`
  //4th row
  const [closeFour, setCloseFour] = useState(false)
  const showFourClass = closeFour ? 'display' : 'hidden'
  const closeFourClass = `${showFourClass} pt-4`
  //5th row
  const [closeFive, setCloseFive] = useState(false)
  const showFiveClass = closeFive ? 'display' : 'hidden'
  const closeFiveClass = `${showFiveClass} pt-4`
  //6th row
  const [closeSix, setCloseSix] = useState(false)
  const showSixClass = closeSix ? 'display' : 'hidden'
  const closeSixClass = `${showSixClass} pt-4`
  
  return (
    <div className=' bg-[rgba(0,0,0,0.9)] pt-3'>
    <div className='container mx-auto flex flex-wrap'>
     <div className='p-4 w-full h-auto flex flex-wrap  bg-black py-20 lg:px-36'>
     <div className='w-full mx-auto'>
     <h1 className=' text-center text-white text-3xl lg:text-5xl font-extrabold tracking-wider '>Frequently Asked Questions</h1>
     {/* 1st question */}
     <div className='flex flex-wrap bg-[#414141] mt-8 py-6 pl-8 justify-between pr-8 text-white font-normal text-sm md:text-xl lg:text-2xl hover:bg-[#414139]'>
        <h3 className=''>What is netflix?</h3>
        <button onClick={()=>setClose(!close)}>
          {
            close ? 
            <svg 
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
             :
             
              <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
              stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>

          }
         
       </button>
       
        <p className={closeClass}>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.
          <br/> <br/>
         You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
         </p>

      </div>
      {/* 2nd question */}
      <div className='flex flex-wrap bg-[#414141] mt-2 py-6 pl-8 justify-between pr-8 text-white font-normal text-sm md:text-xl lg:text-2xl hover:bg-[#414139]'>
        <h3 className=''>How much does Newflix cost ?</h3>
        <button onClick={()=>setCloseTwo(!closeTwo)}>
          {
            closeTwo ? 
            <svg 
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
             :
             
              <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
              stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>

          }
         
         </button>
         <p className={closeTwoClass}>
         Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.
         </p>
      

      </div>
      {/* 3rd question */}
      <div className='flex flex-wrap bg-[#414141] mt-2 py-6 pl-8 justify-between pr-8 text-white font-normal text-sm md:text-xl lg:text-2xl hover:bg-[#414139]'>
        <h3 className=''>Where can i watch?</h3>
        <button onClick={()=>setCloseThree(!closeThree)}>
          {
            closeThree ? 
            <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
            :
            
             <svg 
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
             stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
          }
         
         </button>
         <p className={closeThreeClass}>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.
          <br/> <br/>
         You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
         </p>
      

      </div>
      {/* 4th question */}
      <div className='flex flex-wrap bg-[#414141] mt-2 py-6 pl-8 justify-between pr-8 text-white font-normal text-sm md:text-xl lg:text-2xl hover:bg-[#414139]'>
        <h3 className=''>How do i cancel?</h3>
        <button onClick={()=>setCloseFour(!closeFour)}>
          {
            closeFour ? 
            <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
            :
            
             <svg 
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
             stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

          }
         
         </button>
         <p className={closeFourClass}>
         Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime.
         </p>
      

      </div>
      {/* 5th question */}
      <div className='flex flex-wrap bg-[#414141] mt-2 py-6 pl-8 justify-between pr-8 text-white font-normal text-sm md:text-xl lg:text-2xl hover:bg-[#414139]'>
        <h3 className=''>What can i watch on Nerflix?</h3>
        <button onClick={()=>setCloseFive(!closeFive)}>
          {
            closeFour ? 
            <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
            :
            
             <svg 
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
             stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

          }
         
         </button>
         <p className={closeFiveClass}>
         Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
         </p>
      

      </div>
      {/* 6th question */}
      <div className='flex flex-wrap bg-[#414141] mt-2 py-6 pl-8 justify-between pr-8 text-white font-normal text-sm md:text-xl lg:text-2xl hover:bg-[#414139]'>
        <h3 className=''>What can i watch on Nerflix?</h3>
        <button onClick={()=>setCloseSix(!closeSix)}>
          {
            closeSix ? 
             <svg 
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
             :
             
              <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
              stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>

          }
         
         </button>
         <p className={closeSixClass}>
         Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
         </p>
      

      </div>
      <div className='text-white flex flex-col items-center text-center justify-center'>
          <p className='mt-8 '>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex flex-col md:flex mt-8 '>
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

export default Frequently
