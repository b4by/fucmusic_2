"use client";
import { genres } from "@/app/constants";
import { useEffect, useRef, useState } from "react";
import { getAllAudio } from "@/app/services/getAllAudio";
import AudioPlaylistContainer from "../audio-playlist/audio-playlist-container";
import { useAppDispatch } from "@/app/hooks/hooks";
import { changeGenre } from "@/app/store/slice/playerSlice";

export default function PlaylistPlayer() {
  const dispatch = useAppDispatch();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllAudio().then(setSongs);
  }, []);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="flex flex-col gap-y-4 justify-center">
      <div class="relative">
        <div className="flex space-x-6">
          {genres.map((genre, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="text-white pt-2 pb-3 uppercase font-bold md:text-2xl transition-all duration-300 hover:opacity-75"
                onClick={() => {
                  setActiveTabIndex(idx);
                  dispatch(changeGenre(genre.label));
                }}
              >
                {genre.content}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 from-[#F18336] to-[#D12B2D] bg-gradient-to-r transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <AudioPlaylistContainer songs={songs} />
    </div>
  );
}
