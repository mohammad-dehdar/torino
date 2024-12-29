'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from "next/image"

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('فرم ارسال شد:', formData)
    }

    const inputStyle = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1"
    const buttonStyle = "w-full px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">تماس با ما</h1>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/images/contact-us-2.svg"
                            alt="تصویر سفر"
                            width={400}
                            height={400}
                            objectFit="contain"
                            className="w-auto h-auto rounded-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className={labelStyle}>نام و نام خانوادگی</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                                    className={inputStyle}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelStyle}>آدرس ایمیل</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="آدرس ایمیل خود را وارد کنید"
                                    className={inputStyle}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className={labelStyle}>شماره تماس</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="شماره تماس خود را وارد کنید"
                                    className={inputStyle}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className={labelStyle}>پیام</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="پیام خود را وارد کنید"
                                    className={`${inputStyle} h-32`}
                                    required
                                />
                            </div>
                            <button type="submit" className={buttonStyle}>ارسال پیام</button>
                        </form>
                        <div className="space-y-4 border rounded-lg px-3 py-3 bg-green-400/10">
                            <h2 className="text-xl font-semibold">اطلاعات تماس</h2>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <Phone className="h-5 w-5" />
                                <span>۰۲۱-۱۸۴۰</span>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <Mail className="h-5 w-5" />
                                <span>info@toriono.com</span>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <MapPin className="h-5 w-5" />
                                <span>تهران تورینو .....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage