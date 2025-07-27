import Link from "next/link";
export default function Page() {
  return (
    <div>
      <h1 className="bg-yellow-400">NIKO&apos;S HOTEL. Welcome to paradise.</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
