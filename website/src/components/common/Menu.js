import React from "react";
import Link from "next/link";
function Menu(props) {
  return (
    <div
      className={`${props.hidden} ${props.flex} h-full text-xl justify-around items-center md:gap-0 gap-4 md:px-5 px-0`}
    >
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
  );
}

export default Menu;
