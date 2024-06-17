'use client';

import logoWhite from '@/public/logos/logo-white.svg';
import logoBlack from '@/public/logos/logo-black.svg';
import hamburgerWhite from '@/public/icons/hamburger-white.svg';
import x from '@/public/icons/x.svg';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrollingDueToClick, setIsScrollingDueToClick] = useState(false);

  useEffect(() => {
    if (window.scrollY > 10) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded || isScrollingDueToClick) return;

      const currentScrollPosition = window.scrollY;

      setVisible(
        currentScrollPosition < 10 ||
          currentScrollPosition < prevScrollPosition,
      );

      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPosition, visible, isExpanded, isScrollingDueToClick]);

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (section) {
      setIsScrollingDueToClick(true);
      setVisible(false);
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrollingDueToClick(false), 1000);
    }
  }

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <header
      className={cn(
        'flex justify-between text-white items-center px-6 lg:px-20 py-4 lg:py-6 fixed top-0 left-0 w-full z-10 transition-all duration-200',
        prevScrollPosition > 50 && visible && 'bg-black shadow-md',
        !visible && '-translate-y-full',
      )}
    >
      <Image
        src={logoWhite}
        alt="svemirko logo"
        onClick={() => {
          scrollToTop();
          setIsExpanded(false);
        }}
        className="z-10 w-16 cursor-pointer lg:w-24"
      />
      <nav className="hidden lg:block">
        <ul
          className={cn(
            'flex gap-8 text-3xl font-semibold text-black uppercase',
            prevScrollPosition > 50 && visible && 'text-white',
          )}
        >
          <li
            className={cn(
              'px-6 py-2 text-white transition-all duration-100 cursor-pointer hover:text-white hover:bg-svemirko-yellow',
              prevScrollPosition > 50 && visible && 'text-white',
            )}
            onClick={() => scrollToSection('music')}
          >
            glazba
          </li>
          <li
            className={cn(
              'px-6 py-2 text-white transition-all duration-100 cursor-pointer hover:text-white hover:bg-svemirko-red',
              prevScrollPosition > 50 && visible && 'text-white',
            )}
            onClick={() => scrollToSection('shop')}
          >
            shop
          </li>
          <li
            className={cn(
              'px-6 py-2 text-white transition-all duration-100 cursor-pointer hover:text-white hover:bg-svemirko-green',
              prevScrollPosition > 50 && visible && 'text-white',
            )}
            onClick={() => scrollToSection('tourDates')}
          >
            tour
          </li>
          <li
            className={cn(
              'px-6 py-2 text-white transition-all duration-100 cursor-pointer hover:text-white hover:bg-svemirko-blue',
              prevScrollPosition > 50 && visible && 'text-white',
            )}
            onClick={() => scrollToSection('contact')}
          >
            kontakt
          </li>
        </ul>
      </nav>
      <Image
        src={hamburgerWhite}
        alt="open menu"
        className="cursor-pointer lg:hidden"
        onClick={() => setIsExpanded(true)}
      />
      {isExpanded && (
        <nav
          className={cn(
            'absolute top-0 left-0 w-full px-6 py-4 font-medium text-black bg-white lg:hidden',
          )}
        >
          <div className="flex justify-between mb-12">
            <Image
              src={logoBlack}
              alt="svemirko logo"
              onClick={() => {
                scrollToTop();
                setIsExpanded(false);
              }}
              className="z-10 w-16 cursor-pointer lg:w-24"
            />
            <Image
              src={x}
              alt="open menu"
              onClick={() => setIsExpanded(false)}
            />
          </div>

          <ul className="flex flex-col items-end gap-12 mb-8 text-3xl uppercase">
            <li
              className="pr-2 border-r-4 cursor-pointer border-svemirko-yellow"
              onClick={() => {
                scrollToSection('music');
                setIsExpanded(false);
              }}
            >
              glazba
            </li>
            <li
              className="pr-2 border-r-4 cursor-pointer border-svemirko-red"
              onClick={() => {
                scrollToSection('shop');
                setIsExpanded(false);
              }}
            >
              shop
            </li>
            <li
              className="pr-2 border-r-4 cursor-pointer border-svemirko-green"
              onClick={() => {
                scrollToSection('tourDates');
                setIsExpanded(false);
              }}
            >
              tour
            </li>
            <li
              className="pr-2 border-r-4 cursor-pointer border-svemirko-blue"
              onClick={() => {
                scrollToSection('contact');
                setIsExpanded(false);
              }}
            >
              kontakt
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
