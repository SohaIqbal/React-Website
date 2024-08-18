import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll  data-scroll-speed="-.001" className='w-full px-2 py-[5vw] rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className='border-t-[.5px] border-b-[.5px] flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, duration:10 , ease:"linear"}} className='text-[20vw] -mt-[3vw] -mb-[1vw] tracking-tighter uppercase leading-none font-bold pr-20 '>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, duration:10 , ease:"linear"}} className='text-[20vw] -mb-[1vw]  -mt-[3vw] tracking-tighter uppercase leading-none font-bold pr-20'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, duration:10 , ease:"linear"}} className='text-[20vw] -mb-[1vw]  -mt-[3vw] tracking-tighter uppercase leading-none font-bold pr-20'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
