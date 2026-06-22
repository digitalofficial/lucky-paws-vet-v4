"use client";

import { useEffect, useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
}

export default function WordReveal({ text, className = "" }: WordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLSpanElement>(".word-reveal-word");

    // Use IntersectionObserver to stagger word visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Once the container is visible, reveal words with stagger
            words.forEach((word, i) => {
              setTimeout(() => {
                word.classList.add("visible");
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`word-reveal-container ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word-reveal-word">
          {word}
        </span>
      ))}
    </div>
  );
}
