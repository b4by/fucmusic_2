import { useAppSelector } from "@/app/hooks/hooks";
import Image from "next/image";
import { useEffect } from "react";

export const PlaylistPlayerTrack = ({
  currentTrack,
  audioRef,
  progressRef,
  setDuration,
}) => {
  const player = useAppSelector((state) => state.player);
  const selected_track = player.selected_track;
  const selected_genre = player.selected_genre;

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressRef.current.max = seconds;
  };

  return (
    <div className="flex w-full h-full">
      {selected_track && (
        <audio
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          preload="true"
          src={selected_track}
        ></audio>
      )}
      {/* <div className="flex audio-info w-full h-full">
        <div className="relative border border-white w-full h-full">
          <div className="relative w-full h-full">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold uppercase tracking-widest text-3xl">
              {selected_genre}
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};
