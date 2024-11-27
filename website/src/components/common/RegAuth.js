"use client";
//registration button
import React from "react";

function RegAuth() {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      className="button-anim font-medium bg-[#eb008b] text-[12px] px-3 py-[4px] sm:px-4 sm:py-[4px] sm:text-[20px] text-nowrap hover:bg-[#231f20] hover:text-[#eb008b] rounded-[30px] text-white"
    >
      Register Now
    </button>
  );
}

export default RegAuth;
