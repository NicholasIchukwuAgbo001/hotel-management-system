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
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-y-20 xl:gap-x-24 text-base md:text-lg px-6 md:px-10 py-14 max-w-7xl mx-auto items-center">
      <div className="w-full aspect-[4/3] relative xl:col-span-2 order-1 xl:order-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of a room"
          placeholder="blur"
          quality={80}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="xl:col-span-3 order-2 xl:order-1">
        <h1 className="text-3xl md:text-4xl mb-6 text-accent-400 font-semibold">
          Welcome to Niko&apos;s Hotel
        </h1>

        <div className="space-y-6">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            rooms. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury rooms provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="relative aspect-square w-full xl:col-span-2 order-3">
        <Image
          src={image2}
          fill
          className="object-cover rounded-lg"
          alt="Family that manages Niko's Hotel"
        />
      </div>

      <div className="xl:col-span-3 order-4">
        <h2 className="text-3xl md:text-4xl mb-6 text-accent-400 font-semibold">
          Managed by our family since 1962
        </h2>

        <div className="space-y-6">
          <p>
            Since 1962, Niko&apos;s Hotel has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of Niko&apos;s Hotel,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at Niko&apos;s
            Hotel soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>
        </div>
      </div>

      <div className="order-5 xl:col-span-5 flex items-center justify-center">
        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-8 py-5 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg"
        >
          Explore our luxury rooms
        </Link>
      </div>
    </div>
  );
}
