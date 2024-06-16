import Hero from '@/components/Hero';
import Music from '@/components/Music';
import TourDates from '@/components/TourDates';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <div>
        <Music />

        <div className="grid w-full h-12 grid-cols-4 lg:h-20">
          <div className="bg-svemirko-yellow"></div>
          <div className="bg-svemirko-red"></div>
          <div className="bg-svemirko-green"></div>
          <div className="bg-svemirko-blue"></div>
        </div>

        <TourDates />
        <Contact />
      </div>
    </main>
  );
}
