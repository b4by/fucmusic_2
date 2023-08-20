import { services } from "@/app/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { SwiperCustomNavigation } from "@/app/components/swiper-custom-navigation/swiper-custom-navigation";

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

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden bg-black" id="services">
      <div className="py-8 lg:py-16 mx-auto max-w-7xl items-center  px-8 lg:px-24 border-white border-y-0 border bg-black text-black relative">
        <h2 className="text-white font-bold uppercase text-4xl mb-4">Услуги</h2>
        <h3 className="text-white text-xs mb-16">
          * чтобы узнать подробнее об услуге кликните на обложку
        </h3>
        <div className="mx-auto max-w-7xl">
          <ul className="flex justify-center mb-[30px]">
            <Swiper
              ref={sliderRef}
              modules={[Pagination, Navigation, A11y]}
              spaceBetween={30}
              pagination={{
                el: ".swiper-custom-pagination",
                clickable: true,
              }}
              centeredSlidesBounds="true"
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
              {services.slice(0, 1).map((service) => (
                <SwiperSlide key={service.id}>
                  <li
                    className="flex flex-col max-w-fit cursor-pointer"
                    onClick={() =>
                      router.push(`?modal=true&service=${service.id}`, {
                        scroll: false,
                      })
                    }
                  >
                    <div className="relative mb-3">
                      <Image
                        src={service.img}
                        width="250"
                        height="250"
                        alt={service.name}
                      />
                    </div>
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
              {services.slice(1).map((service) => (
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
          <SwiperCustomNavigation {...{ handlePrev, handleNext }} />
        </div>
      </div>
    </section>
  );
};
