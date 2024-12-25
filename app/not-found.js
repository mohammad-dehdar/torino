import Image from "next/image"
import Link from "next/link"

function NotFound() {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto flex max-sm:flex-col-reverse md:flex items-center justify-center md:gap-52">
          <div className="flex flex-col items-center gap-10 md:gap-20">
            <h1 className="text-2xl md:text-4xl font-semibold">صفحه مورد نظر یافت نشد!</h1>
            <Link href={"/"} className="text-primary text-[20px] md:text-[28px] font-semibold bg-[#D8FFE1] px-10 py-4 rounded-2xl">بازگشت به صفحه اصلی</Link>
          </div>
        <div>
          <Image src={"/images/Error-TV.svg"} width={555} height={555} alt="404" className="w-auto h-auto"/>
        </div>
    </div>
  )
}

export default NotFound