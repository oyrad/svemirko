import { Gig, gigs } from "@/data/gigs";
import marko from "@/public/images/marko.jpg";
import Image from "next/image";

export default function TourDates() {
  return (
    <section>
      <Image src={marko} alt="marko" className="w-full" />
      <div
        className="px-8 pt-12 pb-20 lg:text-center lg:px-0 tour-gradient"
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
    </section>
  );
}
