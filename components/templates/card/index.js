import ReserveButton from "@/components/atom/reserveButton"
import Image from "next/image"
import Link from "next/link"


const TourCard = ({
    id,
    title,
    image,
    startDate,
    endDate,
    price,
    origin,
    destination,
    fleetVehicle,
    availableSeats,
    options,
    insurance
}) => {
    // Calculate duration in days
    const start = new Date(startDate)
    const end = new Date(endDate)
    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24))

    return (
        <div className="group flex flex-col overflow-hidden rounded-[10px] bg-white border hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
            <Link href={`/tour/${id}`}  className="image-container">
                <Image 
                    src={image} 
                    alt={title} 
                    width={400} 
                    height={250} 
                    quality={90} 
                    objectFit="cover"
                    className="rounded-md"
                />
            </Link>
            <div className="flex flex-col gap-2 divide-y">
                <Link href={`/tour/${id}`} className="flex flex-col gap-2 p-3">
                    <h3 className="text-[22px] font-medium">{title}</h3>
                    <div className="text-[15px] text-black/60">
                        مدت {duration} روز - {fleetVehicle === "Airplane" ? "هواپیما" : fleetVehicle === "Bus" ? "اتوبوس" : fleetVehicle === "SUV" ? "ماشین" : "ون"} - {options[1]}
                    </div>
                </Link>
                <div className="flex items-center justify-between p-3">
                    <ReserveButton id={id}/>
                    <span className="flex items-baseline gap-1 font-medium text-complementary text-lg">{price.toLocaleString('fa-IR')} <span className="text-text text-sm">تومان</span></span>
                </div>
            </div>
        </div>
    )
}

export default TourCard

