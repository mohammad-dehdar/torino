import Image from "next/image"
import Link from "next/link"

function NotFoundTour() {
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col  items-center mt-20">
            <div>
                <Image src={"/images/not-found-tour.webp"} width={720} height={480} alt="404" className="md:w-auto md:h-auto w-40" />
            </div>
            <div className="flex flex-col items-center gap-4 mt-10 md:gap-20">
                <h1 className="text-xl md:text-4xl font-semibold">تور مورد نظر یافت نشد!</h1>
                <Link href={"/"} className="text-primary text-[20px] md:text-lg font-semibold bg-[#D8FFE1] px-8 py-2 rounded-2xl">مشاهده همه تور ها</Link>
            </div>
        </div>
    )
}

export default NotFoundTour