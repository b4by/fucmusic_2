import { SwiperCustomNavigation } from "@/app/components/swiper-custom-navigation/swiper-custom-navigation";
import { photos } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const PhotosSection = () => {
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
    <section className="" id="photos">
      <div className="relative mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x text-white">
        <h2 className="text-white font-bold uppercase text-4xl mb-16">Фото</h2>
        <div className="flex justify-center mb-[40px]">
          <Swiper
            ref={sliderRef}
            modules={[Pagination, Navigation, A11y]}
            pagination={{
              el: ".swiper-photo-pagination",
              clickable: true,
            }}
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
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="xl:grayscale transition-all duration-200 ease-in hover:grayscale-0 hover:scale-105">
                  <Link href={photo.src}>
                    <Image
                      src={photo.src}
                      width="600"
                      height="300"
                      alt="фотография студии"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-photo-pagination"></div>
        <SwiperCustomNavigation {...{ handlePrev, handleNext }} />
      </div>
    </section>
  );
};
