'use client'
import React from 'react'
import FadeInWrapper from "./fadeinwrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Advisor = () => {
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
          {advisor.map((value, index) => (
              <SwiperSlide key={index}>
                <div key={index} className='w-full p-16 flex flex-col justify-center items-center hover:-translate-y-1 duration-300 '>
                    <div className=' w-44 h-64 flex justify-center items-end '>
                        <img src={value.img} alt={value.name} className='h-full w-full  object-cover rounded-xl shadow-2xl'/>
                    </div>
                    <div className="text-blackMain text-center font-semibold text-sm whitespace-nowrap mt-2">{value.name}</div>
                    <div className="text-blackMain text-center font-medium mt-1 text-sm whitespace-nowrap">{value.designation}</div>
                    <div className="text-blackMain text-center font-bold mt-1 text-sm whitespace-nowrap">{value.position}</div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    <FadeInWrapper>
        <div className="hidden md:grid px-0 md:px-20  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {advisor.map((value,index)=>(
            <div key={index} className='flex flex-col justify-center items-center mt-4 hover:-translate-y-1 duration-300 '>
                <div className=' w-44 h-56 flex justify-center items-end '>
                    <img src={value.img} alt={value.name} className=' h-full object-cover rounded-xl shadow-xl'/>
                </div>
                <div className="text-blackMain text-center font-medium text-sm whitespace-nowrap mt-2">{value.name}</div>
                <div className="text-blackMain text-center font-regular mt-1 text-sm whitespace-nowrap">{value.designation}</div>
                <div className="text-blackMain text-center font-bold mt-1 text-sm whitespace-nowrap">{value.position}</div>
            </div>
        ))}
     </div>
     </FadeInWrapper>
     </>
  )
}

export default Advisor

const advisor = [
    {
        img:'/advisor/prinicple.jpg',
        name:'Er. Niranjan Khakure',
        designation:'Principal, NCIT',
        position:'Chief Advisor'
    },
    {
        img:'/advisor/BR.jpg',
        name:'Bijuli P Rana',
        designation:'Director, NCIT',
        position:'Chief Advisor'
    },
    {
        img:'/advisor/bhusan.jpg',
        name:'Er. Bhusan Shumsher Thapa',
        designation:'HOD, BESE',
         position:'Advisor'
    },
    {
      img:'/advisor/Resha.png',
      name:'Er. Resha Deo',
      designation:'HOD, Computer',
       position:'Advisor'
    },
    {
      img:'/advisor/madan.jpg',
      name:'Er. Madan Kadariya',
      designation:'HOD, IT',
       position:'Advisor'
    },
    {
      img:'/advisor/muskan.jpg',
      name:'Muskan Khanal',
      designation:'HOD, BBA',
       position:'Advisor'
    },
    {
      img:'/advisor/Mani.jpg',
      name:'Er. Mani Paudel',
      designation:'HOD, Civil',
       position:'Advisor'
    },
    {
      img:'/advisor/shivahari.jpg',
      name:'Shivahari Acharya',
      designation:'HOD, ELX',
       position:'Advisor'
    },
    {
      img:'/advisor/samundra.jpg',
      name:'Samundra Paudel ',
      designation:'Faculty, NCIT',
       position:'Advisor'
    },
    {
      img:'/advisor/umesh.jpeg',
      name:'Er. Umesh Paneru',
      designation:'Faculty, NCIT',
       position:'Advisor'
    },
    {
      img:'/advisor/Tirtha.jpg',
      name:'Tirtha Raj Bhatta',
      designation:'Faculty, NCIT',
       position:'Advisor'
    },
    {
      img:'/advisor/nirdosh.jpg',
      name:'Er. Nirdosh Adhikari',
      designation:'Faculty, NCIT',
       position:'Advisor'
    },
    {
      img:'/advisor/rishi.jpg',
      name:'Er. Rishi Kanta Marseni  ',
      designation:'Faculty, NCIT',
       position:'Advisor'
    },
    {
      img:'/advisor/raaz.jpg',
      name:'Raaz Gupta',
      designation:'Student, NCIT',
       position:'Organizing Mentor'
    },
 

]