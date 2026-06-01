import Image from "next/image";
import { Check } from "lucide-react";
import { FadeIn } from "./FadeIn";

type FeatureSectionProps = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  features: string[];
  reverse?: boolean;
};

export function FeatureSection({
  id,
  image,
  imageAlt,
  title,
  text,
  features,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section id={id} className="bg-white px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-32">
      <div
        className={`mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 sm:aspect-[5/4]">
            <Image
              className="object-cover"
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="text-4xl font-medium leading-[1.02] sm:text-6xl">
            {title}
          </h2>
          <p className="mt-7 text-lg leading-8 text-neutral-600">{text}</p>
          <ul className="mt-9 space-y-4">
            {features.map((feature) => (
              <li className="flex gap-3 text-base text-neutral-900" key={feature}>
                <Check className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.5} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
