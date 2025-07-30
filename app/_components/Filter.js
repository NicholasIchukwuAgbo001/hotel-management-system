"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get('capacity') ?? "all";

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const baseBtn =
    "px-4 py-2 text-sm sm:text-base rounded-md transition-colors";
  const activeClass = "bg-yellow-600 text-white";
  const inactiveClass = "hover:bg-primary-700 text-primary-500";

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start border border-primary-800 rounded-lg p-2">
      <button
        className={`${baseBtn} ${activeFilter === "all" ? activeClass : inactiveClass}`}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>

      <button
        className={`${baseBtn} ${activeFilter === "small" ? activeClass : inactiveClass}`}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>

      <button
        className={`${baseBtn} ${activeFilter === "medium" ? activeClass : inactiveClass}`}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>

      <button
        className={`${baseBtn} ${activeFilter === "large" ? activeClass : inactiveClass}`}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
};

export default Filter;
