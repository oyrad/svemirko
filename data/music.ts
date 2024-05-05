import { StaticImageData } from "next/image";

import skalamerija from "@/public/images/skalamerija.webp";
import tunguzija from "@/public/images/tunguzija.webp";
import vanilija from "@/public/images/vanilija.webp";

export const albums: Song[] = [
  {
    title: "Skalamerija",
    link: "https://www.youtube.com/watch?v=hn38BSwoB30",
    image: skalamerija,
  },
  {
    title: "Tunguzija",
    link: "https://www.youtube.com/watch?v=NY6hBKdCaV4",
    image: tunguzija,
  },
  {
    title: "Vanilija",
    link: "https://www.youtube.com/watch?v=cFsYDMJBwsI",
    image: vanilija,
  },
];

type Song = {
  title: string;
  link: string;
  image: StaticImageData;
};
