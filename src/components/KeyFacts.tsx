import { facts } from "@/data/property";
import { FadeIn } from "./FadeIn";

export function KeyFacts() {
  return (
    <section className="bg-neutral-50 px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="sr-only">Key Facts</h2>
          <div className="grid gap-px overflow-hidden bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact, index) => (
              <div
                className="min-h-44 bg-white p-7 sm:p-9 lg:min-h-56"
                key={`${fact.value}-${fact.label}`}
              >
                <p className="text-4xl font-medium leading-none sm:text-5xl">
                  {fact.value}
                </p>
                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-neutral-500">
                  {fact.label}
                </p>
                <span className="mt-10 block h-px w-10 bg-black/30" />
                <span className="sr-only">Fact {index + 1}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
