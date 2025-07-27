import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" height={50} width={100} alt="The Niko's hotel logo" />
      <span className="text-xl font-semibold text-primary-100">
        NIKO&apos;S HOTEL
      </span>
    </Link>
  );
}

export default Logo;
