import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function MediterraneanGarden() {
  return (
    <section className="bg-white px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 sm:aspect-[16/9]">
            <Image
              className="object-cover"
              src="/media/gallery/tcv-outside-01-w.webp"
              alt="The Cyprus Villa exterior framed by mature Mediterranean greenery"
              fill
              sizes="100vw"
            />
          </div>
        </FadeIn>
        <FadeIn
          delay={0.08}
          className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        >
          <h2 className="text-4xl font-medium leading-[1.02] sm:text-6xl">
            Your Own Mediterranean Garden
          </h2>
          <p className="text-lg leading-8 text-neutral-600">
            Surrounded by mature greenery, the residence offers a sense of
            privacy and calm. Citrus trees, mandarin, lemon, loquat and avocado
            bring the feeling of Mediterranean living into everyday life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
