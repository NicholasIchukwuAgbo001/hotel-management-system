import { UsersIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 rounded-xl overflow-hidden">
      <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto min-h-[200px]">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 bg-primary-950">
        <div className="pt-5 pb-4 px-5 sm:px-7">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline text-right">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ₦{regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ₦{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">₦{regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="border-t border-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="block py-4 px-6 border-l border-primary-800 hover:bg-accent-600 hover:text-primary-900 transition-all"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
