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
        href="/gallery"
      >
        Gallery
      </Link>
      <Link href="https://hultprize.ncit.edu.np/" className="flex md:hidden flex-nowrap justify-center items-center transition-all duration-400 font-medium hover:text-accent px-3" target="blank">
              <span className="">History</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </Link>
      <a
          className="block md:hidden w-full transition-all duration-400 font-medium hover:text-accent px-3"
          href="/#event"
        >
          Events
        </a>
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
