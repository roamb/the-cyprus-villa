import { FadeIn } from "./FadeIn";

export function Introduction() {
  return (
    <section
      id="introduction"
      className="bg-white px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            The Cyprus Villa
          </p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.02] sm:text-6xl">
            Private Residence in Coastal Germasogeia
          </h2>
        </FadeIn>
        <FadeIn delay={0.08} className="space-y-7 text-xl leading-9 text-neutral-900">
          <p>
            A spacious private residence in one of Limassol’s most desirable
            coastal areas — designed for family living, privacy and
            Mediterranean outdoor life.
          </p>
          <p className="text-base leading-8 text-neutral-500 sm:text-lg">
            Set on a quiet green street, the property combines generous interior
            spaces, a private courtyard, a swimming pool and easy access to the
            coast, highway and everyday amenities.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
