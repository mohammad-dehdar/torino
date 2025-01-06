import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, Home } from 'lucide-react';

function PaymentContent({ searchParams }) {
  const status = searchParams?.status;

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-[1440px] p-6 md:p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex max-md:flex-col items-center justify-center gap-8 animate-fadeIn">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/successCheck.svg"
                fill
                className="object-contain animate-scaleIn"
                alt="پرداخت موفق"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-green-500 animate-bounce" />
                <h1 className="text-xl md:text-3xl text-gray-700 font-bold">
                  پرداخت شما با موفقیت انجام شد
                </h1>
              </div>
              <p className="text-gray-500 text-lg">
                تور شما با موفقیت رزرو شد. می‌توانید جزئیات تور خود را در پروفایل کاربری مشاهده کنید.
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="/profile/my-tours"
                  className="bg-primary px-6 py-3 text-lg rounded-xl text-white font-medium hover:bg-secondary transition-colors duration-200 shadow-lg shadow-primary/20"
                >
                  مشاهده تور
                </Link>
                <Link
                  href="/"
                  className="bg-gray-100 px-6 py-3 text-lg rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-6 md:p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 text-center animate-fadeIn">
          <div className="flex items-center gap-2">
            <XCircle className="w-8 h-8 text-red-500 animate-bounce" />
            <h1 className="text-xl md:text-3xl text-gray-700 font-bold">
              پرداخت ناموفق
            </h1>
          </div>
          <p className="text-gray-500 text-lg">
            متأسفانه پرداخت شما با مشکل مواجه شد. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/"
              className="bg-primary px-6 py-3 text-lg rounded-xl text-white font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/20"
            >
              تلاش مجدد
            </Link>
            <Link
              href="/"
              className="bg-gray-100 px-6 py-3 text-lg rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentContent;