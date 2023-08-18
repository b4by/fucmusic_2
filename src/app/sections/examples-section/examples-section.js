import PlaylistPlayer from "@/app/components/playlist-player/playlist-player";

export const ExamplesSection = () => {
  return (
    <section className="relative" id="examples">
      <div className="py-8 lg:py-16 mx-auto max-w-7xl items-center  px-8 lg:px-24 border-white border-y-0 border bg-black text-black relative">
        <h2 className="text-white font-bold uppercase text-4xl mb-16">
          Наши работы
        </h2>
        <div className="mx-auto">
          <PlaylistPlayer />
        </div>
      </div>
    </section>
  );
};
