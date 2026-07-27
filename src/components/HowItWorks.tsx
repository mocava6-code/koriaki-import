import { waContact } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";

const steps = [
  {
    n: "01",
    title: "Selecciona tu vehículo",
    desc: "Usa nuestro selector de compatibilidad para filtrar los productos disponibles para tu marca, modelo y año exacto.",
  },
  {
    n: "02",
    title: "Encuentra el kit compatible",
    desc: "Explora el catálogo filtrado y elige el kit de conversión o accesorio que buscas. Cada pieza está catalogada por modelo y versión.",
  },
  {
    n: "03",
    title: "Solicita cotización personalizada",
    desc: "Escríbenos por WhatsApp con el producto que te interesa. Te respondemos de inmediato con disponibilidad y precio de importación.",
  },
  {
    n: "04",
    title: "Recibe asesoría de un especialista",
    desc: "Nuestro equipo te confirma la compatibilidad exacta con tu vehículo, te explica el proceso de instalación y coordina el despacho.",
  },
  {
    n: "05",
    title: "Recibe e instala en tu taller",
    desc: "Coordinamos el envío a tu ciudad. Las piezas llegan listas para que tú o tu taller de confianza realicen la instalación.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-y border-white/8 bg-steel/30">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:py-28">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-accent">Proceso de compra</p>
          <h2 className="font-display uppercase text-balance mt-3 text-3xl sm:mt-4 sm:text-5xl lg:text-6xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
            De la búsqueda a la instalación en 5 pasos simples. Sin complicaciones,
            con asesoría personalizada en cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-9 sm:mt-14">
          {/* Vertical connector line — desktop */}
          <div className="absolute left-[2.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent lg:block" />

          <ol className="relative space-y-3 sm:space-y-6">
            {steps.map((s, i) => (
              <li key={s.n} className="flex gap-4 sm:gap-6 lg:gap-10">
                {/* Step number badge */}
                <div className="relative flex shrink-0 flex-col items-center">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-gradient-to-br from-accent/20 to-accent/5 font-display text-base text-accent shadow-lg shadow-accent/10 sm:h-[4.3rem] sm:w-[4.3rem] sm:rounded-2xl sm:text-xl">
                    {s.n}
                  </span>
                  {/* Connector dot */}
                  {i < steps.length - 1 && (
                    <div className="mt-2 flex h-full flex-col items-center lg:hidden">
                      <div className="h-full w-px bg-gradient-to-b from-accent/30 to-transparent" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 pt-1 sm:pb-6 sm:pt-2 lg:pb-8">
                  <h3 className="text-base font-bold leading-snug text-white sm:text-lg">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/8 to-transparent p-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:p-8">
          <div>
            <p className="font-semibold text-white">¿Listo para empezar?</p>
            <p className="mt-1 text-sm text-white/55">
              Escríbenos ahora y recibe asesoría personalizada sin compromiso.
            </p>
          </div>
          <a
            href={waContact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-soft px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:shadow-accent/40 sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hablar con un asesor
          </a>
        </div>

      </div>
    </section>
  );
}
