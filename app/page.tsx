import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import TourDates from "@/components/TourDates";

export default function Home() {
  return (
    <main>
      <Hero />
      <div>
        <TourDates />
        <Music />
        <Contact />
      </div>
    </main>
  );
}
