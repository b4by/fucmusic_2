import { services } from "@/app/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

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
      <div className="py-8 lg:py-16 mx-auto max-w-7xl items-center  px-8 lg:px-24 border-white border-y-0 border bg-black text-black relative">
        <h2 className="text-white font-bold uppercase text-4xl mb-16">
          Услуги
        </h2>
        <div className="mx-auto max-w-7xl">
          <ul className="flex justify-center mb-[30px]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              pagination={{
                el: ".swiper-custom-pagination",
                clickable: true,
              }}
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
                1048: {
                  slidesPerView: 4,
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
                    <h4 className="text-white font-medium uppercase truncate mb-2">
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
          <div className="swiper-custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};
