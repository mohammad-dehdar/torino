"use client"

import { Captions, TentTree, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Layout({ children }) {
    const pathname = usePathname()

    const isActive = (href) => pathname === href

    return (
        <div className='px-8'>
            <div className='max-w-[1440px] grid md:grid-cols-4 md:gap-10 my-11 mx-auto'>
                <div className='border-b md:border md:rounded-2xl  h-fit'>
                    <ul className='flex justify-between text-xs md:text-sm font-medium md:block md:divide-y'>
                        <li className={`px-5 py-3 flex items-center gap-2 ${isActive('/profile') ? 'md:bg-green-200/20 text-primary rounded-t-2xl' : ''}`}>
                            <User className='w-4 md:w-5' />
                            <Link href="/profile">پروفایل</Link>
                        </li>
                        <li className={`px-5 py-3 flex items-center gap-2 ${isActive('/profile/my-tours') ? 'md:bg-green-200/20 text-primary' : ''}`}>
                            <TentTree className='w-4 md:w-5' />
                            <Link href="/profile/my-tours">تورهای من</Link>
                        </li>
                        <li className={`px-5 py-3  flex items-center gap-2 ${isActive('/profile/transactions') ? 'md:bg-green-200/20 text-primary md:rounded-b-2xl' : ''}`}>
                            <Captions  className='w-4 md:w-5'/>
                            <Link href="/profile/transactions">تراکنش ها</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:col-span-3  md:mx-0'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
