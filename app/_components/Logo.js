import Link from "next/link";
import Image from "next/image";
import logo from "@/public/hotel-logo.png"


function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={logo}
        alt="Niko's Hotel logo"
        width={100}
        height={60}
        className="h-12 sm:h-16 w-auto object-contain rounded-full"
        priority
      />
      <span className="text-lg sm:text-xl font-semibold tracking-wide">Niko&apos;s Hotel</span>
    </Link>
  );
}

export default Logo;
