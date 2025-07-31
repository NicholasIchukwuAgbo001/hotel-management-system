import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Link from "next/link";
import Image from "next/image";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 rounded-lg overflow-hidden bg-primary-950">
      {/* Image */}
      <div className="relative h-40 md:h-auto md:w-40">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-grow px-5 py-4 flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold">
            {numNights} night{numNights > 1 && "s"} in Room {name}
          </h3>
          <span
            className={`h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm ${
              isPast(new Date(startDate))
                ? "bg-yellow-800 text-yellow-200"
                : "bg-green-800 text-green-200"
            }`}
          >
            {isPast(new Date(startDate)) ? "past" : "upcoming"}
          </span>
        </div>

        <p className="text-primary-300 text-sm sm:text-base">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap items-baseline gap-3 mt-auto text-sm sm:text-base">
          <p className="text-accent-400 font-semibold text-lg">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-primary-400 text-xs sm:text-sm whitespace-nowrap">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex md:flex-col border-t md:border-t-0 md:border-l border-primary-800">
        <Link
          href={`/account/reservations/edit/${id}`}
          className="group flex items-center justify-center gap-2 uppercase text-xs font-bold text-primary-300 border-r md:border-b md:border-r-0 border-primary-800 px-4 py-3 hover:bg-accent-600 hover:text-primary-900 transition-colors w-full md:w-[100px]"
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span>Edit</span>
        </Link>
        <DeleteReservation bookingId={id} />
      </div>
    </div>
  );
}

export default ReservationCard;