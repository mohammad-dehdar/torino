'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

const images = [
  '/images/slider-1.png',
  '/images/slider-2.png',
  '/images/slider-3.png',
  '/images/slider-4.png',
]

export default function SliderComponent() {
  return (
    <div className="relative w-full md:w-1/2 overflow-hidden">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        dir="rtl"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          prevEl: '.swiper-button-next',
          nextEl: '.swiper-button-prev',
        }}
        className="!overflow-visible !pt-4 !pb-12"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!w-[255px] md:!w-[389px]"
            style={{
              transform: `scale(${1 - index * 0.1})`,
              zIndex: images.length - index,
            }}
          >
            <div className="relative">
              <Image
                src={image}
                alt={`اسلاید ${index + 1}`}
                width={389}
                height={479}
                className="h-[284px] w-[255px] rounded-2xl object-cover transition-all duration-300 md:h-[479px] md:w-[389px]"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
