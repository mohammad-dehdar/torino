"use client";


import { useAddToBasket } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        console.log(error);
        toast.error(" وارد حساب کاربری خود بشوید ")
      },
    });
  };

  return (
    <div>
      <button
        onClick={cartHandler}
        className="text-xl bg-primary rounded-[10px] text-white py-2 px-6 font-semibold"
      >
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReserveButton;