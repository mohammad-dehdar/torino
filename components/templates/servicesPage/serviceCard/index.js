import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-2xl p-6 border hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
    <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    <Link
      href={service.link}
      className="inline-flex items-center text-primary hover:gap-2 transition-all duration-300"
    >
      مشاهده جزئیات
      <ChevronLeft className="w-5 h-5" />
    </Link>
  </div>
);

export default ServiceCard;