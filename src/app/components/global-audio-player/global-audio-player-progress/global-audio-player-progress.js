"use client";
import { formatAudioTime } from "../../../utils/formatAudioTime";
import "./global-audio-player-progress.css";

export const GlobalAudioPlayerProgress = ({
  progressRef,
  audioRef,
  timeProgress,
  duration,
}) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressRef.current.value;
  };

  return (
    <div className="flex items-center w-full">
      {/* <span className="time current min-w-[50px]">
        {formatAudioTime(timeProgress)}
      </span> */}
      <input
        type="range"
        ref={progressRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      {/* <span className="time min-w-[50px]">{formatAudioTime(duration)}</span> */}
    </div>
  );
};
