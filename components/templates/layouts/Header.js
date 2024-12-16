"use client"

import Image from "next/image"
import Link from "next/link"
import AuthForm from "../atuhForm"

const navbar = [
    { id: 1, href: "/", title: "صفحه اصلی" },
    { id: 2, href: "/", title: "خدمات گردشگری" },
    { id: 3, href: "/", title: "درباره ما" },
    { id: 4, href: "/", title: "تماس با ما" },
]

function Header() {
    return (
        <header className="flex justify-between px-10 py-4 items-center border shadow-md shadow-black/10">
            <div className="flex items-center gap-16">
                <Link href={"/"}><Image src={"/images/logo.png"} width={146} height={44} alt="تورینو" priority className="hidden md:block" /></Link>
                <nav>
                    <ul className="hidden md:flex gap-8">
                        {navbar.map((item) => <li key={item.id} className="transition-all ease-out hover:text-primary"><Link href={item.href}>{item.title}</Link></li>)}
                    </ul>
                </nav>
            </div>
            <AuthForm />
        </header>
    )
}

export default Header