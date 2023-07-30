import Image from "next/image";
import { Hero, SearchBar, CustomFilter } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty =
    allCars.length === 0 || !allCars || !Array.isArray(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>WE ahve Cars</section>
        ) : (
          <div>OOOps no cars avaialable</div>
        )}
      </div>
    </main>
  );
}
