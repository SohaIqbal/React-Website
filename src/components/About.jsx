import React from 'react'
import { FaCircle } from "react-icons/fa6";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full p-20 text-[3.5vw] tracking-tight leading-none text-[#212121] bg-[#CDEA68] rounded-2xl'>
      <h1>Ochi is a strategic partner for fast-growing tech businesses that need to <span className='border-b-[2px] border-zinc-900'> raise funds</span>, sell products, explain complex ideas, and hire great people.</h1>
      <div className=' border-t-[1px] border-zinc-600 mt-20 flex'>
        <div className='w-1/2 '>
          <h1 className='mt-7 text-[3.7vw]'>Our approach</h1>
          <div className=' w-[15vw] mt-9 border-[1.5px] text-[#d1caca] text-[1.2vw] rounded-full px-[1.5vw] py-[1.5vw] uppercase border-[#212121] bg-[#212121] flex gap-9 justify-center items-center'> Read more
            <div><span className='text-[9px] relative top-[1.2px]'><FaCircle/></span></div>
          </div>
        </div>
        <div className='w-1/2 h-[30vw] rounded-2xl  mt-7'>
        <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default About
