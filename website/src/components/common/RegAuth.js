"use client";
//registration button
import React from "react";

function RegAuth({link}) {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      className="button-anim font-medium bg-shiny text-[12px] px-3 py-[4px] bg-gradient-to-r from-[#eb008b] via-[#e969b4d2] to-[#eb008b] sm:px-4 sm:py-[4px] sm:text-[20px] text-nowrap  hover:text-white  hover:outline animate-shiny  hover:outline-[0.15px] rounded-[30px] text-white"
    >
      <a href={link} target="_blank">Register Now</a>
    </button>
  );
}

export default RegAuth;
