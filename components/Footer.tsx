import Image from "next/image";
import logo from "@/public/logos/logo-black.svg";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="h-[26rem] bg-gray-200 text-black overflow-hidden flex items-center justify-between px-8 sm:px-24 py-20 md:px-32 lg:pr-20 lg:pl-0 footer-gradient">
      <Image
        src={logo}
        alt="logo"
        className="h-[30rem] w-fit -mt-4 hidden lg:block"
      />
      <div className="flex flex-col justify-between h-full lg:hidden">
        <Image src={logo} alt="logo" className="w-full h-fit" />
        <Button
          link="mailto:visemanjezauvijek@gmail.com"
          buttonText="booking"
          className="bg-black"
        />
      </div>
      <div className="flex flex-col justify-between h-full text-xl font-semibold text-black uppercase">
        <a
          href="https://open.spotify.com/artist/7f3cnDkg5S64e0adAlnF5z"
          target="_blank"
        >
          spotify
        </a>
        <a href="https://jasamsvemirko.bandcamp.com/" target="_blank">
          bandcamp
        </a>
        <a href="https://youtube.com" target="_blank">
          youtube
        </a>
        <a href="https://www.instagram.com/mismosvemirko/" target="_blank">
          instagram
        </a>
        <a href="https://www.facebook.com/svemirkosvemirko/" target="_blank">
          facebook
        </a>
      </div>
      <Button
        link="mailto:visemanjezauvijek@gmail.com"
        buttonText="booking"
        className="self-end hidden bg-black lg:flex"
      />
    </footer>
  );
}
