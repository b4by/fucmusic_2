"use client";
import { navLinks } from "@/app/constants";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Logo } from "../logo/logo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto justify-center border-b border-white">
      <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto px-8 py-2 border-x">
        <div className="flex items-center flex-row justify-between text-white">
          <Link href="/" className="group block flex-shrink-0">
            <div className="flex items-center">
              <Logo classNames="group-hover:opacity-75 transition ease-in" />
              <div className="flex flex-col gap-y-[1px] ml-3">
                <p className="uppercase font-bold text-white group-hover:text-gray-300 leading-none transition ease-in">
                  FUC MUSIC
                </p>
                <span className="text-[10px] group-hover:text-gray-300 transition ease-in">
                  студия звукозаписи
                </span>
              </div>
            </div>
          </Link>
          <button
            className="focus:shadow-outline focus:outline-none md:hidden rounded-lg"
            onClick={(e) => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                className="inline-flex"
                strokeWidth="2"
              ></path>
              <path
                d="M6 18L18 6M6 6l12 12"
                className="hidden"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col items-center lg:flex lg:flex-row lg:justify-start lg:mt-0 gap-3 lg:gap-6 lg:p-0 lg:px-0 md:pb-0 opacity-100 p-4 px-5`}
        >
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="text-white/60 text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white hover:text-white lg:py-4 md:my-0 py-2 transform transition lg:ml-auto"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-white/60 text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white hover:text-white p-2 transform transition lg:ml-auto border border-white/60  hover:border-white">
            Записаться
          </button>
        </nav>
      </div>
    </div>
  );
};
