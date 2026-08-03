// ─────────────────────────────────────────────────────────────────────────────
// KORIAKI IMPORT — Site data
//
// Single source of truth for all content, types, and helpers.
// PRICING: prices are NOT displayed on the website. Every product CTA
// routes to a personalized WhatsApp quotation. Do not add price fields
// to Product or render them in any UI component.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "KORIAKI IMPORT",
  tagline: "Kits de conversión y accesorios premium para Toyota y Ford",
  phone: "976 382 433",
  whatsapp: "51976382433", // Perú (+51) 976 382 433
  email: "koriakioperaciones@gmail.com",
  address: "Separadora Industrial, Ate — Lima, Perú",
  hours: "Lun. a sáb. · 9:00 a. m. – 6:00 p. m.",
  instagram: "https://www.instagram.com/koriaki.import",
};

// ─── Vehicle compatibility ────────────────────────────────────────────────────

export type Fit =
  // Toyota
  | "Hilux"
  | "Fortuner"
  | "Fortuner Legender"
  | "Revo"
  // Ford
  | "Ranger"
  | "Ranger Raptor"
  | "F150"
  | "Silverado"
  // Generic
  | "Universal";

// ─── Icon keys ───────────────────────────────────────────────────────────────

export type IconKey =
  | "convert"
  | "headlight"
  | "taillight"
  | "step"
  | "rain"
  | "led"
  | "bar"
  | "wheel"
  | "bull"
  | "rack"
  | "hood"
  | "fender"
  | "fog";

// ─── Product type ─────────────────────────────────────────────────────────────
// NOTE: No price field. Pricing is handled via personalized WhatsApp quotation.

export type Product = {
  /** Stable URL slug — never change once published (breaks indexed URLs) */
  slug: string;
  /** Internal catalog code, when supplied by the official spreadsheet. */
  sku?: string;
  name: string;
  desc: string;
  /** Short label highlighting the vehicle generation upgrade, e.g. "Hilux → GR Sport" */
  transforms?: string;
  unit?: string;
  tag?: string;
  image: string;
  /** Additional product-specific photos, ordered after the main image. */
  images?: string[];
  fits: Fit[];
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: IconKey;
  image: string;
  products: Product[];
};

