import React from "react";
import Link from "next/link";
function Menu(props) {
  return (
    <div
      className={`${props.hidden} ${props.flex} h-full text-xl justify-around items-center md:gap-0 gap-4 md:px-5 px-0`}
    >
      <Link
        className="block w-full transition-all duration-400 font-medium  hover:text-accent px-3"
        href="/" onClick={props.onLinkClick}
      >
        Home
      </Link>
      <Link
        className="block w-full transition-all duration-400 font-medium hover:text-accent px-3"
        href="/about" onClick={props.onLinkClick}
      >
        About
      </Link>

      <Link
        className="block w-full transition-all duration-400 font-medium hover:text-accent px-3"
        href="/gallery" onClick={props.onLinkClick}
      >
        Gallery
      </Link>
     
      <a
          className="block md:hidden w-full transition-all duration-400 font-medium hover:text-accent px-3"
          href="/#event" onClick={props.onLinkClick}
        >
          Events
        </a>
      <Link
        className="block w-full transition-all duration-400 font-medium hover:text-accent px-3"
        href="/contact" onClick={props.onLinkClick}
      >
        Contacts
      </Link>
    </div>
  );
}

export default Menu;
