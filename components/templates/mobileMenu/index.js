"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navbar = [
    { id: 1, href: "/", title: "صفحه اصلی", icon: "/icons/home-2.svg" },
    { id: 2, href: "/", title: "خدمات گردشگری", icon: "/icons/airplane-square.svg" },
    { id: 3, href: "/", title: "درباره ما", icon: "/icons/volume-low.svg" },
    { id: 4, href: "/", title: "تماس با ما", icon: "/icons/call.svg" },
];
function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <button
                className="md:hidden h-full"
                onClick={() => setIsMenuOpen(true)}
            >
                <Image
                    src={"/icons/hamburger-menu.svg"}
                    width={20}
                    height={16}
                    alt="منو"
                    className="w-auto h-auto"
                />
            </button>

            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50"
                    onClick={() => setIsMenuOpen(false)} // کلیک روی Overlay، منو را می‌بندد
                >
                    {/* منو */}
                    <div
                        className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg p-6"
                        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته‌شدن هنگام کلیک روی خود منو
                    >
                        <ul className="flex flex-col gap-6">
                            {navbar.map((item) => (
                                <li
                                    key={item.id}
                                    className={`flex items-center gap-4 transition ${pathname === item.href
                                            ? "text-primary font-bold" // لینک فعال
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
                                        onClick={() => setIsMenuOpen(false)} // بستن منو بعد از کلیک
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
