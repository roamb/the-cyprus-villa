import { Contact } from "@/components/Contact";
import { FamilyLiving } from "@/components/FamilyLiving";
import { FullVideo } from "@/components/FullVideo";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { KeyFacts } from "@/components/KeyFacts";
import { LocationRadius } from "@/components/LocationRadius";
import { MediterraneanGarden } from "@/components/MediterraneanGarden";
import { OutdoorLiving } from "@/components/OutdoorLiving";

const propertyJsonLd = {
  "@context": "https://schema.org",
  "@type": "SingleFamilyResidence",
  name: "TCV — The Cyprus Villa",
  description:
    "A spacious private residence in coastal Germasogeia, Limassol, with 426 m² of living space, private pool, garden, 5 bedrooms, 6 bathrooms and title deed available.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Germasogeia",
    addressRegion: "Limassol",
    addressCountry: "CY",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 426,
    unitCode: "MTK",
  },
  numberOfRooms: 5,
  numberOfBathroomsTotal: 6,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Private swimming pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Mediterranean garden",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Title deed available",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Fully furnished",
      value: true,
    },
  ],
  image: [
    "/media/gallery/tcv-outside-01-w.webp",
    "/media/gallery/tcv-pool-01-w.webp",
    "/media/gallery/tcv-kitchen-01-w.webp",
    "/media/gallery/tcv-hall-01-w.webp",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }}
      />
      <Hero />
      <Introduction />
      <KeyFacts />
      <FamilyLiving />
      <OutdoorLiving />
      <MediterraneanGarden />
      <LocationRadius />
      <FullVideo />
      <Gallery />
      <Contact />
    </main>
  );
}
