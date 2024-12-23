"use client";

import { useCheckOtp } from "@/core/services/mutations";
import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOtp({ mobile, setStep, setIsOpen}) {
  const [code , setCode] = useState("")

  const { isPending, mutate } = useCheckOtp();

  
  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setIsOpen(false);
        },
        onError: (error) => {
          console.log(error.response?.data);
        },
      }
    );
  };

  const inputHandler = (code) => {
    setCode(code);
  };

  return (
    <form onSubmit={checkOtpHandler} className='relative w-[358px] h-[362px] md:w-[561px] md:h-[362px] bg-white rounded-3xl flex flex-col  items-center justify-center'>
      <div className='absolute top-4 left-5 font-bold cursor-pointer' onClick={() => setStep(1)}>←</div>
      <h3 className='text-[22px] font-semibold'>کد تایید را وارد کنید.</h3>
      <div className='mt-8 mb-20 flex flex-col gap-2 font-light'>
        <p className="font-medium">کد تایید به شماره  {mobile} ارسال شد</p>
        <div style={{ direction: "ltr" }}>
          <OTPInput
            value={code}
            onChange={inputHandler}
            numInputs={6}
            containerStyle={{
              gap: "10px"
            }}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                  width: "45px",
                  height: "40px",
                  textAlign: "center",
                  color: "black",
                }}
              />
            )}
          />
        </div>
      </div>
      <button type="submit" className='w-[258px] h-[54px] md:w-[491px] md:h-[54px] bg-primary rounded-lg text-white text-lg font-medium transition-colors ease-out hover:bg-secondary'>ورود به تورینو</button>
    </form>
  )
}

export default CheckOtp