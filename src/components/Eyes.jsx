import React, { useEffect, useState } from 'react'

function Eyes() {

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
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className=' main relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
          <div className=' eyekabg absolute flex justify-around items-center w-[35vw] top-[16vw] left-1/2 -translate-x-[50%] -translate-y-[50%] '>
              <div className=' oneeye flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
                  <div style={{ transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)` }} className=' relative w-[9vw] h-[9vw] rounded-full bg-black'>
                       <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                          <div className=' w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                       </div>
                      
                  </div>
              </div>
              <div className=' twoeye flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
                  <div style={{ transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)` }} className=' relative w-[9vw] h-[9vw] rounded-full bg-black'>
                  <div style={{transform:`translate(-50% , -50%)  rotate(${rotate}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                    <div className=' w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                  </div>
                  </div>
              </div>
          </div>     
      </div>
    </div>
  )
}

export default Eyes
