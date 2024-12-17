"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navbar = [
    { id: 1, href: "/", title: "صفحه اصلی", icon: "/icons/home-2.svg" },
    { id: 2, href: "/", title: "خدمات گردشگری", icon: "/icons/airplane-square.svg" },
    { id: 3, href: "/", title: "درباره ما", icon: "/icons/volume-low.svg" },
    { id: 4, href: "/", title: "تماس با ما", icon: "/icons/call.svg" },
];
function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* دکمه همبرگر */}
            <button
                className="md:hidden h-full"
                onClick={() => setIsMenuOpen(true)}
            >
                <Image
                    src={"/icons/hamburger-menu.svg"}
                    width={20}
                    height={16}
                    alt="منو"
                />
            </button>

            {/* Overlay و منوی موبایل */}
            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50"
                    onClick={() => setIsMenuOpen(false)} 
                >
                    {/* منو */}
                    <div
                        className="fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg pt-8 px-3 rounded-l-2xl"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <ul className="flex flex-col gap-6">
                            {navbar.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex  gap-4 hover:text-primary transition"
                                >
                                    <Image
                                        src={item.icon}
                                        width={20}
                                        height={20}
                                        alt={item.title}
                                    />
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)} 
                                        className="mt-1"
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
