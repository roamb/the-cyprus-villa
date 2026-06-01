import { FadeIn } from "./FadeIn";

export function FullVideo() {
  return (
    <section className="bg-white px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-medium leading-[1.02] sm:text-6xl">
            Explore the Property from Above
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Aerial footage reveals the scale of the residence, its private
            outdoor areas and its close connection to the Limassol coastline.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mx-auto mt-12 max-w-5xl">
          <div className="aspect-video w-full overflow-hidden bg-neutral-100">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/RpX2GF9yyrE"
              title="TCV The Cyprus Villa aerial property video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
