"use client";

import { useEffect } from "react";

/**
 * Intersection Observer fallback for browsers that do not support
 * scroll-driven animations (animation-timeline: view() / scroll()).
 * Also handles hero scroll-fade for all browsers.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // Hero scroll fade — works in all browsers
    const heroSection = document.querySelector(".hero-section");
    let cleanupScroll: (() => void) | undefined;

    if (heroSection) {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.3) {
          heroSection.classList.add("scrolled-past");
        } else {
          heroSection.classList.remove("scrolled-past");
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      cleanupScroll = () => window.removeEventListener("scroll", handleScroll);
    }

    // IO fallback for other animations
    if (CSS.supports("animation-timeline: view()")) return cleanupScroll;

    const targets = document.querySelectorAll(
      ".text-reveal, .parallax-slow, .scale-in, .clip-reveal"
    );

    targets.forEach((el) => {
      el.classList.add("io-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("io-hidden");
            entry.target.classList.add("io-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      cleanupScroll?.();
      observer.disconnect();
    };
  }, []);

  return null;
}
