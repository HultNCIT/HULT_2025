"use client";
import React, { lazy,Suspense } from "react";
import TeamCard from "../common/team";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FadeInWrapper from "./fadeinwrapper";
import { team } from "./TeamProvider";
function TeamGenerator() {
  return (
    <>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard
                name={member.name}
                position={member.position}
                image={member.img_link}
                facebook={member.facebook}
                instagram={member.instagram}
                linkedin={member.lindedin}
                twitter={member.twitter}
                className="mt-20"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FadeInWrapper>
        <div className="hidden md:grid px-6 md:px-20  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.img_link}
              facebook={member.facebook}
              instagram={member.instagram}
              linkedin={member.lindedin}
              twitter={member.twitter}
            />
          ))}
        </div>
      </FadeInWrapper>
    </>
  );
}

export default TeamGenerator;
