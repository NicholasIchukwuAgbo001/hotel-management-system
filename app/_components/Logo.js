import Image from "next/image";
import Link from "next/link";
import logo from "@/public/hotel-logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        quality={100}
        width="60"
        alt="The Niko'slogo"
        className="rounded-full"
      />
      {/* <span className="text-xl font-semibold text-primary-100">
        Niko&apos;s Hotel
      </span> */}
    </Link>
  );
}

export default Logo;
