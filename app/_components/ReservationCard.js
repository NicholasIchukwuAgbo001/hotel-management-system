import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col sm:flex-row border border-primary-800">
      <div className="relative h-48 sm:h-32 sm:w-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover h-full w-full sm:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 py-4 flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 px-3 py-1 uppercase text-xs font-bold flex items-center rounded-sm w-fit">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 px-3 py-1 uppercase text-xs font-bold flex items-center rounded-sm w-fit">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap gap-4 mt-auto items-baseline text-primary-300">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p>&bull;</p>
          <p className="text-lg">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-sm sm:ml-auto text-primary-400 w-full sm:w-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex sm:flex-col sm:w-[100px] border-t sm:border-t-0 sm:border-l border-primary-800">
        <Link
          href={`/account/reservations/edit/${id}`}
          className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b sm:border-b border-primary-800 flex-1 justify-center sm:justify-start sm:px-3 py-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Edit</span>
        </Link>
        <DeleteReservation bookingId={id} />
      </div>
    </div>

  );
}

export default ReservationCard;
