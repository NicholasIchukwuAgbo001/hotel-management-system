import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800 rounded-md overflow-hidden">
     
      <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
        <Image
          src={image}
          alt={`Room ${name}`}
          fill
          className="object-cover"
        />
      </div>

    
      <div className="flex flex-col justify-between flex-1 bg-primary-950">
        <div className="pt-5 pb-4 px-5 sm:px-7">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Room {name}
          </h3>

          <div className="flex gap-2 items-center mb-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-primary-200 text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline text-primary-200">
            {discount > 0 ? (
              <>
                <span className="text-2xl sm:text-3xl font-medium">
                  ₦{regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 text-base">
                  ₦{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl sm:text-3xl font-medium">
                ₦{regularPrice}
              </span>
            )}
            <span className="text-sm">/ night</span>
          </p>
        </div>

        <div className="border-t border-primary-800 text-right">
          <Link
            href={`/rooms/${id}`}
            className="block py-4 px-6 hover:bg-accent-600 hover:text-primary-900 transition-all"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
