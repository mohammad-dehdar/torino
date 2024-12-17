"use client";

import Image from "next/image";
import Link from "next/link";
import AuthForm from "../atuhForm";
import MobileMenu from "@/components/modules/MobileMenu";

const navbar = [
    { id: 1, href: "/", title: "صفحه اصلی" },
    { id: 2, href: "/", title: "خدمات گردشگری" },
    { id: 3, href: "/", title: "درباره ما" },
    { id: 4, href: "/", title: "تماس با ما" },
];

function Header() {
    return (
        <header className="flex justify-between px-8 md:px-10 py-4 items-center border shadow-md shadow-black/10 relative">
            <div className="flex md:items-center md:gap-16">
                {/* لوگو */}
                <Link href={"/"}>
                    <Image
                        src={"/images/logo.png"}
                        width={146}
                        height={44}
                        alt="تورینو"
                        priority
                        className="hidden md:block"
                    />
                </Link>

                {/* ناوبری دسکتاپ */}
                <nav>
                    <ul className="hidden md:flex gap-8">
                        {navbar.map((item) => (
                            <li
                                key={item.id}
                                className="transition-all ease-out hover:text-primary"
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* منوی موبایل */}
                    <MobileMenu />
                </nav>
            </div>

            {/* فرم ورود */}
            <AuthForm />
        </header>
    );
}

export default Header;
