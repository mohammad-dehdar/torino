'use client'

import { personalDataSchema } from "@/core/schema";
import { useCheckout, useUpdatePersonalData } from "@/core/services/mutations";
import { useGetBasket, useGetUserData } from "@/core/services/queries";
import formatDate from "@/core/utils/formatDate";
import formatPrice from "@/core/utils/formatPrice";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function CheckOut() {
    const { data: user } = useGetUserData();
    const { data: basket, isPending: basketPending } = useGetBasket();

    const { mutate: personalMutate, isPending: personalPending } = useUpdatePersonalData();
    const { mutate: checkoutMutate, isPending: checkoutPending } = useCheckout();

    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({
        resolver: yupResolver(personalDataSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            birthDate: '',
            gender: '',
            nationalId: ''
        }
    });

    const router = useRouter();
    const [isPersonalDataSaved, setIsPersonalDataSaved] = useState(false);

    // مقداردهی اولیه فرم با اطلاعات کاربر
    useEffect(() => {
        if (user?.data) {
            reset({
                firstName: user?.data?.firstName || '',
                lastName: user?.data?.lastName || '',
                birthDate: formatDate(user?.data?.birthDate) || '',
                gender: user?.data?.gender || '',
                nationalId: user?.data?.nationalId || ''
            });

            setIsPersonalDataSaved(
                Boolean(
                    user?.data?.firstName &&
                    user?.data?.lastName &&
                    user?.data?.birthDate &&
                    user?.data?.gender &&
                    user?.data?.nationalId
                )
            );
        }
    }, [user, reset]);

    const start = new Date(basket?.data.startDate);
    const end = new Date(basket?.data.endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const nights = days - 1;

    // ثبت اطلاعات شخصی
    const savePersonalData = (data) => {
        personalMutate(data, {
            onSuccess: () => {
                toast.success("اطلاعات شخصی با موفقیت ذخیره شد");
                setIsPersonalDataSaved(true);
            },
            onError: (error) => {
                toast.error(error?.response?.data?.message || "خطا در ثبت اطلاعات شخصی");
            }
        });
    };

    // مدیریت پرداخت

    const checkoutHandler = () => {
        if (!isPersonalDataSaved) {
            toast.error("لطفاً ابتدا اطلاعات شخصی خود را ثبت کنید");
            return;
        }

        // داده‌های لازم برای پرداخت
        const checkoutData = {
            nationalCode: getValues("nationalId"),
            fullName: `${getValues("firstName")} ${getValues("lastName")}`,
            gender: getValues("gender"),
            birthDate: getValues("birthDate"),
        };

        console.log("Checkout Data:", checkoutData); // برای اطمینان از صحت داده‌ها

        checkoutMutate(checkoutData, {
            onSuccess: (data) => {
                console.log("Payment Success:", data);
                router.push("/payment?status=success");
            },
            onError: (error) => {
                console.error("Checkout Error:", error?.response?.data || error);
                toast.error(error?.response?.data?.message || "خطا در انجام پرداخت");
            }
        });
    };


    if (basketPending) return <div>در حال دریافت اطلاعات...</div>;

    if (!basket) return (
        <div>
            <p>سبد خرید شما خالی است</p>
            <Link href="/">برو به صفحه اصلی</Link>
        </div>
    );

    return (
        <div className="sm:flex max-w-[1440px] mx-8 md:mx-auto gap-6">
            {/* فرم اطلاعات شخصی */}
            <form onSubmit={handleSubmit(savePersonalData)} className='border-2 rounded-[10px] p-4 mt-4 md:w-4/6'>
                <h4 className='font-medium mb-4'>اطلاعات شخصی مسافر</h4>

                <div className='flex max-sm:flex-col  md:flex-wrap md:justify-between md:items-center gap-4'>
                    {/* نام */}
                    <div>
                        <input
                            className={`p-2 border-2 w-full rounded-md ${errors.firstName ? 'border-red-500' : ''}`}
                            placeholder='نام'
                            {...register("firstName")}
                        />
                        {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
                    </div>

                    {/* نام خانوادگی */}
                    <div>
                        <input
                            className={`p-2 border-2 w-full rounded-md ${errors.lastName ? 'border-red-500' : ''}`}
                            placeholder='نام خانوادگی'
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
                            placeholder='کد ملی'
                            {...register("nationalId")}
                        />
                        {errors.nationalId && <p className='text-red-500 text-sm'>{errors.nationalId.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={personalPending}
                        className="bg-secondary rounded-md py-2 px-4 text-white"
                    >
                        {personalPending ? "در حال ثبت اطلاعات..." : "ثبت اطلاعات"}
                    </button>
                </div>
            </form>

            <div className="border mt-4 px-2 py-3 rounded-lg md:w-2/6 divide-dashed divide-y-2">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-extrabold">{basket?.data.title}</h1>
                    <p className="text-gray-400">{`${days} روز و ${nights} شب`}</p>
                </div>
                <div className="flex flex-col gap-2 pt-4">
                    <div className="flex justify-between items-center">
                        <p>قیمت نهایی</p>
                        <p>{formatPrice(basket?.data.price)} تومان</p>
                    </div>
                    <button
                        onClick={checkoutHandler}
                        disabled={checkoutPending || !isPersonalDataSaved}
                        className="w-full bg-primary rounded-md py-2 mt-3 text-white"
                    >
                        {checkoutPending ? "در حال پرداخت..." : "پرداخت"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;
