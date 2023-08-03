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
    <div className="grid grid-cols-[300px_400px] gap-y-4 justify-center">
      <div className=""></div>
      <ul className="flex gap-4 col-span-1 justify-between pl-2">
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
      <div className="bg-gradient-to-r from-[#F18336] to-[#D12B2D] w-full h-[300px] relative">
        <PlaylistPlayerControls {...{ audioRef, progressRef }} />
        <PlaylistPlayerTrack {...{ audioRef, progressRef }} />
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
                  1:11
                </time>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
