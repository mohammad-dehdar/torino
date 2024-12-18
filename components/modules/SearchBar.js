import React, { useState } from "react";
import { useGetTours } from "@/core/hook/hook";
import cities from "@/data/cities";
import Image from "next/image";


const SearchBar = ({initialTours}) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");

    const { data: tours = initialTours } = useGetTours({ origin, destination, date });

    const handleSearch = (e) => {
        e.preventDefault();
        // Refetch will override initialTours with filtered results
        refetch();
    };

    return (
        <div className="mt-4 p-4">
            <form onSubmit={handleSearch} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:border md:rounded-3xl md:w-4/6 md:mx-auto  py-2 px-2">
                <div className="relative w-full max-w-md md:border-l">
                    <select
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full appearance-none rounded-xl md:rounded-none bg-white py-3 px-8 pl-12 text-right text-gray-900 shadow-sm md:shadow-none ring-1 ring-inset ring-gray-300 md:ring-0 focus:outline-none  rtl"
                    >
                        <option value="">انتخاب مبدا</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                        <Image
                            src="/icons/location.svg"
                            width={18}
                            height={18}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="relative w-full max-w-md md:border-l">
                    <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full appearance-none rounded-xl bg-white py-3 px-8 pl-12 text-right text-gray-900 shadow-sm md:shadow-none ring-1 ring-inset ring-gray-300 md:ring-0 focus:outline-none  rtl"
                    >
                        <option value="">انتخاب مقصد</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                        <Image
                            src="/icons/global-search.svg"
                            width={18}
                            height={18}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded-xl w-full md:border-none" />
                </div>

                <button type="submit" className="col-span-2 md:col-span-1 bg-primary text-white py-2 rounded-2xl">
                    جستجو
                </button>
            </form>

            <div className="mt-6">
                {tours?.map((tour) => (
                    <div key={tour.id} className="border p-4 rounded mb-4">
                        <h3 className="text-lg font-bold">{tour.title}</h3>
                        <p>مبدا: {tour.origin.name}</p>
                        <p>مقصد: {tour.destination.name}</p>
                        <p>تاریخ شروع: {new Date(tour.startDate).toLocaleDateString()}</p>
                        <p>تاریخ پایان: {new Date(tour.endDate).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
