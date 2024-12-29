"use client";

import { useState } from "react";


import ModalContainer from "@/components/partials/container/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import CheckOTPForm from "./CheckOtpForm";
import Image from "next/image";
import DropDownMenu from "../dropDownMenu";
import SendOTPForm from "./SendOtpForm";

function AuthForm() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsOpenModal] = useState(false);

    const { data } = useGetUserData();
    

    if (data?.data) return (
        <div className="text-center relative">
            <button
                onClick={() => setIsOpenModal(!isModalOpen)}
                className="flex items- justify-center gap-2 md:px-4 md:py-2 text-lg text-primary hover:text-secondary transition-colors"
            >
                <Image src={"/icons/user.svg"} width={24} height={24} alt="کاربر" priority className="w-[24px] h-[24px]"/>
                <span>{data.data.mobile}</span>
                <Image src={"/icons/arrow-down.svg"} width={24} height={24} alt="پروفایل کاربر" priority className="w-[24px] h-[24px]"/>
            </button>
            {isModalOpen && <DropDownMenu mobile={data.data.mobile} setIsOpenModal={setIsOpenModal} isModalOpen={isModalOpen} />}
        </div>
    );

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className="hidden md:flex items-center gap-2 border-2 border-primary rounded-lg py-2 px-5 text-primary text-lg">
                <Image src={"/icons/profile.svg"} width={24} height={24} alt="پروفایل" className="w-auto h-auto" /> ورود <span>|</span> ثبت نام
            </button>
            <button onClick={() => setIsOpen(true)} className="md:hidden border border-primary p-2 rounded-lg">
                <Image src={"/icons/login.svg"} width={24} height={24} alt="پروفایل" className="w-auto h-auto" />
            </button>
            {step === 1 && (
                <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
                    <SendOTPForm
                        mobile={mobile}
                        setMobile={setMobile}
                        setStep={setStep}
                        setIsOpen={setIsOpen}
                    />
                </ModalContainer>
            )}
            {step === 2 && (
                <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
                    <CheckOTPForm
                        mobile={mobile}
                        setStep={setStep}
                        setIsOpen={setIsOpen}
                    />
                </ModalContainer>
            )}
        </div>
    );
}

export default AuthForm;