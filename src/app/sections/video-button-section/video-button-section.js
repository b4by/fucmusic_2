"use client";
import { useEffect, useState } from "react";

export const VideoButtonSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-black group group-hover:bg-pattern group-hover:bg-cover">
      <div className="mx-auto max-w-7xl border-x border-white">
        <div className="mx-auto divide-y divide-white">
          <div className="border-white border border-collapse">
            <button
              className="w-full p-20 md:p-48 relative uppercase overflow-hidden font-black text-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="video/bg1.mp4" type="video/mp4" />
              </video>
              <span className="p-6 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center uppercase text-3xl sm:text-5xl md:text-[90px] font-black text-center transition-all ease-in text-white group-hover:bg-black group-hover:bg-opacity-100 group-hover:mix-blend-multiply group-hover:scale-105 duration-200">
                Записаться сейчас
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
