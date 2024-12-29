'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


function DropDownMenu({ mobile, setIsOpenModal }) {
    const router = useRouter()

    const logOutHandler = () => {
        document.cookie = "accessToken=; max-age=0; path=/";
        document.cookie = "refreshToken=; max-age=0; path=/";
        window.location.replace("/");
    }
    const confirmLogOutHandler = () => {
        const userConfirmed = window.confirm("آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟");
        if (userConfirmed) {
            logOutHandler();
        }
    }
    const profileHandler = () => {
        router.push("/profile")
        setIsOpenModal(false)
    }

    return (
        <div className="w-[157px] md:w-[246px] absolute md:-left-5 md:top-10 mt-2 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 ml-2">
            <div className="py" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <p className="flex items-end gap-2 px-4 py-3 rounded-t-xl font-semibold bg-slate-200" role="definition">
                    <svg className="bg-slate-300 p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="leading-5">{mobile}</span>
                </p>
                <Link href="/profile    " className="flex items-center gap-2 px-4 py-3 text-xs hover:bg-gray-100" role="menuitem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span onClick={profileHandler}>اطلاعات حساب کاربری</span>
                </Link>
                <button href="#" className="flex w-full rounded-b-2xl items-center gap-2 px-4 py-3 text-xs text-rose-600 hover:bg-gray-100" role="menuitem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span onClick={confirmLogOutHandler}>خروج از حساب کاربری</span>
                </button>
            </div>
        </div>
    )
}

export default DropDownMenu