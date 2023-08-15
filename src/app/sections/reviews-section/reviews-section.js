import { reviews } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ReviewsSection = () => {
  return (
    <section className="bg-black" id="reviews">
      <div className="mx-auto border-white max-w-7xl border-x lg:px-24 py-12 px-8">
        <h3 className="text-white font-bold uppercase text-4xl mb-16">
          Отзывы с Авито
        </h3>
        <ul className="flex mb-8">
          <Swiper
            modules={[Pagination]}
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
                  <div className="font-bold">{review.firstname}</div>
                  <p className="">{review.text}</p>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
        <div className="swiper-review-pagination"></div>
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
