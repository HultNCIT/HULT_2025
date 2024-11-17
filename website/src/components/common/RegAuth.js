'use client'
//registration button
import React from 'react'

function RegAuth() {
  return (
    <button onClick={()=>{
        console.log('clicked')
    }} className='bg-[#eb008b] text-[12px] px-3 py-[3px] sm:px-4 sm:py-[2px] sm:text-[20px] poppins-thin hover:bg-[#231f20] hover:text-[#eb008b] rounded-[30px] text-white transition-all duration-400' >
    Register Now
</button>
  )
}

export default RegAuth