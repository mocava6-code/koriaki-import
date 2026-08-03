import Image from "next/image";
import { waHeroFor } from "@/lib/wa";
import { representatives } from "@/lib/representatives";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[44rem] overflow-hidden sm:min-h-[90svh]">
      {/* Full-bleed background photo */}
      <Image
        src="/img/hero-night.jpg"
        alt="Hilux y Ranger con kits de conversión y accesorios premium"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
      />

      {/* Layered overlays for depth and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[520px] w-[780px] rounded-full bg-accent/12 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[320px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[44rem] max-w-7xl flex-col justify-start px-5 pb-14 pt-24 sm:min-h-[90svh] sm:justify-center sm:px-8 sm:pb-20 sm:pt-32">
        <div className="max-w-[56rem]">

          {/* Eyebrow badge */}
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent/25 bg-black/35 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur sm:gap-2.5 sm:bg-accent/8 sm:px-5 sm:py-2 sm:text-xs sm:tracking-widest">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Importación directa · Toyota y Ford · Stock en Lima
          </div>

          {/* Main headline */}
          <h1
            className="reveal font-display uppercase text-balance mt-5 text-[2.65rem] leading-[0.9] sm:mt-7 sm:text-[5rem] lg:text-[6.5rem]"
            style={{ animationDelay: "60ms" }}
          >
            Transforma tu{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-accent-soft to-accent-2 bg-clip-text text-transparent">
              Toyota
            </span>{" "}
            o{" "}
            <span className="bg-gradient-to-r from-accent-2 via-accent to-accent-soft bg-clip-text text-transparent">
              Ford
            </span>
          </h1>

          {/* Supporting copy */}
          <p
            className="reveal text-balance mt-5 max-w-[34rem] text-sm leading-relaxed text-white/75 sm:mt-7 sm:max-w-2xl sm:text-lg sm:leading-loose"
            style={{ animationDelay: "120ms" }}
          >
            Kits de conversión y accesorios premium para Toyota y Ford, con
            compatibilidad verificada y stock en Lima.
            <span className="hidden sm:inline">
              {" "}Cada pieza es importada directamente y revisada por modelo,
              versión y año.
            </span>
          </p>

          {/* Conversion pills */}
          <div
            className="reveal mt-6 hidden flex-wrap gap-2.5 sm:flex"
            style={{ animationDelay: "160ms" }}
          >
            {[
              "Hilux Revo → GR Sport III",
              "Fortuner → Legender GR 2021",
              "Ranger → F-150 R 2026",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            id="cotizar"
            className="reveal scroll-mt-24 mt-7 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-end"
            style={{ animationDelay: "200ms" }}
          >
            <div>
              <p className="mb-2.5 font-cond text-xs font-bold uppercase tracking-widest text-white/80 sm:mb-3 sm:text-sm sm:text-white">
                Solicitar cotización
              </p>
              <div className="flex flex-wrap gap-3">
                {[representatives.ford, representatives.toyota].map((representative) => (
                  <a
                    key={representative.id}
                    href={waHeroFor(representative.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-28 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-soft px-6 py-3.5 text-center font-cond text-sm font-bold uppercase tracking-widest text-black shadow-xl shadow-accent/30 transition-all hover:scale-105 hover:shadow-accent/50 sm:min-w-32 sm:px-7 sm:py-4 sm:text-base"
                  >
                    {representative.name}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 px-1 py-2 text-center text-xs font-semibold text-white/65 transition-colors hover:text-white sm:rounded-full sm:border sm:border-white/20 sm:bg-white/8 sm:px-8 sm:py-4 sm:text-sm sm:text-white sm:backdrop-blur sm:hover:border-white/40 sm:hover:bg-white/15"
            >
              Explorar catálogo
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Social proof stats */}
          <div
            className="reveal mt-14 hidden max-w-lg grid-cols-3 gap-6 border-t border-white/12 pt-8 sm:grid"
            style={{ animationDelay: "280ms" }}
          >
            {[
              { k: "+500", v: "Pedidos despachados" },
              { k: "8",    v: "Modelos compatibles" },
              { k: "100%", v: "Stock en Lima"        },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-[2.25rem] leading-none text-accent sm:text-[2.75rem]">
                  {s.k}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-white/55 sm:text-sm">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
