import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/banner.png"

const Banner = () => {
  return (
    <section className="border-gray-800 px-4 py-7">
      <div className="mx-auto flex min-h-100 max-w-7xl items-center justify-between overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c] px-8 py-8 md:px-10">

        <div className="max-w-xl">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-wide text-lime-400">
            Workout Library
          </p>
          <h1 className="max-w-150 text-4xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-[40px]">
            Train With Intent. Log
            <br />
            Every Set.
          </h1>
          <p className="mt-4 max-w-98 text-[11px] leading-5 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex rounded-md bg-lime-400 px-4 py-2 text-1xl font-bold uppercase text-black transition hover:bg-lime-300"
          >
            Browse Workouts
          </Link>
        </div>
        <div className="relative hidden h-80 w-80 shrink-0 md:block">
          <Image
            src={hero}
            alt="Workout"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;