'use client';

import { Gig, gigs } from '@/data/gigs';
import band from '@/public/images/band.webp';
import Image from 'next/image';
import { useEffect } from 'react';

export default function TourDates() {
  useEffect(() => {
    const numStarsOnLoad = window.innerWidth < 1024 ? 50 : 100;

    function createStar() {
      const sectionContainer = document.getElementById('tourDates')!;
      const offsetY = sectionContainer.offsetTop;
      const sectionHeight = sectionContainer.offsetHeight;
      const sectionWidth = sectionContainer.offsetWidth;

      const star = document.createElement('div');
      star.classList.add('star');

      const randomX = Math.random() * sectionWidth;
      const randomY = Math.random() * sectionHeight;
      const randomDelay = Math.random() * 2;
      const randomDuration = 2 + Math.random() * 4;
      const randomSize = Math.random() * 4;
      const randomOpacity = 0.3 + Math.random() * 0.7;

      star.style.left = `${randomX}px`;
      star.style.top = `${offsetY + randomY}px`;
      star.style.animationDelay = `-${randomDelay}s`;
      star.style.animationDuration = `${randomDuration}s`;
      star.style.width = `${randomSize}px`;
      star.style.height = `${randomSize}px`;
      star.style.opacity = `${randomOpacity}`;

      sectionContainer.appendChild(star);
    }

    for (let i = 0; i < numStarsOnLoad; i++) {
      createStar();
    }
  }, []);

  function handleCreateStar(event: React.MouseEvent) {
    const sectionContainer = document.getElementById('tourDates')!;
    const offsetY =
      window.scrollY + sectionContainer.getBoundingClientRect().top;
    const star = document.createElement('div');
    star.classList.add('star', 'star-clicked');

    star.style.left = `${event.clientX}px`;
    star.style.top = `${offsetY + (event.clientY - sectionContainer.getBoundingClientRect().top)}px`;
    star.style.width = `7px`;
    star.style.height = `7px`;
    star.style.opacity = '1';
    star.style.animation = 'none';

    sectionContainer.appendChild(star);

    setTimeout(() => {
      star.style.opacity = '0';
      setTimeout(() => {
        sectionContainer.removeChild(star);
      }, 3000);
    }, 200);
  }

  return (
    <section
      id="tourDates"
      className="tour-background"
      onClick={handleCreateStar}
    >
      <Image
        src={band}
        alt="band"
        className="w-full lg:hidden"
        placeholder="blur"
      />
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
    </section>
  );
}
