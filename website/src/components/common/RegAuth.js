'use client'
//registration button
import React from 'react'

function RegAuth() {
  return (
    <button onClick={()=>{
        console.log('clicked')
    }} className='bg-[#231f20] px-6 py-2 hover:bg-[#eb008b] hover:text-white rounded-[30px] text-[#eb008b] transition-all- duration-400' >
    Register Now
</button>
  )
}

export default RegAuth