import HomePage from "@/components/templates/homePage";
import { serverFetch } from "@/core/services/http";

export default async function Home({searchParams}) {
  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  console.log(data);
  
  return <HomePage data={data}/>
}
