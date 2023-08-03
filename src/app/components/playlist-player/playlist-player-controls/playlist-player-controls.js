import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { changePlayingState } from "@/app/store/slice/playerSlice";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export const PlaylistPlayerControls = ({ audioRef }) => {
  const player = useAppSelector((state) => state.player);
  const isPlaying = player.isPlaying;
  const dispatch = useAppDispatch();

  const hanlePlayState = () => {
    if (isPlaying) dispatch(changePlayingState(false));
    if (!isPlaying) dispatch(changePlayingState(true));
    audioRef.current && isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play();
  };

  return (
    <div className="pr-2">
      {/* <div className="flex items-center">
        <button type="button" onClick={() => hanlePlayState()}>
          {isPlaying ? (
            <PauseIcon className="w-8 h-8 fill-white" />
          ) : (
            <PlayIcon className="w-8 h-8 fill-white" />
          )}
        </button>
      </div> */}
    </div>
  );
};
