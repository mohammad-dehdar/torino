// app/services/page.tsx
import React from 'react';
import {
  Plane,
  Hotel,
  Bus,
  Globe,
  Compass,
  CreditCard,
  Users,
  PhoneCall,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import ServiceCard from '@/components/templates/servicesPage/serviceCard';
import FeatureCard from '@/components/templates/servicesPage/featureCard';


// Data
const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'تور های هوایی',
    description: 'بهترین پروازها با معتبرترین ایرلاین‌ها برای سفری راحت و لذت‌بخش',
    link: '/air-tours'
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: 'تور های زمینی',
    description: 'سفرهای جاده‌ای با اتوبوس‌های VIP و مجهز به امکانات رفاهی',
    link: '/bus-tours'
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    title: 'رزرو هتل',
    description: 'رزرو آنلاین هتل‌های لوکس و اقتصادی در سراسر ایران و جهان',
    link: '/hotels'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'تور های خارجی',
    description: 'سفر به زیباترین مقاصد گردشگری جهان با بهترین خدمات',
    link: '/international'
  }
];

const features = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'راهنمای حرفه‌ای',
    description: 'همراهی راهنمایان مجرب و آشنا به مسیر'
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'پرداخت امن',
    description: 'پرداخت آنلاین با درگاه‌های معتبر بانکی'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی شبانه‌روزی در طول سفر'
  }
];



export const metadata = {
  title: 'خدمات گردشگری | تورینو',
  description: 'خدمات گردشگری تورینو - ارائه دهنده بهترین تورهای داخلی و خارجی',
};

async function TourismServices() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">

      <div className="relative bg-green-400/10 py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              خدمات گردشگری <span className="text-primary">تورینو</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              با ما تجربه سفری متفاوت و به یادماندنی را رقم بزنید
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                مشاوره رایگان
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border  p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            چرا تورینو را انتخاب کنیم؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            نیاز به مشاوره دارید؟
          </h2>
          <p className="text-gray-600 mb-6">
            کارشناسان ما آماده پاسخگویی به سوالات شما هستند
          </p>
          <div className="flex justify-center items-center gap-2 text-primary text-lg font-bold">
            <PhoneCall className="w-6 h-6" />
            ۰۲۱-۱۸۴۰
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourismServices;