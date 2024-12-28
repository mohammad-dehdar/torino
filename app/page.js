import HomePage from "@/components/templates/homePage";
import { serverFetch } from "@/core/services/http";

export const metadata = {
  title: "خرید آنلاین بلیط و تورهای مسافرتی | تورینو",
  description: "تورینو، بهترین مقصد برای خرید آنلاین بلیط و تورهای مسافرتی با قیمت‌های مناسب و خدمات بی‌نظیر",
};
export default async function Home({ searchParams }) {
  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  console.log(data);

  return <HomePage data={data} />
}
