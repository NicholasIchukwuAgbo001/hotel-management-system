"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 text-center px-4 pt-10">
      <h1 className="text-3xl font-semibold text-red-500">Something went wrong!</h1>
      <p className="text-lg text-primary-300 max-w-md">{error.message}</p>

      <button
        onClick={reset}
        className="bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-md hover:bg-accent-600 transition-colors duration-200"
      >
        Try again
      </button>
    </main>
  );
}