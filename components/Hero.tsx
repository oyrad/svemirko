"use client";

import Image from "next/image";
import arrowDown from "@/public/icons/pixel-arrow-down-double.svg";
import Button from "./Button";

export default function Hero() {
  function handleScroll() {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-screen h-screen logo-gif">
      <div className="flex flex-col items-center justify-center h-svh lg:items-start lg:h-auto lg:absolute lg:bottom-0 lg:w-full">
        <div
          className="absolute bottom-0 flex justify-center w-full py-4 bg-black cursor-pointer lg:static"
          onClick={handleScroll}
        >
          <Image
            src={arrowDown}
            alt="arrow down"
            className="transition duration-200 hover:translate-y-1 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}
