import Image from "next/image";
import { waFeatured } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";

const conversions = [
  {
    from: "Toyota Hilux",
    to: "GR Sport",
    label: "Hilux Revo 2016+ → GR Sport III",
    desc: "Convierte tu Hilux Revo 2016 en adelante al estilo GR Sport III. Este body kit renueva por completo su apariencia y le da un frente más moderno, deportivo e imponente.",
    image: "/img/hilux-revo-gr-sport-iii.jpg",
    fits: ["Hilux Revo 2016+"],
    tag: "Más popular",
    slug: "kit-hilux-gr-sport",
  },
  {
    from: "Fortuner 2016–2020",
    to: "Legender GR 2021",
    label: "Fortuner 2016–2020 → Legender GR 2021",
    desc: "Transforma tu Fortuner 2016–2020 al estilo Fortuner Legender GR 2021. Este kit de conversión actualiza el frente de tu SUV con una apariencia más moderna, deportiva y exclusiva.",
    image: "/img/fortuner-legender-gr-2021.jpg",
    fits: ["Fortuner 2016–2020"],
    tag: "Nuevo",
    slug: "kit-fortuner-legender",
  },
  {
    from: "Ranger 2012–2021",
    to: "F-150 R 2026",
    label: "Ranger T6/T7/T8 → F-150 R 2026",
    desc: "Kit de actualización para transformar tu Ford Ranger 2012–2021, versiones T6, T7 o T8, al estilo F-150 R 2026. Renueva el frente y dale una presencia más moderna, robusta e imponente.",
    image: "/img/ranger-f150-r-2026.jpg",
    fits: ["Ranger T6/T7/T8 · 2012–2021"],
    tag: "Importación directa",
    slug: "kit-ranger-f150-style",
  },
];

export function FeaturedConversions() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[500px] -translate-y-1/2 rounded-full bg-accent/6 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:py-28">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs text-accent">Conversiones destacadas</p>
            <h2 className="font-display uppercase text-balance mt-3 text-3xl sm:mt-4 sm:text-5xl lg:text-6xl">
              ¿Cómo puede quedar tu vehículo?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
              Estos son nuestros kits más populares. Cada transformación usa piezas
              importadas directamente — compatibilidad garantizada por modelo y año.
            </p>
          </div>
          <a
            href="#catalogo"
            className="shrink-0 text-sm font-semibold text-accent/80 transition-colors hover:text-accent sm:rounded-full sm:border sm:border-white/20 sm:bg-white/5 sm:px-6 sm:py-3 sm:text-white/80 sm:hover:border-accent/40 sm:hover:bg-white/10 sm:hover:text-white"
          >
            Ver catálogo completo →
          </a>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {conversions.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-2xl hover:shadow-accent/10 sm:rounded-3xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                <Image
                  src={c.image}
                  alt={`Kit conversión ${c.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={85}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag badge */}
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-lg">
                  {c.tag}
                </span>

                {/* Conversion label overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {c.from}
                  </span>
                  <span className="text-base font-bold text-accent">→</span>
                  <span className="rounded-lg bg-accent/25 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur">
                    {c.to}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-6">
                <div>
                  <h3 className="font-display uppercase text-xl leading-tight text-white">
                    {c.label}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/60 sm:mt-3 sm:line-clamp-none">{c.desc}</p>
                </div>

                {/* Compatibility */}
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                    Compatible con
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.fits.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-accent/25 bg-accent/8 px-2.5 py-0.5 text-[11px] font-semibold text-accent/90"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={waFeatured(c.label)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-soft py-3.5 text-sm font-bold text-black shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:shadow-accent/35"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quiero este kit
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-white/40">
          ¿No encuentras tu modelo?{" "}
          <a href="#contacto" className="text-accent/80 underline-offset-2 transition-colors hover:text-accent hover:underline">
            Escríbenos y lo buscamos por ti.
          </a>
        </p>

      </div>
    </section>
  );
}
