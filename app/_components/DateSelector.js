"use client";

import { useEffect, useState } from "react";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const { minBookingLength, maxBookingLength } = settings;

  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const [monthsToShow, setMonthsToShow] = useState(2);

  // Dynamically adjust number of months shown on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setMonthsToShow(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-between gap-4">
      <DayPicker
        className="self-center"
        mode="range"
        selected={displayRange}
        onSelect={setRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={monthsToShow}
        disabled={(curDate) =>
          isPast(curDate) || bookedDates.some((data) => isSameDay(data, curDate))
        }
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-4 bg-accent-500 text-primary-800 rounded-md">
        <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
          <p className="flex gap-2 items-baseline text-xl">
            {discount > 0 ? (
              <>
                <span>${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700 text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span>${regularPrice}</span>
            )}
            <span className="text-sm">/night</span>
          </p>

          {numNights > 0 && (
            <>
              <span className="bg-accent-600 px-2 py-1 text-sm rounded-md">
                × {numNights}
              </span>
              <p className="text-lg font-bold uppercase">
                Total: <span className="font-semibold">${cabinPrice}</span>
              </p>
            </>
          )}
        </div>

        {(range.from || range.to) && (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold w-fit self-end sm:self-auto"
            onClick={resetRange}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
