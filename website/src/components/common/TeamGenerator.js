"use client";
import React from "react";
import TeamCard from "@/components/common/team";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FadeInWrapper from "./fadeinwrapper";

function TeamGenerator() {
  const teamHult = [
    {
      name: "Samikshya Ghimire",
      position: "Campus Director",
      img_link: "/Samikshya.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Simon Khadka",
      position: "Deputy Campus Director",
      img_link: "/Simon.png",
      facebook: "#",
      instagram: "https://www.instagram.com/siimon.iii?igsh=aTlvdHU2aTV5b3A3",
      lindedin: "http://linkedin.com/in/simon-khadka-627b4a323",
      twitter: "#",
    },
    {
      name: "Sujal Shrestha",
      position: "Program Director",
      img_link: "Sujal.png",
      facebook: "https://www.facebook.com/sujalbikramthapa",
      instagram: "https://www.instagram.com/sujalbthapa/",
      lindedin: "https://www.linkedin.com/in/sujalbthapa/",
      twitter: "https://twitter.com/sujalbikramth",
    },
    {
      name: "Nabin Paudel",
      position: "Technical Coordinator",
      img_link: "Nabin.png",
      facebook: " https://www.facebook.com/nabin.paudel.41",
      instagram: " https://www.instagram.com/nabin_paudel24/",
      lindedin: "https://np.linkedin.com/in/nabin-paudel-133902293",
      twitter: " https://github.com/NabinPaudel001",
    },
    {
      name: "Nishan Paudel",
      position: "Academic Coordinator",
      img_link: "/Nishan.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Anish Kumar Neupane",
      position: "Logistic Coordinator",
      img_link: "/Anish.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Abhaya Bhatta",
      position: "Sponsor Coordinator",
      img_link: "/Abhaya.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Oscar Giri",
      position: "Outreach Coordinator",
      img_link: "/Oscar.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Palisha Shakya",
      position: "Media Coordinator",
      img_link: "/Palisha.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Aman Sheikh",
      position: "Technical Member",
      img_link: "/Aman.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Rushab Risal",
      position: "Technical Member",
      img_link: "/Rushab.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Simon Khadka",
      position: "Deputy Campus Director",
      img_link: "/.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
  ];

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
          {teamHult.map((member, index) => (
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
          {teamHult.map((member, index) => (
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
