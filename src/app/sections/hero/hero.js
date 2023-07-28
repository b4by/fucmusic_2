import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-black">
      <section className="bg-black py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-white border-y-0 border">
        <div className="">
          <h1 className="text-white relative">
            <span className="font-extrabold text-9xl tracking-wider">
              FUC MUSIC
            </span>
            <span
              className={twMerge(
                "w-[25px] absolute left-[9px] top-[108px] bg-white h-[613px]",
                "transition-all ease-in duration-700"
              )}
            ></span>
            <div className="ml-20 flex flex-col items-start font-semibold uppercase text-3xl">
              <span>Студия</span>
              <span>Звукозаписи</span>
              <span>Москва</span>
            </div>
          </h1>
          <div className="flex justify-between items-end">
            <h2 className="ml-20 mt-6 flex space-x-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-xl font-normal text-white">
                ул. Большие Каменщики 21/8
              </span>
            </h2>
            <div className="flex space-x-4 text-xl items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <Link href="tel:34523" className="font-normal text-white">
                +100 (200) 300-40-50
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
