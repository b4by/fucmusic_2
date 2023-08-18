import { genres } from "@/app/constants";
import { useAppDispatch } from "@/app/hooks/hooks";
import { changeCurrentGenre } from "@/app/store/slice/playerSlice";
import { useEffect, useRef, useState } from "react";

export const PlaylistTabs = () => {
  const dispatch = useAppDispatch();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="relative">
      <div className="flex space-x-6">
        {genres.map((genre, idx) => {
          return (
            <button
              key={idx}
              ref={(el) => (tabsRef.current[idx] = el)}
              className="text-white pt-2 pb-3 uppercase font-bold md:text-2xl transition-all duration-300 hover:opacity-75"
              onClick={() => {
                setActiveTabIndex(idx);
                dispatch(changeCurrentGenre(genre.label));
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
  );
};
