"use client";

import { useState } from "react";
import Image from "next/image";
import bandcamp from "@/public/logos/bandcamp.svg";
import spotify from "@/public/logos/spotify.svg";
import youtube from "@/public/logos/youtube.svg";
import Song from "./Song";
import { songs } from "@/data/songs";
import SongExpander from "./SongExpander";
import { cn } from "@/lib/utils";

export default function Music() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="music" className="text-black bg-white">
      <div className="flex flex-col items-center justify-between gap-12 p-20 lg:gap-0 lg:flex-row">
        <p className="text-6xl uppercase lg:text-8xl">glazba</p>
        <div className="flex gap-12 lg:gap-20">
          <a href="https://jasamsvemirko.bandcamp.com/" target="_blank">
            <Image src={bandcamp} alt="bandcamp" />
          </a>
          <a
            href="https://open.spotify.com/artist/7f3cnDkg5S64e0adAlnF5z"
            target="_blank"
          >
            <Image src={spotify} alt="spotify" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <Image src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-8 mb-12 sm:flex-row">
        {songs.map((song) => (
          <Song key={song.title} {...song} />
        ))}
      </div>
      <SongExpander isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      {isExpanded && (
        <div className={cn("expanded-container", isExpanded && "expanded")}>
          <div
            className={cn(
              "flex flex-col gap-12 px-8 mt-12 sm:flex-row",
              isExpanded && "opacity-100"
            )}
          >
            {songs.map((song) => (
              <Song key={song.title} {...song} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
