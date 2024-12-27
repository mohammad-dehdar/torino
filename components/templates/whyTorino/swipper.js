import React, { useRef } from 'react';     
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules'
import Image from 'next/image';

const MySlider = ({ slides }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Swiper
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      modules={[Navigation]}
      className="mySwiper mt-4 md:mt-0 md:w-1/4"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className='w-[389px] h-[479px]'>
          <Image fill src={slide.image} alt={slide.title} className='w-auto h-auto'/>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default MySlider;