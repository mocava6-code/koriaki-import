"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { waQuote } from "@/lib/wa";

const links = [
  { href: "/tienda",    label: "Catálogo"  },
  { href: "#catalogo",  label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto",  label: "Contacto"  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-lg border-b border-white/10 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar — hidden when scrolled */}
      {!scrolled && (
        <div className="hidden bg-gradient-to-r from-accent via-accent-soft to-accent-2 text-center text-[11px] font-bold uppercase tracking-widest text-black sm:block">
          <div className="mx-auto max-w-7xl px-8 py-2">
            🚚 Envíos a todo el Perú · Importación directa · Stock en Ate, Lima
          </div>
        </div>
      )}

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 py-2 sm:px-8 md:h-20">
        <a href="#top" className="group">
          <Logo size="lg" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waQuote}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-accent to-accent-soft px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:shadow-accent/35"
          >
            Cotizar
          </a>
        </div>

        <a
          href="#cotizar"
          className="rounded-full border border-accent/35 bg-accent/10 px-4 py-2 font-cond text-xs font-bold uppercase tracking-wide text-accent md:hidden"
        >
          Cotizar
        </a>
      </nav>
    </header>
  );
}
