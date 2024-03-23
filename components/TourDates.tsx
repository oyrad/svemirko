import { Gig, gigs } from "@/data/gigs";

export default function TourDates() {
  return (
    <section className="mb-20" id="tourDates">
      <div className="flex items-center justify-center mb-20 bg-gray-500 h-80">
        SLIKA
      </div>
      <div className="px-8 lg:text-center lg:px-0">
        <p className="mb-12 text-7xl lg:text-9xl">
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
