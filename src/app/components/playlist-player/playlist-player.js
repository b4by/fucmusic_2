"use client";
import { genres } from "@/app/constants";
import { useEffect, useRef, useState } from "react";
import { getAllAudio } from "@/app/services/getAllAudio";
import AudioPlaylistContainer from "../audio-playlist/audio-playlist-container";
import { useAppDispatch } from "@/app/hooks/hooks";
import { changeCurrentGenre } from "@/app/store/slice/playerSlice";
import { PlaylistTabs } from "../playlist-tabs/playlist-tabs";

export default function PlaylistPlayer() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllAudio().then(setSongs);
  }, []);

  return (
    <div className="flex flex-col gap-y-4 justify-center">
      <PlaylistTabs />
      <AudioPlaylistContainer songs={songs} />
    </div>
  );
}
