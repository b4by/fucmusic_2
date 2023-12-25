"use client";
import { cn } from "@/app/utils/cn";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ReactModal from "react-modal";

export const ServiceModal = ({ isOpen, onClose, className, description }) => {
  return (
    <ReactModal
      overlayClassName="fixed top-0 left-0 w-full h-full bg-zinc-800 bg-opacity-50 z-[9999] p-6"
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
      className={cn(
        "max-w-[650px]  p-6 py-10 border-none outline-none bg-white",
        className
      )}
    >
      <button
        className="absolute left-[20px] top-[10px] md:left-0 md:-top-[30px] flex items-center space-x-2 justify-end text-black md:text-white"
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
      {description && (
        <BlocksRenderer
          content={description}
          blocks={{
            paragraph: ({ children }) => (
              <p className="text-neutral-900 max-w-prose pb-1">{children}</p>
            ),
          }}
        />
      )}
    </ReactModal>
  );
};
