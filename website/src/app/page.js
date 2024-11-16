import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center">
       <h1 className="text-3xl font-bold">This is a demon trying to meditate for super duper powers</h1>
      <img
              src="demon.jpeg"
              alt="Demon Featured"
              className="w-50 h-50"
            />
    </div>
  );
}
