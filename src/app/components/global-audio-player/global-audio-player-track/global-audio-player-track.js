"use client";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export const GlobalAudioPlayerTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressRef,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressRef.current.max = seconds;
  };

  return (
    <div className="flex">
      <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
        <source src={currentTrack}></source>
      </audio>
      <div className="flex audio-info">
        <div className="relative border border-white">
          <div className="">
            <img
              src="images/cover.jpg"
              alt="track logo"
              className="w-[203px] h-[204px] blur-md"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold uppercase tracking-widest text-3xl">
              ПОП
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
