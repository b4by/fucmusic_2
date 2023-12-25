import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useEffect, useRef, useState } from "react";
import { SwiperCustomNavigation } from "@/app/components/swiper-custom-navigation/swiper-custom-navigation";
import { getImageUrl } from "@/app/utils/getImageUrl";
import { getBlurDataUrl } from "@/app/utils/getBlurDataUrl";
import { ServiceModal } from "@/app/components/service-modal/service-modal";

const ServiceItem = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        className="flex flex-col max-w-fit cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative mb-3">
          {service.img && (
            <Image
              src={getImageUrl(service.img)}
              width="250"
              height="250"
              placeholder="blur"
              blurDataURL={getBlurDataUrl(service.img)}
              alt={service.name}
            />
          )}
        </div>
        <h4 className="text-white font-medium uppercase truncate mb-2">
          {service.name}
        </h4>
        <div className="text-white flex gap-x-4">
          <PriceEl
            isRange={service.isRange}
            startRange={service.priceStart}
            endRange={service.priceEnd}
            newPrice={service.newPrice}
            oldPrice={service.oldPrice}
          />
          {service.sale && (
            <span className="line-through font-light text-md">
              {new Intl.NumberFormat("ru-RU").format(service.sale)} ₽
            </span>
          )}
        </div>
      </li>
      <ServiceModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        description={service.description}
      />
    </>
  );
};

const PriceEl = ({ isRange, startRange, endRange, newPrice, oldPrice }) => {
  const formatPrice = (price) => new Intl.NumberFormat("ru-RU").format(price);

  if (isRange) {
    return (
      <div className="flex items-center gap-x-2">
        <span className="font-bold text-md">{formatPrice(startRange)}</span>
        <span>–</span>
        <span className="font-bold text-md">{formatPrice(endRange)}</span>
        <span className="font-bold text-md">₽</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-x-2">
        <span className="font-bold text-md">{formatPrice(newPrice)}</span>
        {oldPrice && (
          <span className="text-md line-through">{formatPrice(oldPrice)}</span>
        )}
        <span className="font-bold text-md">₽</span>
      </div>
    );
  }
};

export const ServicesSection = () => {
  const [services, setServices] = useState([]);

  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/services?populate=img`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        const data = res.data;
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch equipments:", error);
      }
    };

    fetchServices();
  }, []);

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
              {services.length > 0 &&
                services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <ServiceItem service={service} />
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
