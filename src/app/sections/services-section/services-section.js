import { services } from "@/app/constants";
import { TitleSection } from "../title-section/title-section";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
  const router = useRouter();
  return (
    <section className="overflow-hidden bg-black" id="services">
      <div className="py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-white border-y-0 border bg-black text-black relative">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-white font-bold uppercase absolute -left-[55px] top-[120px] -rotate-90">
            Услуги
          </h2>
          <ul className="flex justify-center">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <li
                    className="flex flex-col max-w-fit cursor-pointer"
                    onClick={() =>
                      router.push(`?modal=true&service=${service.id}`, {
                        scroll: false,
                      })
                    }
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
                          {new Intl.NumberFormat("ru-RU").format(service.sale)}{" "}
                          ₽
                        </span>
                      )}
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};
