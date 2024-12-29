"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HomeIcon, PhoneCall, PlaneTakeoff, VolumeIcon } from "lucide-react";

const navbar = [
    { id: 1, href: "/", title: "صفحه اصلی", icon: <HomeIcon /> },
    { id: 2, href: "/services", title: "خدمات گردشگری", icon: <PlaneTakeoff /> },
    { id: 3, href: "/about-us", title: "درباره ما", icon: <VolumeIcon /> },
    { id: 4, href: "/contact-us", title: "تماس با ما", icon: <PhoneCall /> },
];

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* دکمه باز کردن منو */}
            <button
                className="md:hidden h-full"
                onClick={() => setIsMenuOpen(true)}
            >
                <Image
                    src="/icons/hamburger-menu.svg"
                    width={20}
                    height={16}
                    alt="منو"
                    className="w-auto h-auto"
                />
            </button>

            {/* منوی موبایل */}
            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className="fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg p-6 rounded-l-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col gap-6">
                            {navbar.map((item) => (
                                <li
                                    key={item.id}
                                    className={`flex items-center gap-4 transition ${pathname === item.href ? 'text-primary' : ''
                                        }`}
                                >
                                    <span className="w-4 h-4 flex items-center justify-center bg-primary/10 rounded-full">
                                        {item.icon}
                                    </span>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default MobileMenu;
