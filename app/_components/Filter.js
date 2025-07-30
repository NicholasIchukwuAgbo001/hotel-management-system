"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start border border-primary-800 rounded-lg p-2">
      <button
        className="px-4 py-2 text-sm sm:text-base rounded-md hover:bg-primary-700 transition-colors"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>

      <button
        className="px-4 py-2 text-sm sm:text-base rounded-md hover:bg-primary-700 transition-colors"
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>

      <button
        className="px-4 py-2 text-sm sm:text-base rounded-md hover:bg-primary-700 transition-colors"
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>

      <button
        className="px-4 py-2 text-sm sm:text-base rounded-md hover:bg-primary-700 transition-colors"
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
};

export default Filter;
