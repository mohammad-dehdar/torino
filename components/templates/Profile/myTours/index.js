"use client"
import { useGetUserTours } from "@/core/services/queries"
import moment from "moment-jalaali"
import "moment/locale/fa"

moment.locale('fa')
moment.loadPersian({ usePersianDigits: true })

function MyTours() {
    const { data, isPending } = useGetUserTours()
    console.log(data?.data);
    
    if (isPending) return <div>loading...</div>

    return (
        <div className="mx-auto mt-5 space-y-4">
            {data?.data?.map((tour) => (
                <div key={tour.id} className="border rounded-[10px] shadow-md p-3 bg-white">
                    <div className="flex items-center justify-between md:justify-start md:gap-8 mb-2">
                        <p className="text-sm font-semibold">{tour.title}</p>
                        <p className="font-semibold">
                            {tour.fleetVehicle === "Bus"
                                ? "سفر با اتوبوس"
                                : tour.fleetVehicle === "Van"
                                    ? "سفر با ون"
                                    : tour.fleetVehicle === "SUV"
                                        ? "سفر با ماشین"
                                        : "سفر با هواپیما"}
                        </p>

                    </div>


                    <div className="grid grid-cols-2 md:grid gap-2 text-xs text-gray-600">

                        <p className="text-text font-bold">
                            {tour.origin.name} به {tour.destination.name}
                        </p>
                        <p className="text-end md:text-start">
                            • {moment(tour.startDate).format("dddd jD jMMMM jYYYY")}
                        </p>
                        <p className="text-text font-bold">
                            تاریخ بازگشت
                        </p>
                        <p className="text-end md:text-start">
                            • {moment(tour.endDate).format("dddd jD jMMMM jYYYY")}
                        </p>
                    </div>


                    <div className="flex items-center justify-between md:justify-start md:gap-8 mt-3 border-t pt-2">
                        <p className="text-xs text-gray-500">مبلغ پرداخت شده</p>
                        <p className="text-sm font-bold">
                            {tour.price.toLocaleString()} تومان
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyTours;
