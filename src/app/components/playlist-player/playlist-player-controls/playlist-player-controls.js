import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

export const PlaylistPlayerControls = ({ audioRef }) => {
  const player = useAppSelector((state) => state.player);
  const is_playing = player.is_playing;
  const dispatch = useAppDispatch();

  const hanlePlayState = () => {
    // audioRef.current && console.log(audioRef.current);
  };

  return (
    <div className="pr-2">
      <div className="flex items-center">
        <button type="button" onClick={() => hanlePlayState()}>
          {is_playing ? (
            <PauseIcon className="w-8 h-8 fill-white" />
          ) : (
            <PlayIcon className="w-8 h-8 fill-white" />
          )}
        </button>
      </div>
    </div>
  );
};
