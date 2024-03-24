"use client";

import logoWhite from "@/public/logos/logo-white.svg";
import logoBlack from "@/public/logos/logo-black.svg";
import hamburger from "@/public/icons/hamburger.svg";
import x from "@/public/icons/x.svg";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        currentScrollPosition < 10 || currentScrollPosition < prevScrollPosition
      );

      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPosition, visible, isExpanded, isScrollingDueToClick]);

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (section) {
      setIsScrollingDueToClick(true);
      setVisible(false);
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsScrollingDueToClick(false), 1000);
    }
  }

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header
      className={cn(
        "flex justify-between text-white items-center px-6 lg:px-20 py-4 lg:py-6 fixed top-0 left-0 w-full z-10 transition-all duration-200",
        prevScrollPosition > 50 && "bg-black",
        !visible && "-translate-y-full"
      )}
    >
      <Image
        src={logoWhite}
        alt="svemirko logo"
        onClick={scrollToTop}
        className="w-16 cursor-pointer lg:w-24"
      />
      <nav className="hidden lg:block">
        <ul className="flex gap-8 text-3xl uppercase">
          <li
            className="px-4 py-2 transition-all duration-100 cursor-pointer hover:text-black hover:bg-white"
            onClick={() => scrollToSection("tourDates")}
          >
            tour
          </li>
          <li
            className="px-4 py-2 transition-all duration-100 cursor-pointer hover:text-black hover:bg-white"
            onClick={() => scrollToSection("music")}
          >
            glazba
          </li>
          <li
            className="px-4 py-2 transition-all duration-100 cursor-pointer hover:text-black hover:bg-white"
            onClick={() => scrollToSection("contact")}
          >
            kontakt
          </li>
        </ul>
      </nav>
      <Image
        src={hamburger}
        alt="open menu"
        className="cursor-pointer lg:hidden"
        onClick={() => setIsExpanded(true)}
      />
      {isExpanded && (
        <nav className="absolute top-0 left-0 w-full px-6 py-4 text-black bg-white lg:hidden h-fit">
          <div className="flex items-center justify-between mb-8">
            <Image
              src={logoBlack}
              alt="svemirko logo"
              onClick={() => {
                scrollToTop();
                setIsExpanded(false);
              }}
              className="w-16 cursor-pointer"
            />
            <Image
              src={x}
              alt="open menu"
              onClick={() => setIsExpanded(false)}
            />
          </div>
          <ul className="flex flex-col items-end gap-12 mb-8 text-3xl uppercase">
            <li
              className="cursor-pointer"
              onClick={() => {
                scrollToSection("tourDates");
                setIsExpanded(false);
              }}
            >
              tour
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                scrollToSection("music");
                setIsExpanded(false);
              }}
            >
              glazba
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                scrollToSection("contact");
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
