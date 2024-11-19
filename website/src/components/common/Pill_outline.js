//Pill outline
import React from 'react'
const Pill_outline = (props)=> {
  return (
    <div className={`border-[2px] rounded-30 poppins-medium border-${props.color} px-4 py-2 inline`}>
   {props.name} <span className='text-accent'>{props.date}</span> 
    </div>
  )
}

export default Pill_outline