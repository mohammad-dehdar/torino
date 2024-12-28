import { Users, Award, Globe } from "lucide-react";

function AboutUs() {
    return (
        <div className="max-w-[1440px] mx-auto p-4">
            <section className="my-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="relative group overflow-hidden rounded-xl shadow-md bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <div className="p-6 text-center">
                                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
                                <h3 className="text-xl font-semibold">عضو تیم {i + 1}</h3>
                                <p className="text-gray-500 text-sm group-hover:hidden">توضیح کوتاه درباره عضو</p>
                            </div>
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg font-bold mb-2">نام کامل عضو {i + 1}</h3>
                                <p className="text-sm mb-2">سمت: مدیر پروژه</p>
                                <p className="text-sm">تجربه: ۵ سال</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-16 border p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">چشم‌انداز و ارزش‌ها</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4">
                        <Globe size={36} className="text-primary" />
                        <div>
                            <h3 className="text-lg font-semibold">ارتباط جهانی</h3>
                            <p className="text-gray-600 text-sm">ارتباط با تمامی نقاط جهان.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Users size={36} className="text-primary" />
                        <div>
                            <h3 className="text-lg font-semibold">تیم حرفه‌ای</h3>
                            <p className="text-gray-600 text-sm">تیمی متعهد و حرفه‌ای.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Award size={36} className="text-primary" />
                        <div>
                            <h3 className="text-lg font-semibold">خدمات با کیفیت</h3>
                            <p className="text-gray-600 text-sm">بهترین خدمات در صنعت گردشگری.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
