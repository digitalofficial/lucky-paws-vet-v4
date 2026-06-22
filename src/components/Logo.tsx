"use client";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size + 16}
      viewBox="0 0 80 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lucky Paws Veterinary logo"
    >
      {/* Paw pads */}
      <ellipse cx="28" cy="18" rx="8" ry="10" fill="#F59E0B" />
      <ellipse cx="52" cy="18" rx="8" ry="10" fill="#F59E0B" />
      <ellipse cx="16" cy="34" rx="7" ry="9" fill="#F59E0B" />
      <ellipse cx="64" cy="34" rx="7" ry="9" fill="#F59E0B" />

      {/* Main pad with clover / star accent */}
      <path
        d="M40 30 C24 38, 16 52, 24 62 C28 68, 34 70, 40 66 C46 70, 52 68, 56 62 C64 52, 56 38, 40 30Z"
        fill="#F59E0B"
      />

      {/* Lucky star / clover in center of main pad */}
      <path
        d="M40 42 L42 48 L48 48 L43 52 L45 58 L40 54 L35 58 L37 52 L32 48 L38 48Z"
        fill="#FB7185"
      />

      {/* Text: LUCKY PAWS */}
      <text
        x="40"
        y="79"
        textAnchor="middle"
        fontFamily="var(--font-display), Nunito, sans-serif"
        fontWeight="800"
        fontSize="11"
        fill="#FFF8F0"
        letterSpacing="2"
      >
        LUCKY PAWS
      </text>

      {/* Text: VETERINARY */}
      <text
        x="40"
        y="91"
        textAnchor="middle"
        fontFamily="var(--font-body), Inter, sans-serif"
        fontWeight="400"
        fontSize="7.5"
        fill="#9CA3AF"
        letterSpacing="3"
      >
        VETERINARY
      </text>
    </svg>
  );
}
