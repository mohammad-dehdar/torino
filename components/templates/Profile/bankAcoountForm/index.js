'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast';

import { bankAccountSchema } from '@/core/schema';
import { useUpdateBankAccount } from '@/core/services/mutations';
import { useState, useEffect } from 'react';

function BankAccountForm({ data }) {
    const [isEdit, setIsEdit] = useState(false);
    const { mutate, isPending } = useUpdateBankAccount();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(bankAccountSchema),
        defaultValues: {
            debitCard_code: '',
            shaba_code: '',
            accountIdentifier: '',
        }
    });

    // مقداردهی اولیه هنگام ورود به حالت ویرایش
    useEffect(() => {
        if (isEdit && data?.payment) {
            reset({
                debitCard_code: data.payment.debitCard_code || '',
                shaba_code: data.payment.shaba_code || '',
                accountIdentifier: data.accountIdentifier || '',
            });
        }
    }, [isEdit, data, reset]);

    const onSubmit = (formData) => {
        if (isPending) return;

        mutate(
            { payment: formData },
            {
                onSuccess: () => {
                    toast.success("اطلاعات بانکی شما با موفقیت ثبت شد");
                    setIsEdit(false);
                },
                onError: () => {
                    toast.error("خطا در ثبت اطلاعات بانکی");
                }
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='border-2 rounded-[10px]'>
            <div className='flex items-baseline justify-between p-4'>
                <h4 className='font-medium mb-4'>{isEdit ? "ویرایش اطلاعات حساب بانکی" : "اطلاعات حساب بانکی"}</h4>
                {!isEdit && <button className='text-complementary' onClick={() => setIsEdit(true)}>ویرایش اطلاعات</button>}
            </div>

            {isEdit ? (
                <>
                    <div className='p-4'>
                        <div className='flex max-sm:flex-col md:justify-between gap-2 md:*:w-full md:gap-4 *:rounded-[5px]'>
                            <input className='p-2 border-2' placeholder='شماره کارت' {...register("debitCard_code")} />
                            {errors.debitCard_code && <p className='text-red-500'>{errors.debitCard_code.message}</p>}

                            <input className='p-2 border-2' placeholder='شماره شبا' {...register("shaba_code")} />
                            {errors.shaba_code && <p className='text-red-500'>{errors.shaba_code.message}</p>}

                            <input className='p-2 border-2' placeholder='شماره حساب' {...register("accountIdentifier")} />
                            {errors.accountIdentifier && <p className='text-red-500'>{errors.accountIdentifier.message}</p>}
                        </div>
                    </div>
                    <div className='flex md:justify-end gap-2 px-4 py-2 font-medium'>
                        <button type="submit" className='w-full md:w-36 bg-primary rounded-[5px] p-1 text-white'>ثبت</button>
                        <button onClick={() => setIsEdit(false)} className='w-full md:w-36 border-2 border-primary rounded-[5px] text-primary p-1'>انصراف</button>
                    </div>
                </>
            ) : (
                <div className='p-4'>
                    <div className='flex text-[15px] max-sm:flex-col md:justify-between gap-2 md:*:w-full md:gap-4 *:rounded-[5px]'>
                        <div className='flex gap-2 justify-between md:justify-start text-center'>
                            <p className='font-medium'>شماره کارت:</p>
                            <p className='font-light'>{data?.payment?.debitCard_code || "-"}</p>
                        </div>
                        <div className='flex gap-2 justify-between md:justify-start text-center'>
                            <p className='font-medium'>شماره شبا:</p>
                            <p className='font-light'>{data?.payment?.shaba_code || "-"}</p>
                        </div>
                        <div className='flex gap-2 justify-between md:justify-start text-center'>
                            <p className='font-medium'>شماره حساب:</p>
                            <p className='font-light'>{data?.accountIdentifier || "-"}</p>
                        </div>
                    </div>
                </div>
            )}
        </form>
    )
}

export default BankAccountForm;
