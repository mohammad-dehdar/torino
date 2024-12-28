'use client';

import { useAddToBasket } from '@/core/services/mutations';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import MinimalModal from '../paymentModal';

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const [isModalOpen, setIsModalOpen] = useState(false); // 🛠️ اصلاح useState
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    setIsModalOpen(true); // مدال باز می‌شود

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        setTimeout(() => {
          router.push('/checkout');
        }, 1000); // برای تجربه بهتر کاربر
      },
      onError: (error) => {
        console.error(error);
        setIsModalOpen(false); // بستن مدال در صورت خطا
        toast.error('وارد حساب کاربری خود بشوید');
      },
    });
  };

  return (
    <>
      <div>
        <button
          onClick={cartHandler}
          className="text-xl bg-primary rounded-[10px] text-white py-2 px-6 font-semibold"
        >
          رزرو و خرید
        </button>
      </div>
      {/* مدال با وضعیت صحیح */}
      <MinimalModal isOpen={isModalOpen} message="در حال انتقال به صفحه پرداخت هستید..." />
    </>
  );
}

export default ReserveButton;
