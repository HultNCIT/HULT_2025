"use client";
//registration button
import React from "react";

function RegAuth({link,state}) {
  return (
    <button className={` button-anim font-medium bg-shiny text-[12px] px-3 py-[4px] bg-gradient-to-r ${state? ('from-[#231f20] via-[#eb0089ef] to-[#231f20]'):('bg-accent')}  sm:px-4 sm:py-[4px] sm:text-[20px] text-nowrap  hover:text-white  hover:outline animate-shiny  hover:outline-[0.15px] rounded-[30px] text-white`}
    >
      <a href={link} target="_blank">Register Now</a>
    </button>
  );
}

export default RegAuth;
