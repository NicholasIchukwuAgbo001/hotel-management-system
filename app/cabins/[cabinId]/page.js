import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default async function Page({ params }) {
  let cabin;

  try {
    cabin = await getCabin(params.cabinId);
    if (!cabin) throw new Error("Cabin not found");
  } catch (error) {
    return (
      <div className="text-red-500 text-center mt-20 text-xl">
        Failed to load cabin. Please try again later.
      </div>
    );
  }

  const { name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-10 md:gap-20 border border-primary-800 py-6 px-6 md:px-10 mb-24">
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-4xl sm:text-6xl md:text-7xl mb-5 bg-primary-950 p-4 rounded-lg shadow-md">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span> guests
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-primary-100">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
