import { auth } from "../_lib/auth";
import { FaCalendarAlt, FaClock, FaUtensils, FaSpa } from "react-icons/fa";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  const now = new Date();
  const hour = now.getHours();
  let greeting = "Welcome";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const currentDate = now.toLocaleDateString(undefined, dateOptions);
  const currentTime = now.toLocaleTimeString(undefined, timeOptions);

  return (
    <div className="m-9 space-y-4">
      <h2 className="font-semibold text-2xl text-accent-400">
        {greeting}, {firstName}! 👋
      </h2>
      <p className="text-muted-foreground">
        We&apos;re delighted to have you in the guest area. Your comfort is our
        priority — feel free to explore your bookings, check-in details, and
        special offers available during your stay.
      </p>
      <div className="text-sm text-gray-500 mt-4 space-y-2">
        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-accent-400" /> {currentDate}
        </p>
        <p className="flex items-center gap-2">
          <FaClock className="text-accent-400" /> {currentTime}
        </p>
        <p className="flex items-center gap-2">
          <FaUtensils className="text-accent-400" /> Don’t miss today’s complimentary breakfast at the Sky Lounge.
        </p>
        <p className="flex items-center gap-2">
          <FaSpa className="text-accent-400" /> Spa discount: 20% off for in-house guests.
        </p>
      </div>
    </div>
  );
}
