"use client";

import ButtonLoader from "@/components/atom/buttonLoader/ButtonLoader";
import { useCheckOtp } from "@/core/services/mutations";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";

function CheckOtp({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(10);
  const [isError, setIsError ]= useState("");
  const [isTimerActive, setIsTimerActive] = useState(true);

  const router = useRouter();
  const { isPending, mutate } = useCheckOtp();

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setIsOpen(false);
          router.push("/");
        },
        onError: (error) => {
          console.log(error);
          
          setIsError(error?.message);
        },
      }
    );
  };

  const resendOtpHandler = () => {
    setStep(1)
  };

  const inputHandler = (code) => {
    if (!code) return toast.error("کد را وارد کنید")
    setCode(code);
  };

  return (
    <form
      onSubmit={checkOtpHandler}
      className="relative w-[358px] h-[362px] md:w-[561px] md:h-[362px] bg-white rounded-3xl flex flex-col items-center justify-center"
    >
      {
        timer < 1 ? (<div
          className="absolute top-4 left-5 font-bold cursor-pointer"
          onClick={() => setStep(1)}
        >
          <MoveLeft className="transition-all ease-out hover:text-rose-600" />
        </div>) : null
      }
      <h3 className="text-[22px] md:text-[28px] font-semibold">کد تایید را وارد کنید.</h3>
      <div className="mt-8 mb-2 flex flex-col gap-2 font-light">
        <p className="font-medium text-center">کد تایید به شماره {mobile} ارسال شد .</p>
        {isError && <p className="text-red-500 text-center">{isError}</p>}
        <div style={{ direction: "ltr" }}>
          <OTPInput
            value={code}
            onChange={inputHandler}
            numInputs={6}
            containerStyle={{
              gap: "12px",
            }}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                  width: "47px",
                  height: "47px",
                  textAlign: "center",
                  color: "black",
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="mb-1 flex  items-center gap-4">
        {isTimerActive ? (
          <p className="text-gray-500"> {timer} ثانیه تا ارسال کد بعدی</p>
        ) : (
          <button
            onClick={resendOtpHandler}
            className="text-blue-500 font-medium"
          >
            ارسال مجدد کد
          </button>
        )}
       
      </div>
      {/* <button
        type="submit"
        className="w-[258px] h-[54px] md:w-[491px] md:h-[54px] bg-primary rounded-lg text-white text-lg font-medium transition-colors ease-out hover:bg-secondary mt-10"
      >
        ورود به تورینو
      </button> */}
      <ButtonLoader isPending={isPending}/>
    </form>
  );
}

export default CheckOtp;
