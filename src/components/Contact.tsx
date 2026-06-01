import { Mail, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "./FadeIn";

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/000000000000",
    icon: MessageCircle,
  },
  {
    label: "Call",
    href: "tel:+000000000000",
    icon: Phone,
  },
  {
    label: "Email",
    href: "mailto:info@thecyprusvilla.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Private viewing
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.02] sm:text-6xl">
              Request a Private Viewing
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/65">
              To receive more details, schedule a private visit or discuss the
              property, contact us directly.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactLinks.map(({ href, icon: Icon, label }) => (
                <a
                  className="flex items-center justify-center gap-2 border border-white/25 px-5 py-4 text-sm font-medium uppercase tracking-[0.18em] transition hover:border-white hover:bg-white hover:text-black"
                  href={href}
                  key={label}
                >
                  <Icon size={17} strokeWidth={1.5} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <footer className="mt-24 border-t border-white/15 pt-8 text-white">
          <p className="text-sm font-medium tracking-[0.7em]">T C V</p>
          <p className="mt-4 text-sm text-white/60">The Cyprus Villa</p>
          <p className="mt-2 text-sm text-white/60">
            Mediterranean Living Without Compromise
          </p>
        </footer>
      </div>
    </section>
  );
}