// ─────────────────────────────────────────────────────────────────────────────
// CATALOG
// ─────────────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  // ── 1. Conversion Kits ──────────────────────────────────────────────────
  {
    id: "kits-conversion",
    title: "Kits de Conversión",
    subtitle: "Transforma tu vehículo al estilo de la generación más reciente",
    icon: "convert",
    image: "/img/raptor-yellow.jpg",
    products: [
      {
        slug: "kit-hilux-gr-sport",
        sku: "TKHGR01",
        name: "Kit Conversión Hilux Revo 2016+ → GR Sport III",
        desc: "Kit de carrocería GR Sport 2023 para Hilux Revo 2016–2020. Versión completa con faros delanteros y posteriores.",
        transforms: "Hilux Revo 2016+ → GR Sport III",
        tag: "DESTACADO",
        image: "/img/hilux-revo-gr-sport-iii.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "kit-hilux-raptor-style",
        sku: "FREJRAPF150",
        name: "Kit Conversión F-150 XLT 2025 → Raptor 2026",
        desc: "Kit de conversión diseñado para actualizar tu Ford F-150 XLT 2025 al estilo Raptor 2026, renovando su apariencia con un frente más agresivo, deportivo e imponente.",
        transforms: "F-150 XLT 2025 → Raptor 2026",
        image: "/img/f150-xlt-2025-raptor-2026.jpg",
        fits: ["F150"],
      },
      {
        slug: "kit-fortuner-legender",
        sku: "TKFGR01",
        name: "Kit Conversión Fortuner 2016–2020 → Legender GR 2021",
        desc: "Kit de conversión diseñado para transformar tu Fortuner 2016–2020 al estilo Legender GR 2021, renovando el frente con una apariencia más moderna, deportiva y exclusiva.",
        transforms: "Fortuner 2016–2020 → Legender GR 2021",
        tag: "NUEVO",
        image: "/img/fortuner-legender-gr-2021.jpg",
        fits: ["Fortuner"],
      },
      {
        slug: "kit-ranger-f150-style",
        sku: "FKRF150T678",
        name: "Kit Actualización Ranger T6/T7/T8 → F-150 R 2026",
        desc: "Kit diseñado para transformar tu Ford Ranger 2012–2021, versiones T6, T7 o T8, al estilo F-150 R 2026, renovando el frente con una apariencia más moderna, robusta e imponente.",
        transforms: "Ranger 2012–2021 → F-150 R 2026",
        image: "/img/ranger-f150-r-2026.jpg",
        fits: ["Ranger"],
      },
      {
        slug: "kit-revo-facelift",
        sku: "TKRV01",
        name: "Kit Actualización Hilux Revo 2016–2018 → Revo 2021",
        desc: "Kit de actualización para transformar la apariencia de una Hilux Revo 2016–2018 al estilo Revo 2021.",
        transforms: "Revo 2016–2018 → Revo 2021",
        image: "/img/catalog/toyota/tkrv01.jpg",
        images: ["/img/catalog/toyota/tkrv01-2.jpg", "/img/catalog/toyota/tkrv01-3.png"],
        fits: ["Revo"],
      },
      {
        slug: "kit-hilux-gr-sport-sin-faros",
        sku: "TKHGR01",
        name: "Kit Carrocería Hilux GR Sport 2023 sin faros",
        desc: "Body kit para actualizar Hilux 2016–2020 al estilo GR Sport 2023. Versión sin faros delanteros ni posteriores.",
        transforms: "Hilux 2016–2020 → GR Sport 2023",
        image: "/img/hilux-revo-gr-sport-iii.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "kit-ranger-t9-a-raptor-2022",
        name: "Kit Ranger T9 2022+ → Ranger Raptor",
        desc: "Kit de actualización para Ranger T9 2022 en adelante, compatible con versiones XLT, Wildtrak y Sport.",
        transforms: "Ranger T9 → Ranger Raptor",
        tag: "DESTACADO",
        image: "/img/catalog/ford/kit-de-t9-ranger-2022-a-ranger-raptor-compatible-con-xlt-wildtrake-sport.png",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "kit-carroceria-delantera-ranger-raptor-2022",
        name: "Kit Carrocería Delantera Ford Ranger Raptor 2022",
        desc: "Conjunto de carrocería frontal para actualizar el frente de Ford Ranger Raptor 2022.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/ford/kit-carrocera-delantera-para-ford-raptor-2022.png",
        fits: ["Ranger Raptor"],
      },
      {
        slug: "kit-accesorios-ford-ranger-t6-t9",
        name: "Kit de Accesorios Ford Ranger T6 a T9",
        desc: "Conjunto de accesorios exteriores para camionetas Ford Ranger de las generaciones T6, T7, T8 y T9.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/kit-de-accesorios-ford-para-camionetas-pickup-t6-a-t9.png",
        fits: ["Ranger"],
      },
    ],
  },

  // ── 2. Front LED Headlights ─────────────────────────────────────────────
  {
    id: "faros-led",
    title: "Faros LED Delanteros",
    subtitle: "Iluminación de alto rendimiento con DRL secuencial y proyector LED",
    icon: "headlight",
    image: "/img/led-angel.jpg",
    products: [
      {
        slug: "faros-led-hilux-2016-2023",
        sku: "TLDHL01",
        name: "Faros LED Modificados Hilux 2016 con DRL Dinámico",
        desc: "Conjunto de faros delanteros LED modificados con luz diurna DRL dinámica para Hilux 2016.",
        unit: "par",
        image: "/img/led-angel.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "faros-led-hilux-2021-modificados",
        sku: "TLDHL02",
        name: "Faros LED Modificados Hilux Revo 2021",
        desc: "Faros delanteros LED de estilo modificado para Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tldhl02.png",
        fits: ["Hilux"],
      },
      {
        slug: "faros-led-hilux-gr-sport-style",
        sku: "TLDHL03",
        name: "Faros LED Hilux Estilo GR Sport",
        desc: "Conjunto de faros delanteros estilo GR Sport para Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tldhl03.png",
        fits: ["Hilux"],
      },
      {
        slug: "faros-led-hilux-tres-lentes",
        sku: "TLDHL04",
        name: "Faros LED Hilux de 3 Lentes",
        desc: "Faros delanteros LED de tres lentes para Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tldhl04.png",
        fits: ["Hilux"],
      },
      {
        slug: "faros-led-hilux-dinamicos-drl-2021",
        sku: "TLDHL05-02",
        name: "Faros Delanteros Dinámicos Hilux Revo 2021",
        desc: "Faros delanteros dinámicos con luces de circulación diurna DRL para Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tldhl05-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "faros-delanteros-ranger-2022-originales",
        sku: "FFDORAN2022",
        name: "Faros Delanteros Originales Ford Ranger 2022+",
        desc: "Conjunto de faros delanteros originales para Ford Ranger T9 2022 en adelante.",
        unit: "par",
        image: "/img/catalog/ford/ffdoran2022.jpg",
        images: ["/img/catalog/ford/ffdoran2022-2.png"],
        fits: ["Ranger"],
      },
      {
        slug: "faros-delanteros-ranger-2022-modificados",
        sku: "FFDMRAN2022",
        name: "Faros Delanteros Modificados Ford Ranger 2022+",
        desc: "Conjunto de faros delanteros modificados para Ford Ranger T9 2022 en adelante.",
        unit: "par",
        image: "/img/catalog/ford/ffdmran2022.png",
        images: ["/img/catalog/ford/ffdmran2022-2.jpg", "/img/catalog/ford/ffdmran2022-3.jpg"],
        fits: ["Ranger"],
      },
      {
        slug: "faros-delanteros-ford-dos-lentes-2022",
        name: "Faros Delanteros Ford de 2 Lentes 2022+",
        desc: "Faros delanteros de dos lentes compatibles con camionetas pickup Ford 2022 en adelante.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/faro-delantero-con-2-lentes-compatible-para-una-camioneta-pickup-2022.jpg",
        fits: ["Ranger"],
      },
      {
        slug: "faros-delanteros-ford-alta-densidad-2022",
        name: "Faros Delanteros Ford de Alta Densidad 2022+",
        desc: "Faros delanteros de alta densidad compatibles con camionetas pickup Ford 2022 en adelante.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/faro-delantero-alta-densidad-compatible-para-una-camioneta-pickup-2022.jpg",
        fits: ["Ranger"],
      },
      {
        slug: "faro-delantero-revo-travo",
        name: "Faro Delantero Hilux Revo Estilo Travo",
        desc: "Faro delantero para actualización estética de Toyota Hilux Revo al estilo Travo.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/faro-delantero-para-camioneta-revo-modelo-travo.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "faro-delantero-revo-chrome",
        name: "Faro Delantero Hilux Revo Chrome",
        desc: "Faro delantero con acabado cromado para Toyota Hilux Revo.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/faro-delantero-para-camioneta-revo-chrome.png",
        fits: ["Hilux", "Revo"],
      },
    ],
  },

  // ── 3. Tail Lights ──────────────────────────────────────────────────────
  {
    id: "faros-posteriores",
    title: "Faros Posteriores",
    subtitle: "Stops LED con intermitente secuencial dinámico",
    icon: "taillight",
    image: "/img/taillight.jpg",
    products: [
      {
        slug: "stops-led-hilux",
        sku: "TLTHLGR01",
        name: "Faros Posteriores Hilux Estilo GR",
        desc: "Faros posteriores estilo GR para Toyota Hilux Revo 2016–2024.",
        unit: "par",
        image: "/img/catalog/toyota/tlthlgr01.png",
        images: ["/img/catalog/toyota/tlthlgr01-2.png"],
        fits: ["Hilux"],
      },
      {
        slug: "stops-led-fortuner",
        sku: "TLTF01",
        name: "Faros Posteriores LED Fortuner 2016–2024",
        desc: "Conjunto de luces posteriores LED para Toyota Fortuner 2016–2024.",
        unit: "par",
        image: "/img/catalog/toyota/tltf01.png",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "stops-led-ranger",
        sku: "FLTRAO2022T9",
        name: "Faros Posteriores Originales Ranger T9 2022+",
        desc: "Luces posteriores originales para Ford Ranger T9 2022 en adelante, con luz de posición de arranque.",
        unit: "par",
        image: "/img/catalog/ford/fltrao2022t9.jpg",
        fits: ["Ranger"],
      },
      {
        slug: "stops-led-hilux-smoke-dinamicos",
        sku: "TLTHLSM01",
        name: "Faros Posteriores Hilux Smoke OE/Dinámicos",
        desc: "Luces posteriores ahumadas con estilo OE y función dinámica para Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlthlsm01.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "stops-led-hilux-rojo-negro",
        sku: "TLTHLRN01",
        name: "Faros Posteriores Hilux Rojo y Negro",
        desc: "Luces posteriores LED con acabado rojo y negro para Hilux Revo 2021.",
        unit: "par",
        image: "/img/taillight.jpg",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "stops-led-hilux-rojo-oe-dinamico",
        sku: "TLTHLR01-02",
        name: "Faros Posteriores Hilux Rojos OE/Dinámicos",
        desc: "Luces posteriores rojas con estilo OE y función dinámica para Hilux 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlthlr01-02.png",
        fits: ["Hilux"],
      },
      {
        slug: "stops-led-hilux-rojo-smoke",
        sku: "TLTHL01-02",
        name: "Faros Posteriores LED Hilux Rojo/Smoke",
        desc: "Conjunto de luces posteriores LED rojo y ahumado para Hilux 2016–2025.",
        unit: "par",
        image: "/img/catalog/toyota/tlthl01-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "stops-led-ranger-modificados-sensor",
        sku: "FLTRAM202201",
        name: "Faros Posteriores Modificados Ranger 2022+ con Sensor",
        desc: "Luces posteriores modificadas para Ranger 2022+, compatibles con sensor de punto ciego.",
        unit: "par",
        image: "/img/catalog/ford/fltram202201.jpg",
        fits: ["Ranger"],
      },
      {
        slug: "stops-led-ranger-modificados-sensor-v2",
        sku: "FLTRAM202202",
        name: "Faros Posteriores Modificados Ranger 2022+ – Variante 2",
        desc: "Segunda variante de luces posteriores modificadas para Ranger 2022+, compatible con sensor de punto ciego.",
        unit: "par",
        image: "/img/catalog/ford/fltram202202.jpg",
        images: ["/img/catalog/ford/fltram202202-2.jpg"],
        fits: ["Ranger"],
      },
      {
        slug: "faro-posterior-revo-travo",
        name: "Faro Posterior Hilux Revo Estilo Travo",
        desc: "Faro posterior para actualización estética de Toyota Hilux Revo al estilo Travo.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/faro-trasero-para-camioneta-revo-modelo-travo.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "faro-posterior-ford-importacion",
        name: "Faros Posteriores para Camioneta Ford",
        desc: "Conjunto de luces posteriores para camionetas pickup Ford.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/faro-posterior-para-camioneta-ford.jpg",
        fits: ["Ranger"],
      },
    ],
  },

  // ── 4. Front Bumpers ────────────────────────────────────────────────────
  {
    id: "parachoques-delanteros",
    title: "Parachoques Delanteros",
    subtitle: "Parachoques frontales de alto impacto, estilo OEM y offroad",
    icon: "bull",
    image: "/img/bullbar.jpg",
    products: [
      {
        slug: "parachoques-delantero-hilux-gr",
        name: "Protector de Cárter Hilux GR Sport",
        desc: "Protector inferior de cárter estilo GR Sport para camioneta Toyota Hilux.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/protector-de-carter-gr-sport-para-camioneta-pickup.png",
        fits: ["Hilux"],
      },
      {
        slug: "parachoques-delantero-ranger-raptor",
        sku: "FPDF150R2026",
        name: "Parachoques Delantero F-150 XLT 2025 → Raptor 2026",
        desc: "Parachoques delantero para la conversión de Ford F-150 XLT 2025 al modelo Raptor 2026.",
        image: "/img/catalog/ford/fpdf150r2026.png",
        fits: ["F150"],
      },
      {
        slug: "parachoques-delantero-fortuner",
        name: "Protector de Cárter Ford Ranger",
        desc: "Protector inferior de cárter para camioneta pickup Ford Ranger.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/protector-de-carter-para-camioneta-pickup.png",
        fits: ["Ranger"],
      },
    ],
  },

  // ── 5. Rear Bumpers ─────────────────────────────────────────────────────
  {
    id: "parachoques-traseros",
    title: "Parachoques Traseros",
    subtitle: "Parachoques posteriores con diseño deportivo y acabado premium",
    icon: "bull",
    image: "/img/trx-rear.jpg",
    products: [
      {
        slug: "parachoques-trasero-hilux",
        sku: "FPTF150R2026",
        name: "Parachoques Trasero F-150 2015–2021",
        desc: "Parachoques trasero para Ford F-150 2015–2021, incluido en la línea de conversión XLT 2025 a Raptor 2026.",
        image: "/img/catalog/ford/fptf150r2026.png",
        fits: ["F150"],
      },
      {
        slug: "parachoques-trasero-ranger",
        sku: "FPTOEM2022",
        name: "Parachoques Trasero OEM Ford Ranger 2022+",
        desc: "Parachoques trasero de especificación OEM para Ford Ranger 2022 en adelante.",
        image: "/img/catalog/ford/fptoem2022.png",
        fits: ["Ranger"],
      },
      {
        slug: "parachoques-trasero-ranger-2022-plateado",
        name: "Parachoques Trasero Ranger 2022+ Plateado",
        desc: "Parachoques trasero de acabado plateado para Ford Ranger 2022 en adelante.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/parachoques-traseros-para-camioneta-ranger-2022-color-plateado.png",
        fits: ["Ranger"],
      },
      {
        slug: "placa-puerta-trasera-f150-raptor-2026",
        sku: "FPTRF150",
        name: "Placa de Puerta Trasera F-150 XLT → Raptor 2026",
        desc: "Placa para la puerta trasera de la conversión Ford F-150 XLT 2025 al modelo Raptor 2026.",
        image: "/img/catalog/ford/fptrf150.png",
        fits: ["F150"],
      },
      {
        slug: "placa-trasera-ranger-t6-t8",
        sku: "FPTRT678",
        name: "Placa Trasera Ford Ranger T6/T7/T8",
        desc: "Placa posterior con acabado FORD para Ranger generaciones T6, T7 y T8.",
        image: "/img/catalog/ford/fptrt678.png",
        images: ["/img/catalog/ford/fptrt678-2.png"],
        fits: ["Ranger"],
      },
    ],
  },

  // ── 6. Fender Flares ────────────────────────────────────────────────────
  {
    id: "guardafangos",
    title: "Guardafangos Ensanchados",
    subtitle: "Fender flares para mayor amplitud visual y protección de carrocería",
    icon: "fender",
    image: "/img/raptor-orange.jpg",
    products: [
      {
        slug: "guardafangos-hilux-gr",
        sku: "TFRV01",
        name: "Guardafangos Hilux Revo OE Slim Gris",
        desc: "Guardafangos de perfil delgado y acabado gris estilo original para Hilux Revo 2021.",
        unit: "juego",
        image: "/img/catalog/toyota/tfrv01.png",
        fits: ["Hilux"],
      },
      {
        slug: "guardafangos-fortuner",
        sku: "TFRV02-02",
        name: "Guardafangos Hilux Revo OE Slim Rojo/Gris",
        desc: "Guardafangos delanteros OE Slim con detalles rojo y gris para Hilux Revo 2021.",
        unit: "juego",
        image: "/img/catalog/toyota/tfrv02-02-2.png",
        images: ["/img/catalog/toyota/tfrv02-02.png"],
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "guardafangos-ranger",
        sku: "FGUARD01",
        name: "Guardabarros Ford Ranger 2022+",
        desc: "Juego de guardabarros para Ford Ranger T9 2022 en adelante.",
        unit: "juego",
        image: "/img/catalog/ford/fguard01.png",
        fits: ["Ranger"],
      },
      {
        slug: "guardafangos-hilux-con-led",
        sku: "TFRV03-02",
        name: "Guardafangos Hilux Revo con Luces LED",
        desc: "Juego de guardafangos para Hilux Revo 2021 con iluminación LED integrada.",
        unit: "juego",
        image: "/img/catalog/toyota/tfrv03-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "guardafangos-hilux-gr-genericos",
        name: "Guardafangos Genéricos Hilux GR Sport",
        desc: "Juego de guardafangos estilo GR Sport para camioneta Toyota Hilux.",
        tag: "PRÓXIMAMENTE",
        unit: "juego",
        image: "/img/catalog/incoming/guardafangos-genricos-gr-sport.png",
        fits: ["Hilux"],
      },
      {
        slug: "fender-flares-f150-led-2021-2024",
        name: "Fender Flares F-150 con LED 2021–2024",
        desc: "Guardafangos ensanchados negros con luces LED para Ford F-150 2021–2024.",
        unit: "juego",
        image: "/img/catalog/ford/fender-flares-with-led-lights-for-f150-black-2021-24.png",
        fits: ["F150"],
      },
    ],
  },

  // ── 7. Grilles ──────────────────────────────────────────────────────────
  {
    id: "parrillas",
    title: "Parrillas Frontales",
    subtitle: "Parrillas de alto impacto que transforman el frente de tu vehículo",
    icon: "convert",
    image: "/img/raptor-black.jpg",
    products: [
      {
        slug: "parrilla-hilux-gr-sport",
        sku: "TRJHGR01-02",
        name: "Parrilla Hilux 2023–2024",
        desc: "Rejilla frontal para Toyota Hilux modelos 2023 y 2024.",
        image: "/img/catalog/toyota/trjhgr01-02.png",
        fits: ["Hilux"],
      },
      {
        slug: "parrilla-hilux-raptor",
        sku: "TLLREJ01",
        name: "Logo TOYOTA LED para Parrilla Delantera",
        desc: "Emblema TOYOTA iluminado con LED para instalación en rejillas delanteras.",
        image: "/img/catalog/toyota/tllrej01.png",
        fits: ["Hilux"],
      },
      {
        slug: "parrilla-ranger-raptor",
        sku: "FREJORIRR",
        name: "Parrilla Original Ford Ranger Raptor",
        desc: "Rejilla frontal diseñada exclusivamente para Ford Ranger Raptor original.",
        image: "/img/catalog/ford/frejorirr.png",
        images: ["/img/catalog/ford/frejorirr-2.png"],
        fits: ["Ranger Raptor"],
      },
      {
        slug: "parrilla-fortuner-legender",
        sku: "FREJRAN2025",
        name: "Parrilla Ford Ranger 2024–2025 con LED",
        desc: "Rejilla o máscara frontal Ford con letras iluminadas LED rojas y negras para Ranger 2024–2025.",
        image: "/img/catalog/ford/frejran2025.png",
        fits: ["Ranger"],
      },
      {
        slug: "parrilla-ranger-t9-xlt-wildtrak-led",
        sku: "FREJRANT9",
        name: "Parrilla Ford Ranger T9 XLT/Wildtrak con LED",
        desc: "Rejilla frontal con letras FORD iluminadas, compatible con Ranger T9 XLT y Wildtrak de gama alta.",
        image: "/img/catalog/ford/frejrant9.png",
        fits: ["Ranger"],
      },
      {
        slug: "parrilla-f150-lariat-2025-raptor-2026",
        name: "Parrilla F-150 Lariat 2025 → Raptor 2026",
        desc: "Rejilla frontal para conversión de Ford F-150 Lariat 2025 al modelo Raptor 2026.",
        image: "/img/catalog/ford/rejilla-para-conversion-f-15o-lariat-2025-al-model-raptor-2026.png",
        fits: ["F150"],
      },
      {
        slug: "parrilla-ford-pickup-led-importacion",
        name: "Parrilla Delantera Ford con Luces LED",
        desc: "Rejilla frontal con iluminación LED para camioneta pickup Ford.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/rejilla-delantera-para-camioneta-pickup-con-luces-led.png",
        fits: ["Ranger"],
      },
    ],
  },

  // ── 8. Fog Lights ───────────────────────────────────────────────────────
  {
    id: "neblineros",
    title: "Luces DRL y Neblineros",
    subtitle: "Iluminación diurna, neblineros y módulos de personalización",
    icon: "fog",
    image: "/img/offroad-lightbar.jpg",
    products: [
      {
        slug: "neblineros-led-hilux",
        name: "Neblineros para Parrilla Hilux",
        desc: "Juego de luces neblineras para parrilla delantera de camionetas Toyota Hilux.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/luces-neblineros-para-parrillas-camionetas-hilux.png",
        fits: ["Hilux"],
      },
      {
        slug: "neblineros-led-fortuner",
        sku: "TLNBRV01",
        name: "Luces Diurnas DRL Dinámicas Hilux Revo 2021",
        desc: "Juego de luces diurnas DRL dinámicas para Toyota Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlnbrv01.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "faros-cubo-led",
        sku: "TLNBRV02",
        name: "Luces Diurnas DRL Dinámicas Hilux Revo – Variante 2",
        desc: "Segunda variante de luces DRL dinámicas para Toyota Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlnbrv02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "drl-hilux-revo-2024-blanco-ambar",
        sku: "TLNBRV03-02",
        name: "Luces DRL Hilux Revo 2024 Blanco/Ámbar",
        desc: "Luces diurnas DRL de color blanco y ámbar para Hilux Revo 2024.",
        unit: "par",
        image: "/img/catalog/toyota/tlnbrv03-02-2.png",
        images: ["/img/catalog/toyota/tlnbrv03-02.png"],
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "drl-hilux-revo-2021-v4",
        sku: "TLNBRV04-02",
        name: "Luces DRL Hilux Revo 2021 – Variante 4",
        desc: "Luces diurnas para Toyota Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlnbrv04-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "drl-hilux-revo-2021-v5",
        sku: "TLNBRV05-02",
        name: "Luces DRL Dinámicas Hilux Revo 2021 – Variante 5",
        desc: "Luces de circulación diurna dinámicas para Toyota Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlnbrv05-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "drl-hilux-revo-2021-v6",
        sku: "TLNBRV06-02",
        name: "Luces DRL Dinámicas Hilux Revo 2021 – Variante 6",
        desc: "Luces de circulación diurna dinámicas para Toyota Hilux Revo 2021.",
        unit: "par",
        image: "/img/catalog/toyota/tlnbrv06-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "drl-hilux-revo-2021-headlamp",
        sku: "TLDHL06-02",
        name: "Módulos DRL para Faros Hilux 2021–2025",
        desc: "Módulos de luz diurna DRL para faros delanteros de Hilux 2021–2025.",
        image: "/img/catalog/toyota/tldhl06-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "chip-drl-ford",
        sku: "FCHIPDRL",
        name: "Chip DRL Ford para Cambio de Color",
        desc: "Módulo para personalizar el color de las luces diurnas originales, por ejemplo de blanco a ámbar o amarillo.",
        image: "/img/led-glow.jpg",
        fits: ["Ranger", "Ranger Raptor", "F150"],
      },
      {
        slug: "chip-drl-ford-alta-densidad",
        name: "Chip DRL Ford para Luces de Alta Densidad",
        desc: "Módulo DRL para personalización de luces Ford de alta densidad.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/drl-chip-para-luces-alta-densidad.png",
        fits: ["Ranger", "F150"],
      },
      {
        slug: "chip-drl-ford-baja-densidad",
        name: "Chip DRL Ford para Luces de Baja Densidad",
        desc: "Módulo DRL para personalización de luces Ford de baja densidad.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/drl-chip-para-luces-baja-densidad.png",
        fits: ["Ranger", "F150"],
      },
      {
        slug: "luces-freno-puerta-trasera-revo",
        sku: "TLFHL01",
        name: "Luces de Freno para Puerta Trasera Hilux Revo",
        desc: "Luces de freno para la puerta posterior de Hilux Revo/Rocco 2016–2024.",
        image: "/img/catalog/toyota/tlfhl01.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "luces-freno-hilux-gr-style",
        sku: "TLFGR01",
        name: "Luces de Freno Hilux Estilo GR",
        desc: "Luces de freno estilo GR para Toyota Hilux Revo.",
        image: "/img/catalog/toyota/tlfgr01.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "luces-espejo-lateral-hilux-revo",
        sku: "TLLAT01-02",
        name: "Luces para Espejo Lateral Hilux Revo",
        desc: "Juego de luces para los espejos laterales de Toyota Hilux Revo.",
        unit: "par",
        image: "/img/catalog/toyota/tllat01-02.png",
        fits: ["Hilux", "Revo"],
      },
      {
        slug: "luces-pilar-fortuner",
        sku: "TLTPILFT01",
        name: "Luces de Pilar Toyota Fortuner",
        desc: "Juego de luces para pilares posteriores de Toyota Fortuner.",
        unit: "par",
        image: "/img/catalog/toyota/tltpilft01.png",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "luces-parachoques-trasero-fortuner",
        sku: "TLTR01-02",
        name: "Luces de Parachoques Trasero Fortuner 2016–2020",
        desc: "Luces auxiliares para el parachoques posterior de Toyota Fortuner 2016–2020.",
        unit: "par",
        image: "/img/catalog/toyota/tltr01-02.png",
        fits: ["Fortuner"],
      },
    ],
  },

  // ── 9. LED Bars ─────────────────────────────────────────────────────────
  {
    id: "barras-led",
    title: "Barras LED",
    subtitle: "Barras de luz para techo, parrilla y parachoques",
    icon: "bar",
    image: "/img/lightbar.jpg",
    products: [
      {
        slug: "barra-led-curva-22",
        sku: "FBLR2022T9",
        name: "Barra LED DRL de Techo Ranger T9 2022+",
        desc: "Barra de luces LED DRL para instalación en el techo de Ford Ranger T9 2022 en adelante.",
        image: "/img/catalog/ford/fblr2022t9.png",
        fits: ["Ranger"],
      },
    ],
  },

  // ── 11. Running Boards ──────────────────────────────────────────────────
  {
    id: "pisaderas",
    title: "Pisaderas",
    subtitle: "Estribos laterales de aluminio y acero, antideslizantes",
    icon: "step",
    image: "/img/raptor-black.jpg",
    products: [
      {
        slug: "pisaderas-aluminio-hilux",
        sku: "TPISGR01",
        name: "Pisaderas LED Hilux GR Sport",
        desc: "Juego de pisaderas internas de puerta con iluminación LED y estilo GR Sport para Toyota Hilux.",
        unit: "juego",
        image: "/img/catalog/toyota/tpisgr01.png",
        fits: ["Hilux"],
      },
      {
        slug: "pisaderas-tubo-negro-ranger",
        sku: "FPISAD01",
        name: "Pisaderas de Hierro Ford Ranger/Raptor",
        desc: "Pisaderas fabricadas en hierro fundido para Ford Ranger y Ranger Raptor, diseñadas para mayor durabilidad y acabado premium.",
        unit: "par",
        image: "/img/catalog/ford/fpisad01.png",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "pisaderas-fortuner",
        name: "Pisaderas F-150 XLT 2025 → Raptor 2026",
        desc: "Pisaderas laterales para la conversión de Ford F-150 XLT 2025 al modelo Raptor 2026.",
        unit: "par",
        image: "/img/catalog/ford/pisaderas-para-conversion-f-150xlt-2025-al-model-raptor-2026.png",
        fits: ["F150"],
      },
      {
        slug: "pisaderas-ranger-tipo-raptor-importacion",
        name: "Estribos Ford Ranger Tipo Raptor",
        desc: "Estribos laterales tipo Raptor para camioneta pickup Ford Ranger.",
        tag: "PRÓXIMAMENTE",
        unit: "par",
        image: "/img/catalog/incoming/estribos-para-camioneta-ranger-pickup-tipo-raptor.png",
        fits: ["Ranger", "Ranger Raptor"],
      },
    ],
  },

  // ── 12. Rain Guards ─────────────────────────────────────────────────────
  {
    id: "cubrelluvias",
    title: "Cubrelluvias",
    subtitle: "Deflectores de ventana ahumados, fijación sin perforar",
    icon: "rain",
    image: "/img/raptor-orange.jpg",
    products: [
      {
        slug: "cubrelluvias-hilux-4p",
        sku: "TCRRGR01",
        name: "Cubrelluvias Hilux GR Sport",
        desc: "Juego de deflectores de lluvia estilo GR Sport para Toyota Hilux.",
        unit: "juego",
        image: "/img/catalog/toyota/tcrrgr01.png",
        fits: ["Hilux"],
      },
      {
        slug: "cubrelluvias-fortuner",
        name: "Cubrelluvias Toyota Hilux",
        desc: "Juego de deflectores de lluvia para las ventanas de Toyota Hilux.",
        tag: "PRÓXIMAMENTE",
        unit: "juego",
        image: "/img/catalog/incoming/correlluvias-para-toyota-hilux.png",
        fits: ["Hilux"],
      },
      {
        slug: "cubrelluvias-ranger",
        sku: "FCORLLFRT9",
        name: "Cubrelluvias Ford Ranger T9",
        desc: "Juego de deflectores de lluvia para Ford Ranger T9 2022 en adelante.",
        unit: "juego",
        image: "/img/catalog/ford/fcorllfrt9.png",
        fits: ["Ranger"],
      },
      {
        slug: "cubrelluvias-f150",
        sku: "FCORLLF150",
        name: "Cubrelluvias Ford F-150",
        desc: "Juego de deflectores de lluvia para las ventanas de Ford F-150.",
        unit: "juego",
        image: "/img/catalog/ford/fcorllf150.png",
        fits: ["F150"],
      },
      {
        slug: "cubrelluvias-ranger-importacion",
        name: "Cubrelluvias Ford Ranger",
        desc: "Juego de deflectores de lluvia para camioneta Ford Ranger.",
        tag: "PRÓXIMAMENTE",
        unit: "juego",
        image: "/img/catalog/incoming/correlluvias-para-camionetas-ford-ranger.png",
        fits: ["Ranger"],
      },
      {
        slug: "cubrelluvias-silverado-zti",
        name: "Cubrelluvias Chevrolet Silverado ZTI",
        desc: "Juego de deflectores de lluvia para camioneta Chevrolet Silverado ZTI.",
        tag: "PRÓXIMAMENTE",
        unit: "juego",
        image: "/img/catalog/incoming/correlluvia-para-camioneta-silverado-zti.png",
        fits: ["Silverado"],
      },
    ],
  },

  // ── 13. Roof Racks & Accessories ────────────────────────────────────────
  {
    id: "canastillas",
    title: "Rieles de Techo",
    subtitle: "Rieles y accesorios superiores específicos por modelo",
    icon: "rack",
    image: "/img/overland.jpg",
    products: [
      {
        slug: "canastilla-portaequipajes-hilux",
        sku: "FRIELRANT9",
        name: "Rieles de Techo Ford Ranger T9 2022+",
        desc: "Juego de rieles de techo tipo tornillo para Ford Ranger T9 2022 en adelante.",
        unit: "juego",
        image: "/img/catalog/ford/frielrant9.png",
        fits: ["Ranger"],
      },
    ],
  },

  {
    id: "interiores",
    title: "Accesorios Interiores",
    subtitle: "Timones, perillas, molduras y bandejas específicas por modelo",
    icon: "convert",
    image: "/img/raptor-black.jpg",
    products: [
      {
        slug: "perilla-cambio-automatica-carbono",
        sku: "TPCAUT01",
        name: "Perilla Automática de Fibra de Carbono",
        desc: "Perilla con acabado de fibra de carbono para caja de cambios automática Toyota.",
        image: "/img/catalog/toyota/tpcaut01.png",
        fits: ["Hilux", "Fortuner"],
      },
      {
        slug: "perilla-cambio-mecanica-gr",
        sku: "TPCMN01",
        name: "Perilla de Cambio Mecánica GR",
        desc: "Perilla de cambio para transmisión mecánica con diseño GR.",
        image: "/img/catalog/toyota/tpcmn01.png",
        fits: ["Hilux"],
      },
      {
        slug: "timon-lc300-carbono-con-paletas",
        sku: "TTCP01",
        name: "Timón Estilo LC300 de Carbono con Paletas",
        desc: "Timón estilo LC300 en fibra de carbono forjada, con paletas y bolsa de aire incluida.",
        image: "/img/catalog/toyota/ttcp01.png",
        fits: ["Hilux", "Fortuner"],
      },
      {
        slug: "timon-lc300-carbono-sin-paletas",
        sku: "TTSP01",
        name: "Timón Estilo LC300 de Carbono sin Paletas",
        desc: "Timón estilo LC300 en fibra de carbono forjada, sin paletas y con bolsa de aire incluida.",
        image: "/img/catalog/toyota/ttsp01.png",
        fits: ["Hilux", "Fortuner"],
      },
      {
        slug: "timon-carbono-forjado-sin-paletas",
        sku: "TTSP02",
        name: "Timón de Carbono Forjado sin Paletas",
        desc: "Timón de fibra de carbono forjada estilo LC300, sin paletas y con bolsa de aire incluida.",
        image: "/img/catalog/toyota/ttsp02.png",
        fits: ["Hilux", "Fortuner"],
      },
      {
        slug: "timon-carbono-forjado-con-paletas",
        sku: "TTCP02",
        name: "Timón de Carbono Forjado con Paletas",
        desc: "Timón de fibra de carbono forjada estilo LC300, con paletas y bolsa de aire incluida.",
        image: "/img/catalog/toyota/ttcp02.png",
        fits: ["Hilux", "Fortuner"],
      },
      {
        slug: "molduras-interiores-ford-carbon",
        sku: "FMOLDCAR",
        name: "Molduras Interiores Ford – Carbono",
        desc: "Juego de molduras interiores Ford con acabado tipo fibra de carbono.",
        image: "/img/catalog/ford/fmoldcar.png",
        fits: ["Ranger", "F150"],
      },
      {
        slug: "molduras-interiores-ford-naranja",
        sku: "FMOLDNAR",
        name: "Molduras Interiores Ford – Naranja",
        desc: "Juego de molduras interiores Ford con acabado naranja.",
        image: "/img/catalog/ford/fmoldnar.png",
        fits: ["Ranger", "F150"],
      },
      {
        slug: "molduras-interiores-ford-madera",
        sku: "FMOLDMAD",
        name: "Molduras Interiores Ford – Madera",
        desc: "Juego de molduras interiores Ford con acabado tipo madera.",
        image: "/img/catalog/ford/fmoldmad.png",
        fits: ["Ranger", "F150"],
      },
      {
        slug: "bandejas-piso-ranger-raptor",
        sku: "FBPRR01",
        name: "Bandejas de Piso Ford Ranger/Raptor",
        desc: "Juego de bandejas de piso para Ford Ranger y Ranger Raptor.",
        unit: "juego",
        image: "/img/catalog/ford/fbprr01.png",
        images: ["/img/catalog/ford/fbprr01-2.jpg"],
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "bandejas-piso-hilux-arb",
        sku: "TBDP01-02",
        name: "Bandejas de Piso Hilux Estilo ARB",
        desc: "Juego de bandejas de piso TPE estilo ARB para Toyota Hilux 2016–2024.",
        unit: "juego",
        image: "/img/catalog/toyota/tbdp01-02.png",
        fits: ["Hilux"],
      },
      {
        slug: "moldura-timon-carbono-forjado",
        name: "Moldura de Timón en Carbono Forjado",
        desc: "Moldura decorativa de fibra de carbono forjada para timón Toyota.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/moldura-de-timn-forjado.png",
        fits: ["Hilux", "Fortuner"],
      },
    ],
  },

  {
    id: "molduras-emblemas",
    title: "Molduras y Emblemas",
    subtitle: "Detalles exteriores, letras, logos y protectores decorativos",
    icon: "hood",
    image: "/img/raptor-black.jpg",
    products: [
      {
        slug: "molduras-compuerta-hilux-gr",
        sku: "TMOLGR01",
        name: "Molduras de Compuerta Hilux GR Sport",
        desc: "Juego de molduras para la compuerta posterior de Toyota Hilux con estilo GR Sport.",
        image: "/img/catalog/toyota/tmolgr01.png",
        fits: ["Hilux"],
      },
      {
        slug: "logo-fortuner",
        sku: "TLTFORT01",
        name: "Emblema FORTUNER",
        desc: "Logo decorativo FORTUNER para carrocería Toyota.",
        image: "/img/catalog/toyota/tltfort01.png",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "protector-manijas-f150-2021-2024",
        sku: "FPROTMF150",
        name: "Protectores de Manijas F-150 2021–2024",
        desc: "Protectores exteriores de manijas de puerta en negro brillante para Ford F-150 2021–2024.",
        unit: "juego",
        image: "/img/catalog/ford/fprotmf150.png",
        images: ["/img/catalog/ford/fprotmf150-2.png", "/img/catalog/ford/fprotmf150-3.png"],
        fits: ["F150"],
      },
      {
        slug: "adorno-capo-f150-ranger",
        sku: "FPCUBF150",
        name: "Adorno de Capó Ford F-150/Ranger",
        desc: "Placa de cubierta frontal para capó que simula una toma de aire exterior en F-150 y Ranger.",
        image: "/img/catalog/ford/fpcubf150.png",
        fits: ["F150", "Ranger"],
      },
      {
        slug: "letras-ranger-2022",
        sku: "FLETRANGER",
        name: "Letras Decorativas RANGER 2022+",
        desc: "Juego de letras RANGER para modelos 2022+, disponible en negro, plata y rojo.",
        image: "/img/catalog/ford/fletranger.png",
        fits: ["Ranger"],
      },
      {
        slug: "logo-raptor",
        sku: "FLETRAPTOR",
        name: "Emblema RAPTOR",
        desc: "Logo decorativo RAPTOR disponible en negro, rojo y blanco.",
        image: "/img/catalog/ford/fletraptor.png",
        fits: ["Ranger Raptor", "F150"],
      },
      {
        slug: "letras-r-parrilla-ford-raptor",
        name: "Letras R para Parrilla Ford Raptor",
        desc: "Letras decorativas R para las rejillas delanteras de camionetas Ford Raptor.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/letras-r-para-las-rejillas-de-camionetas-ford-raptor.png",
        fits: ["Ranger Raptor", "F150"],
      },
      {
        slug: "logo-f150",
        sku: "FLETF150",
        name: "Emblema F-150",
        desc: "Logo decorativo F-150 disponible en negro, plata/rojo, rojo y blanco.",
        image: "/img/catalog/ford/fletf150.png",
        images: ["/img/catalog/ford/fletf150-2.png", "/img/catalog/ford/fletf150-3.png", "/img/catalog/ford/fletf150-4.png", "/img/catalog/ford/fletf150-5.png"],
        fits: ["F150"],
      },
      {
        slug: "molduras-laterales-puertas-ranger",
        sku: "FMOLDRAN",
        name: "Molduras Laterales de Puerta Ford Ranger",
        desc: "Juego de revestimientos laterales para las puertas de Ford Ranger.",
        image: "/img/catalog/ford/fmoldran.png",
        images: ["/img/catalog/ford/fmoldran-2.png"],
        fits: ["Ranger"],
      },
      {
        slug: "adorno-capo-f150-lariat-raptor-2026",
        name: "Adorno de Capó F-150 Lariat 2025 → Raptor 2026",
        desc: "Cubierta decorativa de capó para la conversión de F-150 Lariat 2025 al modelo Raptor 2026.",
        image: "/img/catalog/ford/adorno-para-cap-conversion-f-15o-lariat-2025-al-model-raptor-2026.png",
        fits: ["F150"],
      },
      {
        slug: "pegatinas-ford-raptor-xl-xls-xlt",
        name: "Pegatinas RAPTOR para Ford XL/XLS/XLT",
        desc: "Juego de adhesivos decorativos estilo RAPTOR para versiones Ford XL, XLS y XLT.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/pegatinas-para-raptor-xl-xls-xlt.png",
        fits: ["Ranger", "F150"],
      },
    ],
  },

  {
    id: "suspension-proteccion",
    title: "Suspensión y Protección",
    subtitle: "Componentes funcionales para suspensión, tolva y carrocería",
    icon: "fender",
    image: "/img/bullbar.jpg",
    products: [
      {
        slug: "suspension-delantera-ranger-raptor-t9",
        sku: "FKRR2022T9",
        name: "Kit de Suspensión Delantera Ranger Raptor T9",
        desc: "Kit de suspensión frontal para Ranger Raptor 2022+ T9, compatible con XLT, Wildtrak y Sport.",
        image: "/img/raptor-black.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "tolva-ford-ranger",
        name: "Tolva para Ford Ranger",
        desc: "Tolva de carga para camioneta Ford Ranger.",
        tag: "PRÓXIMAMENTE",
        image: "/img/catalog/incoming/tolva-para-camioneta-ford-ranger.png",
        fits: ["Ranger"],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY POOLS — images shown in each product category detail
// ─────────────────────────────────────────────────────────────────────────────

const categoryGallery: Record<string, string[]> = {
  "kits-conversion": [
    "/img/raptor-yellow.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-black.jpg",
    "/img/raptor-orange.jpg",
    "/img/raptor-sunset.jpg",
    "/img/tacoma-forest.jpg",
  ],
  "faros-led": [
    "/img/led-angel.jpg",
    "/img/led-glow.jpg",
    "/img/led-projector.jpg",
    "/img/led-black.jpg",
  ],
  "faros-posteriores": [
    "/img/taillight.jpg",
    "/img/taillight2.jpg",
    "/img/taillight-glow.jpg",
    "/img/taillight-y.jpg",
    "/img/taillight-suv.jpg",
  ],
  "parachoques-delanteros": [
    "/img/bullbar.jpg",
    "/img/trx-rear.jpg",
    "/img/raptor-black.jpg",
    "/img/offroad-lightbar.jpg",
  ],
  "parachoques-traseros": [
    "/img/trx-rear.jpg",
    "/img/raptor-bridge.jpg",
    "/img/bullbar.jpg",
  ],
  guardafangos: [
    "/img/raptor-orange.jpg",
    "/img/raptor-black.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-sunset.jpg",
  ],
  parrillas: [
    "/img/raptor-black.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-orange.jpg",
  ],
  neblineros: [
    "/img/offroad-lightbar.jpg",
    "/img/led-black.jpg",
    "/img/lightbar.jpg",
  ],
  "barras-led": [
    "/img/lightbar.jpg",
    "/img/offroad-lightbar.jpg",
    "/img/led-black.jpg",
    "/img/hero-night.jpg",
  ],
  aros: [
    "/img/wheels.jpg",
    "/img/wheels2.jpg",
    "/img/wheel-detail1.jpg",
    "/img/wheel-detail2.jpg",
    "/img/wheel-detail3.jpg",
  ],
  pisaderas: [
    "/img/raptor-black.jpg",
    "/img/raptor-sunset.jpg",
    "/img/raptor-bridge.jpg",
  ],
  cubrelluvias: [
    "/img/raptor-orange.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-sunset.jpg",
  ],
  canastillas: [
    "/img/overland.jpg",
    "/img/overland-amarok.jpg",
    "/img/rooftop-tent.jpg",
    "/img/tacoma-forest.jpg",
  ],
  interiores: [
    "/img/raptor-black.jpg",
    "/img/hero-night.jpg",
  ],
  "molduras-emblemas": [
    "/img/raptor-black.jpg",
    "/img/raptor-orange.jpg",
    "/img/f150-xlt-2025-raptor-2026.jpg",
  ],
  "suspension-proteccion": [
    "/img/bullbar.jpg",
    "/img/raptor-black.jpg",
    "/img/raptor-sunset.jpg",
  ],
};

function buildGallery(categoryId: string, main: string, productImages: string[] = []): string[] {
  const pool = categoryGallery[categoryId] ?? [];
  return Array.from(new Set([main, ...productImages, ...pool])).slice(0, 6);
}

// ─────────────────────────────────────────────────────────────────────────────
// FLAT PRODUCT — enriched product used by Marketplace, ProductDetail, Cart
// ─────────────────────────────────────────────────────────────────────────────

export type FlatProduct = Product & {
  /** Stable page ID — same as slug */
  id: string;
  categoryId: string;
  categoryTitle: string;
  gallery: string[];
};

export const allProducts: FlatProduct[] = categories.flatMap((c) =>
  c.products.map((p) => ({
    ...p,
    id: p.slug,          // slug is the stable URL ID — never index-based
    categoryId: c.id,
    categoryTitle: c.title,
    gallery: buildGallery(c.id, p.image, p.images),
  }))
);

export function getProduct(id: string): FlatProduct | undefined {
  return allProducts.find((p) => p.id === id);
}

export function relatedProducts(p: FlatProduct, n = 4): FlatProduct[] {
  const same = allProducts.filter((x) => x.categoryId === p.categoryId && x.id !== p.id);
  const others = allProducts.filter((x) => x.categoryId !== p.categoryId && x.id !== p.id);
  return [...same, ...others].slice(0, n);
}

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY SPECS — shown on product detail pages
// No price fields. No installation claims.
// ─────────────────────────────────────────────────────────────────────────────

export const categorySpecs: Record<string, { label: string; value: string }[]> = {
  "kits-conversion": [
    { label: "Material", value: "ABS / PP automotriz" },
    { label: "Incluye", value: "Parrilla, bumper, guardafangos, emblemas" },
    { label: "Compatibilidad", value: "Por modelo y año" },
    { label: "Garantía", value: "6 meses" },
  ],
  "faros-led": [
    { label: "Tecnología", value: "Full LED + DRL secuencial" },
    { label: "Conexión", value: "Plug & Play" },
    { label: "Temperatura", value: "6000K blanco frío" },
    { label: "Garantía", value: "12 meses" },
  ],
  "faros-posteriores": [
    { label: "Tecnología", value: "LED dinámico secuencial" },
    { label: "Acabado", value: "Humo / rojo" },
    { label: "Conexión", value: "Plug & Play" },
    { label: "Garantía", value: "12 meses" },
  ],
  "parachoques-delanteros": [
    { label: "Material", value: "ABS / PP de alta resistencia" },
    { label: "Acabado", value: "Negro mate texturizado" },
    { label: "Compatibilidad", value: "Específico por modelo" },
    { label: "Garantía", value: "6 meses" },
  ],
  "parachoques-traseros": [
    { label: "Material", value: "ABS / PP de alta resistencia" },
    { label: "Acabado", value: "Negro mate texturizado" },
    { label: "Compatibilidad", value: "Específico por modelo" },
    { label: "Garantía", value: "6 meses" },
  ],
  guardafangos: [
    { label: "Material", value: "ABS flexible" },
    { label: "Acabado", value: "Negro texturizado" },
    { label: "Fijación", value: "OEM, sin modificar carrocería" },
    { label: "Garantía", value: "6 meses" },
  ],
  parrillas: [
    { label: "Material", value: "ABS de alta resistencia" },
    { label: "Acabado", value: "Negro mate / detalles cromados" },
    { label: "Compatibilidad", value: "Específico por modelo" },
    { label: "Garantía", value: "6 meses" },
  ],
  neblineros: [
    { label: "Tecnología", value: "LED de alta intensidad" },
    { label: "Temperatura", value: "6000K blanco frío" },
    { label: "Conexión", value: "Plug & Play arnés OEM" },
    { label: "Protección", value: "IP67" },
  ],
  "barras-led": [
    { label: "Potencia", value: "120W combo spot/flood" },
    { label: "Protección", value: "IP68 sumergible" },
    { label: "Carcasa", value: "Aluminio aeronáutico" },
    { label: "Incluye", value: "Arnés + relé + switch" },
  ],
  aros: [
    { label: "Material", value: "Aleación reforzada" },
    { label: "Patrón", value: "6×139.7" },
    { label: "Diámetros", value: "17\" / 18\"" },
    { label: "Garantía", value: "Estructural" },
  ],
  pisaderas: [
    { label: "Material", value: "Aluminio / acero" },
    { label: "Superficie", value: "Antideslizante" },
    { label: "Soportes", value: "Incluidos" },
    { label: "Garantía", value: "6 meses" },
  ],
  cubrelluvias: [
    { label: "Material", value: "Acrílico ahumado" },
    { label: "Fijación", value: "Cinta 3M (sin perforar)" },
    { label: "Cobertura", value: "4 puertas" },
    { label: "Garantía", value: "6 meses" },
  ],
  canastillas: [
    { label: "Material", value: "Aluminio modular" },
    { label: "Sistema", value: "Rieles en T" },
    { label: "Carga", value: "Hasta 150 kg dinámica" },
    { label: "Garantía", value: "12 meses" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VEHICLE SELECTOR — models and need → category map
// ─────────────────────────────────────────────────────────────────────────────

export const selectorModels: { label: string; fit: Fit | null; brand: "Toyota" | "Ford" | null }[] = [
  // Toyota
  { label: "Hilux",             fit: "Hilux",            brand: "Toyota" },
  { label: "Fortuner",          fit: "Fortuner",         brand: "Toyota" },
  { label: "Fortuner Legender", fit: "Fortuner Legender",brand: "Toyota" },
  { label: "Revo",              fit: "Revo",             brand: "Toyota" },
  // Ford
  { label: "Ranger",            fit: "Ranger",           brand: "Ford"   },
  { label: "Ranger Raptor",     fit: "Ranger Raptor",    brand: "Ford"   },
  { label: "F150",              fit: "F150",             brand: "Ford"   },
  // Other
  { label: "Otro / No estoy seguro", fit: null,          brand: null     },
];

export const needToCategory: Record<string, string> = {
  "Kit de Conversión":        "kits-conversion",
  "Faros LED Delanteros":     "faros-led",
  "Faros Posteriores":        "faros-posteriores",
  "Parachoques Delantero":    "parachoques-delanteros",
  "Parachoques Trasero":      "parachoques-traseros",
  "Guardafangos":             "guardafangos",
  "Parrilla Frontal":         "parrillas",
  "Neblineros / Auxiliares":  "neblineros",
  "Barra LED":                "barras-led",
  "Pisaderas":                "pisaderas",
  "Cubrelluvias":             "cubrelluvias",
  "Rieles de Techo":          "canastillas",
  "Accesorios Interiores":    "interiores",
  "Molduras y Emblemas":      "molduras-emblemas",
  "Suspensión y Protección":  "suspension-proteccion",
};

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY — homepage masonry grid
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: { src: string; alt: string; span?: boolean }[] = [
  { src: "/img/raptor-sunset.jpg",    alt: "Kit conversión Hilux al estilo Raptor",           span: true },
  { src: "/img/overland.jpg",         alt: "Fortuner con portaequipajes y barra LED"                     },
  { src: "/img/offroad-lightbar.jpg", alt: "Ranger con barra LED y parachoques offroad"                  },
  { src: "/img/raptor-bridge.jpg",    alt: "Hilux GR Sport Style con kit de conversión completo"         },
  { src: "/img/wheels.jpg",           alt: "Aros todoterreno 17 pulgadas para Hilux y Fortuner"          },
  { src: "/img/bullbar.jpg",          alt: "Parachoques delantero con soporte para winch"                },
  { src: "/img/led-angel.jpg",        alt: "Faros LED con DRL secuencial para Hilux"                     },
  { src: "/img/taillight2.jpg",       alt: "Faros posteriores LED secuenciales"                          },
];
