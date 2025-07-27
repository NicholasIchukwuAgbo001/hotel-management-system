import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 sm:gap-4 z-10 hover:opacity-90 transition-opacity duration-300"
    >
      <Image
        src="/logo.png"
        alt="Niko's Hotel logo"
        width={100}
        height={50}
        className="h-12 w-auto sm:h-14 object-contain rounded-sm"
        priority
      />
    </Link>
  );
}

export default Logo;
