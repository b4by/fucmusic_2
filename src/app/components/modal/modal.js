import { services } from "@/app/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Service0 from "@/app/mdx/services/0.mdx";
import Service1 from "@/app/mdx/services/1.mdx";
import Service2 from "@/app/mdx/services/2.mdx";
import Service3 from "@/app/mdx/services/3.mdx";
import Service4 from "@/app/mdx/services/4.mdx";
import Service5 from "@/app/mdx/services/5.mdx";
import Service6 from "@/app/mdx/services/6.mdx";
import Service7 from "@/app/mdx/services/7.mdx";
import Service8 from "@/app/mdx/services/8.mdx";
import Service9 from "@/app/mdx/services/9.mdx";
import Service10 from "@/app/mdx/services/10.mdx";
import Service11 from "@/app/mdx/services/11.mdx";
import Service12 from "@/app/mdx/services/12.mdx";

export const Modal = () => {
  const searchParams = useSearchParams();
  const modalParam = searchParams.get("modal");
  const serviceParamId = searchParams.get("service");
  const service = services[serviceParamId];

  if (!modalParam) {
    return null;
  }

  return (
    <Link
      className="fixed top-0 left-0 w-full h-full bg-zinc-800 bg-opacity-50 flex flex-col justify-center items-center z-[9999] p-6"
      href="/"
      scroll={false}
    >
      <div className="relative bg-white p-12 max-w-[400px]">
        <span
          href="/"
          scroll={false}
          className="absolute left-[20px] top-[10px] md:left-0 md:-top-[30px] flex items-center space-x-2 justify-end text-black md:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              strokeWidth="0"
              d="M3.5 7L0 10.5 3.5 14H5l-3-3h17v-1H2l3-3H3.5z"
            ></path>
          </svg>
          <span className="text-sm">Вернуться</span>
        </span>
        <div>{service.id === 0 && <Service0 />}</div>
        <div>{service.id === 1 && <Service1 />}</div>
        <div>{service.id === 2 && <Service2 />}</div>
        <div>{service.id === 3 && <Service3 />}</div>
        <div>{service.id === 4 && <Service4 />}</div>
        <div>{service.id === 5 && <Service5 />}</div>
        <div>{service.id === 6 && <Service6 />}</div>
        <div>{service.id === 7 && <Service7 />}</div>
        <div>{service.id === 8 && <Service8 />}</div>
        <div>{service.id === 9 && <Service9 />}</div>
        <div>{service.id === 10 && <Service10 />}</div>
        <div>{service.id === 11 && <Service11 />}</div>
        <div>{service.id === 12 && <Service12 />}</div>
      </div>
    </Link>
  );
};
