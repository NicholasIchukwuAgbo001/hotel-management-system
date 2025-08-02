"use client";

import { useReservation } from "./ReservationContext";

function ReservationForm({ cabin, user }) {
  const { range } = useReservation();
  const { maxCapacity } = cabin;

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-6 sm:px-10 md:px-16 py-2 flex justify-between items-center">
        <p className="text-sm sm:text-base">Logged in as</p>

       <div className='flex gap-4 items-center'>
          <img
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div> 
      </div>

      <form className="bg-primary-900 py-8 px-6 sm:px-10 md:px-16 text-base sm:text-lg flex flex-col gap-6">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-4 sm:gap-6">
          <p className="text-primary-300 text-sm sm:text-base">
            Start by selecting dates
          </p>

          <button
            className="bg-accent-500 px-6 sm:px-8 py-3 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;