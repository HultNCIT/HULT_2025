import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Pill_outline from "@/components/common/Pill_outline";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="  h-[500px] p-10 ">
      <div className=" w-full h-full flex justify-between ">
        <div className="py-10 px-20">
          <div className="py-5"> 
            <Header />
            <Pill_outline />
          </div>
          <div className="poppins-extrabold leading-[45px]  text-[50px]">
            <h1>Changing the world</h1>
            <h1 className="text-accent">Through Social Enterprise</h1>
          </div>
          <div className="shrink-0 max-w-[600px]">
            The Hult Prize Foundation revolutionizes how young individuals
            perceive their potential as change leaders in the world. At the core
            of its initiatives is a $1,000,000 global startup prize. Through
            impactful programs, events, and training sessions, the Hult Prize
            has reached over a million students worldwide, paving the way for
            youth everywhere to actively contribute to building a better world.
          </div>
          <div></div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
}
