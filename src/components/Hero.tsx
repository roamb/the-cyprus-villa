import { ArrowDown } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="min-h-svh bg-white px-5 pb-10 pt-10 text-black sm:px-8 sm:pt-12 lg:px-12 lg:pt-14">
      <FadeIn className="mx-auto flex max-w-6xl flex-col items-center">
        <p className="text-center text-[15px] font-medium leading-none tracking-[0.92em] sm:text-base sm:tracking-[1.05em]">
          T C V
        </p>

        <div className="mt-9 w-full overflow-hidden bg-neutral-100 sm:mt-16 lg:mt-12 lg:max-w-[760px] xl:max-w-[880px] 2xl:max-w-[960px]">
          <video
            className="aspect-[1/1] w-full object-cover sm:aspect-[16/10] lg:aspect-[16/9]"
            src="/media/hero/tcv-loop.webm"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Looping exterior video of TCV The Cyprus Villa"
          />
        </div>

        <div className="mx-auto mt-8 max-w-4xl text-center sm:mt-14 lg:mt-6 xl:mt-5">
          <h1 className="text-5xl font-medium leading-[0.96] sm:text-7xl lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
            <span className="block lg:whitespace-nowrap">
              Mediterranean Living
            </span>
            <span className="block lg:whitespace-nowrap">
              Without Compromise
            </span>
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.22em] text-neutral-500">
            Private Residence in Germasogeia, Limassol
          </p>
        </div>

        <a
          className="mt-12 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-black"
          href="#introduction"
          aria-label="Scroll to introduction"
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </a>
      </FadeIn>
    </section>
  );
}
