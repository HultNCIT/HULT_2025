import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Pill_outline from "@/components/common/Pill_outline";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <section className="hero-container min-h-screen mx-auto px-10 py-12 gap-10 max-w-[96rem] flex flex-col items-center justify-between lg:flex-row 2xl:px-0">
        {/**left side */}
        <div className="hero-text flex flex-col gap-6">
          <div className="">
            <Pill_outline name="HULT PRIZE NCIT" date="2025" color="accent" />
          </div>
          <div className="font-extrabold">
            <h1 className="leading-tight">Changing the world</h1>
            <h1 className="text-accent leading-tight">
              Through Social Enterprise
            </h1>
          </div>
          <div className="">
            <p className="text-secondaryContent">
              The Hult Prize Foundation revolutionizes how young individuals
              perceive their potential as change leaders in the world. At the
              core of its initiatives is a $1,000,000 global startup prize.
              Through impactful programs, events, and training sessions, the
              Hult Prize has reached over a million students worldwide, paving
              the way for youth everywhere to actively contribute to building a
              better world.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href={"/about"}
              className=" px-5 py-4 bg-accent font-poppins rounded-full text-white  hover:bg-blackMain transform duration-400 hover:text-accent"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/**right side */}
        <div className="flex items-center justify-center">
          <Image
            src={"/hult_image/people.jpg"}
            width={400}
            height={200}
            alt="people"
            className="h-[500px] min-w-[400px] shadow-xl rounded-md"
          />
        </div>
      </section>
      {/**pink section */}
      <section className="pink-section flex flex-col items-center justify-between  px-10 py-12 bg-accent">
        <div className="pink-container max-w-[96rem] flex flex-col mx-auto gap-10 justify-between items-center lg:flex-row 2xl:px-0">
          <div className="pink-content flex flex-col gap-6 items-start">
            <Pill_outline name={"2025 Theme"} color={"text-accent"} />
            <h1 className="font-normal">
              Theme:{" "}
              <span className="font-extrabold text-white">Unlimited</span>
            </h1>
            <div className="">
              <p>
                This year, participants are empowered to pitch any idea for a
                social enterprise, free from constraints, as long as it is both
                world-changing and aligned with at least one of the United
                Nations Sustainable Development Goals (SDGs). The challenge
                places the decision-making in your hands, enabling you to choose
                the societal problem you wish to solve and devise the business
                idea to address it. As we envision a future marked by equity,
                sustainability, and enjoyment for all, we invite you to harness
                the potential of business to create the world you desire to see.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/hult_image/people.jpg"}
              width={400}
              height={200}
              alt="people"
              className="h-[500px] min-w-[400px] shadow-xl rounded-md"
            />
          </div>
        </div>
      </section>
      <section className="py-14 w-full flex flex-col justify-center items-center gap-6">
        {/**Upcoming events */}
        <h1 className="text-[35px] md:text-[40px]">Upcomimg Events</h1>
        <Pill_outline name="NCIT HULT PRIZE" date="2025" color="blackMain" />
        <Pill_outline name="NCIT HULT PRIZE" date="2025" color="blackMain" />
        <Pill_outline name="NCIT HULT PRIZE" date="2025" color="blackMain" />
      </section>
      <section className="pb-12 w-full flex flex-col justify-center items-center gap-6">
        {/**Upcoming events */}
        <h1 className="text-[35px] md:text-[40px]">Completed Events</h1>
        <Pill_outline name="NCIT HULT PRIZE" date="2025" color="blackMain" />
        <Pill_outline name="NCIT HULT PRIZE" date="2025" color="blackMain" />
        <Pill_outline name="NCIT HULT PRIZE" date="2025" color="blackMain" />
      </section>
      <Footer />
    </main>
  );
}
