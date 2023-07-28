import { navLinks } from "@/app/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="">
      <footer>
        <div className="mx-auto max-w-7xl divide-y divide-white lg:border-x border-white">
          <div className="flex-col flex lg:flex-row lg:items-center gap-y-12 items-start justify-between lg:py-16 pb-6 pt-16 px-8 lg:px-24">
            <div className="lg:mx-auto lg:text-center">
              <div className="flex flex-col items-center gap-y-3">
                <div className="text-white items-center flex">
                  <Link
                    href="/"
                    className="group block flex-shrink-0 lg:mx-auto lg:text-left"
                  >
                    <div className="flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1180.01 638.12"
                          fill="white"
                          width="50"
                          height="50"
                        >
                          <linearGradient id="linear-gradient">
                            <stop offset="0%" stopColor="#F18336"></stop>
                            <stop offset="100%" stopColor="#D12B2D"></stop>
                          </linearGradient>
                          <path
                            fill="url(#linear-gradient)"
                            stroke="#000"
                            strokeWidth="3"
                            d="M293,1.79c-23.31,46.61-23.47,52.15-35.12,98.77v5.83H126.54c-12.47,32.63-19.46,67.94-20.04,104.88h-.12v5.83c0-1.98,0-3.96,.12-5.83h233.07c.47-36.24,5.48-71.44,14.68-104.88,10.14-37.29,25.29-72.48,44.75-104.88h130.98c-28.43,30.07-50.81,65.61-65.49,104.88-12.47,32.63-19.46,67.94-20.04,104.88-.12,1.86-.12,3.85-.12,5.83,0,34.61,5.59,67.94,15.97,99.05,16.55,50.11,45.45,94.74,83.09,129.94,37.64-35.19,66.54-79.83,83.09-129.94,10.37-31.12,15.97-64.44,15.97-99.05,0-1.98,0-3.96-.12-5.83-.58-36.94-7.57-72.25-20.04-104.88-14.68-39.27-37.06-74.82-65.49-104.88h130.98c19.46,32.4,34.61,67.59,44.75,104.88,9.21,33.45,14.22,68.64,14.68,104.88,.12,1.98,.12,3.85,.12,5.83,0,34.14-4.08,67.24-11.77,99.05-17.48,72.13-53.49,136.93-102.9,189.14,38.57,17.01,81.34,26.45,126.32,26.45V1.5h359.98c.47,.7,.93,1.52,1.28,2.21,18.88,31.81,33.56,66.31,43.47,102.67h-299.84v407.4c91.36-32.28,163.27-105.46,193.8-197.64,9.09-27.27,14.45-56.17,15.73-86.12,.12-4.31,.23-8.62,.23-12.94,0-1.98,0-3.85-.12-5.83h104.88c.12,1.98,.12,3.85,.12,5.83,0,33.91-4.08,67.01-11.65,98.59,0,.12-.12,.35-.12,.47-36.36,150.21-153.59,268.85-302.87,307.19-33.56,8.74-68.64,13.29-104.88,13.29-17.83,0-35.31-1.17-52.44-3.26-59.08-7.34-114.32-27.04-163.15-56.29-16.66,10.02-34.26,18.99-52.44,26.57h-.12c-15.03,6.41-30.65,12-46.5,16.55-33.45,9.67-68.64,15.27-104.88,16.32v-105.11c11.3-.35,22.37-1.28,33.33-3.03,24.94-3.38,48.94-9.91,71.55-19,3.38-1.28,6.64-2.56,9.79-4.08-3.38-3.5-6.64-7.11-9.79-10.72-44.4-50.23-76.8-111.17-93.11-178.41H106.38v308.47c-.47,.23-.93,.35-1.4,.35H13.15v-.35c-.47,.23-.93,.35-1.4,.35H1.5V217.09c0-3.85,0-7.81,.12-11.65,.93-34.14,6.06-67.36,14.68-99.05C26.44,69.09,41.59,33.9,61.05,1.5h231.79s.16,.29,.16,.29Z"
                          ></path>
                          <circle
                            fill="url(#linear-gradient)"
                            stroke="#000"
                            strokeWidth="3"
                            cx="240.44"
                            cy="462.71"
                            r="52.44"
                          ></circle>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-y-[1px] ml-3">
                        <span className="uppercase font-bold text-white group-hover:text-gray-300 leading-none">
                          FUC MUSIC
                        </span>
                        <span className="text-[10px]">студия звукозаписи</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col gap-y-3 items-center">
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
