import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for lazy loading effect

const TeamCard = ({ name, position, image, facebook, twitter, instagram, linkedin }) => {
  return (
    
    <div className="mt-12 md:mt-0 flex justify-center flex-col gap-2 mb-20 items-center  ">
      {/* Team Member Card  */}
     <div className="relative group w-[200px] h-[280px] cursor-pointer">
        {/* {/ Pink Background Rotating Counterclockwise */}
        <div className="absolute w-[95%] h-[95%] bg-black rounded-lg border-2 transition-transform duration-400 ease-in-out transform rotate-0 group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-5 group-hover:z-10"></div>
        <div className="absolute w-[95%] h-[95%] bg-pink-500 rounded-lg border-2 transition-transform duration-400 ease-in-out transform rotate-0 group-hover:rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-5 group-hover:z-1"></div>

        {/* White Frame Rotating Clockwise  */}
        <div className="absolute w-[95%] h-[95%] bg-white rounded-lg top-[3%] left-[4%] z-20 transition-transform duration-300 ease-in-out transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <LazyLoadImage
            src={image}
            alt={`${name}'s photo`}
            effect="blur"
            className="w-full h-[265px] object-cover rounded-lg transition-transform duration-300 ease-in-out transform"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {/* {/ Name Section /}
         ={/ Social Media Links */}
          <div className="flex space-x-1">
            {facebook && (
              <Link className="bg-white hover:bg-pink-500 text-black hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out" href={facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-lg"></i>
              </Link>
            )}
            {twitter && (
              <Link className="bg-white hover:bg-pink-500 text-black hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out" href={twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-lg"></i>
              </Link>
            )}
            {instagram && (
              <Link className="bg-white hover:bg-pink-500 text-black hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out" href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-lg"></i>
              </Link>
            )}
            {linkedin && (
              <Link className="bg-white hover:bg-pink-500 text-black hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out" href={linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-lg"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="text-blackMain  font-bold text-lg whitespace-nowrap ">{name}</div>
      <div className="text-blackMain font-semibold -mt-2 text-sm whitespace-nowrap">{position}</div>
    </div>
  );
};

export default TeamCard;
