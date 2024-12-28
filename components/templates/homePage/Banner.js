import Image from 'next/image'
import React from 'react'

function Banner() {
  return <div className='w-full'><Image src={"/images/banner.png"}  width={2440} height={1080} quality={100} objectFit='cover' alt='torino-web-app' className='w-full h-full mx-auto'/></div>
}

export default Banner