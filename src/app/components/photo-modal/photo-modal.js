"use client";
import { cn } from "@/app/utils/cn";
import { getImageUrl } from "@/app/utils/getImageUrl";
import Image from "next/image";
import ReactModal from "react-modal";

export const PhotoModal = ({ isOpen, onClose, className, photo }) => {
  console.log(photo?.formats?.large?.url);
  return (
    <ReactModal
      overlayClassName="fixed top-0 left-0 w-full h-full bg-zinc-800 bg-opacity-90 z-[9999] p-6"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      bodyOpenClassName="overflow-hidden"
      style={{
        content: {
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      className={cn("max-w-[650px] border-none outline-none", className)}
    >
      <button
        className="absolute дуае-0 -top-[30px] flex items-center space-x-2 justify-end text-white"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            strokeWidth="0"
            d="M3.5 7L0 10.5 3.5 14H5l-3-3h17v-1H2l3-3H3.5z"
          ></path>
        </svg>
        <span className="text-sm">Вернуться</span>
      </button>
      {photo && (
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo?.formats?.large?.url}`}
          alt="Интерьер студии звукозаписи FUCMUSIC"
          className="object-contain"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={600}
          height={500}
        />
      )}
    </ReactModal>
  );
};
