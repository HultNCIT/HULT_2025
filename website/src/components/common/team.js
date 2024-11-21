import Link from "next/link";
import React from "react";

const Team = ({ name, position, image, facebook, twitter, instagram, linkedin }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        {/* Team Member Card */}
        <div className="relative group w-[220px] h-[300px] cursor-pointer">
          {/* Pink Background Rotating Counterclockwise */}
          <div className="absolute w-full h-full bg-black rounded-lg border-3 transition-transform duration-300 ease-in-out transform rotate-0 group-hover:-rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:z-10"></div>
          <div className="absolute w-full h-full bg-pink-500 rounded-lg border-3 transition-transform duration-300 ease-in-out transform rotate-0 group-hover:rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:z-1"></div>

          {/* White Frame Rotating Clockwise */}
          <div className="absolute w-[90%] h-[90%] bg-white rounded-lg top-[5%] left-[5%] z-20 transition-transform duration-300 ease-in-out transform group-hover:-translate-x-2 group-hover:-translate-y-3">
            <img
              src={image} // Replace with your image URL
              alt="Team Member"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
          </div>

          <div className="absolute bottom-4 row-span-2 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {/* Name Section */}
            <div className="text-white bg-pink-600/80 -mb-1 font-bold whitespace-nowrap">{name}</div>
            <div className="text-white bg-pink-600/80 mb-2 whitespace-nowrap ">{position}</div>
            {/* Social Media Links */}
            <div className="flex">
              {facebook && (
                <Link className="bg-white mx-1 hover:bg-pink-500 text-black hover:text-white px-3 pt-2 py-1 rounded transition duration-300 ease-in-out" href={facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook text-2xl"></i>
                </Link>
              )}
              {twitter && (
                <Link className="bg-white mx-1 hover:bg-pink-500 text-black hover:text-white px-3 pt-2 py-1 rounded transition duration-300 ease-in-out" href={twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-2xl"></i>
                </Link>
              )}
              {instagram && (
                <Link className="bg-white mx-1 hover:bg-pink-500 text-black hover:text-white px-3 pt-2 py-1 rounded transition duration-300 ease-in-out" href={instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-2xl"></i>
                </Link>
              )}
              {linkedin && (
                <Link className="bg-white mx-1 hover:bg-pink-500 text-black hover:text-white px-3 pt-2 py-1 rounded transition duration-300 ease-in-out" href={linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-2xl"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* Add more cards for other team members */}
      </div>
  );
};

export default Team;
