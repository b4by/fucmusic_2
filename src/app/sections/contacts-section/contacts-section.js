"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const ContactsSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x border-black">
        <h3 className="text-black font-bold uppercase text-4xl mb-16">
          Как к нам пройти
        </h3>
        <iframe
          src="https://vk.com/video_ext.php?oid=-214239262&id=456239021&hd=2"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          className="w-full h-[300px] md:h-[450px] xl:h-[600px]"
          allowFullScreen
        ></iframe>
        <div className="mt-8">
          <YMaps>
            <Map
              className="xl:w-full h-[300px] lg:h-[387px]"
              defaultState={{
                center: [55.735765, 37.657797],
                zoom: 16,
              }}
            >
              <Placemark geometry={[55.735765, 37.657797]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};
