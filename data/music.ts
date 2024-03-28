import { StaticImageData } from "next/image";
import nosi from "@/public/images/nosi-me.png";
import cesta from "@/public/images/sl-cesta.png";
import dobar from "@/public/images/dobar.png";

import skalamerija from "@/public/images/skalamerija.jpeg";
import tunguzija from "@/public/images/tunguzija.jpeg";
import vanilija from "@/public/images/vanilija.webp";

export const albums: Song[] = [
  {
    title: "Skalamerija",
    link: "https://www.youtube.com/watch?v=hn38BSwoB30&t=680s",
    image: skalamerija,
  },
  {
    title: "Tunguzija",
    link: "https://www.youtube.com/watch?v=NY6hBKdCaV4&t=858s",
    image: tunguzija,
  },
  {
    title: "Skalamerija",
    link: "https://www.youtube.com/watch?v=cFsYDMJBwsI&t=943s",
    image: vanilija,
  },
];

type Song = {
  title: string;
  link: string;
  image: StaticImageData;
};
