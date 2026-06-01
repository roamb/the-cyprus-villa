import Image from "next/image";
import { galleryImages } from "@/data/property";
import { FadeIn } from "./FadeIn";

export function Gallery() {
  return (
    <section className="bg-white px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-medium leading-none sm:text-6xl">
            Gallery
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-14">
          {galleryImages.map((image, index) => (
            <FadeIn as="figure" delay={index * 0.04} key={image.src}>
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 sm:aspect-[5/4]">
                <Image
                  className="object-cover"
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 text-sm uppercase tracking-[0.22em] text-neutral-500">
                {image.caption}
              </figcaption>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
