'use client'
//registration button
import React from 'react'

function RegAuth() {
  return (
    <button onClick={()=>{
        console.log('clicked')
    }} className='bg-[#eb008b] px-6 py-2 hover:bg-[#231f20] hover:text-[#eb008b] rounded-[30px] text-white transition-all- duration-400' >
    Register Now
</button>
  )
}

export default RegAuth