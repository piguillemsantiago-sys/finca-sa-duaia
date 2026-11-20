const { useState, useEffect } = React;

/* ───────────────────────────  RESERVAS  ────────────────────────── */

// Motor oficial de saduaia.com (Roiback). Solo acepta POST con estos campos:
// entrada / salida (dd/mm/aaaa), occupancies (JSON) y codpromo.
const BOOKING = {
  action: {
    es: "https://www.saduaia.com/es/bookcore/v4/search-dispo.htm",
    en: "https://www.saduaia.com/en/bookcore/v4/search-dispo.htm",
  },
};

// Teléfono y WhatsApp: los mismos que Sa Duaia (confirmado por la clienta, 20/11/2026).
const PHONE = { href: "tel:+34722749473", label: "+34 722 74 94 73" };
const WHATSAPP = { href: "https://wa.me/34722749473", label: "+34 722 74 94 73" };

/* ───────────────────────  POP-UP DE DESCUENTO  ─────────────────────
   Para activarlo: active: true, el código (el mismo que esté cargado en el
   motor de saduaia.com), la fecha hasta la que se muestra y los textos.
   Aparece a los 5 s y no vuelve a salirle a quien lo cerró. El código queda
   precargado en el formulario de reserva. */
const PROMO = {
  active: false,
  code: "",
  until: "", // "2027-02-28" (incluido). Vacío = sin fecha de fin.
  es: { title: "", text: "" },
  en: { title: "", text: "" },
};

function promoIsLive() {
  if (!PROMO.active || !PROMO.code) return false;
  if (PROMO.until && new Date() > new Date(PROMO.until + "T23:59:59")) return false;
  return true;
}

/* ───────────────────────────  CONTENIDO (ES / EN)  ────────────────────────── */

