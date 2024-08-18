import React, { useEffect, useState } from 'react'
function Readytostart() {
    const [rotate, setrotate] = useState(0)
    const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });
 
    useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{
         const xvalue = e.clientX;
         const yvalue = e.clientY;
 
         const deltaX = xvalue - window.innerWidth/2;
         const deltaY = yvalue - window.innerHeight/2;
 
         var angle  = Math.atan2(deltaY , deltaX)*(180/Math.PI);
         setrotate(angle-180);
 
         const irisX = (deltaX / window.innerWidth) * 10; // Adjust the multiplier for desired movement
         const irisY = (deltaY / window.innerHeight) * 10; // Adjust the multiplier for desired movement
         setIrisPosition({ x: irisX, y: irisY });
 
 
       })
    })



  return (
    <div   data-scroll data-scroll-speed="-.3" className='w-full h-screen rounded-md' >
      <div  className='w-full h-full bg-[rgb(205,234,104)] rounded-md  flex items-center justify-center'>
        <div className='w-full relative flex text-[12vw] text-[#212121] font-bold font-sans leading-none tracking-tighter flex-col justify-center items-center'>
             <div className=' absolute flex justify-around items-center px-10 w-[35vw] top-[16vw] left-1/2  -translate-x-[50%] -translate-y-[50%]'>
             <div className=' oneeye flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white'>
                  <div style={{ transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)` }} className=' relative w-[7vw] h-[7vw] rounded-full bg-black'>
                       <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                          <div className=' w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                       </div>
                      
                  </div>
              </div>
              <div className=' twoeye flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white'>
                  <div style={{ transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)` }} className=' relative w-[7vw] h-[7vw] rounded-full bg-black'>
                  <div style={{transform:`translate(-50% , -50%)  rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                    <div className=' w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                  </div>
                  </div>
              </div>
             
             
             
             </div>
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT?</h1>

        </div>
      </div>
    </div>
  )
}

export default Readytostart
