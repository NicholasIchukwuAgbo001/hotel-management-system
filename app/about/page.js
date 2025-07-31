import Image from "next/image";
import image1 from "@/public/about-1.png";
import image2 from "@/public/about-2.png";
import { getCabins } from "../_lib/data-service";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 md:gap-y-32 md:gap-x-24 px-6 md:px-16 py-12 text-base md:text-lg items-center">

      <div className="md:col-span-3 space-y-8 order-1">
        <h1 className="text-3xl md:text-4xl text-accent-400 font-medium mb-6 md:mb-10">
          Welcome to Niko&apos;s Hotel
        </h1>
        <p>
          Where city charm and luxury comfort blend seamlessly. Tucked away in a
          vibrant downtown district, Niko&apos;s Hotel is your home away from
          home. But it&apos;s not just about the elegant rooms—it&apos;s about
          experiencing rest, connection, and curated comfort.
        </p>
        <p>
          Our {cabins.length} luxury rooms offer a relaxing base, but the real
          experience is in the tranquility, amenities, and exceptional
          hospitality. Enjoy skyline views, unwind in your private suite, and
          explore a stay designed for your peace and comfort.
        </p>
        <p>
          This is where memorable moments are made—inspired by elegance and
          care. It&apos;s a place to slow down, breathe deeply, and reconnect
          with what matters most.
        </p>
      </div>

      <div className="md:col-span-2 order-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <div className="relative aspect-square md:col-span-2 order-4 md:order-3 w-full">
        <Image
          src={image2}
          fill
          className="object-cover rounded-xl"
          alt="Family that manages Niko's Hotel"
        />
      </div>

      <div className="md:col-span-3 space-y-8 order-3 md:order-4">
        <h1 className="text-3xl md:text-4xl text-accent-400 font-medium mb-6 md:mb-10">
          Managed by our family since 1999
        </h1>
        <p>
          Since 1999, Niko&apos;s Hotel has been a cherished family-run
          destination. Started by our grandparents, the hotel has grown with
          love and intention, passed down through generations while keeping its
          warm, personal touch.
        </p>
        <p>
          Over the years, we&apos;ve blended tradition with modern luxury to
          craft a stay that feels personal, peaceful, and premium. At
          Niko&apos;s Hotel, you&apos;re more than a guest—you&apos;re part of
          our story.
        </p>
      </div>

      <div className="md:col-span-5 order-5">
        <Link
          href="/rooms"
          className="inline-block bg-accent-500 px-6 py-4 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all rounded"
        >
          Explore our luxury rooms
        </Link>
      </div>
    </div>
  );
}
