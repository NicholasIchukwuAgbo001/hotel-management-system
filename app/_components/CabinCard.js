import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="border border-primary-800 flex flex-col md:flex-row rounded-xl overflow-hidden bg-primary-950">
    
      <div className="relative w-full h-64 md:h-auto">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

 
      <div className="flex flex-col justify-between flex-grow">
        <div className="pt-5 pb-4 px-6 sm:px-8">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Room {name}
          </h3>

          <div className="flex gap-3 items-center mb-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-base sm:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl sm:text-3xl font-[350]">
                  ₦{regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ₦{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl sm:text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200 text-sm sm:text-base">/night</span>
          </p>
        </div>

        <div className="border-t border-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="block py-4 px-6 hover:bg-accent-600 transition-all hover:text-primary-900 border-t border-primary-800 md:border-l md:border-t-0"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
