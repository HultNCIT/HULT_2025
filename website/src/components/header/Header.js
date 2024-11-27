"use client";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
import SildeBar from "../common/SildeBar";
import Menu from "../common/Menu";
import { useState } from "react";
// import { KeyIcon } from "lucide-react";
function Header() {
  // const [on, SetOn]=useState(false)
  // function toggleButton(){
  //   if (!on){

  //     SetOn(true)
  //   }
  //   else{
  //     SetOn(false)
  //   }
  // }
  // const pastWeb=[
  //   {
  //     "name":"HULT NCIT 2024",
  //     "link":"https://hultprize.ncit.edu.np/"
  //   }
  // ]
  const colorStyle = {
    color: "black",
  };
  return (
    <nav className="fixed z-50 right-0 left-0 top-0 bg-white flex justify-between px-8 tb:px-16 py-2 items-center shadow-sm">
      <Menu hidden={"hidden"} flex={"md:flex"} />
      <Link href="/" className="text-[30px]">
        <Image
          src={"/hult_image/hult1.png"}
          width={200}
          height={5}
          style={colorStyle}
          alt="hult"
          className="w-[150px] sm:w-[170px]  md:w-[200px]"
        />
      </Link>
      <div className="flex md:w-[350px] space-x-4 justify-between items-center">
        <div className=" relative  h-full">
          <div className="common ">
            <a
              href="https://hultprize.ncit.edu.np/"
              className="flex flex-nowrap justify-center items-center"
              target="blank"
            >
              <span className="">History</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>

          </div>                       
         
        </div>
        <a
          className="common"
          href="/#event"
        >
          Events
        </a>
        <Button />
        {/**slidebar */}
        <SildeBar />
      </div>
    </nav>
  );
}

export default Header;