const CONTENT = {
  es: {
    nav: {
      finca: "La finca",
      stays: "Alojamientos",
      villas: "Villas",
      restaurant: "Restaurante",
      area: "Entorno",
      book: "Reservar",
      menu: "Menú",
      open: "Abrir menú",
      close: "Cerrar menú",
    },
    menuAside: {
      title: "¿Planea su escapada?",
      text: "Reserva directa en la web oficial, con disponibilidad y precios en tiempo real.",
    },
    hero: {
      eyebrow: "Agroturismo · Artà, Mallorca",
      more: "Ver alojamientos",
    },
    intro: {
      eyebrow: "Cala Torta · Parque Natural de Llevant",
      title: "Una escapada rural\nen plena naturaleza.",
      body: [
        "Un caserío del siglo XIII en el extremo noreste de Mallorca, dentro del Parque Natural de Llevant. Inspirado en la cultura mallorquina, lejos del ruido y con unas vistas de ensueño.",
        "Pasee por la montaña, relájese en la piscina y desconecte del estrés del día a día.",
      ],
      amenities: ["Piscina al aire libre", "WiFi gratis", "Terrazas", "Zona de barbacoa", "Jardín", "Salón compartido"],
    },
    gallery: [
      "Terraza junto a la torre, con la sierra al fondo",
      "Buganvilla sobre un muro de piedra",
      "Casa de piedra de la finca",
      "Piscina con vistas a la montaña",
      "Terraza con mesas y vistas a la sierra",
      "Entrada y escalera de azulejos",
      "Naranjo en el jardín de la finca",
    ],
    // Capilla y recuerdo del fundador: respuestas de la clienta por Cristian (20/11/2026).
    chapel: {
      eyebrow: "La capilla",
      title: "Una capilla en la finca.",
      body: "Se pueden celebrar eventos y bodas.",
      alt: "Capilla de piedra de la finca, con flores blancas junto al altar",
    },
    founder: {
      text: "En recuerdo de Juan,\nfundador de Sa\u00a0Duaia de\u00a0Dalt.",
      alt: "Retrato de Juan, fundador de Sa Duaia de Dalt",
    },
    stays: {
      panel: "Alojamientos",
      eyebrow: "Bungalows, apartamentos, estudios y habitación",
      title: "Once alojamientos.",
      lede: "Todos con baño privado, TV y vistas al jardín o a la montaña.",
      labels: { bed: "Camas", bath: "Baño", guests: "Huéspedes", views: "Vistas", plus: "Además" },
      cta: "Consultar disponibilidad",
      photos: [
        "Dormitorio con cama de matrimonio y mosquitera",
        "Salón con chimenea y sofás de mimbre",
        "Dormitorio con dos camas y pared de piedra",
        "Dormitorio con cama de matrimonio y pared de piedra",
        "Puerta abierta al jardín y la piscina",
        "Comedor de un bungalow con salida al jardín",
        "Estudio con cama de matrimonio y cisnes de toalla",
        "Ventana de la habitación doble, con palmeras y la sierra",
        "Dormitorio de la torre con cabecero de troncos",
        "Vista al monte desde una ventana de la torre",
        "Habitación doble con chimenea y escritorio",
        "Estudio con mesa redonda junto a las camas",
      ],
      // Datos de la ficha de Booking de Finca Sa Duaia de Dalt (el-castillo-de-sa-duaia-de-dalt).
      items: [
        { kind: "2 unidades", name: "Bungalows de 2 dormitorios", size: "60–75", bed: "1 doble y 2 individuales", bath: "Privado, con ducha", guests: "Hasta 4", views: "Jardín y montaña", plus: "Salón, cocina, chimenea y terraza" },
        { kind: "2 unidades", name: "Bungalows de 1 dormitorio", size: "50–60", bed: "1 doble y sofá cama", bath: "Privado, con ducha", guests: "2", views: "Jardín y montaña", plus: "Salón, cocina y terraza" },
        { kind: "3 unidades", name: "Apartamentos de 1 dormitorio", size: "29–53", bed: "1 doble o 2 individuales", bath: "Privado, con ducha", guests: "2", views: "Jardín y montaña", plus: "Cocina; uno con chimenea" },
        { kind: "3 unidades", name: "Estudios", size: "18–30", bed: "1 doble o 2 individuales", bath: "Privado", guests: "2", views: "Jardín y montaña", plus: "Cocina; uno con terraza" },
        { kind: "1 unidad", name: "Habitación doble", size: "18", bed: "1 doble", bath: "Privado, con ducha", guests: "2", views: "Jardín, piscina y montaña", plus: "Chimenea y ventilador" },
      ],
    },
    villas: {
      eyebrow: "Destacado",
      title: "Dos villas con piscina.",
      lede: "Rodeadas por el Parque Natural de Llevant, con vistas a la naturaleza y al mar. Casas ecológicas que generan su propia electricidad con placas solares.",
      labels: { guests: "personas", rooms: "habitaciones dobles", baths: "baños completos" },
      cta: "Consultar disponibilidad",
      items: [
        {
          name: "Ca na Moli",
          img: "assets/villa-ca-na-moli.jpg",
          alt: "Piscina de Ca na Moli con vistas al mar",
          guests: 6, rooms: 3, baths: 2,
          text: "Piscina, varias terrazas, cocina, salón comedor, chimenea y barbacoa. Uno de los baños es en suite. Sin aire acondicionado.",
        },
        {
          name: "Ca na Lluny",
          img: "assets/villa-ca-na-lluny.jpg",
          alt: "Ca na Lluny y su piscina",
          guests: 12, rooms: 5, baths: 3,
          text: "Piscina, varias terrazas, dos cocinas, dos salones comedores y un estudio en la planta superior. Chimenea en cada planta y barbacoa junto a la piscina.",
        },
      ],
    },
    restaurant: {
      eyebrow: "A 1,5 km de la finca",
      title: "Restaurante Sa Duaia",
      body: "Un restaurante de estilo mallorquín para degustar platos caseros hechos con mucho cariño, con una terraza de vistas maravillosas.",
      alt: "Edificio del Restaurante Sa Duaia",
    },
    area: {
      panel: "Entorno",
      eyebrow: "Artà · Mallorca",
      title: "El noreste de la isla,\na su alcance.",
      distances: [
        { v: "6 min", l: "Al mar" },
        { v: "10 min", l: "Centro de Artà" },
        { v: "15 km", l: "Cala Rajada" },
        { v: "21 km", l: "Cala Millor" },
        { v: "40 km", l: "Alcúdia" },
        { v: "75 km", l: "Aeropuerto de Palma" },
      ],
      routeTitle: "Hoja de ruta",
      route: [
        { name: "Santuario de Sant Salvador", text: "A 5 minutos del centro de Artà. Un recinto amurallado y una iglesia renacentista: el conjunto más emblemático del pueblo." },
        { name: "Iglesia de la Transfiguración del Señor", text: "En la falda del monte de Sant Salvador, dominando Artà. Campanario del siglo XVII y catorce capillas en su interior." },
        { name: "Cuevas de Artà", text: "Un recorrido de 35 a 40 minutos. Dentro espera la Reina del Paraíso, una estalagmita de 22 metros.", link: { href: "https://cuevasdearta.com/", label: "cuevasdearta.com" } },
        { name: "Mercado de Artà", text: "Cada martes por la mañana: producto local y artesanal, artículos ecológicos de la comarca, fruta y verdura." },
      ],
    },
    reviews: {
      eyebrow: "Lo que dicen",
      rating: "4,3",
      source: "en Google · más de 600 reseñas",
      link: "Ver en Google Maps",
      mapsUrl: "https://maps.app.goo.gl/AvtphY6pBBH14PN78?g_st=ic",
      items: [
        { from: "Reino Unido", text: "Una de las vistas más extraordinarias del mundo. Comimos de maravilla y no tuvimos un solo problema con el servicio." },
        { from: "Países Bajos", text: "Adoramos la filosofía ambiental, la ubicación inmejorable, el personal atento, las habitaciones y la piscina." },
        { from: "España", text: "Hermosa ubicación, vistas inmejorables, calma, piscina, personal amable. No podíamos haber pedido más." },
      ],
    },
    book: {
      eyebrow: "Reserva directa",
      title: "Reserve su estancia.",
      lede: "Disponibilidad y precios en tiempo real en la web oficial de Sa Duaia.",
      checkin: "Llegada",
      checkout: "Salida",
      adults: "Adultos",
      promo: "Código promo",
      promoPh: "Opcional",
      submit: "Ver disponibilidad",
      errDates: "La salida tiene que ser posterior a la llegada.",
      write: "¿Prefiere escribirnos?",
    },
    promo: { eyebrow: "Oferta", code: "Código", cta: "Usar el código", close: "Cerrar" },
    footer: {
      address: ["Ctra. Artà–Cala Torta, km 6", "07570 Artà · Illes Balears", "España"],
      contact: "Contacto",
      social: "Redes",
      lang: "Idioma",
      legal: [
        { label: "Política de privacidad", href: "Legal.html#privacidad" },
        { label: "Aviso legal", href: "Legal.html#aviso-legal" },
        { label: "Cookies", href: "Legal.html#cookies" },
      ],
      copy: "© 2026 Finca Sa Duaia de Dalt",
      credits: "Diseño y desarrollo",
    },
  },

  en: {
    nav: {
      finca: "The estate",
      stays: "Accommodation",
      villas: "Villas",
      restaurant: "Restaurant",
      area: "Surroundings",
      book: "Book",
      menu: "Menu",
      open: "Open menu",
      close: "Close menu",
    },
    menuAside: {
      title: "Planning a getaway?",
      text: "Book direct on the official website, with real-time availability and prices.",
    },
    hero: {
      eyebrow: "Rural farmhouse · Artà, Mallorca",
      more: "See accommodation",
    },
    intro: {
      eyebrow: "Cala Torta · Llevant Natural Park",
      title: "A rural escape\nsurrounded by nature.",
      body: [
        "A 13th-century farmstead on the north-eastern tip of Mallorca, inside the Llevant Natural Park. Inspired by Mallorcan culture, far from the noise, with dreamlike views.",
        "Walk the mountains, unwind by the pool and leave everyday stress behind.",
      ],
      amenities: ["Outdoor pool", "Free WiFi", "Terraces", "Barbecue area", "Garden", "Shared lounge"],
    },
    gallery: [
      "Terrace by the tower, with the mountains behind",
      "Bougainvillea over a stone wall",
      "Stone house on the estate",
      "Pool with mountain views",
      "Terrace with tables and mountain views",
      "Entrance and tiled staircase",
      "Orange tree in the estate garden",
    ],
    chapel: {
      eyebrow: "The chapel",
      title: "A chapel on the estate.",
      body: "Events and weddings can be held here.",
      alt: "The estate's stone chapel, with white flowers by the altar",
    },
    founder: {
      text: "In memory of Juan,\nfounder of Sa\u00a0Duaia de\u00a0Dalt.",
      alt: "Portrait of Juan, founder of Sa Duaia de Dalt",
    },
    stays: {
      panel: "Accommodation",
      eyebrow: "Bungalows, apartments, studios and a room",
      title: "Eleven places to stay.",
      lede: "All with private bathroom, TV and views of the garden or the mountains.",
      labels: { bed: "Beds", bath: "Bathroom", guests: "Guests", views: "Views", plus: "Also" },
      cta: "Check availability",
      photos: [
        "Bedroom with a double bed and mosquito net",
        "Living room with fireplace and wicker sofas",
        "Bedroom with two single beds and a stone wall",
        "Bedroom with a double bed and a stone wall",
        "Door open to the garden and the pool",
        "Bungalow dining area opening onto the garden",
        "Studio with a double bed and towel swans",
        "Window in the double room, with palm trees and the hills",
        "Tower bedroom with a log headboard",
        "View of the hillside from a tower window",
        "Double room with a fireplace and desk",
        "Studio with a round table beside the beds",
      ],
      items: [
        { kind: "2 units", name: "Two-bedroom bungalows", size: "60–75", bed: "1 double and 2 single", bath: "Private, with shower", guests: "Up to 4", views: "Garden and mountains", plus: "Living room, kitchen, fireplace and terrace" },
        { kind: "2 units", name: "One-bedroom bungalows", size: "50–60", bed: "1 double and sofa bed", bath: "Private, with shower", guests: "2", views: "Garden and mountains", plus: "Living room, kitchen and terrace" },
        { kind: "3 units", name: "One-bedroom apartments", size: "29–53", bed: "1 double or 2 single", bath: "Private, with shower", guests: "2", views: "Garden and mountains", plus: "Kitchen; one with fireplace" },
        { kind: "3 units", name: "Studios", size: "18–30", bed: "1 double or 2 single", bath: "Private", guests: "2", views: "Garden and mountains", plus: "Kitchen; one with terrace" },
        { kind: "1 unit", name: "Double room", size: "18", bed: "1 double", bath: "Private, with shower", guests: "2", views: "Garden, pool and mountains", plus: "Fireplace and fan" },
      ],
    },
    villas: {
      eyebrow: "Featured",
      title: "Two villas with a pool.",
      lede: "Surrounded by the Llevant Natural Park, with views of nature and the sea. Eco-friendly houses that generate their own electricity with solar panels.",
      labels: { guests: "guests", rooms: "double bedrooms", baths: "full bathrooms" },
      cta: "Check availability",
      items: [
        {
          name: "Ca na Moli",
          img: "assets/villa-ca-na-moli.jpg",
          alt: "Ca na Moli pool with sea views",
          guests: 6, rooms: 3, baths: 2,
          text: "Pool, several terraces, kitchen, living-dining room, fireplace and barbecue. One bathroom is en suite. No air conditioning.",
        },
        {
          name: "Ca na Lluny",
          img: "assets/villa-ca-na-lluny.jpg",
          alt: "Ca na Lluny and its pool",
          guests: 12, rooms: 5, baths: 3,
          text: "Pool, several terraces, two kitchens, two living-dining rooms and a studio upstairs. A fireplace on each floor and a barbecue by the pool.",
        },
      ],
    },
    restaurant: {
      eyebrow: "1.5 km from the estate",
      title: "Sa Duaia Restaurant",
      body: "A Mallorcan-style restaurant serving home-made dishes cooked with love, with a terrace and wonderful views.",
      alt: "Sa Duaia Restaurant building",
    },
    area: {
      panel: "Surroundings",
      eyebrow: "Artà · Mallorca",
      title: "The north-east of the island,\nwithin reach.",
      distances: [
        { v: "6 min", l: "To the sea" },
        { v: "10 min", l: "Artà town centre" },
        { v: "15 km", l: "Cala Rajada" },
        { v: "21 km", l: "Cala Millor" },
        { v: "40 km", l: "Alcúdia" },
        { v: "75 km", l: "Palma airport" },
      ],
      routeTitle: "Things to see",
      route: [
        { name: "Sant Salvador Sanctuary", text: "5 minutes from Artà town centre. A walled enclosure and a Renaissance church: the town's most emblematic landmark." },
        { name: "Church of the Transfiguration", text: "On the slope of Sant Salvador hill, overlooking Artà. A 17th-century bell tower and fourteen chapels inside." },
        { name: "Caves of Artà", text: "A 35 to 40-minute tour. Inside awaits the Queen of Paradise, a 22-metre stalagmite.", link: { href: "https://cuevasdearta.com/", label: "cuevasdearta.com" } },
        { name: "Artà market", text: "Every Tuesday morning: local and handmade products, organic goods from the area, fruit and vegetables." },
      ],
    },
    reviews: {
      eyebrow: "What guests say",
      rating: "4.3",
      source: "on Google · over 600 reviews",
      link: "See on Google Maps",
      mapsUrl: "https://maps.app.goo.gl/AvtphY6pBBH14PN78?g_st=ic",
      items: [
        { from: "United Kingdom", text: "One of the most outstanding views in the world. We ate beautifully and had no problem with service." },
        { from: "Netherlands", text: "Loved the environmental ethos, the superb location, the attentive staff, the rooms and the pool." },
        { from: "Spain", text: "Beautiful location, great views, calm, swimming pool, friendly staff. Couldn't have asked for more." },
      ],
    },
    book: {
      eyebrow: "Book direct",
      title: "Book your stay.",
      lede: "Real-time availability and prices on Sa Duaia's official website.",
      checkin: "Check-in",
      checkout: "Check-out",
      adults: "Adults",
      promo: "Promo code",
      promoPh: "Optional",
      submit: "Check availability",
      errDates: "Check-out must be after check-in.",
      write: "Prefer to message us?",
    },
    promo: { eyebrow: "Offer", code: "Code", cta: "Use the code", close: "Close" },
    footer: {
      address: ["Ctra. Artà–Cala Torta, km 6", "07570 Artà · Balearic Islands", "Spain"],
      contact: "Contact",
      social: "Social",
      lang: "Language",
      legal: [
        { label: "Privacy policy", href: "Legal.html#privacidad" },
        { label: "Legal notice", href: "Legal.html#aviso-legal" },
        { label: "Cookies", href: "Legal.html#cookies" },
      ],
      copy: "© 2026 Finca Sa Duaia de Dalt",
      credits: "Design & development",
    },
  },
};

