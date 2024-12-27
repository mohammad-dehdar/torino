import { serverFetch } from "@/core/services/http"
import TourDetailsPage from "@/components/templates/TourDetailsPage"

async function TourDetails({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
  })

  return (<TourDetailsPage tourData={tourData}/>)
}

export default TourDetails

