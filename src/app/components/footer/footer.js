import { navLinks } from "@/app/constants";
import Link from "next/link";
import { Logo } from "../logo/logo";

export const Footer = () => {
  return (
    <section className="bg-pattern bg-contain bg-center" id="contacts">
      <footer>
        <div className="mx-auto max-w-7xl divide-y divide-white lg:border-x border-white ">
          <div className="flex-col flex lg:flex-row lg:items-center gap-y-12 items-start justify-between py-16 pt-16 px-8 lg:px-24">
            <div className="lg:mx-auto lg:text-center">
              <div className="flex flex-col lg:items-center gap-y-3">
                <div className="text-white items-center flex">
                  <Link
                    href="/"
                    className="group block flex-shrink-0 lg:mx-auto lg:text-left"
                  >
                    <div className="flex items-center">
                      <Logo classNames="group-hover:opacity-75 transition ease-in" />
                      <div className="flex flex-col gap-y-[1px] ml-3">
                        <span className="uppercase font-bold text-white group-hover:text-gray-300 leading-none transition ease-in">
                          FUC MUSIC
                        </span>
                        <span className="text-[10px] group-hover:text-gray-300 transition ease-in">
                          студия звукозаписи
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col gap-y-6 lg:gap-y-3 lg:items-center">
                  <Link href="#" className="flex space-x-2 items-center group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-4 h-4 group-hover:stroke-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      ></path>
                    </svg>
                    <span className="text-sm font-normal text-white leading-none group-hover:text-gray-300">
                      ул. Большие Каменщики 21/8
                    </span>
                  </Link>
                  <Link
                    href="tel:5345"
                    className="flex space-x-2 items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-4 h-4 group-hover:stroke-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                    <span className="text-sm font-normal text-white leading-none group-hover:text-gray-300">
                      +100 (200) 300-40-50
                    </span>
                  </Link>
                </div>
              </div>
              <nav className="flex-col flex lg:flex-row gap-8 mt-11">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    className="text-white hover:text-white 500 -mx-3 -my-2 delay-150 px-3 py-2 relative rounded-lg text-sm transition-colors"
                    href={link.href}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:mx-auto lg:text-center flex flex-col md:pt-6 pb-12 pt-8 px-8 lg:px-24">
            <p className="md:mt-0 mt-6 text-sm text-zinc-500 uppercase">
              © Fuc Music
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
