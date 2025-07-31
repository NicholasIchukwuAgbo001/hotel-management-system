import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 border border-primary-800 rounded-xl overflow-hidden mb-16 p-4 sm:p-6 lg:p-10">
      {/* Image Section */}
      <div className="relative w-full h-64 sm:h-80 lg:h-auto">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent-100 font-black mb-4">
          Cabin {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-300 mb-6">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex items-center gap-3 text-sm sm:text-base">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </li>
          <li className="flex items-center gap-3 text-sm sm:text-base">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            Located in the heart of the <span className="font-bold">Dolomites</span> (Italy)
          </li>
          <li className="flex items-center gap-3 text-sm sm:text-base">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            Privacy <span className="font-bold">100%</span> guaranteed
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
