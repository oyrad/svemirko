import { Gig, gigs } from "@/data/gigs";
import band from "@/public/images/band.webp";
import Image from "next/image";

export default function TourDates() {
  return (
    <section>
      <Image src={band} alt="band" className="w-full" />
      <div
        className="px-8 pt-12 pb-12 lg:text-center lg:px-0 tour-gradient"
        id="tourDates"
      >
        <p className="mb-12 text-7xl lg:hidden">Tour 2024</p>
        <p className="hidden mb-12 lg:block text-9xl">
          Tour <br /> 2024
        </p>
        {gigs.map((gig: Gig, index: number) => (
          <div key={index} className="mb-8 text-xl lg:text-2xl">
            <p className="mb-1">{gig.date}</p>
            <p>
              {gig.venue} - {gig.city}
            </p>
          </div>
        ))}
      </div>
      <div className="grid w-full h-16 grid-cols-4 lg:h-28">
        <div className="bg-svemirko-yellow"></div>
        <div className="bg-svemirko-red"></div>
        <div className="bg-svemirko-green"></div>
        <div className="bg-svemirko-blue"></div>
      </div>
    </section>
  );
}
