import { MapPin, Mail, Phone } from "lucide-react";

function ContactUs() {
    return (
        <div className="max-w-[1440px] mx-auto p-4">
            <section className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-2">
                    <MapPin size={36} className="text-primary" />
                    <h3 className="text-lg font-semibold">آدرس</h3>
                    <p className="text-gray-600 text-sm">تهران، خیابان کریم خان</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Phone size={36} className="text-primary" />
                    <h3 className="text-lg font-semibold">تلفن</h3>
                    <p className="text-gray-600 text-sm"> ۰۲۱-۱۸۴۰</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Mail size={36} className="text-primary" />
                    <h3 className="text-lg font-semibold">ایمیل</h3>
                    <p className="text-gray-600 text-sm">info@torino.com</p>
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-2xl font-semibold mb-6 text-center">ارسال پیام</h2>
                <form className="max-w-lg mx-auto bg-gray-50 p-6 rounded-xl shadow-md flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="نام شما"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="email"
                        placeholder="ایمیل شما"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                        rows="4"
                        placeholder="پیام شما"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all"
                    >
                        ارسال پیام
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ContactUs;
