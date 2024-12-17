"use client";

import Image from "next/image";
import { useState } from "react";

import CheckOtp from "./CheckOtp";
import SendOtp from "./SendOtp";
import ModalContainer from "@/components/container/ModalContainer";
import DropDownMenu from "@/components/modules/DropDownMenu";
import { useGetProfile } from "@/core/hook/hook";


function AuthForm() {
  const { data } = useGetProfile();
  console.log(data);


  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [isModalOpen, setIsOpenModal] = useState(false);

  return (
    <div>
      {data?.mobile
        ? (
          <div className="text-center relative">
            <button
              onClick={() => setIsOpenModal(!isModalOpen)}
              className="flex items- justify-center gap-2 md:px-4 md:py-2 text-lg text-primary hover:text-secondary transition-colors"
            >
            <Image src={"/icons/user.svg"} width={24} height={24} alt="کاربر"/>
              <span>{data.mobile}</span>
              <Image src={"/icons/arrow-down.svg"} width={24} height={24} alt="پروفایل کاربر"/>
            </button>
            {isModalOpen && <DropDownMenu mobile={data.mobile} setIsOpen={setIsOpen} />}
          </div>
        )
        : (
          <>
            <button onClick={() => setIsOpen(true)} className="hidden md:flex items-center gap-2 border-2 border-primary rounded-lg py-2 px-5 text-primary text-lg">
              <Image src={"/icons/profile.svg"} width={24} height={24} alt="پروفایل" className="" /> ورود <span>|</span> ثبت نام
            </button>
            <button onClick={() => setIsOpen(true)} className="md:hidden border border-primary p-2 rounded-lg">
              <Image src={"/icons/login.svg"} width={24} height={24} alt="پروفایل" className="" />
            </button>
          </>
        )}
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOtp
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOtp
            mobile={mobile}
            otp={otp}
            setOtp={setOtp}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  )
}

export default AuthForm;