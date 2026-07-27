import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { VehicleSelector } from "@/components/VehicleSelector";
import { Trust } from "@/components/Trust";
import { FeaturedConversions } from "@/components/FeaturedConversions";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { WhyKoriaki } from "@/components/WhyKoriaki";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <Providers>
      <Nav />
      <main className="flex-1 pb-20 md:pb-0">
        {/* 1. Hero — first impression, brand identity */}
        <Hero />

        {/* 2. Vehicle Selector — immediate relevance, find compatible products */}
        <VehicleSelector />

        {/* 3. Trust bar — quick credibility signals */}
        <div className="mt-12 sm:mt-20">
          <Trust />
        </div>

        {/* 4. Featured Conversions — inspire, show what's possible */}
        <FeaturedConversions />

        {/* 5. How It Works — reduce friction, explain the buying process */}
        <HowItWorks />

        {/* 6. Services — what we do and how we operate */}
        <Services />

        {/* 7. Products catalogue — browse and quote */}
        <Products />

        {/* 8. Full catalogue CTA banner */}
        <section className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-accent/20 via-steel to-steel p-6 sm:rounded-3xl sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-xs text-accent">Catálogo completo</p>
                <h3 className="font-display uppercase mt-2 text-2xl sm:text-4xl">
                  Explora todos nuestros productos
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                  Busca por modelo, categoría o nombre. Solicita una cotización
                  personalizada por WhatsApp en segundos.
                </p>
              </div>
              <a
                href="/tienda"
                className="w-full shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-soft px-7 py-3.5 text-center font-cond text-sm font-bold uppercase tracking-wide text-black shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:shadow-accent/35 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Ver catálogo →
              </a>
            </div>
          </div>
        </section>

        {/* 9. Why Koriaki — value proposition, build trust before contact */}
        <WhyKoriaki />

        {/* 10. Testimonials — social proof */}
        <Testimonials />

        {/* 11. About — brand story, human connection */}
        <About />

        {/* 12. Contact — conversion endpoint */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileBottomNav />
    </Providers>
  );
}
