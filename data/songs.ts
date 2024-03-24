import { StaticImageData } from "next/image";
import nosi from "@/public/images/nosi-me.png";
import cesta from "@/public/images/sl-cesta.png";
import dobar from "@/public/images/dobar.png";

export const songs: Song[] = [
  {
    title: "Nosi me na duši",
    link: "https://www.youtube.com/watch?v=T-PucUDwqlg",
    image: nosi,
  },
  {
    title: "Slučajna cesta",
    link: "https://www.youtube.com/watch?v=tdSBN1MJKgk",
    image: cesta,
  },
  {
    title: "Možda nisam dobar",
    link: "https://www.youtube.com/watch?v=graOFuZEFs0",
    image: dobar,
  },
  {
    title: "Nosi me na duši",
    link: "https://www.youtube.com/watch?v=T-PucUDwqlg",
    image: nosi,
  },
  {
    title: "Slučajna cesta",
    link: "https://www.youtube.com/watch?v=tdSBN1MJKgk",
    image: cesta,
  },
  {
    title: "Možda nisam dobar",
    link: "https://www.youtube.com/watch?v=graOFuZEFs0",
    image: dobar,
  },
];

type Song = {
  title: string;
  link: string;
  image: StaticImageData;
};
