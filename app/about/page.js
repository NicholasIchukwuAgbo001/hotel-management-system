import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default  async function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 md:gap-x-16 px-4 sm:px-6 md:px-10 lg:px-20 py-16 text-base md:text-lg items-center">
      
      <div className="md:col-span-3 space-y-8">
        <h1 className="text-3xl md:text-4xl mb-6 text-accent-400 font-medium">
          Welcome to Niko&apos;s Hotel
        </h1>

        <p>
          Experience comfort and style in the heart of the city at Niko&apos;s Hotel.
          Whether you&apos;re here for business or leisure, our boutique rooms and
          personalized service offer the perfect escape from the ordinary.
        </p>
        <p>
          Discover local charm blended with modern luxury. Enjoy a cozy stay in
          our beautifully designed rooms, relax at our rooftop lounge, or take
          a short walk to nearby attractions and cafes.
        </p>
        <p>
          At Niko&apos;s Hotel, it&apos;s more than a stay — it&apos;s a warm, unforgettable
          experience you&apos;ll want to revisit again and again.
        </p>
      </div>

     
      <div className="md:col-span-2">
        <Image
          src={about1}
          alt="Hotel room with elegant decor"
          className="w-full h-auto rounded-xl object-cover aspect-square"
          placeholder="blur"
          quality={80}
        />
      </div>

      
      <div className="md:col-span-2 order-2 md:order-none">
        <Image
          src={about2}
          alt="Staff of Niko's Hotel smiling in front of hotel entrance"
          className="w-full h-auto rounded-xl object-cover aspect-square"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="md:col-span-3 space-y-8">
        <h1 className="text-3xl md:text-4xl mb-6 text-accent-400 font-medium">
          Family-owned since 1962
        </h1>

        <p>
          Niko&apos;s Hotel has been family-run since 1962, founded on hospitality,
          tradition, and a deep love for our guests. Generations of care have
          built a legacy of comfort and quality.
        </p>
        <p>
          Today, we continue to welcome travelers with the same warmth and
          attention to detail. When you stay with us, you become part of our
          story — a guest who’s treated like family.
        </p>

        <div>
          <Link
            href="/rooms"
            className="inline-block mt-4 bg-accent-500 px-6 py-4 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg"
          >
            Explore our luxury rooms
          </Link>
        </div>
      </div>
    </div>
  );
}
