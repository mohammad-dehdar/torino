'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { accountInfoSchema } from '@/core/schema';
import { useUpdateAccountInfo } from '@/core/services/mutations';
import { useState } from 'react';

function AccountInfoForm({ data }) {
    const [isEdit, setIsEdit] = useState(false);
    const { mutate, isPending } = useUpdateAccountInfo();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(accountInfoSchema),
        defaultValues: {
            email: data?.email || '',
        },
    });

    const onSubmit = (formData) => {
        if (isPending) return;

        mutate(formData, {
            onSuccess: () => {
                toast.success("ایمیل شما با موفقیت به‌روزرسانی شد");
                setIsEdit(false);
            },
            onError: () => {
                toast.error("خطا در به‌روزرسانی ایمیل");
            }
        });
    };

    const handleCancel = () => {
        reset({ email: data?.email || '' });
        setIsEdit(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 rounded-[10px]">
            <div className="flex items-baseline justify-between p-4">
                <h4 className="font-medium mb-4">{isEdit ? "ویرایش اطلاعات حساب کاربری" : "اطلاعات حساب کاربری"}</h4>
                {!isEdit && (
                    <button
                        type="button"
                        className="text-complementary"
                        onClick={() => setIsEdit(true)}
                    >
                        ویرایش ایمیل
                    </button>
                )}
            </div>

            {isEdit ? (
                <>
                    <div className="p-4">
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="font-medium">شماره تلفن:</label>
                                <input
                                    className="p-2 border-2 w-full rounded-md bg-gray-100"
                                    value={data?.mobile || "-"}
                                    disabled
                                />
                            </div>
                            <div>
                                <input
                                    className={`p-2 border-2 w-full rounded-md ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="ایمیل خود را وارد کنید"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end gap-2 px-4 py-2 font-medium">
                        <button
                            type="submit"
                            className="w-full md:w-36 bg-primary rounded-[5px] p-1 text-white"
                        >
                            ثبت
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="w-full md:w-36 border-2 border-primary rounded-[5px] text-primary p-1"
                        >
                            انصراف
                        </button>
                    </div>
                </>
            ) : (
                <div className="p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 justify-between md:justify-start text-center">
                            <p className="font-medium">شماره تلفن:</p>
                            <p className="font-light">{data?.mobile || "-"}</p>
                        </div>
                        <div className="flex gap-2 justify-between md:justify-start text-center">
                            <p className="font-medium">ایمیل:</p>
                            <p className="font-light">{data?.email || "-"}</p>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}

export default AccountInfoForm;
