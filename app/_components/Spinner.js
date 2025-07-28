"use client";

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-t-amber-500 border-b-black border-l-stone-700 border-r-stone-400 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;