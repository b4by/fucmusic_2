"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import {
  changeGenre,
  chooseTrack,
  changePlayingState,
  setPlaying,
} from "@/app/store/slice/playerSlice";
import { twMerge } from "tailwind-merge";
import { BounceIcon } from "@/app/components/icons/bounce-icon/bounce-icon";
import { genres } from "@/app/constants";
import { useEffect, useRef, useState } from "react";
import { PlaylistPlayerControls } from "./playlist-player-controls/playlist-player-controls";
import { PlaylistPlayerTrack } from "./playlist-player-track/playlist-player-track";
import { getAllAudio } from "@/app/services/getAllAudio";
import GlobalAudioPlayer from "../global-audio-player/global-audio-player";
import { formatAudioTime } from "@/app/utils/formatAudioTime";

export default function PlaylistPlayer() {
  const player = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  const selected_genre = player.selected_genre;
  const selected_track = player.selected_track;
  const isPlaying = player.isPlaying;
  const [audios, setAudios] = useState([]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressRef = useRef();

  useEffect(() => {
    getAllAudio().then(setAudios);
  }, []);

  const handleTrackClick = (track) => {
    if (track.src === selected_track && audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.pause();
    }
    dispatch(chooseTrack(encodeURI(track.src)));
    if (isPlaying) {
      audioRef.current && audioRef.current.pause();
      dispatch(changePlayingState(false));
    } else {
      audioRef.current && audioRef.current.play();
      dispatch(changePlayingState(true));
    }
  };

  return (
    <div className="flex flex-col gap-y-4 justify-center">
      <ul className="flex gap-4 col-span-1 pl-2">
        {genres.map((genre, key) => (
          <button
            key={key}
            className="text-white uppercase text-xs overflow-hidden p-6  bg-gradient-to-r from-[#F18336] to-[#D12B2D] bg-fixed"
            onClick={() => dispatch(changeGenre(genre.label))}
          >
            {genre.content}
          </button>
        ))}
      </ul>
      <div className="">
        <PlaylistPlayerControls {...{ audioRef, progressRef, setDuration }} />
        <PlaylistPlayerTrack {...{ audioRef, progressRef, setDuration }} />
      </div>
      <ul className="list-inside list-none flex flex-col">
        {audios[selected_genre]?.songs?.map((track, key) => (
          <li key={key} onClick={() => handleTrackClick(track)}>
            <div className="flex items-center">
              <button
                className={twMerge(
                  "flex items-center group flex-shrink-0 flex-grow transition-all ease-in duration-200 hover:bg-white/10 px-2 py-3",
                  selected_track === encodeURI(track.src)
                    ? "bg-white/10"
                    : "bg-transparent"
                )}
              >
                <div className="w-8 h-8 relative flex flex-col justify-center items-center mr-3 text-white/60 text-sm">
                  {isPlaying && selected_track === encodeURI(track.src) ? (
                    <BounceIcon />
                  ) : (
                    key + 1
                  )}
                </div>
                <span className="text-white/60 text-sm group-hover:text-white">
                  {track.name.slice(38)}
                </span>
                <time className="block ml-auto text-white/60 text-xs group-hover:text-white">
                  {track.duration}
                </time>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
