import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />

      <h1>NIKO.CO. Welcome to paradise.</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
