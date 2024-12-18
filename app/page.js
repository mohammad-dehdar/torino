import HomePage from "@/components/templates/HomePage";

async function fetchTours() {
  try {
    const { data } = await api.get("/tour");
    return data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
}
export default async function Home() {
  const initialTours = await fetchTours();

  return (
    <div>
      <HomePage initialTours={initialTours}/>
    </div>
  );
}
