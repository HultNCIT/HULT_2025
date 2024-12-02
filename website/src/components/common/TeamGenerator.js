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
      facebook: "https://www.facebook.com/nishan.paudel.2061?mibextid=ZbWKwL ",
      instagram: "https://www.instagram.com/neezpau/",
      lindedin: "https://www.linkedin.com/in/nishanpaudel2004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      twitter: "https://x.com/neezpau2004?t=wBQ7pHFGZUc3W3SqJbwPWw&s=09",
    },
    {
      name: "Anish Kumar Neupane",
      position: "Logistic Coordinator",
      img_link: "/Anish.png",
      facebook: "https://www.facebook.com/anishkn04",
      instagram: "https://www.instagram.com/anishkn04",
      lindedin: "https://www.linkedin.com/in/anishkn04/",
      twitter: "https://x.com/anishkn04",
    },
    {
      name: "Abhaya Bhatta",
      position: "Sponsor Coordinator",
      img_link: "/Abhaya.png",
      facebook: "https://www.facebook.com/abhayabhatta.010",
      instagram: "https://www.instagram.com/abhaya._.b/",
      lindedin: "https://www.linkedin.com/in/abhayab/ ",
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
      name: "Prashubha Pathak",
      position: "Social Media Manager",
      img_link: "/prashubha.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: " Sudin Khanal",
      position: "Creative Member",
      img_link: "/Sudin.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: " Anukriti Thapa",
      position: "Creative Member",
      img_link: "/Anukriti.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Pushpa Sah",
      position: "Academic Member",
      img_link: "/Puspa.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Rashi Bista",
      position: "Academic Member",
      img_link: "/Rashi.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Aditi KC",
      position: " Outreach/Sponsorship member ",
      img_link: "/Aditi.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Nisha Singh",
      position: " Outreach/Sponsorship member ",
      img_link: "/Nisha.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Prashanta Rokaya",
      position: "Logistics Member",
      img_link: "/Prashanta.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Prayush Bhandar",
      position: "Logistics Member",
      img_link: "/prayush.png",
      facebook: "https://www.facebook.com/samikshyaxx?mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/samikshyaxx/",
      lindedin: "https://www.linkedin.com/in/samikshya-ghimire-2222222xx/",
      twitter: "#",
    },
    {
      name: "Sushant Adhikari",
      position: "Logistics Member",
      img_link: "/Sushant.png",
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
