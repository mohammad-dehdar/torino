"use client";

import { useSendOtp } from '@/core/hook/hook';
import toast from 'react-hot-toast';
import { isValidMobile } from '@/core/utils/validation';
import { useState } from 'react';


function SendOtp({ mobile, setMobile, setStep, setIsOpen }) {
    const [error, setError] = useState("");
    const { isPending, mutate } = useSendOtp();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (isPending) return;
        if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
        setError("");

        mutate(
            { mobile },
            {
                onSuccess: (data) => {
                    console.log(data?.data?.message);
                    console.log(data?.data?.code);
                    setStep(2);
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );
    }

    return (
        <form onSubmit={submitHandler} className='relative w-[358px] h-[362px] md:w-[561px] md:h-[362px]  mx-auto bg-white rounded-3xl  flex flex-col  items-center justify-center'>
            <div className='absolute top-4 left-5 font-bold cursor-pointer' onClick={() => setIsOpen(false)}>×</div>
            <h3 className='text-[22px] font-semibold'>ورود به تورینو</h3>
            <div className='mt-16 mb-8 flex flex-col gap-2 font-light'>
                <label htmlFor='input'>شماره موبایل خود را وارد کنید</label>
                <input
                    type="text"
                    id='input'
                    placeholder="0912***4253"
                    dir='ltr'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className='w-[258px] h-[54px] md:w-[491px] md:h-[54px] border p-2 rounded-md text-right'
                />
            </div>
            {!!error && <p className="text-red-500">{error}</p>}
            <button type='submit' className='w-[258px] h-[54px] md:w-[491px] md:h-[54px] bg-primary rounded-lg text-white text-lg font-medium transition-colors ease-out hover:bg-secondary'>ارسال کد تایید</button>
        </form>
    )
}

export default SendOtp;