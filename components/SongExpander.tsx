"use client";

import Image from "next/image";
import arrowLeft from "@/public/icons/pixel-arrow-left.svg";
import arrowRight from "@/public/icons/pixel-arrow-right.svg";
import arrowDown from "@/public/icons/pixel-arrow-down.svg";
import { cn } from "@/lib/utils";

type SongExpanderProps = {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
};

export default function SongExpander({
  isExpanded,
  setIsExpanded,
}: SongExpanderProps) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-1 py-3 text-white transition-all duration-300 bg-black cursor-pointer lg:gap-4 lg:py-8 lg:flex-row"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <Image
              src={arrowRight}
              alt="arrow right"
              className="hidden lg:block"
            />
            <p className="text-2xl uppercase">vidi manje</p>
            <Image
              src={arrowLeft}
              alt="arrow left"
              className="hidden lg:block"
            />
          </>
        ) : (
          <>
            <Image
              src={arrowLeft}
              alt="arrow left"
              className="hidden lg:block"
            />
            <p className="text-2xl uppercase">vidi više</p>
            <Image
              src={arrowRight}
              alt="arrow right"
              className="hidden lg:block"
            />
          </>
        )}
        <Image
          src={arrowDown}
          alt="arrow down"
          className={cn(
            "block -mb-2 lg:hidden transition-all",
            isExpanded && "rotate-180"
          )}
        />
      </div>
    </>
  );
}
