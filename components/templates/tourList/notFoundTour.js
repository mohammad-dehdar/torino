import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeftCircle } from "lucide-react";

function NotFoundTour() {
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col items-center mt-20 px-4">
            {/* آیکون هشدار در بالای تصویر */}
            <div className="bg-red-50 text-red-500 p-4 rounded-full shadow-lg">
                <AlertTriangle size={48} />
            </div>
            
            {/* تصویر */}
            <div className="mt-6">
                <Image
                    src="/images/not-found-tour.webp"
                    width={720}
                    height={480}
                    alt="404"
                    className="md:w-auto md:h-auto w-40 rounded-xl shadow-md"
                />
            </div>
            
            {/* متن و لینک */}
            <div className="flex flex-col items-center gap-6 mt-8 md:gap-10">
                <h1 className="text-xl md:text-4xl font-bold text-gray-800">
                    تور مورد نظر یافت نشد!
                </h1>
                <p className="text-gray-600 text-center md:text-lg max-w-md">
                    متأسفیم، تور مورد نظر شما در حال حاضر موجود نیست. لطفاً به صفحه اصلی بازگردید و سایر تورها را مشاهده کنید.
                </p>
                <Link 
                    href="/"
                    className="flex items-center gap-2 text-white bg-primary px-6 py-3 rounded-xl shadow-md hover:bg-primary-dark transition-all duration-300"
                >
                    <ArrowLeftCircle size={20} />
                    <span>مشاهده همه تورها</span>
                </Link>
            </div>
        </div>
    );
}

export default NotFoundTour;
