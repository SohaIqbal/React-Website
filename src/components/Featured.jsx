import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all'

function Featured() {
   const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()]
  const handlehover=(index)=>{
    cards[index].start({y:"0"})

  }
  const handlehoverend=(index)=>{
    cards[index].start({y:"100%"})

  }
  return (
    <div  className='w-full py-20'>
      <div className='w-full border-b-[1px] border-zinc-500 '>
        {/* <h1 className=' ml-[5vw] text-[#212121] text-[4vw] tracking-tight mb-7'>Featured projects</h1> */}
      
      </div>




      <div className=' cards w-full flex items-center justify-evenly py-[5vw]'>
        <motion.div onHoverStart={()=>{handlehover(0)}}
        onHoverEnd={()=>{handlehoverend(0)}}

        className=' relative cardcont w-[45vw] h-[35vw] bg-red-400 rounded-2xl'>
            <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 z-[99] -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none tracking-tighter text-[8vw]'>
            {"FYDE".split('').map((items,index)=>
                <motion.span 
                initial={{y: "100%"}} 
                animate={cards[0]}
                transition={{ease:[0.22,1,.36,1], delay: index * 0.06 }}

                className='inline-block'>
                {items}</motion.span>
            )}    
            </h1>
            <div className='w-full h-full bg-green-400 rounded-2xl overflow-hidden' >
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
        </motion.div>
        <motion.div onHoverStart={()=>{handlehover(1)}}
        onHoverEnd={()=>{handlehoverend(1)}}
        className=' relative cardcont w-[45vw] h-[35vw] bg-red-400 rounded-2xl '>
        <h1 className='absolute  flex overflow-hidden right-full translate-x-1/2 top-1/2 z-[99] -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none tracking-tighter text-[8vw]'>
            {"VISE".split('').map((items,index)=>
               <motion.span 
               initial={{y: "100%"}} 
               animate={cards[1]}
               transition={{ease:[0.22,1,.36,1], delay: index * 0.06 }}

               className='inline-block'>
               {items}</motion.span>
            )}        
        </h1>
            <div className='w-full h-full bg-green-400 rounded-2xl overflow-hidden '>
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
        </motion.div>
      </div>

      <div className='  w-full flex items-center justify-evenly py-[5vw]'> 
        <motion.div onHoverStart={()=>{handlehover(2)}}
        onHoverEnd={()=>{handlehoverend(2)}}
         className=' cardcont relative w-[45vw] h-[35vw] bg-red-400 rounded-2xl'>
        <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 z-[99] -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none tracking-tighter text-[8vw]'>
        {"TRAWA".split('').map((items,index)=>
               <motion.span 
               initial={{y: "100%"}} 
               animate={cards[2]}
               transition={{ease:[0.22,1,.36,1], delay: index * 0.06 }}

               className='inline-block'>
               {items}</motion.span>
            )}    
        </h1>
            <div className='w-full h-full bg-green-400 rounded-2xl overflow-hidden '>
                <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </div>
        </motion.div>
        <motion.div onHoverStart={()=>{handlehover(3)}}
        onHoverEnd={()=>{handlehoverend(3)}}
        className=' cardcont relative w-[45vw] h-[35vw] bg-red-400 rounded-2xl'>
        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 z-[99] -translate-y-1/2 text-[#CDEA68] font-semibold  leading-none tracking-tighter text-[8vw]'>
        {"PREMIUM BLEND".split('').map((items,index)=>
                <motion.span 
                initial={{y: "100%"}} 
                animate={cards[3]}
                transition={{ease:[0.22,1,.36,1], delay: index * 0.06 }}
 
                className='inline-block'>
                {items}</motion.span>
            )}    
        </h1>
            <div className='w-full h-full bg-green-400 rounded-2xl overflow-hidden'>
                <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Featured
