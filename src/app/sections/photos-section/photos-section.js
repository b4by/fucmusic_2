import { photos } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const PhotosSection = () => {
  return (
    <section className="" id="photos">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x text-white">
        <h2 className="text-white font-bold uppercase text-4xl mb-16">Фото</h2>
        <div className="flex justify-center mb-[40px]">
          <Swiper
            modules={[Pagination]}
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
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-photo-pagination"></div>
      </div>
    </section>
  );
};
