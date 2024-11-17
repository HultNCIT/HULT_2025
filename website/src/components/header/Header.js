import Link from 'next/link'
import React from 'react'
import Button from '../common/Button'
function Header() {
  return (
    <nav className='fixed right-0 left-0 top-0 flex  justify-around items-center  shadow-sm'>
    <Link href='#' className='poppins-medium text-xl'>
        HULT
        (Logo)
        PRIZE
    </Link>
    <div className='flex poppins-medium  h-full text-[17px] justify-around items-center  '>
      <Link className='block w-full transition-all duration-400  hover:text-accent p-5' href="#">Home</Link>
      <Link className='block w-full transition-all duration-400 hover:text-accent p-5' href="#">About</Link>
      <Link className='block w-full transition-all duration-400 hover:text-accent p-5' href="#">Events</Link>
      <Link className='block w-full transition-all duration-400 hover:text-accent p-5' href="#">Contacts</Link>
    </div>
    <div>
      <Button/>
    </div>
</nav>
  )
}

export default Header