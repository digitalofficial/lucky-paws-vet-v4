"use client";

import { useEffect } from "react";

/**
 * Intersection Observer fallback for browsers that do not support
 * scroll-driven animations (animation-timeline: view() / scroll()).
 *
 * If @supports(animation-timeline: view()) is true the CSS handles
 * everything natively. This script only adds .io-visible / .io-hidden
 * classes when the browser lacks support.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // Feature detect — if native scroll-driven animations work, bail out
    if (CSS.supports("animation-timeline: view()")) return;

    const targets = document.querySelectorAll(
      ".text-reveal, .parallax-slow, .scale-in, .clip-reveal"
    );

    // Mark all targets as hidden initially
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

    return () => observer.disconnect();
  }, []);

  return null;
}
