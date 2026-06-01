import { ArrowDown } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="min-h-svh bg-white px-4 pb-[clamp(1rem,2.4svh,2.5rem)] pt-[clamp(2rem,4svh,3rem)] text-black sm:px-8 lg:px-12 lg:pb-10 lg:pt-14">
      <FadeIn className="mx-auto flex min-h-[calc(100svh_-_clamp(3rem,6.4svh,5.5rem))] max-w-6xl flex-col items-center justify-between gap-[clamp(1rem,2.8svh,2rem)] lg:min-h-0 lg:justify-start lg:gap-0">
        <p className="text-center text-[15px] font-medium leading-none tracking-[0.92em] sm:text-base sm:tracking-[1.05em]">
          T C V
        </p>

        <div className="w-full max-w-[620px] overflow-hidden bg-neutral-100 sm:max-w-[760px] lg:mt-12 lg:max-w-[760px] xl:max-w-[880px] 2xl:max-w-[960px]">
          <video
            className="aspect-video w-full object-cover"
            src="/media/hero/tcv-loop.webm"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Looping exterior video of TCV The Cyprus Villa"
          />
        </div>

        <div className="mx-auto w-full max-w-[calc(100vw-32px)] text-center sm:max-w-4xl lg:mt-6 xl:mt-5">
          <h1 className="font-medium leading-[0.9]">
            <span className="block whitespace-nowrap text-[clamp(2rem,8.6vw,4.2rem)] tracking-normal sm:text-7xl lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
              Mediterranean Living
            </span>
            <span className="block whitespace-nowrap text-[clamp(2rem,8.6vw,4.2rem)] tracking-normal sm:text-7xl lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
              Without Compromise
            </span>
          </h1>
          <p className="mt-[clamp(0.55rem,1.6svh,0.9rem)] text-[clamp(0.7rem,2.9vw,0.875rem)] uppercase tracking-[0.16em] text-neutral-500 sm:tracking-[0.22em] lg:mt-6 lg:text-sm">
            <span className="block lg:inline">Private Residence in</span>{" "}
            <span className="block lg:inline">Germasogeia, Limassol</span>
          </p>
        </div>

        <a
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-black"
          href="#introduction"
          aria-label="Scroll to introduction"
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </a>
      </FadeIn>
    </section>
  );
}
