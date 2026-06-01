import { FeatureSection } from "./FeatureSection";

export function OutdoorLiving() {
  return (
    <FeatureSection
      id="outdoor-living"
      image="/media/gallery/tcv-pool-01-w.webp"
      imageAlt="Private pool courtyard and terrace at The Cyprus Villa"
      title="Private Outdoor Living"
      text="At the heart of the property is a private courtyard with a large swimming pool, outdoor shower, BBQ area and green spaces for family gatherings, children’s play and relaxed evenings under the Cyprus sky."
      features={[
        "Large swimming pool",
        "BBQ and terrace area",
        "Outdoor shower and separate pool bathroom",
        "Private green courtyard",
      ]}
      reverse
    />
  );
}
