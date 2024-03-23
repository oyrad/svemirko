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
    <div className="flex flex-col items-center justify-center h-svh lg:items-start lg:h-auto lg:absolute lg:bottom-0 lg:w-full">
      <div className="mb-8 text-center text-white lg:text-left lg:pl-20">
        <h1 className="mb-6 text-5xl uppercase lg:text-9xl lg:-ml-2">
          po tijelu
        </h1>
        <h2 className="text-2xl lg:text-6xl">Novi singl</h2>
      </div>
      <Button
        link="https://youtube.com"
        buttonText="Poslušaj"
        className="duration-300 lg:self-end hover:gap-4 transition-gap"
      />
      <div
        className="absolute bottom-0 flex justify-center w-full py-4 bg-white cursor-pointer lg:static footer-gradient"
        onClick={handleScroll}
      >
        <Image
          src={arrowDown}
          alt="arrow down"
          className="transition duration-200 hover:translate-y-1"
        />
      </div>
    </div>
  );
}
