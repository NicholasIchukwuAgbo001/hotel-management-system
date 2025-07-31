import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 border border-primary-800 rounded-xl overflow-hidden p-6 md:p-10 mb-24 bg-primary-950">

      <div className="relative w-full h-64 md:h-auto aspect-video md:aspect-auto">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-accent-100 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Room {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-300 mb-8">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 text-primary-200">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
