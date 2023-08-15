import { playSong } from "@/app/store/slice/playerSlice";
import { twMerge } from "tailwind-merge";

const AudioPlaylistItem = () => {
  return (
    <li>
      <div className="flex items-center">
        <button
          className={twMerge(
            "flex items-center group flex-shrink-0 flex-grow transition-all ease-in duration-200 hover:bg-white/10 px-2 py-3"
            // selected_track === encodeURI(track.src)
            //   ? "bg-white/10"
            //   : "bg-transparent"
          )}
        >
          <div className="w-8 h-8 relative flex flex-col justify-center items-center mr-3 text-white/60 text-sm">
            {/* {is_playing && selected_track === encodeURI(track.src) ? (
              <BounceIcon />
            ) : (
              index + 1
            )} */}
          </div>
          <span className="text-white/60 text-sm group-hover:text-white">
            {name.slice(38)}
          </span>
          <time className="block ml-auto text-white/60 text-xs group-hover:text-white"></time>
        </button>
      </div>
    </li>
  );
};

export default AudioPlaylistItem;
