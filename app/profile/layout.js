"use client"

import Link from 'next/link'

import React from 'react'

function layout({ children }) {




    return (
        <div className='grid  md:grid-cols-4 md:gap-10 md:px-10 my-11'>
            <div className='border-b md:border md:rounded-2xl mx-6 md:mx-0 md:px-3 h-fit'>
                <ul className='flex justify-between md:block md:divide-y'>
                    <li className='px-2 py-3'><Link href={"/profile"}>پروفایل</Link></li>
                    <li className='px-2 py-3'><Link href={"/profile/tours"}>تورهای من</Link></li>
                    <li className='px-2 py-3'><Link href={"/profile/trnasaction"}>تراکنش ها</Link></li>
                </ul>
            </div>
            <div className='md:col-span-3'>
                {children}
            </div>
        </div>
    )
}

export default layout