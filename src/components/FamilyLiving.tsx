import { FeatureSection } from "./FeatureSection";

export function FamilyLiving() {
  return (
    <FeatureSection
      id="family-living"
      image="/media/gallery/tcv-kitchen-01-w.webp"
      imageAlt="Spacious kitchen and dining area at The Cyprus Villa"
      title="Designed Around Family Life"
      text="The home offers a generous kitchen and dining area, spacious living spaces, a relaxation room and a private office or playroom — creating a natural flow for family meals, quiet evenings and time with guests."
      features={[
        "Spacious kitchen and dining area",
        "Living room and relaxation room",
        "Office / playroom",
        "Direct access to utility and garage areas",
      ]}
    />
  );
}
