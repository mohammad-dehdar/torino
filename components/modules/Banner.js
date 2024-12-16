"use client"

import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='w-full h-[350px]'>
            <Image src={"/images/banner.png"} width={1440} height={350} alt="بنر"  className='w-full h-full object-contain'/>
        </div>
    )
}

export default Banner