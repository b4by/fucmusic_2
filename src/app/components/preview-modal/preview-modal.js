"use client";
import { cn } from "@/app/utils/cn";
import Image from "next/image";
import { useEffect } from "react";
import ReactModal from "react-modal";
import CloseIcon from "../icons/close-icon/close-icon";
import { getImageUrl } from "@/app/utils/getImageUrl";

export const PreviewModal = ({ isOpen, onClose, className, item }) => {
  //   const [mounted, setMounted] = useState(false);

  //   useEffect(() => setMounted(true), []);

  //   return mounted ? createPortal(<>{children}</>, document.body) : null;

  return (
    <ReactModal
      overlayClassName="fixed top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black z-10 bg-opacity-50"
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
        "max-w-[450px] p-6 border-none outline-none bg-white",
        className
      )}
    >
      <div className="max-w-[700px] mb-[30px] flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-8 top-8"
        >
          <CloseIcon />
        </button>
      </div>
      {item.image && (
        <div className="relative max-w-[400px] aspect-[4/3]">
          {item.image && item.image?.url && (
            <Image
              src={getImageUrl(item.image)}
              alt={item.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw"
            />
          )}
        </div>
      )}
    </ReactModal>
  );
};
