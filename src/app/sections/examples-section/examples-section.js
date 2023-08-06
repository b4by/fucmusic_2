import PlaylistPlayer from "@/app/components/playlist-player/playlist-player";
import dynamic from "next/dynamic";
const GlobalAudioPlayer = dynamic(
  () => import("../../components/global-audio-player/global-audio-player"),
  {
    ssr: false,
  }
);

export const ExamplesSection = () => {
  return (
    <div className="relative" id="examples">
      <section>
        <div className="relative mx-auto max-w-7xl border-x border-white">
          <h2 className="text-white font-bold uppercase absolute -left-[85px] top-[120px] -rotate-90">
            Наши работы
          </h2>
          <div className="mx-auto py-16 px-8">
            <PlaylistPlayer />
          </div>
        </div>
      </section>
    </div>
  );
};
