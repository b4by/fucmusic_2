import { genres, musics } from "@/app/constants";
import dynamic from "next/dynamic";
import { TitleSection } from "../title-section/title-section";
const GlobalAudioPlayer = dynamic(
  () => import("../../components/global-audio-player/global-audio-player"),
  {
    ssr: false,
  }
);

export const ExamplesSection = () => {
  return (
    <div>
      {/* <TitleSection title="Примеры работ" /> */}
      <section>
        <div className="mx-auto max-w-7xl border-x border-white">
          <div className="mx-auto py-16 px-8">
            <div className="grid grid-cols-1">
              {/* <ul className="flex flex-col gap-y-4 w-[250px] pr-6">
                {genres.map((genre) => (
                  <li key={genre.label}>
                    <button className="flex items-center rounded-[4px] px-[10px] py-[8px] bg-white w-full">
                      {genre.icon}
                      <span className="text-black uppercase font-bold">
                        {genre.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul> */}
              <div className="flex justify-center gap-10 flex-wrap">
                {musics.slice(0, 5).map((music) => (
                  <GlobalAudioPlayer
                    key={music.name}
                    currentTrack={music.src}
                    trackInfo={music.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
