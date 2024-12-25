"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navbar = [
    { id: 1, href: "/", title: "صفحه اصلی", icon: "/icons/home-2.svg" },
    { id: 2, href: "/services", title: "خدمات گردشگری", icon: "/icons/airplane-square.svg" },
    { id: 3, href: "/about", title: "درباره ما", icon: "/icons/volume-low.svg" },
    { id: 4, href: "/contact", title: "تماس با ما", icon: "/icons/call.svg" },
];

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

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
                        className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col gap-6">
                            {navbar.map((item) => (
                                <li
                                    key={item.id}
                                    className={`flex items-center gap-4 transition ${
                                        isActive(item.href)
                                            ? "text-primary"
                                            : "text-black"
                                    }`}
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
