import { twMerge } from "tailwind-merge";

export const SwiperCustomNavigation = ({
  handlePrev,
  handleNext,
  classes,
  arrowsColor,
}) => {
  return (
    <div
      className={twMerge(
        "w-full lg:absolute left-0 top-1/2 -translate-y-1/2 flex justify-between mt-8 lg:mt-0 lg:px-6 lg:pt-8",
        classes
      )}
    >
      <button
        onClick={handlePrev}
        className={twMerge(
          "group hover:scale-105 transition ease-in-out",
          arrowsColor
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
          className="-rotate-180 w-[40px] h-[40px]"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleNext}
        className={twMerge(
          "group hover:scale-105 transition ease-in-out",
          arrowsColor
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
          className="w-[40px] h-[40px]"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
