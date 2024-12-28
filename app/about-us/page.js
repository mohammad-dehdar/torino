'use client'

import React, { useState } from 'react'
import { Users, Award, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    name: "رضا کامرانی",
    role: "مدیر ارشد اجرایی",
    experience: "۱۰ سال",
    description: "متخصص در برنامه‌ریزی سفرهای لوکس",
    image: "/images/member-1.jpg"
  },
  {
    name: "احمد کریمی",
    role: "مدیر بازاریابی",
    experience: "۷ سال",
    description: "کارشناس بازاریابی دیجیتال در صنعت گردشگری",
    image: "/images/memeber-2.jpg"
  },
  {
    name: " سارا رجبی",
    role: "مدیر خدمات مشتریان",
    experience: "۸ سال",
    description: "متخصص در ارائه تجربه‌های منحصر به فرد به مسافران",
    image: "/images/memeber-3.jpg"
  }
]

const companyValues = [
  {
    icon: Globe,
    title: "ارتباط جهانی",
    description: "ما با بیش از ۱۰۰ کشور در سراسر جهان همکاری می‌کنیم و بهترین مقاصد گردشگری را به مشتریان خود ارائه می‌دهیم."
  },
  {
    icon: Users,
    title: "تیم حرفه‌ای",
    description: "تیم ما متشکل از ۵۰ متخصص با تجربه در صنعت گردشگری است که همواره آماده ارائه خدمات برتر هستند."
  },
  {
    icon: Award,
    title: "خدمات با کیفیت",
    description: "ما افتخار داریم که در ۵ سال گذشته، جایزه بهترین آژانس مسافرتی را از انجمن گردشگری ایران دریافت کرده‌ایم."
  }
]


function AboutUs() {
  const [expandedValue, setExpandedValue] = useState(null)

  const toggleExpand = (index) => {
    setExpandedValue(expandedValue === index ? null : index)
  }

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-10">درباره ما</h1>
      
      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">تیم ما</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl border bg-white hover:bg-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-white">{member.name}</h3>
                <p className="text-gray-500 text-sm group-hover:hidden">{member.role}</p>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                <p className="text-sm mb-2">سمت: {member.role}</p>
                <p className="text-sm mb-2">تجربه: {member.experience}</p>
                <p className="text-sm text-center px-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 border p-6 rounded-lg bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8 text-center">چشم‌انداز و ارزش‌ها</h2>
        <div className="space-y-6">
          {companyValues.map((value, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleExpand(i)}
              >
                <div className="flex items-center gap-4">
                  <value.icon size={36} className="text-primary" />
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                </div>
                {expandedValue === i ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedValue === i && (
                <div className="p-4 bg-gray-100">
                  <p className="text-gray-700">{value.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutUs

