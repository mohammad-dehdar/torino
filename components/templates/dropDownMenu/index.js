'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "./confirmModal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, User } from "lucide-react";


function DropDownMenu({ mobile, setIsOpenModal, isModalOpen }) {
    const router = useRouter()
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

    const logOutHandler = () => {
        document.cookie = "accessToken=; max-age=0; path=/";
        document.cookie = "refreshToken=; max-age=0; path=/";
        window.location.replace("/");
    }

    const confirmLogOutHandler = () => {
        setIsLogoutModalOpen(true)
    }

    const profileHandler = () => {
        router.push("/profile")
        setIsOpenModal(false)
    }

    return (
        <>
            <AnimatePresence>
                {isModalOpen &&
                    (
                        <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="w-[157px] md:w-[246px] absolute md:-left-5 md:top-10 mt-2 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 ml-2 overflow-hidden z-50"
                      >
                        <div className="py" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-end gap-2 px-4 py-3 rounded-t-xl font-semibold bg-slate-200"
                            role="definition"
                          >
                            <User className="bg-slate-300 p-1 rounded-full" size={24} />
                            <span className="leading-5">{mobile}</span>
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Link href="/profile" className="flex items-center gap-2 px-4 py-3 text-xs hover:bg-gray-100" role="menuitem" onClick={profileHandler}>
                              <User size={16} />
                              <span>اطلاعات حساب کاربری</span>
                            </Link>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <button onClick={confirmLogOutHandler} className="flex w-full rounded-b-2xl items-center gap-2 px-4 py-3 text-xs text-rose-600 hover:bg-gray-100" role="menuitem">
                              <LogOut size={16} />
                              <span>خروج از حساب کاربری</span>
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                }

            </AnimatePresence>
            <Modal
                isOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                onConfirm={() => {
                    setIsLogoutModalOpen(false)
                    logOutHandler()
                }}
                title="خروج از حساب کاربری"
                message="آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟"
            />
        </>

    )
}

export default DropDownMenu