"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";
import FadeInWrapper from "./fadeinwrapper";
const EventCard = ({ event, hover, transition ,state,image}) => (
  <div className={` event-card ${hover} ${transition} relative` }>
     <img src={event.image} className="fixed top-0 h-full object-cover rounded-xl"/>
      <div className="card-title w-4/6 text-right bg-blackMain px-3 py-4 z-50">
        <h6 className="font-bold text-white">{event.title}</h6>
        <p className="text-white ">{new Date(event.date).toLocaleDateString()}</p>
      </div>
      <div className="card-content w-full z-50 text-center flex flex-col items-center justify-between gap-4 px-4 py-4 rounded-b-2xl bg-blackMain">
        <p className="font-medium">{event.info}</p>
        <div className={state}>
          <Button link={event.link} />
        </div>
      </div>
    </div>
 
);

const EventSection = () => {
  const today = new Date(); // Change to new Date() in production
  const currentEvent = data.find(
    (event) => new Date(event.date).toDateString() === today.toDateString()
  );
  
  const upcomingEvents = data.filter((event) => new Date(event.date) > today);
  const completedEvent= data.filter((event)=> new Date(event.date) < today )
  return (
    <div>
    <div className="event-section flex flex-col justify-start items-start lg:flex-row sm:justify-between sm:items-center gap-14 lg:gap-28 mx-auto px-8">
      {/*

      Current Event Section

      */}
      <FadeInWrapper>
        <div className="current-section flex flex-col justify-start items-start md:justify-center md:items-center gap-8 ml-3 md:ml-0">
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
      </FadeInWrapper>

      {/* 

      Events Section

       */}
      <FadeInWrapper>
        <div className="upcoming-section flex flex-col justify-start items-start md:justify-center">
          <div>
            <h4 className="font-extrabold">Coming Later:</h4>
          </div>
          <div className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[700px] 2xl:w-[950px]">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              freeMode={true}
              spaceBetween={-40}
              autoHeight={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: -80,
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
                  spaceBetween: -90,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: -80,
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
                      transition="card-anim"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <p>No upcoming events</p>
              )}
            </Swiper>
          </div>
        </div>
        </FadeInWrapper>
        </div>
        
        {/**completed event */}
        <div className="py-12 w-full flex flex-col justify-center items-center gap-6">
          <div>
             <h1 className="font-extrabold">Completed Events</h1>
          </div>
          <div className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[700px] 2xl:w-[950px]">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              freeMode={true}
              spaceBetween={-40}
              autoHeight={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: -80,
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
                  spaceBetween: -90,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: -80,
                },
              }}
              modules={[Navigation, Pagination]}
            >
              {completedEvent.length > 0 ? (
                completedEvent.map((event, index) => (
                  <SwiperSlide key={index} className="rounded-lg">
                    {/* Optional for styling */}
                    <EventCard
                      key={index}
                      event={event}
                      hover="scale-75 hover:scale-90"
                      transition="card-anim"
                      state={'hidden'}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-center">No upcoming events</p>
              )}
            </Swiper>
          </div>
        </div>
      
    </div>
  );
};

const data = [
  {
    //completed
    title: "Info Session",
    state: "current",
    image:"/events/eventComplete1.jpg",
    date: "2024-12-6",
    info: "Our First Info Session, Kicking off HULT PRIZE NCIT 2025",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfjUM3Cc4V3oeD4_Q2KPPDWTh_2xODPMhQiLvPxRyr_P-iZ4A/viewform",
  },
  {
    //completed
    title: "Hult Experience Sharing",
    state: "upcoming",
    date: "2024-12-17",
    image:"/events/eventcomplete2.JPG",
    info: "Much Awaited Experience Sharing by Hult Prize Alumni",
    link: "#",
  },
  {
    //completed
    title: "Social Entrepreneurship Landscape & Startup Market",
    state: "upcoming",
    date: "2025-1-3",
    image:"/events/landscape.jpg",
    info: "Social Entrepreneurship Landscape & Startup Market Session ",
    link: "https://forms.gle/25gzf6xjcL3BP1MQA",
  },
  {
    title: "Future Innovators Session",
    state: "upcoming",
    date: "2025-1-17",
    image:"/events/future_innovators.jpg",
    info: "Youth Entrepreneurship Session for our future innovators",
    link: "https://forms.gle/PY2G8HmnittMGocg9",
  },
  {
    title: "Business Model Canvas",
    state: "upcoming",
    date: "2025-1-22",
    image:"events/model.jpg",
    info: "Developing Business Model Canvas for a successful startup",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScKy6yf-o6depFL3MFLhPOlkClwxOgPv-ze-UyA1AUnlvXu0Q/viewform?usp=preview",
  },
  {
    title: "Concept to Pitch",
    state: "upcoming",
    date: "2025-1-24",
    image:"events/pitch.jpeg",
    info: "Join us to gain Concept to Pitch: Crafting Winning Ideas",
    link: "https://forms.gle/eA6KfBNe7Pqne6ms6",
  },
  // {
  //   title: "Public Speaking and Presentation Workshop",
  //   state: "upcoming",
  //   date: "2025-1-12",
  //   // image:"",
  //   info: "Join us for Public Speaking and Presentation Workshop",
  //   link: "#",
  // },
 
  {
    title: "Pitch Demo",
    state: "upcoming",
    date: "2025-1-28",
    image:"events/demopitch.jpg",
    info: "Receive a valuable feedbacksfrom our Pitch Demo session",
    link: "https://www.hultprize.org/startup-pre-registration-is-now-open/",
  },
  {
    title: "Final",
    state: "upcoming",
    date: "2025-1-31",
    image:"events/final_pitch.jpg",
    info: "Pitch your idea to the judges",
    link: "https://www.hultprize.org/startup-pre-registration-is-now-open/",
  },
];

export default EventSection;
