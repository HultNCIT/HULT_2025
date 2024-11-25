"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

const EventCard = ({ event, hover, transition }) => (
  <div
    className={`event-card max-w-3xl flex flex-col items-end justify-between ${hover} ${transition}`}
  >
    <div className="card-title w-4/6 text-right bg-blackMain px-3 py-4">
      <h6 className="font-extrabold text-white">{event.title}</h6>
      <p className="text-white ">{new Date(event.date).toLocaleDateString()}</p>
    </div>
    <div className="card-content max-w-3xl flex flex-col items-center justify-between gap-6 px-4 py-4 rounded-b-2xl bg-blackMain">
      <p className="">{event.info}</p>
      <div className="">
        <Button />
      </div>
    </div>
  </div>
);

const EventSection = () => {
  const today = new Date("2024-11-28"); // Change to new Date() in production
  const currentEvent = data.find(
    (event) => new Date(event.date).toDateString() === today.toDateString()
  );
  const upcomingEvents = data.filter((event) => new Date(event.date) > today);

  return (
    <div className="event-section flex flex-col lg:flex-row justify-between items-center gap-28 mx-auto px-8">
      {/*

      Current Event Section

      */}
      <div className="current-section flex flex-col gap-8">
        <h4 className="font-extrabold text-nowrap text-accent">
          Happening Now:
        </h4>
        {currentEvent ? (
          <EventCard
            event={currentEvent}
            hover="scale-100"
            transition="transition-all duration-300 ease-in-out"
          />
        ) : (
          <p>No current events</p>
        )}
      </div>

      {/* 

      Events Section

       */}
      <div className="upcoming-section flex flex-col gap-4">
        <div>
          <h4 className="font-extrabold">Coming Later:</h4>
        </div>
        <div className="w-[450px] sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[700px] 2xl:w-[950px]">
          <Swiper
            className="swiper-container"
            slidesPerView={3}
            freeMode={true}
            spaceBetween={-40}
            autoHeight={true}
            navigation
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: -150,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: -200,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: -40,
              },
              992: {
                slidesPerView: 1,
                spaceBetween: -100,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: -30,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: -20,
              },
            }}
            modules={[Navigation, Pagination]}
          >
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <SwiperSlide key={index} className="rounded-lg">
                  {/* Optional for styling */}
                  <EventCard
                    key={index}
                    event={event}
                    hover="scale-75 hover:scale-90"
                    transition="transition-all duration-300 ease-in-out"
                  />
                </SwiperSlide>
              ))
            ) : (
              <p>No upcoming events</p>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Event 1",
    state: "current",
    date: "2024-11-28",
    info: "Lorem ipsum dolor sit amet, consectetur",
    link: "#",
  },
  {
    title: "EVENT 2",
    state: "upcoming",
    date: "2024-11-29",
    info: "Lorem ipsum dolor sit amet, consectetur",
    link: "#",
  },
  {
    title: "EVENT 3",
    state: "upcoming",
    date: "2024-11-30",
    info: "Lorem Lorem ipsum dolor sit amet, consectetur",
    link: "#",
  },
  {
    title: "EVENT 5",
    state: "upcoming",
    date: "2024-11-30",
    info: "Lorem Lorem ipsum dolor sit amet, consectetur",
    link: "#",
  },
  {
    title: "EVENT 6",
    state: "upcoming",
    date: "2024-11-30",
    info: "Lorem Lorem ipsum dolor sit amet, consectetur",
    link: "#",
  },
  {
    title: "EVENT 7",
    state: "upcoming",
    date: "2024-11-30",
    info: "Lorem Lorem ipsum dolor sit amet, consectetur",
    link: "#",
  },
];

export default EventSection;
