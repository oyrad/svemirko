'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const desktopImages = [
  '/images/band.webp',
  '/images/contact-1.webp',
  '/images/contact-2.webp',
];

const mobileImages = ['/images/hero-mobile.webp'];

export default function Hero() {
  const [images, setImages] = useState<string[]>(() =>
    window.innerWidth > 1024 ? desktopImages : mobileImages,
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className="w-full h-svh lg:h-screen relative">
      <AnimatePresence initial={false}>
        {images.length > 0 && (
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="band"
            className="w-full h-full object-cover lg:object-left-top absolute top-0 left-0 object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
