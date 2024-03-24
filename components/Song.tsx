import { StaticImageData } from "next/image";
import Image from "next/image";
import arrowRight from "@/public/icons/arrow-right.svg";

type SongProps = {
  title: string;
  link: string;
  image: StaticImageData;
};

export default function Song({ title, link, image }: SongProps) {
  return (
    <a href={link} target="_blank" className="min-w-[28%]">
      <Image src={image} alt="title" className="w-full mb-2" />
      <div className="flex items-center gap-4">
        <p className="text-xl">{title}</p>
        <Image src={arrowRight} alt="arrow right" />
      </div>
    </a>
  );
}
