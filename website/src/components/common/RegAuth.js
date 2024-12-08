"use client";
//registration button
import React from "react";

function RegAuth({link}) {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      className="button-anim font-medium bg-[#eb008b] text-[12px] px-3 py-[4px] sm:px-4 sm:py-[4px] sm:text-[20px] text-nowrap hover:bg-[#231f20] hover:text-[#eb008b] hover:outline hover:outline-accent hover:outline-[0.15px] rounded-[30px] text-white"
    >
      <a href={link} target="_blank">Register Now</a>
    </button>
  );
}

export default RegAuth;
