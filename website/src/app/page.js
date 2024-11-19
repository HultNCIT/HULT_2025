import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Pill_outline from "@/components/common/Pill_outline";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
export default function Home() {
  return (
      <main className="  mt-12 ">
        <section className=" w-full sm:p-[40px] flex justify-center sm:justify-between flex-col lg:flex-row">
          {/**left side */}
          <div className="py-10 w-full px-5 sm:px-6 md:px-20">
            <div className="py-5"> 
              <Pill_outline name="HULT PRIZE NCIT" date="2025" color='accent' />
            </div>
            <div className="poppins-extrabold leading-24 min-w-[400px] sm:w-[500px] md:w-[700px] text-[20px] sm:text-[30px] md:text-[50px]">
              <h1>Changing the world</h1>
              <h1 className="text-accent">Through Social Enterprise</h1>
            </div>
            <div className="shrink-0 max-w-[800px] text-blackMain min-w-[330px]">
              The Hult Prize Foundation revolutionizes how young individuals
              perceive their potential as change leaders in the world. At the core
              of its initiatives is a $1,000,000 global startup prize. Through
              impactful programs, events, and training sessions, the Hult Prize
              has reached over a million students worldwide, paving the way for
              youth everywhere to actively contribute to building a better world.
            </div>
            <div className="mt-6">
                <Link href={'/about'} className=" px-5 py-4 bg-accent font-poppins rounded-full text-white  hover:bg-blackMain transform duration-400 hover:text-accent">Learn More</Link>
            </div>
          </div>
          {/**right side */}
          <div className="flex items-center justify-center p-5">
            <Image
              src={'/hult_image/people.jpg'}
              width={400}
              height={200}
              alt="people"
              className="h-[500px] min-w-[400px] shadow-xl rounded-md"
            />
          </div>
        </section>
        {/**pink section */}
        <section className="pink-section font-poppins bg-accent/80  p-8">
          <div className="flex flex-col max-w-[900px] ">
            <div className="py-5">
            <Pill_outline name={'2025 Theme'} color=''/>
            </div>
            <p className="text-[25px] text-blackMain md:text-[40px]  ">Theme: <span className="font-extrabold text-white">Unlimited</span></p>
            <div className="text-blackMain leading-7 ">
              This year, participants are empowered to pitch any idea for a social enterprise, free from constraints, as long as it is both world-changing and aligned with at least one of the United Nations Sustainable Development Goals (SDGs).
            
              The challenge places the decision-making in your hands, enabling you to choose the societal problem you wish to solve and devise the business idea to address it. As we envision a future marked by equity, sustainability, and enjoyment for all, we invite you to harness the potential of business to create the world you desire to see.
            </div>
          </div>
        </section>
        <section className="py-14 w-full flex flex-col justify-center items-center gap-6">
           {/**Upcoming events */}
            <h1 className="text-[35px] md:text-[40px]">Upcomimg Events</h1>
            <Pill_outline name='NCIT HULT PRIZE' date='2025' color='blackMain'/>
            <Pill_outline name='NCIT HULT PRIZE' date='2025' color='blackMain'/>
            <Pill_outline name='NCIT HULT PRIZE' date='2025' color='blackMain'/>
        </section>
        <section className="pb-12 w-full flex flex-col justify-center items-center gap-6">
           {/**Upcoming events */}
            <h1 className="text-[35px] md:text-[40px]">Completed Events</h1>
            <Pill_outline name='NCIT HULT PRIZE' date='2025' color='blackMain'/>
            <Pill_outline name='NCIT HULT PRIZE' date='2025' color='blackMain'/>
            <Pill_outline name='NCIT HULT PRIZE' date='2025' color='blackMain'/>
        </section>
        <Footer />
      </main>
       
    
  );
}
