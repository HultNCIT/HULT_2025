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
                        <img src={value.img} alt='anish' className='h-full w-full  object-contain rounded-xl shadow-2xl'/>
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
        <div className="hidden md:grid ml-12 px-0 md:px-20  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {advisor.map((value,index)=>(
            <div key={index} className='flex flex-col justify-center items-center mt-4 hover:-translate-y-1 duration-300 '>
                <div className=' w-44 h-56 flex justify-center items-end '>
                    <img src={value.img} alt={value.name} className=' h-full object-cover rounded-xl shadow-xl'/>
                </div>
                <div className="text-blackMain text-center font-semibold text-sm whitespace-nowrap mt-2">{value.name}</div>
                <div className="text-blackMain text-center font-medium mt-1 text-sm whitespace-nowrap">{value.designation}</div>
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
        // img:'Anish.png',
        // name:'Er. Anish Kumar Neupane',
        // designation:'Principal NCIT',
        // position:'Cheif Adviser'
    },
    {
        // img:'Anish.png',
        // name:'Anish Kumar Neupane',
        // designation:'Principal NCIT',
        // position:'Cheif Adviser'
    },
    {
        // img:'Rushab.png',
        // name:'Anish Kumar Neupane',
        // designation:'Principal NCIT',
         // position:'Cheif Adviser'
    },
    {
        // img:'Rushab.png',
        // name:'Anish Kumar Neupane',
        // designation:'Principal NCIT',
         // position:'Cheif Adviser'
    },
    {
        // img:'Rushab.png',
        // name:'Anish Kumar Neupane',
        // designation:'Principal NCIT',
         // position:'Cheif Adviser'
    }
]