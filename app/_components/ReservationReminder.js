"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto py-4 px-6 sm:py-5 sm:px-8 rounded-xl bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm sm:text-base text-center sm:text-left z-50">
      <p className="leading-snug">
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Don&apos;t forget to reserve your dates <br className="hidden sm:inline" />
        from {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>

      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
        onClick={resetRange}
        aria-label="Clear reminder"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
