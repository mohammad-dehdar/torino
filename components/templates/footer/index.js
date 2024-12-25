import { certificate, options, services, torino } from "@/core/data/footerData"
import Image from "next/image"
import Link from "next/link"


function Footer() {
  return (
    <div className="border-t mx-auto">
      <div className="mx-auto max-w-[1440px] px-8 divide-y-2 max-sm:divide-dashed">
        <div>
          <div className="md:flex justify-between py-6 md:py-12">
            {
              options.map(
                (item) =>
                  <div key={item.id} className="flex items-center md:w-80 gap-4">
                    <Image src={item.image} width={120} height={120} alt={item.title} className="w-[71px] h-[64px] md:w-auto md:h-auto"/>
                    <div>
                      <p className="text-[14px] md:text-[26px] font-semibold">{item.title}</p>
                      <span className="text-xs md:text-base font-light">{item.content}</span>
                    </div>
                  </div>
              )
            }
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 py-10">
          <div className="flex justify-between md:justify-start mb-4 md:mb-0  gap-10 col-span-2 md:col-span-1">
            <ul>
              <p className="text-[22px] md:text-2xl font-semibold mb-8">تورینو</p>
              {torino.map((item) => <li key={item.id} className="md:text-lg font-normal mb-3 transition-all hover:text-primary ease-out"><Link href={item.href}>{item.title}</Link></li>)}
            </ul>
            <ul>
              <p className="text-[22px] md:text-2xl font-semibold mb-8">خدمات مشتریان</p>
              {services.map((item) => <li key={item.id} className="md:text-lg font-normal mb-3 transition-all hover:text-primary ease-out"><Link href={item.href}>{item.title}</Link></li>)}
            </ul>
          </div>
          <div className="flex md:flex-col-reverse justify-between items-end col-span-2 gap-5">
            <div className="grid grid-cols-3 md:flex  *:w-10 *:h-10 *:md:w-20 *:md:h-20">
              {certificate.map((item) => <Image key={item.id} src={item.src} width={100} height={100} alt={item.title} className="w-full h-full object-contain"/>)}
            </div>
            <div className="flex flex-col items-center">
              <Image src={"/images/logo.png"} width={146} height={44} alt="تورینو" />
              <div className="w-full mt-4 text-sm md:text-[15px] flex items-center gap-1">تلفن پشتیباتی : <span>021-1111</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t text-center py-2">
        developed by <Link className="" href={"https://github.com/mohammad-dehdar"}>Mohammad Dehdar</Link>
      </div>
    </div>
  )
}

export default Footer