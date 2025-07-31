import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Elegant and comfortable rooms, located in the heart of the city. Wake up to 
        stunning skyline views, spend your day indulging in fine dining and spa 
        experiences, or simply relax in your suite. Your private escape, where modern 
        luxury meets timeless comfort. The perfect place for rest and renewal. 
        Welcome to your sanctuary.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>

      <ReservationReminder />
    </div>
  );
}
