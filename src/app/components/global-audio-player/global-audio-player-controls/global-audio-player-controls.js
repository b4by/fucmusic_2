"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

export const GlobalAudioPlayerControls = ({
  audioRef,
  progressRef,
  duration,
  setTimeProgress,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressRef.current.value = currentTime;
    progressRef.current.style.setProperty(
      "--range-progress",
      `${(progressRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressRef, setTimeProgress]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="pr-2">
      <div className="flex items-center">
        <button type="button" onClick={togglePlayPause} className="">
          {isPlaying ? (
            <PauseIcon className="w-8 h-8 fill-white" />
          ) : (
            <PlayIcon className="w-8 h-8 fill-white" />
          )}
        </button>
      </div>
    </div>
  );
};
