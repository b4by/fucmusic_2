import { reviews } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperCustomNavigation } from "@/app/components/swiper-custom-navigation/swiper-custom-navigation";
import { useCallback, useRef } from "react";
import { StarsRating } from "@/app/components/stars-rating/stars-rating";

export const ReviewsSection = () => {
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
    <section className="bg-black" id="reviews">
      <div className="relative mx-auto border-white max-w-7xl border-x lg:px-24 py-12 px-8">
        <h3 className="text-white font-bold uppercase text-4xl mb-16">
          Отзывы с Авито
        </h3>
        <ul className="flex mb-8">
          <Swiper
            ref={sliderRef}
            modules={[Pagination, Navigation, A11y]}
            pagination={{
              el: ".swiper-review-pagination",
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
              1078: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <li
                  key={review.id}
                  className="flex flex-col gap-y-4 p-6 bg-white transition-all duration-200 ease-in h-full"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-x-1">
                      <h4 className="font-bold">{review.firstname}</h4>
                      <h4 className="font-bold">{review.lastname}</h4>
                    </div>
                    <time className="font-light text-gray-400 text-sm">
                      {review.date}
                    </time>
                  </div>
                  <StarsRating />
                  <p className="">{review.text}</p>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
        <div className="swiper-review-pagination"></div>
        <SwiperCustomNavigation
          {...{ handlePrev, handleNext }}
          arrowsColor="stroke-white"
        />
        <a
          href="https://www.avito.ru/moskva/predlozheniya_uslug/studii_zvukozapisi_arenda_247zapissvedenie_3058704276#open-reviews-list"
          className="block text-white/60 text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white/5 hover:text-white lg:py-4 mt-4 py-2 transform transition lg:ml-auto"
        >
          Все отзывы
        </a>
      </div>
    </section>
  );
};
