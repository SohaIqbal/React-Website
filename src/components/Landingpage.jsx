// import { motion } from 'framer-motion';
// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";


// function Landingpage() {
//   return (
//     <div className='w-full h-screen bg-[#F1F1F1] pt-1'>
//         <div className='mt-40 px-20'>
//             {["We create","Eye-opening","Presentations"].map((item ,index)=>{
//                 return (
//                     <div className='w-fit flex items-center text-[#212121]'>
//                         <div className=' flex items-center text-[7vw] tracking-tighter leading-none font-extrabold uppercase'>
//                             {index === 1 && (<motion.div initial={{width:"0" , marginRight: "0"}} animate={{width:"10vw" , marginRight: ".5vw"}} transition={{ease:[0.5, 1, 0.89, 1],duration:.5}} className=' overflow-hidden w-[8vw] h-[5vw] bg-red-500 rounded-md  relative top-[.4vw]'>
//                                 <motion.img initial={{width:"0" , marginRight: "0"}} animate={{width:"10vw" , marginRight: ".5vw"}} transition={{ease:[0.5, 1, 0.89, 1],duration:.5}} className='w-[5vw] h-[5vw] object-cover top-0 left-0 absolute' src="https://images.unsplash.com/photo-1723033868459-a52e65b8cf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </motion.div>)}
//                             <h1>{item}</h1>
//                             </div>
//                     </div>
//                 )
//             })}
//         </div>

//         <div className='border-t-[.5px] border-zinc-700 mt-28 flex justify-between  items-center py-2 px-20 '>
//             {["For public and private companies" , "From the first pitch to IPO"].map((item, index)=>{
//                 return <p className='text-[#212121] text-[1.1vw]  '>{item}</p>
//             })}

//         <div className='flex mt-2 gap-2'>
//             <div className='border-[1.5px] text-[#212121] text-[1vw] rounded-full px-3 py-[3px] uppercase border-zinc-600 '> Start the project</div>
//             <div className='w-8 h-8  rounded-full border-[1.5px]  border-zinc-600 px-[7px] py-[5px] flex justify-center items-center '>
//                 <span className='rotate-[-40deg] text-[#212121]'>
//                 <FaArrowRight/>
//                 </span>
//             </div>
//         </div>
//         </div>

        
//     </div>
//   )
// }

// export default Landingpage




import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

function Landingpage() {
  return (
    <div data-scroll data-scroll-speed="-.5" className='w-full h-screen bg-[#F1F1F1] pt-1'>
      <div className='mt-40 px-20'>
        {['We create', 'Eye-opening', 'Presentations'].map((item, index) => {
          return (
            <div key={index} className='w-fit flex items-center text-[#212121]'>
              <div className='flex items-center text-[7vw] tracking-tighter leading-none font-extrabold uppercase'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: '0', marginRight: '0' }}
                    animate={{ width: '10vw', marginRight: '.5vw' }}
                    transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.5 }}
                    className='overflow-hidden bg-red-500 rounded-md relative top-[.4vw] h-[5vw]'
                  >
                    <img
                      className='absolute w-[10vw] h-[5vw] object-cover top-0 left-0'
                      src='https://images.unsplash.com/photo-1569154107747-fb00e3b3430d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'
                      alt=''
                    />
                  </motion.div>
                )}
                <h1>{item}</h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className='border-t-[.5px] border-zinc-700 mt-28 flex justify-between items-center py-2 px-20'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
          return (
            <p key={index} className='text-[#212121] text-[1.1vw]'>
              {item}
            </p>
          );
        })}

        <div className='flex mt-2 gap-2'>
          <div className='border-[1.5px] text-[#212121] text-[1vw] rounded-full px-3 py-[3px] uppercase border-zinc-600'>
            Start the project
          </div>
          <div className='w-8 h-8 rounded-full border-[1.5px] border-zinc-600 px-[7px] py-[5px] flex justify-center items-center'>
            <span className='rotate-[-40deg] text-[#212121]'>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
