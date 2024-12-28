import React from 'react'
import RegAuth from './RegAuth'
//registration button 
function Button({link,state}) {
  return (
    <RegAuth link={link} state={state}/>
  )
}

export default Button