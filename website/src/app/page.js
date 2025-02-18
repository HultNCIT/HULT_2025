"use client";
import React from "react";
import FadeInWrapper from "../components/common/fadeinwrapper";
import Pill_outline from "../components/common/Pill_outline";
import Footer from "../components/footer/Footer";
import Countdown from "../components/common/Countdown";
import Link from "next/link";
import EventSection from "../components/common/EventSection";
import Sponsor from "@/components/common/Sponsor";
import Community from "@/components/common/Community";
export default function Home() {
  return (
    <main id="home">
        <section className="hero-container min-h-fit lg:min-h-screen mx-auto px-10 py-12 gap-10 max-w-8xl flex flex-col items-center justify-between lg:flex-row">
          {/**left side */}
          <FadeInWrapper>
            <div className="hero-text flex flex-col gap-6">
            
                <div className="">
                  <Pill_outline
                    name="HULT PRIZE NCIT"
                    date="2025"
                    color="border-color"
                  />
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
                    the way for youth everywhere to actively contribute to building
                    a better world.
                  </p>
                </div>
            
              <div className="mt-6">
                <Link
                  href={"/about"}
                  className="px-5 py-4 bg-accent font-medium rounded-full text-white hover:bg-blackMain transform duration-400 hover:text-accent"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </FadeInWrapper>
          {/**right side */}
          <FadeInWrapper>
            <div className="flex items-center justify-center">
              <img
                src={"/img.jpg"}
                width={400}
                height={200}
                alt="people"
                className="h-[500px] min-w-[400px] shadow-xl rounded-md"
              />
            </div>
          </FadeInWrapper>
        </section>
      {/**pink section */}
      <section className="relative flex flex-col items-center justify-center md:justify-between px-10 py-14 lg:py-24 bg-accent">
      <img
                src={"/hult_image/starburst-hp.png"}
                width={400}
                height={200}
                alt="people"
                className="absolute mix-blend-difference opacity-5 -right-20 bottom-2 scale-125"
              />
        <div className="pink-container max-w-8xl flex flex-col mx-auto gap-14 lg:gap-10 justify-between items-center lg:flex-row">
          <FadeInWrapper>
            <div className="pink-content flex flex-col gap-6 max-w-3xl items-start justify-stretch">
              <Pill_outline text="text-white" name={"2025 Theme"} color="border-white" />
              <h1 className="font-normal">
                Theme:{" "}
                <span className="font-extrabold text-white">Unlimited</span>
              </h1>
              <div className="">
                <p className="text-white ">
                  This year, participants are empowered to pitch any idea for a
                  social enterprise, free from constraints, as long as it is
                  both world-changing and aligned with at least one of the
                  United Nations Sustainable Development Goals (SDGs). The
                  challenge places the decision-making in your hands, enabling
                  you to choose the societal problem you wish to solve and
                  devise the business idea to address it. As we envision a
                  future marked by equity, sustainability, and enjoyment for
                  all, we invite you to harness the potential of business to
                  create the world you desire to see.
                </p>
              </div>
            </div>
          </FadeInWrapper>
          <FadeInWrapper>
            <div className="countdown-content flex flex-col justify-center items-center gap-6 ">
              <h2 className="font-bold text-nowrap">On Campus Final:</h2>
              <Countdown />
            </div>
          </FadeInWrapper>
        </div>
      </section>
      <FadeInWrapper>
      <section
        id="event"
        className="pt-14 w-full flex flex-col justify-center items-center gap-12"
      >
        {/**Upcoming events */}
        <h1 className="font-extrabold">Upcoming Events</h1>
        <EventSection/>
      </section>
      </FadeInWrapper>
      {/* <FadeInWrapper>
        <section className="py-12 w-full flex flex-col justify-center items-center gap-6">
          
          <h1 className="font-extrabold">Completed Events</h1>
          <h3>No events are completed.</h3>
        </section>
      </FadeInWrapper> */}
      {/**Gallery section */}
      <FadeInWrapper>
      <section className="pb-14 w-full flex flex-col justify-center items-center gap-12">
      <h1 className="font-extrabold">Our Sponsors</h1>
        <Sponsor/>
      </section>
      </FadeInWrapper>
      <FadeInWrapper>
      <section className="pb-14 w-full flex flex-col justify-center items-center gap-12">
      <h1 className="font-extrabold">Community Partners</h1>
        <Community/>
      </section>
      </FadeInWrapper>
      <Footer />
    </main>
  );
}
