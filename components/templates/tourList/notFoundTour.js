import Link from "next/link";
import { AlertTriangle, ArrowLeftCircle } from "lucide-react";

function NotFoundTour() {
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
            {/* آیکون هشدار */}
            <div className="bg-red-100 text-red-600 p-4 rounded-full shadow-md">
                <AlertTriangle size={64} />
            </div>
            
            {/* متن پیام */}
            <div className="flex flex-col items-center text-center mt-6 gap-4">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    تور مورد نظر یافت نشد!
                </h1>
                <p className="text-gray-600 md:text-lg max-w-md">
                    متأسفیم، تور مورد نظر شما در حال حاضر موجود نیست. لطفاً به صفحه اصلی بازگردید و سایر تورها را مشاهده کنید.
                </p>
            </div>

            {/* دکمه بازگشت */}
            <Link 
                href="/"
                className="flex items-center gap-2 text-white bg-primary px-6 py-3 mt-6 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300"
            >
                <ArrowLeftCircle size={20} />
                <span>بازگشت به صفحه اصلی</span>
            </Link>
        </div>
    );
}

export default NotFoundTour;
