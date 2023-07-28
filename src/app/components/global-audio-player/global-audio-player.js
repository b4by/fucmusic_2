"use client";
import { useRef, useState } from "react";
import { GlobalAudioPlayerControls } from "./global-audio-player-controls/global-audio-player-controls";
import { GlobalAudioPlayerProgress } from "./global-audio-player-progress/global-audio-player-progress";
import { GlobalAudioPlayerTrack } from "./global-audio-player-track/global-audio-player-track";
import { GlobalAudioPlayerInfo } from "./global-audio-player-info/global-audio-player-info";

const GlobalAudioPlayer = ({ currentTrack, trackInfo }) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressRef = useRef();

  return (
    <div className="flex flex-col gap-y-2">
      <GlobalAudioPlayerTrack
        {...{ currentTrack, audioRef, setDuration, progressRef }}
      />
      <div className="flex px-2">
        <GlobalAudioPlayerControls
          {...{ audioRef, progressRef, duration, setTimeProgress }}
        />
        <GlobalAudioPlayerProgress
          {...{ progressRef, audioRef, timeProgress, duration }}
        />
      </div>
      <GlobalAudioPlayerInfo {...{ trackInfo }} />
    </div>
  );
};

export default GlobalAudioPlayer;
