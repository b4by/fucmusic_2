import { songs } from "@/app/constants";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { changePlayingState } from "@/app/store/slice/playerSlice";

export const GlobalPlayer = () => {
  const dispatch = useAppDispatch();
  const player = useAppSelector((state) => state.player);
  const currentSongIndex = player.currentSongIndex;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaying = () => {
    dispatch(changePlayingState(!isPlaying));
  };

  return (
    <div className="bg-[#e3e3e3] fixed bottom-0 left-0 w-full z-[9998]">
      <div className="p-6 border-b border-black">
        <div className="flex items-center">
          <div className="flex gap-x-3 mr-6">
            <button>Prev</button>
            <button onClick={handlePlaying}>Play</button>
            <button>Next</button>
          </div>
          <div>Range</div>
        </div>
      </div>
      <div className="py-2 px-6">{songs[currentSongIndex].name}</div>
    </div>
  );
};
