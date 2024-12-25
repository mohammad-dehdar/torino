import Image from 'next/image'
import React from 'react'

function Banner() {
  return <div className='w-full'><Image src={"/images/banner.png"}  width={2440} height={1080} alt='torino-web-app' className='w-auto h-full mx-auto'/></div>
}

export default Banner