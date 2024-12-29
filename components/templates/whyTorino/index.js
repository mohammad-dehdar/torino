'use client'

import SliderComponent from './Swiper';


function WhyTorino() {
    return (
        <div className='mt-20 md:mt-32 mb-8 mx-8 md:mx-0'>
            <div className='md:flex max-w-[1440px] mx-auto'>
                <div className='w-1/2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 md:w-14 md:h-14 bg-gradient-to-b from-primary to-secondary rounded-full text-center text-2xl md:text-4xl font-extrabold text-white p-2 md:p-3'>؟</div>
                        <p className='text-2xl md:text-4xl font-extrabold'>چرا <span className='text-primary'>تورینو</span>؟</p>
                    </div>
                    <div className='hidden md:block mt-8'>
                        <h4 className='text-2xl font-semibold'>تور طبیعت گردی و تاریخی</h4>
                        <p className='text-[20px] font-light mt-9'>
                            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
                        </p>
                    </div>
                </div>
                <SliderComponent/>
            </div>
        </div>
    )
}

export default WhyTorino