/* ───────────────────────────  HELPERS  ────────────────────────── */

/* Revela cada .reveal / .reveal-zoom una sola vez, al entrar en pantalla.
   Lo que entra en el mismo momento (una fila de la grilla, título + texto)
   se escalona 80 ms en orden de lectura, con un tope de 400 ms. */
function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible), .reveal-zoom:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((e, k) => {
            e.target.style.setProperty("--reveal-delay", Math.min(k, 5) * 80 + "ms");
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function lockScroll(locked) {
  const lenis = window.__lenis;
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (lenis) locked ? lenis.stop() : lenis.start();
}

const Arrow = (props) => (
  <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true" {...props}>
    <path d="M0 6h22M16 1l5 5-5 5" />
  </svg>
);

function Eyebrow({ children, light = false, className = "" }) {
  return (
    <div className={["uppercase text-[11px] font-medium tracking-[0.28em]", light ? "text-cream/80" : "text-garnet", className].join(" ")}>
      {children}
    </div>
  );
}

function Lines({ text }) {
  return text.split("\n").map((l, i, a) => (
    <React.Fragment key={i}>
      {l}
      {i < a.length - 1 && <br />}
    </React.Fragment>
  ));
}

function LangSwitch({ lang, setLang, light = false }) {
  const base = "px-1.5 transition-colors duration-300";
  const on = light ? "text-cream underline underline-offset-[6px] decoration-1" : "text-ink underline underline-offset-[6px] decoration-1";
  const off = light ? "text-cream/60 hover:text-cream" : "text-ink/45 hover:text-ink";
  return (
    <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.28em]">
      <button type="button" onClick={() => setLang("es")} className={[base, lang === "es" ? on : off].join(" ")}>ES</button>
      <span className={light ? "text-cream/35" : "text-ink/25"}>/</span>
      <button type="button" onClick={() => setLang("en")} className={[base, lang === "en" ? on : off].join(" ")}>EN</button>
    </div>
  );
}

/* Panel a pantalla completa: la foto manda, una sola palabra encima. */
function Panel({ img, alt, label, position = "center" }) {
  return (
    <div className="reveal-zoom relative h-[64svh] md:h-[78vh] min-h-[380px] overflow-hidden bg-ink">
      <img src={img} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 panel-veil" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h2 className="reveal panel-title text-cream uppercase font-light text-[20px] sm:text-[24px] md:text-[34px]">{label}</h2>
      </div>
    </div>
  );
}

/* ───────────────────────────  HEADER + MENÚ  ────────────────────────── */

function Header({ t, lang, setLang, scrolled, onMenu }) {
  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        scrolled ? "bg-linen/95 backdrop-blur-md border-b border-ink/10" : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1480px] px-4 md:px-8 h-[68px] md:h-[84px] flex items-center justify-between gap-4">
        <a href="#top" className="shrink-0" aria-label="Finca Sa Duaia de Dalt">
          <img
            src={scrolled ? "assets/logo-ink.png" : "assets/logo-cream.png"}
            alt="Finca Sa Duaia de Dalt"
            className="h-11 md:h-14 w-auto select-none"
            draggable="false"
          />
        </a>

        <div className="flex items-center gap-3 md:gap-7">
          <div className="hidden md:block">
            <LangSwitch lang={lang} setLang={setLang} light={!scrolled} />
          </div>
          <a
            href="#reservar"
            className={[
              "inline-flex items-center justify-center border px-4 md:px-6 h-10 md:h-11 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-500",
              scrolled ? "border-ink bg-ink text-cream hover:bg-garnet hover:border-garnet" : "border-cream/75 text-cream hover:bg-cream hover:text-ink",
            ].join(" ")}
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            onClick={onMenu}
            aria-label={t.nav.open}
            className={["inline-flex items-center gap-3 h-10 -mr-1 pl-1 pr-1", scrolled ? "text-ink" : "text-cream"].join(" ")}
          >
            <span className="hidden md:inline text-[11px] font-medium uppercase tracking-[0.28em]">{t.nav.menu}</span>
            <span className="flex flex-col gap-[6px] w-6" aria-hidden="true">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current self-end" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Menu({ t, lang, setLang, open, onClose }) {
  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    ["#finca", t.nav.finca],
    ["#alojamientos", t.nav.stays],
    ["#villas", t.nav.villas],
    ["#restaurante", t.nav.restaurant],
    ["#entorno", t.nav.area],
  ];

  return (
    <div
      className={[
        "fixed inset-0 z-[60] bg-linen text-ink transition-opacity duration-500",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div className="mx-auto max-w-[1480px] h-full px-4 md:px-8 flex flex-col">
        <div className="h-[68px] md:h-[84px] flex items-center justify-between">
          <img src="assets/logo-ink.png" alt="Finca Sa Duaia de Dalt" className="h-11 md:h-14 w-auto select-none" draggable="false" />
          <button type="button" onClick={onClose} aria-label={t.nav.close} className="relative w-10 h-10 -mr-2">
            <span className="absolute left-1/2 top-1/2 w-6 h-px bg-ink -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <span className="absolute left-1/2 top-1/2 w-6 h-px bg-ink -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </button>
        </div>

        <div className="flex-1 grid md:grid-cols-12 gap-10 content-center md:items-center py-8 overflow-y-auto">
          <nav className="md:col-span-6 md:col-start-2 flex flex-col">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={onClose}
                className="font-display text-[34px] md:text-[52px] leading-[1.25] tracking-tight hover:text-garnet transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="md:col-span-4">
            <div className="hidden md:block w-14 h-px bg-garnet/60 mb-8" />
            <p className="font-display text-[24px] md:text-[30px] leading-tight">{t.menuAside.title}</p>
            <p className="mt-4 text-ink/70 text-[14px] leading-[1.75] font-light max-w-xs">{t.menuAside.text}</p>
            <a
              href="#reservar"
              onClick={onClose}
              className="mt-7 inline-flex items-center gap-3 bg-ink text-cream px-7 h-12 text-[11px] font-medium uppercase tracking-[0.24em] hover:bg-garnet transition-colors duration-500"
            >
              {t.nav.book}
              <Arrow className="w-5 h-3" />
            </a>
          </div>
        </div>

        <div className="py-6 border-t border-ink/10 flex items-center justify-between">
          <LangSwitch lang={lang} setLang={setLang} />
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/45">Artà · Mallorca</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────  HERO  ────────────────────────── */

function Hero({ t }) {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="assets/hero.mp4"
        poster="assets/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 hero-veil" />

      <div className="absolute inset-x-0 bottom-0 pb-20 md:pb-24 px-4">
        <div className="mx-auto max-w-[900px] text-center text-cream hero-in">
          <Eyebrow light>{t.hero.eyebrow}</Eyebrow>
          {/* "de Dalt" no se separa: en móvil corta "Finca Sa Duaia / de Dalt". */}
          <h1 className="mt-5 font-display font-normal leading-[1.02] tracking-tight text-[44px] sm:text-[60px] md:text-[84px]">
            Finca Sa Duaia <span className="whitespace-nowrap">de Dalt</span>
          </h1>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-3 bg-cream text-ink px-8 h-12 text-[11px] font-medium uppercase tracking-[0.24em] hover:bg-linen transition-colors duration-500"
            >
              {t.nav.book}
              <Arrow className="w-5 h-3" />
            </a>
            <a href="#alojamientos" className="text-[11px] font-medium uppercase tracking-[0.24em] text-cream/85 hover:text-cream underline underline-offset-[8px] decoration-cream/40">
              {t.hero.more}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-12 w-px bg-cream/25 overflow-hidden" aria-hidden="true">
        <span className="block w-px h-full bg-cream/80 scroll-line" />
      </div>
    </section>
  );
}

/* ───────────────────────────  LA FINCA  ────────────────────────── */

const GALLERY = [
  { src: "assets/finca-torre-terraza.jpg", cls: "col-span-2 md:col-span-8 aspect-[3/2]" },
  { src: "assets/finca-buganvilla.jpg", cls: "col-span-1 md:col-span-4 aspect-[3/4] md:aspect-auto" },
  { src: "assets/finca-casa-piedra.jpg", cls: "col-span-1 md:col-span-4 aspect-[3/4] md:aspect-[4/3]" },
  { src: "assets/finca-piscina.jpg", cls: "col-span-2 md:col-span-4 aspect-[3/2] md:aspect-[4/3]" },
  { src: "assets/finca-terraza.jpg", cls: "col-span-1 md:col-span-4 aspect-[3/4] md:aspect-[4/3]" },
  { src: "assets/finca-entrada.jpg", cls: "col-span-1 md:col-span-5 aspect-[3/4] md:aspect-auto" },
  { src: "assets/finca-naranjo.jpg", cls: "col-span-2 md:col-span-7 aspect-[3/2] md:aspect-[16/10]" },
];

function Finca({ t }) {
  const i = t.intro;
  return (
    <section id="finca" className="bg-linen">
      <div className="mx-auto max-w-[860px] px-4 md:px-8 pt-24 md:pt-36 pb-16 md:pb-24 text-center">
        <Eyebrow className="reveal">{i.eyebrow}</Eyebrow>
        <h2 className="reveal mt-6 font-display text-ink text-[36px] md:text-[56px] leading-[1.08] tracking-tight">
          <Lines text={i.title} />
        </h2>
        {i.body.map((p, k) => (
          <p key={k} className="reveal mt-7 text-ink/75 text-[16px] md:text-[18px] leading-[1.85] font-light">{p}</p>
        ))}
      </div>
      {/* Sin separadores: si la línea corta, ningún renglón arranca con un punto suelto. */}
      <ul className="reveal mx-auto max-w-[1100px] px-4 -mt-4 md:-mt-8 pb-16 md:pb-24 flex flex-wrap justify-center gap-x-8 md:gap-x-10 gap-y-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
        {i.amenities.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <div className="mx-auto max-w-[1480px] px-2 md:px-8 pb-24 md:pb-36">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3">
          {GALLERY.map((g, k) => (
            <figure key={g.src} className={["reveal reveal-zoom relative overflow-hidden bg-cream", g.cls].join(" ")}>
              <img src={g.src} alt={t.gallery[k]} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </figure>
          ))}
        </div>
      </div>

      {/* Capilla: mismo formato que el bloque del restaurante */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 pb-24 md:pb-36 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="reveal reveal-zoom md:col-span-7 relative aspect-[3/2] overflow-hidden bg-cream">
          <img src="assets/finca-capilla.jpg" alt={t.chapel.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:col-span-5">
          <Eyebrow className="reveal">{t.chapel.eyebrow}</Eyebrow>
          <h3 className="reveal mt-5 font-display text-ink text-[34px] md:text-[48px] leading-[1.08] tracking-tight">{t.chapel.title}</h3>
          <p className="reveal mt-6 text-ink/75 text-[16px] leading-[1.85] font-light">{t.chapel.body}</p>
        </div>
      </div>

      {/* En recuerdo del fundador: discreto, sin datos que no tengamos */}
      <figure className="reveal reveal-zoom mx-auto max-w-[420px] px-4 pb-24 md:pb-36 text-center">
        <div className="relative mx-auto w-[200px] md:w-[240px] aspect-[4/5] overflow-hidden bg-cream">
          <img src="assets/finca-juan.jpg" alt={t.founder.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <figcaption className="mt-6 font-display text-ink/80 text-[20px] md:text-[22px] leading-snug"><Lines text={t.founder.text} /></figcaption>
      </figure>
    </section>
  );
}

/* ───────────────────────────  ALOJAMIENTOS  ────────────────────────── */

const STAY_PHOTOS = [
  "assets/aloj-dormitorio-mosquitera.jpg",
  "assets/aloj-salon-sofas.jpg",
  "assets/aloj-dos-camas.jpg",
  "assets/aloj-dormitorio-piedra.jpg",
  "assets/aloj-puerta-jardin.jpg",
  "assets/aloj-comedor-bungalow.jpg",
  // 3.er WeTransfer (19/11): habitación doble (12), estudios (13 y 14) y torre (15 y 16)
  "assets/aloj-estudio-cama.jpg",
  "assets/aloj-ventana-palmeras.jpg",
  "assets/aloj-torre-dormitorio.jpg",
  "assets/aloj-torre-ventana.jpg",
  "assets/aloj-doble-chimenea.jpg",
  "assets/aloj-estudio-mesa.jpg",
];

function Stays({ t }) {
  const s = t.stays;
  const rows = (r) => [
    [s.labels.bed, r.bed],
    [s.labels.bath, r.bath],
    [s.labels.guests, r.guests],
    [s.labels.views, r.views],
    ...(r.plus ? [[s.labels.plus, r.plus]] : []),
  ];
  return (
    <section id="alojamientos" className="bg-linen">
      <Panel img="assets/aloj-salon-chimenea.jpg" alt="" label={s.panel} />
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[640px]">
          <Eyebrow className="reveal">{s.eyebrow}</Eyebrow>
          <h3 className="reveal mt-5 font-display text-ink text-[34px] md:text-[48px] leading-[1.08] tracking-tight">{s.title}</h3>
          <p className="reveal mt-5 text-ink/70 text-[16px] leading-[1.8] font-light">{s.lede}</p>
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {s.items.map((r) => (
            <article key={r.name} className="reveal border-t border-ink/15 pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-garnet">{r.kind}</span>
                <span className="font-display text-ink text-[34px] leading-none whitespace-nowrap">
                  {r.size}
                  <span className="ml-1 text-[15px] text-ink/55">m²</span>
                </span>
              </div>
              <h4 className="mt-4 font-display text-ink text-[23px] leading-snug">{r.name}</h4>
              <dl className="mt-5 grid grid-cols-[92px_1fr] gap-x-4 gap-y-2 text-[14px] leading-[1.6]">
                {rows(r).map(([k, v]) => (
                  <React.Fragment key={k}>
                    <dt className="text-ink/60">{k}</dt>
                    <dd className="text-ink/85">{v}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {/* Interiores: sin etiqueta de tipo hasta confirmar qué unidad es cada foto */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {STAY_PHOTOS.map((src, k) => (
            <figure key={src} className="reveal reveal-zoom relative aspect-[4/5] overflow-hidden bg-cream">
              <img src={src} alt={s.photos[k]} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </figure>
          ))}
        </div>

        <div className="reveal mt-16 md:mt-20 text-center">
          <a
            href="#reservar"
            className="inline-flex items-center gap-3 border border-ink text-ink px-8 h-12 text-[11px] font-medium uppercase tracking-[0.24em] hover:bg-ink hover:text-cream transition-colors duration-500"
          >
            {s.cta}
            <Arrow className="w-5 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  VILLAS  ────────────────────────── */

function Villas({ t }) {
  const v = t.villas;
  return (
    <section id="villas" className="bg-cream">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[680px]">
          <Eyebrow className="reveal">{v.eyebrow}</Eyebrow>
          <h2 className="reveal mt-5 font-display text-ink text-[34px] md:text-[48px] leading-[1.08] tracking-tight">{v.title}</h2>
          <p className="reveal mt-5 text-ink/70 text-[16px] leading-[1.8] font-light">{v.lede}</p>
        </div>

        <div className="mt-14 md:mt-16 grid md:grid-cols-2 gap-14 md:gap-12">
          {v.items.map((x) => (
            <article key={x.name} className="reveal reveal-zoom">
              <div className="relative aspect-[3/2] overflow-hidden bg-linen">
                <img src={x.img} alt={x.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="mt-7 font-display text-ink text-[32px] md:text-[38px] leading-none tracking-tight">{x.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/70">
                <li><span className="text-garnet">{x.guests}</span> {v.labels.guests}</li>
                <li><span className="text-garnet">{x.rooms}</span> {v.labels.rooms}</li>
                <li><span className="text-garnet">{x.baths}</span> {v.labels.baths}</li>
              </ul>
              <p className="mt-5 text-ink/75 text-[15px] leading-[1.8] font-light max-w-[520px]">{x.text}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <a
            href="#reservar"
            className="inline-flex items-center gap-3 border border-ink text-ink px-8 h-12 text-[11px] font-medium uppercase tracking-[0.24em] hover:bg-ink hover:text-cream transition-colors duration-500"
          >
            {v.cta}
            <Arrow className="w-5 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  RESTAURANTE  ────────────────────────── */

function Restaurant({ t }) {
  const r = t.restaurant;
  return (
    <section id="restaurante" className="bg-linen">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="reveal reveal-zoom md:col-span-7 relative aspect-[3/2] overflow-hidden bg-cream">
          <img src="assets/restaurante-sa-duaia.jpg" alt={r.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:col-span-5">
          <Eyebrow className="reveal">{r.eyebrow}</Eyebrow>
          <h2 className="reveal mt-5 font-display text-ink text-[34px] md:text-[48px] leading-[1.08] tracking-tight">{r.title}</h2>
          <p className="reveal mt-6 text-ink/75 text-[16px] leading-[1.85] font-light">{r.body}</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  ENTORNO  ────────────────────────── */

function Area({ t }) {
  const a = t.area;
  return (
    <section id="entorno" className="bg-linen">
      <Panel img="assets/entorno-montana.jpg" alt="" label={a.panel} position="center 22%" />
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow className="reveal">{a.eyebrow}</Eyebrow>
            <h3 className="reveal mt-5 font-display text-ink text-[34px] md:text-[44px] leading-[1.1] tracking-tight">
              <Lines text={a.title} />
            </h3>
          </div>
          <dl className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
            {a.distances.map((d) => (
              <div key={d.l} className="reveal border-t border-ink/15 pt-4">
                <dt className="sr-only">{d.l}</dt>
                <dd className="font-display text-ink text-[30px] md:text-[36px] leading-none">{d.v}</dd>
                <dd className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">{d.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 md:mt-28">
          <h3 className="reveal text-[11px] font-medium uppercase tracking-[0.28em] text-garnet">{a.routeTitle}</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-x-16 gap-y-10">
            {a.route.map((p, k) => (
              <article key={p.name} className="reveal flex gap-6">
                <span className="font-display text-garnet/70 text-[20px] leading-[1.4] w-7 shrink-0">{String(k + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="font-display text-ink text-[22px] leading-snug">{p.name}</h4>
                  <p className="mt-2 text-ink/70 text-[15px] leading-[1.8] font-light">{p.text}</p>
                  {p.link && (
                    <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[13px] text-garnet underline underline-offset-4 decoration-garnet/40 hover:decoration-garnet">
                      {p.link.label} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  RESEÑAS  ────────────────────────── */

function Reviews({ t }) {
  const r = t.reviews;
  return (
    <section id="resenas" className="bg-cream">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-28">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>{r.eyebrow}</Eyebrow>
            <p className="mt-5 flex items-baseline gap-4">
              <span className="font-display text-ink text-[56px] md:text-[64px] leading-none">{r.rating}</span>
              <span className="text-[13px] text-ink/65 font-light">{r.source}</span>
            </p>
          </div>
          <a href={r.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-medium uppercase tracking-[0.24em] text-ink/70 hover:text-garnet underline underline-offset-[8px] decoration-ink/25">
            {r.link} ↗
          </a>
        </div>
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-12">
          {r.items.map((q) => (
            <figure key={q.from} className="reveal border-t border-ink/15 pt-6">
              <blockquote className="font-display italic text-ink/85 text-[19px] md:text-[20px] leading-[1.55]">“{q.text}”</blockquote>
              <figcaption className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50">{q.from}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  RESERVAR  ────────────────────────── */

const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const addDays = (s, n) => {
  const [y, m, d] = s.split("-").map(Number);
  return ymd(new Date(y, m - 1, d + n));
};
const toEngineDate = (s) => s.split("-").reverse().join("/");

function Book({ t, lang }) {
  const b = t.book;
  const today = ymd(new Date());
  const [checkin, setCheckin] = useState(addDays(today, 1));
  const [checkout, setCheckout] = useState(addDays(today, 2));
  const [adults, setAdults] = useState(2);
  const [code, setCode] = useState(promoIsLive() ? PROMO.code : "");
  const [error, setError] = useState("");

  const onCheckin = (v) => {
    setCheckin(v);
    setError("");
    if (v && checkout <= v) setCheckout(addDays(v, 1));
  };
  const onSubmit = (e) => {
    if (!checkin || !checkout || checkout <= checkin) {
      e.preventDefault();
      setError(b.errDates);
    }
  };

  const field = "w-full h-12 bg-transparent border-b border-ink/25 focus:border-ink outline-none text-[15px] text-ink";
  const label = "block text-[10px] font-medium uppercase tracking-[0.24em] text-ink/55 mb-1 whitespace-nowrap";

  return (
    <section id="reservar" className="reveal-zoom relative overflow-hidden bg-ink">
      <img src="assets/finca-piscina.jpg" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 book-veil" />
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 py-24 md:py-40">
        <div className="reveal mx-auto max-w-[760px] bg-linen px-6 py-10 md:px-14 md:py-14 shadow-[0_30px_80px_-30px_rgba(26,20,16,0.6)]">
          <div className="text-center">
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-ink text-[34px] md:text-[48px] leading-[1.08] tracking-tight">{b.title}</h2>
            <p className="mt-4 text-ink/70 text-[15px] leading-[1.75] font-light">{b.lede}</p>
          </div>

          <form method="post" action={BOOKING.action[lang]} target="_blank" onSubmit={onSubmit} className="mt-10" noValidate>
            <input type="hidden" name="entrada" value={toEngineDate(checkin)} />
            <input type="hidden" name="salida" value={toEngineDate(checkout)} />
            <input type="hidden" name="occupancies" value={JSON.stringify([{ adults: String(adults), children: "0", ages: "" }])} />
            <input type="hidden" name="codpromo" value={code.trim()} />

            <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_0.7fr_1.3fr] gap-x-6 gap-y-7">
              <label className="block">
                <span className={label}>{b.checkin}</span>
                <input type="date" className={field} value={checkin} min={today} onChange={(e) => onCheckin(e.target.value)} required />
              </label>
              <label className="block">
                <span className={label}>{b.checkout}</span>
                <input type="date" className={field} value={checkout} min={addDays(checkin || today, 1)} onChange={(e) => { setCheckout(e.target.value); setError(""); }} required />
              </label>
              <label className="block">
                <span className={label}>{b.adults}</span>
                <select className={field + " select-chevron pr-6"} value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className={label}>{b.promo}</span>
                <input type="text" className={field + " uppercase placeholder:normal-case placeholder:text-ink/35"} value={code} placeholder={b.promoPh} onChange={(e) => setCode(e.target.value)} autoComplete="off" />
              </label>
            </div>

            {error && <p className="mt-5 text-[13px] text-garnet" role="alert">{error}</p>}

            <button
              type="submit"
              className="mt-9 w-full inline-flex items-center justify-center gap-3 bg-ink text-cream h-14 text-[12px] font-medium uppercase tracking-[0.24em] hover:bg-garnet transition-colors duration-500"
            >
              {b.submit}
              <Arrow className="w-5 h-3" />
            </button>
          </form>

          <p className="mt-7 text-center text-[13px] text-ink/60 font-light">
            {b.write}{" "}
            <a href={WHATSAPP.href} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink">
              WhatsApp · {WHATSAPP.label}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  FOOTER  ────────────────────────── */

function Footer({ t, lang, setLang }) {
  const f = t.footer;
  const link = "hover:text-cream transition-colors";
  return (
    <footer className="bg-ink text-cream/75">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8">
          <div className="col-span-2 md:col-span-4">
            <img src="assets/logo-cream.png" alt="Finca Sa Duaia de Dalt" className="h-16 w-auto select-none" draggable="false" />
            <address className="mt-8 not-italic text-[14px] leading-[1.85] font-light">
              {f.address.map((l, i) => <div key={i}>{l}</div>)}
            </address>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/45 mb-5">{f.contact}</div>
            <div className="space-y-2 text-[14px] font-light">
              <div><a href={PHONE.href} className={link}>{PHONE.label}</a></div>
              <div><a href="mailto:hola@saduaia.com" className={link}>hola@saduaia.com</a></div>
              <div><a href={WHATSAPP.href} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp</a></div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/45 mb-5">{f.social}</div>
            <div className="space-y-2 text-[14px] font-light">
              <div><a href="https://www.instagram.com/fincasaduaiadedalt/" target="_blank" rel="noopener" className={link}>Instagram ↗</a></div>
              <div><a href="#" className={link}>Facebook ↗</a></div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-3">
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/45 mb-5">{f.lang}</div>
            <LangSwitch lang={lang} setLang={setLang} light />
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-[11px] uppercase tracking-[0.2em] text-cream/50">
          <div>{f.copy}</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {f.legal.map((l) => (
              <a key={l.href} href={l.href} className={link}>{l.label}</a>
            ))}
          </div>
          <a href="https://vocai.es" target="_blank" rel="noopener noreferrer" className={link}>
            {f.credits} · <span className="font-display italic normal-case tracking-normal text-[15px]">VOCAI</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────  POP-UP DE DESCUENTO  ────────────────────────── */

function PromoPopup({ t, lang }) {
  const [open, setOpen] = useState(false);
  const key = "sa-duaia-promo-" + PROMO.code;

  useEffect(() => {
    if (!promoIsLive()) return;
    try {
      if (localStorage.getItem(key) === "closed") return;
    } catch (e) {}
    const id = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(id);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(key, "closed");
    } catch (e) {}
  };

  if (!open) return null;
  const p = PROMO[lang];
  return (
    <div role="dialog" aria-label={p.title} className="promo-in fixed z-[70] left-3 right-3 bottom-3 md:left-8 md:right-auto md:bottom-8 md:w-[380px] bg-linen text-ink shadow-[0_24px_60px_-20px_rgba(26,20,16,0.55)]">
      <button type="button" onClick={close} aria-label={t.promo.close} className="absolute top-3 right-3 w-9 h-9">
        <span className="absolute left-1/2 top-1/2 w-4 h-px bg-ink -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <span className="absolute left-1/2 top-1/2 w-4 h-px bg-ink -translate-x-1/2 -translate-y-1/2 -rotate-45" />
      </button>
      <div className="px-7 pt-7 pb-7">
        <Eyebrow>{t.promo.eyebrow}</Eyebrow>
        <p className="mt-3 pr-6 font-display text-[26px] leading-tight">{p.title}</p>
        {p.text && <p className="mt-3 text-[14px] leading-[1.7] text-ink/70 font-light">{p.text}</p>}
        <div className="mt-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
          {t.promo.code}
          <span className="px-3 py-1.5 border border-dashed border-garnet/60 text-garnet tracking-[0.16em] text-[13px]">{PROMO.code}</span>
        </div>
        <a
          href="#reservar"
          onClick={close}
          className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-ink text-cream h-12 text-[11px] font-medium uppercase tracking-[0.24em] hover:bg-garnet transition-colors duration-500"
        >
          {t.promo.cta}
          <Arrow className="w-5 h-3" />
        </a>
      </div>
    </div>
  );
}

/* ───────────────────────────  APP  ────────────────────────── */

function App() {
  const [lang, setLang] = useState("es");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = CONTENT[lang];

  useReveal(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} scrolled={scrolled} onMenu={() => setMenuOpen(true)} />
      <Menu t={t} lang={lang} setLang={setLang} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero t={t} />
        <Finca t={t} />
        <Stays t={t} />
        <Villas t={t} />
        <Restaurant t={t} />
        <Area t={t} />
        <Reviews t={t} />
        <Book t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
      <PromoPopup t={t} lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
