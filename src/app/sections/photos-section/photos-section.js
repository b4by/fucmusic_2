import { PhotoModal } from "@/app/components/photo-modal/photo-modal";
import { SwiperCustomNavigation } from "@/app/components/swiper-custom-navigation/swiper-custom-navigation";
import { getImageUrl } from "@/app/utils/getImageUrl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback, useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PhotoItem = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="xl:grayscale transition-all duration-200 ease-in hover:grayscale-0 hover:scale-105">
        <button type="button" onClick={() => setIsOpen(true)}>
          <Image
            src={getImageUrl(photo)}
            width="600"
            height="300"
            alt="фотография студии"
            loading="lazy"
          />
        </button>
      </div>
      <PhotoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        photo={photo}
      />
    </>
  );
};

export const PhotosSection = () => {
  const [photos, setPhotos] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/photos/1?populate=images`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        const data = res.data;
        setPhotos(data);
      } catch (error) {
        console.error("Failed to fetch equipments:", error);
      }
    };

    fetchPhotos();
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
            {photos &&
              photos?.images &&
              photos?.images.length > 0 &&
              photos?.images.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <PhotoItem photo={photo} />
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
