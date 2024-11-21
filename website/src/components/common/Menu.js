import React from 'react'
import Link from 'next/link'
function Menu(props) {
  return (
    <div className={`${props.hidden} ${props.flex} poppins-medium h-full text-[20px] justify-around items-center px-3`}>
            <Link
            className="block w-full transition-all duration-400 font-medium  hover:text-accent px-3"
            href="/"
            >
            Home
            </Link>
            <Link
            className="block w-full transition-all duration-400 font-medium hover:text-accent px-3"
            href="/about"
            >
            About
            </Link>

            <Link
            className="block w-full transition-all duration-400 font-medium hover:text-accent px-3"
            href="/Contact"
            >
            Contacts
            </Link>
    </div>
  )
}

export default Menu