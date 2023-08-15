"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import {
  changePlayingState,
  changeSongIndex,
} from "@/app/store/slice/playerSlice";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BounceIcon } from "../icons/bounce-icon/bounce-icon";
import { songs } from "@/app/constants";

const AudioPlaylistContainer = () => {
  const audioPlayer = useRef();
  const player = useAppSelector((state) => state.player);
  const currentGenre = player.currentGenre;
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong] = useState(songs[currentSongIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(30);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  useEffect(() => {});

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = (index) => {
    setCurrentSongIndex(index);
    if (isPlaying && currentSongIndex !== index) {
      audioPlayer.current.pause();
      audioPlayer.current.src = songs[index].src;
      audioPlayer.current.play();
      return;
    }
    if (!isPlaying && currentSongIndex === index) {
      setIsPlaying((prev) => !prev);
      audioPlayer.current.play();
      return;
    }
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div>
      <audio src={currentSong.src} ref={audioPlayer} />
      <ul className="flex flex-col">
        {songs
          ?.filter((song) => song.genre === currentGenre)
          .map((song, key) => (
            <li key={song.id} onClick={() => togglePlay(song.id)}>
              <div className="flex items-center">
                <button
                  className={twMerge(
                    "flex items-center group flex-shrink-0 flex-grow transition-all ease-in duration-200 hover:bg-white/10 px-2 py-3",
                    isPlaying && currentSongIndex === song.id
                      ? "bg-white/10"
                      : "bg-transparent"
                  )}
                >
                  <div className="w-8 h-8 relative flex flex-col justify-center items-center mr-3 text-white/60 text-sm">
                    {isPlaying && currentSongIndex === song.id ? (
                      <BounceIcon />
                    ) : (
                      key + 1
                    )}
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white">
                    {song.name.slice(38)}
                  </span>
                  <time className="block ml-auto text-white/60 text-xs group-hover:text-white">
                    {elapsed}
                  </time>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AudioPlaylistContainer;
