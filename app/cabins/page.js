import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="pt-14">
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Elegant and comfortable rooms located in the heart of the city. Picture yourself waking up in a plush bed, enjoying a fresh cup of coffee by the window, and spending your day exploring local attractions or simply unwinding in a serene, modern space. Whether you&apos;re here for business or leisure, our hotel offers the perfect blend of style and comfort. Your peaceful getaway begins here.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
