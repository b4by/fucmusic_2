import { services } from "@/app/constants";
import { TitleSection } from "../title-section/title-section";
import Image from "next/image";

const PriceEl = ({ price }) => {
  if (!price.from) {
    return (
      <div>
        <span className="font-bold text-md">
          {new Intl.NumberFormat("ru-RU").format(price)} ₽
        </span>
        <span></span>
      </div>
    );
  }

  if (price.from && price.to) {
    return (
      <div className="flex items-center gap-x-2">
        <span className="font-bold text-md">
          {new Intl.NumberFormat("ru-RU").format(price.from)}
        </span>
        <span>–</span>
        <span className="font-bold text-md">
          {new Intl.NumberFormat("ru-RU").format(price.to)}
        </span>
        <span className="font-bold text-md">₽</span>
      </div>
    );
  }
};

export const ServicesSection = () => {
  return (
    <section className="overflow-hidden bg-black" id="services">
      <div className="py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-white border-y-0 border bg-black text-black relative">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-white font-bold uppercase absolute -left-[55px] top-[120px] -rotate-90">
            Услуги
          </h2>
          <ul className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:justify-items-stretch xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex flex-col max-w-fit cursor-pointer transition-all duration-200 ease-in hover:scale-105"
              >
                <Image
                  src={service.img}
                  width="250"
                  height="250"
                  className="mb-3"
                  alt={service.name}
                />
                <h4 className="text-white font-medium uppercase truncate mb-2 max-w-[260px]">
                  {service.name}
                </h4>
                <div className="text-white flex gap-x-4">
                  <PriceEl price={service.price} />
                  {service.sale && (
                    <span className="line-through font-light text-md">
                      {new Intl.NumberFormat("ru-RU").format(service.sale)} ₽
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
