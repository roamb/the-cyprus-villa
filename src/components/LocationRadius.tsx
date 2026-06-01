import { locationCards } from "@/data/property";
import { FadeIn } from "./FadeIn";

const desktopPositions = [
  "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  "lg:right-8 lg:top-24",
  "lg:right-0 lg:bottom-24",
  "lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2",
  "lg:left-0 lg:bottom-24",
  "lg:left-8 lg:top-24",
];

export function LocationRadius() {
  return (
    <section className="bg-neutral-50 px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <h2 className="text-4xl font-medium leading-[1.02] sm:text-6xl">
            Connected to Everything
          </h2>
          <p className="mt-5 text-lg text-neutral-500">
            Coastal living with everyday convenience.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12 lg:hidden">
          <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4">
            {locationCards.map((card) => (
              <article
                className="min-w-[78vw] snap-center bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.06)]"
                key={card.title}
              >
                <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                  {card.title}
                </p>
                <p className="mt-8 text-5xl font-medium">
                  {card.time}
                </p>
                <p className="mt-5 text-base leading-7 text-neutral-600">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="relative mt-16 hidden min-h-[680px] lg:block"
        >
          <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-center">
            <div>
              <p className="text-lg font-medium tracking-[0.55em]">T C V</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                Germasogeia
              </p>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200" />
          {locationCards.map((card, index) => (
            <article
              className={`absolute w-64 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.06)] ${desktopPositions[index]}`}
              key={card.title}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                  {card.title}
                </p>
                <p className="text-2xl font-medium">
                  {card.time}
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {card.text}
              </p>
            </article>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
