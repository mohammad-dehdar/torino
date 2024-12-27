'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

import { personalDataSchema } from '@/core/schema';
import { useUpdatePersonalData } from '@/core/services/mutations';
import { useState, useEffect } from 'react';
import formatDate from '@/core/utils/formatDate';

function PersonalDataForm({ data  }) {
    const [isEdit, setIsEdit] = useState(false);
    const { mutate, isPending } = useUpdatePersonalData();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(personalDataSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            birthDate: '',
            gender: '',
            nationalId: ''
        }
    });

    // مقداردهی اولیه هنگام ورود به حالت ویرایش
    useEffect(() => {
        if (isEdit && data) {
            reset({
                firstName: data?.firstName || '',
                lastName: data?.lastName || '',
                birthDate: formatDate(data?.birthDate),
                gender: data?.gender || '',
                nationalId: data?.nationalId || ''
            });
        }
    }, [isEdit, data, reset]);

    const onSubmit = (formData) => {
        if (isPending) return;

        mutate(formData, {
            onSuccess: () => {
                toast.success("اطلاعات شخصی شما با موفقیت ثبت شد");
                setIsEdit(false);
            },
            onError: (error) => {
                toast.error(error?.response?.data?.message || "خطا در ثبت اطلاعات شخصی");
            }
        });
    };

    const handleCancel = () => {
        reset();
        setIsEdit(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='border-2 rounded-[10px] p-4'>
            <div className='flex items-center justify-between mb-4'>
                <h4 className='font-medium'>{isEdit ? "ویرایش اطلاعات شخصی" : "اطلاعات شخصی"}</h4>
                {!isEdit && (
                    <button
                        type="button"
                        className='text-complementary'
                        onClick={() => setIsEdit(true)}
                    >
                        ویرایش اطلاعات
                    </button>
                )}
            </div>

            {isEdit ? (
                <>
                    <div className='flex flex-col gap-4'>
                        {/* نام */}
                        <div>
                            <input
                                className={`p-2 border-2 w-full rounded-md ${errors.firstName ? 'border-red-500' : ''}`}
                                placeholder='نام خود را وارد کنید'
                                {...register("firstName")}
                            />
                            {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
                        </div>

                        {/* نام خانوادگی */}
                        <div>
                            <input
                                className={`p-2 border-2 w-full rounded-md ${errors.lastName ? 'border-red-500' : ''}`}
                                placeholder='نام خانوادگی خود را وارد کنید'
                                {...register("lastName")}
                            />
                            {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
                        </div>

                        {/* تاریخ تولد */}
                        <div>
                            <input
                                className={`p-2 border-2 w-full rounded-md ${errors.birthDate ? 'border-red-500' : ''}`}
                                type='date'
                                {...register("birthDate")}
                            />
                            {errors.birthDate && <p className='text-red-500 text-sm'>{errors.birthDate.message}</p>}
                        </div>

                        {/* جنسیت */}
                        <div>
                            <select
                                className={`p-2 border-2 w-full rounded-md ${errors.gender ? 'border-red-500' : ''}`}
                                {...register("gender")}
                            >
                                <option value="">جنسیت خود را انتخاب کنید</option>
                                <option value="male">مرد</option>
                                <option value="female">زن</option>
                            </select>
                            {errors.gender && <p className='text-red-500 text-sm'>{errors.gender.message}</p>}
                        </div>

                        {/* کد ملی */}
                        <div>
                            <input
                                className={`p-2 border-2 w-full rounded-md ${errors.nationalId ? 'border-red-500' : ''}`}
                                placeholder='کد ملی خود را وارد کنید'
                                {...register("nationalId")}
                            />
                            {errors.nationalId && <p className='text-red-500 text-sm'>{errors.nationalId.message}</p>}
                        </div>
                    </div>

                    {/* دکمه‌ها */}
                    <div className='flex justify-end gap-2 mt-4'>
                        <button
                            type="submit"
                            className='w-36 bg-primary rounded-md p-1 text-white'
                        >
                            ثبت
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className='w-36 border-2 border-primary rounded-md text-primary p-1'
                        >
                            انصراف
                        </button>
                    </div>
                </>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]'>
                    <div className='flex justify-between md:justify-start gap-3'>
                        <p className='font-medium'>نام و نام خانوادگی</p>
                        <p className='font-light'>{data?.firstName || "-"} {data?.lastName || "-"}</p>
                    </div>
                    <div className='flex justify-between md:justify-start gap-3'>
                        <p className='font-medium'>تاریخ تولد</p>
                        <p className='font-light'>{data?.birthDate ? formatDate(data.birthDate) : "-"}</p>
                    </div>
                    <div className='flex justify-between md:justify-start gap-3'>
                        <p className='font-medium'>جنسیت</p>
                        <p className='font-light'>
                            {data?.gender === 'male' ? 'مرد' : data?.gender === 'female' ? 'زن' : "-"}
                        </p>
                    </div>
                    <div className='flex justify-between md:justify-start gap-3'>
                        <p className='font-medium'>کد ملی</p>
                        <p className='font-light'>{data?.nationalId || "-"}</p>
                    </div>
                </div>
            )}
        </form>
    );
}

export default PersonalDataForm;
