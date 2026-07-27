import { CarFront, Home, MessageCircle, ShoppingBag } from "lucide-react";

const items = [
  { href: "#top", icon: Home, label: "Inicio" },
  { href: "#catalogo", icon: ShoppingBag, label: "Catálogo" },
  { href: "#vehiculo", icon: CarFront, label: "Mi vehículo" },
  { href: "#cotizar", icon: MessageCircle, label: "Cotizar", primary: true },
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Navegación móvil"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-semibold transition-colors ${
              item.primary
                ? "bg-gradient-to-r from-accent to-accent-soft text-black"
                : "text-white/60 active:bg-white/10 active:text-white"
            }`}
          >
            <item.icon className="h-5 w-5" strokeWidth={1.9} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
