import Link from "next/link";
import React from "react";

const TeamCard = ({ name, position, image, facebook, twitter, instagram, linkedin }) => {
  return (
    <div className="flex justify-center mb-20 items-center">
      {/* Team Member Card */}
      <div className="relative group w-[200px] h-[280px] cursor-pointer">
        {/* Pink Background Rotating Counterclockwise */}
        <div className="absolute w-[95%] h-[95%] bg-black rounded-lg border-2 transition-transform duration-300 ease-in-out transform rotate-0 group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-5 group-hover:z-10"></div>
        <div className="absolute w-[95%] h-[95%] bg-pink-500 rounded-lg border-2 transition-transform duration-300 ease-in-out transform rotate-0 group-hover:rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-5 group-hover:z-1"></div>

        {/* White Frame Rotating Clockwise */}
        <div className="absolute w-[95%] h-[95%] bg-white rounded-lg top-[3%] left-[5%] z-20 transition-transform duration-300 ease-in-out transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <img
            src={image} // Replace with your image URL
            alt="Team Member"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {/* Name Section */}
          <div className="text-white bg-black/80 -mb-1 font-bold text-sm whitespace-nowrap">{name}</div>
          <div className="text-white bg-black/80 mb-2 text-sm whitespace-nowrap">{position}</div>

          {/* Social Media Links */}
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
    </div>
  );
};

export default TeamCard;
