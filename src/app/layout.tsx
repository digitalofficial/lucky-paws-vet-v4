import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucky Paws Veterinary | Vet Clinic in Tucson, AZ",
  description:
    "Lucky Paws Veterinary provides compassionate, cutting-edge veterinary care for dogs, cats, birds, reptiles, and small animals in Tucson, Arizona. Wellness exams, dental, surgery, emergency, grooming and boarding.",
  keywords: [
    "veterinarian Tucson AZ",
    "vet clinic Tucson",
    "Lucky Paws Veterinary",
    "pet care Tucson",
    "emergency vet Tucson",
    "animal hospital Tucson",
  ],
  openGraph: {
    title: "Lucky Paws Veterinary | Vet Clinic in Tucson, AZ",
    description:
      "Compassionate veterinary care for every paw, wing, and fin in Tucson, Arizona.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "Lucky Paws Veterinary",
    description:
      "Compassionate veterinary care for dogs, cats, birds, reptiles, and small animals in Tucson, AZ.",
    url: "https://luckypawsvet.com",
    telephone: "+15205551234",
    email: "hello@luckypawsvet.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4820 E Sunrise Dr",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      postalCode: "85718",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.2912,
      longitude: -110.8848,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "847",
    },
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
