function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ───────────────────────────  CONTENT (ES / EN)  ────────────────────────── */

const CONTENT = {
  es: {
    nav: {
      welcome: "Bienvenida",
      finca: "La Finca",
      stays: "Habitaciones",
      restaurant: "Restaurante",
      surroundings: "Entorno",
      book: "Reservar"
    },
    hero: {
      eyebrow: "Agroturismo mallorquí · Artà",
      wordmark1: "FINCA",
      wordmark2: "SA DUAIA",
      wordmark3: "DE DALT",
      tagline: "Mallorca como era. Como debe ser.",
      services: "11 habitaciones · Restaurante · Piscina · 30 min del mar",
      specHabs: "Habitaciones",
      specMesa: "Restaurante",
      specPool: "Piscina",
      specSea: "del mar",
      scroll: "Descubre"
    },
    welcome: {
      eyebrow: "I · Bienvenida",
      heading: "Bienvenido \na Sa Duaia.",
      body: ["Una finca del siglo XV escondida en la Serra de Llevant.", "A 30 minutos del mar, a un mundo de distancia de todo lo demás.", "Aquí el tiempo se mide en estaciones, no en horas."],
      caption: "Campana de la entrada. 1920.",
      captions: ["Campana de la entrada. 1920.", "Bienvenida en cada habitación.", "La piscina mirando al monte."]
    },
    finca: {
      eyebrow: "II · La Finca",
      heading: "Seis siglos\nde historia.",
      body: "La torre de Sa Duaia vigila estos olivos desde 1425. Generaciones de payeses mallorquines, una restauración respetuosa y una idea simple: que cada huésped sienta que viene de visita a la casa de la familia.",
      since: "Desde 1425",
      caption: "Vista aérea — Sa Duaia y la Serra de Llevant",
      stats: [{
        num: "1425",
        label: "Año de fundación",
        body: "La torre de defensa que aún hoy custodia los olivos."
      }, {
        num: "VI",
        label: "Siglos de piedra",
        body: "Seis siglos de generaciones de payeses mallorquines."
      }, {
        num: "11",
        label: "Estancias hoy",
        body: "Restauradas con respeto. Piedra original, alma intacta."
      }]
    },
    intermezzo: {
      eyebrow: "Interludio",
      quote: "El tiempo no pasa aquí.\nSe queda.",
      mark: "Sa Duaia · MCDXXV"
    },
    promises: {
      eyebrow: "III · Tres promesas",
      title: "Lo que nos define.",
      items: [{
        n: "I.",
        title: "Historia viva.",
        body: "Una finca del siglo XV restaurada con respeto. Piedra original, vigas de madera, alma intacta.",
        aside: "Cada piedra cuenta seis siglos de oficio."
      }, {
        n: "II.",
        title: "Naturaleza alrededor.",
        body: "Olivos centenarios, montañas de la Serra de Llevant, senderos hacia el mar. El silencio que ya nadie tiene.",
        aside: "Los olivos vieron pasar imperios."
      }, {
        n: "III.",
        title: "Mesa mallorquina.",
        body: "Cocina de finca con producto local. Sobremesa larga, pan recién hecho, vino de la isla.",
        aside: "La mesa abierta también a quien no se aloja."
      }]
    },
    stays: {
      eyebrow: "IV · Estancias",
      title: "Once habitaciones,\nninguna igual.",
      lede: "Cada estancia conserva la geometría original de la casa. Piedra vista, suelos de barro, ventanas hacia la sierra.",
      more: "Ver más",
      cta: "Consultar disponibilidad",
      cards: [{
        tag: "Suite Rústica",
        name: "Bungalow Tradicional",
        size: "60 m²",
        line: "Piedra original a la vista. Dos camas individuales o una matrimonial."
      }, {
        tag: "Studio",
        name: "Estudio Vista Montaña",
        size: "30 m²",
        line: "Vistas a la Serra de Llevant. Suelo de barro mallorquín."
      }, {
        tag: "Familiar",
        name: "Apartamento Familiar",
        size: "36 m²",
        line: "Una habitación con detalles botánicos. Para parejas o pequeñas familias."
      }, {
        tag: "Deluxe",
        name: "Bungalow Deluxe Jardín",
        size: "75 m²",
        line: "La más amplia. Cama king-size, salón propio, terraza al jardín."
      }]
    },
    restaurant: {
      eyebrow: "V · Restaurante",
      title: "Cocina de finca,\nmesa abierta.",
      body: ["Cocina mallorquina hecha en casa. Producto local, recetas de generaciones, mesa abierta también a quienes no se alojan con nosotros.", "Cena bajo el carrobo, sobremesa que se alarga, vino de la isla."],
      meta1: "Abierto",
      meta2: "Reservas recomendadas",
      caption: "Romero del jardín · cocina mallorquina"
    },
    surroundings: {
      eyebrow: "VI · Entorno",
      title: "El lugar.",
      body: "Estás en el corazón de la Serra de Llevant, a 8 minutos de Artà, a 20 minutos de Cala Torta, a 30 del mar abierto. Senderos de piedra que llevan a calas vírgenes. Olivos que vieron pasar imperios. Y un cielo nocturno que en pocos lugares de España se conserva así.",
      stops: [{
        d: "8 min",
        p: "Artà"
      }, {
        d: "20 min",
        p: "Cala Torta"
      }, {
        d: "30 min",
        p: "Mar abierto"
      }]
    },
    details: {
      eyebrow: "VII · Detalles",
      title: "Las pequeñas cosas."
    },
    reviews: {
      eyebrow: "VIII · Lo que dicen",
      title: "Países, generaciones,\nuna misma sensación.",
      lede: "Reseñas reales de huéspedes que pasaron por aquí. Sin filtros.",
      countLabel: "+600 reseñas",
      sourceLabel: "Google · Booking · directo",
      ratingValue: 4.3,
      mapsLabel: "Ver perfil en Google Maps",
      mapsUrl: "https://maps.app.goo.gl/AvtphY6pBBH14PN78?g_st=ic",
      items: [{
        name: "Huésped verificado",
        city: "Reino Unido",
        when: "Booking",
        text: "Una de las vistas más extraordinarias del mundo. Comimos de maravilla y no tuvimos un solo problema con el servicio."
      }, {
        name: "Huésped verificado",
        city: "Alemania",
        when: "Booking",
        text: "Hermoso, panorámico y tranquilo. Un edificio histórico único, con vistas increíbles desde las ventanas hacia la montaña y el mar."
      }, {
        name: "Huésped verificado",
        city: "Estados Unidos",
        when: "Booking",
        text: "Hotel con sensación rústica y una terraza fantástica para los atardeceres, con vistas panorámicas de montaña y costa."
      }, {
        name: "Huésped verificado",
        city: "Francia",
        when: "Booking",
        text: "Personal amable, la oportunidad de tener una torre medieval para nosotros solos y unas vistas increíbles a toda hora del día y de la noche."
      }, {
        name: "Huésped verificado",
        city: "Países Bajos",
        when: "Booking",
        text: "Adoramos la filosofía ambiental, la ubicación inmejorable, el personal atento, las habitaciones hermosas y la piscina."
      }, {
        name: "Huésped verificado",
        city: "Italia",
        when: "Sitio oficial",
        text: "Lugar tranquilo y precioso, con una vista magnífica. La comida fue muy buena, igual que el servicio."
      }, {
        name: "Huésped verificado",
        city: "España",
        when: "Booking",
        text: "Hermosa ubicación, vistas inmejorables, calma, piscina, personal amable. No podíamos haber pedido más."
      }, {
        name: "Huésped verificado",
        city: "Suiza",
        when: "Hotelmix",
        text: "El entorno natural es sorprendente. Ubicado en el Parque del Levante, ofrece vistas alucinantes y una tranquilidad inigualable."
      }, {
        name: "Huésped verificado",
        city: "Bélgica",
        when: "Booking",
        text: "Un rincón apartado, junto a la naturaleza y las playas. Vistas fantásticas desde las ventanas, montes y mar a ambos lados."
      }]
    },
    booking: {
      eyebrow: "VIII · Reservas",
      title: "Reserva tu estancia.",
      lede: "Disponibilidad en tiempo real. Sin intermediarios.",
      note: "También por teléfono o WhatsApp."
    },
    footer: {
      address: ["Camí Sa Duaia", "07570 Artà · Illes Balears", "España"],
      contact: "Contacto",
      hours: "Recepción",
      hoursVal: "08:00 – 22:00",
      legal: [{
        label: "Política de privacidad",
        href: "Legal.html#privacidad"
      }, {
        label: "Aviso legal",
        href: "Legal.html#aviso-legal"
      }, {
        label: "Cookies",
        href: "Legal.html#cookies"
      }],
      copy: "© 2026 Finca Sa Duaia de Dalt · Todos los derechos reservados",
      sign: "Hecho con tiempo en Mallorca."
    }
  },
  en: {
    nav: {
      welcome: "Welcome",
      finca: "The Estate",
      stays: "Rooms",
      restaurant: "Restaurant",
      surroundings: "Surroundings",
      book: "Book"
    },
    hero: {
      eyebrow: "Mallorcan farmhouse · Artà",
      wordmark1: "FINCA",
      wordmark2: "SA DUAIA",
      wordmark3: "DE DALT",
      tagline: "Mallorca as it was. As it should be.",
      services: "11 rooms · Restaurant · Pool · 30 min from the sea",
      specHabs: "Rooms",
      specMesa: "Restaurant",
      specPool: "Pool",
      specSea: "to the sea",
      scroll: "Discover"
    },
    welcome: {
      eyebrow: "I · Welcome",
      heading: "Welcome to Sa Duaia.",
      body: ["A 15th-century estate hidden in the Serra de Llevant.", "30 minutes from the sea, a world away from everything else.", "Here, time is measured in seasons, not hours."],
      caption: "Entrance bell. 1920.",
      captions: ["Entrance bell. 1920.", "A welcome in every room.", "The pool, looking at the mountain."]
    },
    finca: {
      eyebrow: "II · The Estate",
      heading: "Six centuries\nof history.",
      body: "The Sa Duaia tower has watched over these olive groves since 1425. Generations of Mallorcan farmers, a respectful restoration, and a simple idea: that every guest feels like visiting family.",
      since: "Since 1425",
      caption: "Aerial view — Sa Duaia and the Serra de Llevant",
      stats: [{
        num: "1425",
        label: "Founded",
        body: "The defense tower that still watches over the olive groves."
      }, {
        num: "VI",
        label: "Centuries of stone",
        body: "Six centuries of Mallorcan farming generations."
      }, {
        num: "11",
        label: "Rooms today",
        body: "Respectfully restored. Original stone, intact soul."
      }]
    },
    intermezzo: {
      eyebrow: "Interlude",
      quote: "Time doesn't pass here.\nIt stays.",
      mark: "Sa Duaia · MCDXXV"
    },
    promises: {
      eyebrow: "III · Three Promises",
      title: "What defines us.",
      items: [{
        n: "I.",
        title: "Living history.",
        body: "A 15th-century estate, respectfully restored. Original stone, wooden beams, intact soul.",
        aside: "Every stone holds six centuries of craft."
      }, {
        n: "II.",
        title: "Nature all around.",
        body: "Centenary olive trees, mountains of the Serra de Llevant, paths leading to the sea. A silence few places still have.",
        aside: "Olive trees that have watched empires."
      }, {
        n: "III.",
        title: "Mallorcan table.",
        body: "Farmhouse cuisine with local produce. Long meals, fresh bread, island wine.",
        aside: "Our table is also open to non-resident guests."
      }]
    },
    stays: {
      eyebrow: "IV · Rooms",
      title: "Eleven rooms,\nnone alike.",
      lede: "Every room keeps the original geometry of the house. Exposed stone, clay floors, windows that frame the mountains.",
      more: "See more",
      cta: "Check availability",
      cards: [{
        tag: "Rustic suite",
        name: "Traditional Bungalow",
        size: "60 m²",
        line: "Exposed original stone. Twin beds or king bed."
      }, {
        tag: "Studio",
        name: "Mountain View Studio",
        size: "30 m²",
        line: "Serra de Llevant views. Mallorcan terracotta floor."
      }, {
        tag: "Family",
        name: "Family Apartment",
        size: "36 m²",
        line: "Botanical-detailed bedroom. For couples or small families."
      }, {
        tag: "Deluxe",
        name: "Deluxe Garden Bungalow",
        size: "75 m²",
        line: "The most spacious. King-size bed, private living room, garden terrace."
      }]
    },
    restaurant: {
      eyebrow: "V · Restaurant",
      title: "Farm kitchen,\nopen table.",
      body: ["Home-cooked Mallorcan cuisine. Local produce, generational recipes, our table is also open to non-resident guests.", "Dinner under the carob tree, long conversations, island wine."],
      meta1: "Open",
      meta2: "Reservations recommended",
      caption: "Rosemary from the garden · Mallorcan kitchen"
    },
    surroundings: {
      eyebrow: "VI · Surroundings",
      title: "The place.",
      body: "You are in the heart of the Serra de Llevant, 8 minutes from Artà, 20 from Cala Torta, 30 from the open sea. Stone paths leading to untouched coves. Olive trees that have witnessed empires. A night sky preserved in few places in Spain.",
      stops: [{
        d: "8 min",
        p: "Artà"
      }, {
        d: "20 min",
        p: "Cala Torta"
      }, {
        d: "30 min",
        p: "Open sea"
      }]
    },
    details: {
      eyebrow: "VII · Details",
      title: "The small things."
    },
    reviews: {
      eyebrow: "VIII · What they say",
      title: "Different countries,\nthe same feeling.",
      lede: "Real reviews from guests who stayed here. Unfiltered.",
      countLabel: "+600 reviews",
      sourceLabel: "Google · Booking · direct",
      ratingValue: 4.3,
      mapsLabel: "See profile on Google Maps",
      mapsUrl: "https://maps.app.goo.gl/AvtphY6pBBH14PN78?g_st=ic",
      items: [{
        name: "Verified guest",
        city: "United Kingdom",
        when: "Booking",
        text: "One of the most outstanding views in the world. We ate beautifully and had no problem with service. Loved it."
      }, {
        name: "Verified guest",
        city: "Germany",
        when: "Booking",
        text: "Beautiful, scenic, and tranquil. A unique historic building, with fantastic views from our windows on mountains and sea."
      }, {
        name: "Verified guest",
        city: "United States",
        when: "Booking",
        text: "Rustic feel good hotel with a fantastic terrace for sunset views, with mountain and coast panoramas."
      }, {
        name: "Verified guest",
        city: "France",
        when: "Booking",
        text: "Friendly staff, the chance to have a medieval tower just for us, and unbelievable views at any time of day or night."
      }, {
        name: "Verified guest",
        city: "Netherlands",
        when: "Booking",
        text: "Loved the environmental ethos, the superb location, the excellent attentive staff, the beautiful rooms and the pool."
      }, {
        name: "Verified guest",
        city: "Italy",
        when: "Official site",
        text: "Really nice quiet place with a magnificent view. The food was really good, as was the service."
      }, {
        name: "Verified guest",
        city: "Spain",
        when: "Booking",
        text: "Beautiful location, great views, calm, swimming pool, friendly staff. Couldn't have asked for more."
      }, {
        name: "Verified guest",
        city: "Switzerland",
        when: "Hotelmix",
        text: "The natural setting is astonishing. Located in the Llevant Nature Park, it offers stunning views and unmatched tranquillity."
      }, {
        name: "Verified guest",
        city: "Belgium",
        when: "Booking",
        text: "An out of the way spot near nature and beaches. Fantastic views from our windows on mountains and sea on both sides."
      }]
    },
    booking: {
      eyebrow: "VIII · Booking",
      title: "Book your stay.",
      lede: "Real-time availability. No middlemen.",
      note: "Also by phone or WhatsApp."
    },
    footer: {
      address: ["Camí Sa Duaia", "07570 Artà · Illes Balears", "Spain"],
      contact: "Contact",
      hours: "Reception",
      hoursVal: "08:00 – 22:00",
      legal: [{
        label: "Privacy policy",
        href: "Legal.html#privacidad"
      }, {
        label: "Legal notice",
        href: "Legal.html#aviso-legal"
      }, {
        label: "Cookies",
        href: "Legal.html#cookies"
      }],
      copy: "© 2026 Finca Sa Duaia de Dalt · All rights reserved",
      sign: "Made slowly in Mallorca."
    }
  }
};

/* ───────────────────────────  HELPERS  ────────────────────────── */

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px"
    });
    document.querySelectorAll(".reveal, .reveal-iris, .img-iris, .rise, .slide-r, .slide-l, .underline-draw, .review-card, .section-opener").forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* Brand crest — small isotipo for navbar + booking + footer */
const Crest = props => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.4",
  strokeLinecap: "square"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 14v-4h4v4h4v-4h4v4h4v-4h4v4h4v-4h4v4h4v32a16 16 0 0 1-16 16h-0a16 16 0 0 1-16-16V14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 30v6M32 26v10M40 30v6M24 44h16"
}));
const Arrow = props => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 12",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.1",
  strokeLinecap: "round"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h22M16 1l5 5-5 5"
}));
function SectionOpener({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-6 md:px-10 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: ["section-opener", dark ? "on-dark" : ""].join(" ")
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-mark"
  })));
}

/* Editorial marquee transition strip between sections */
function Marquee({
  items,
  dark = false,
  accent = "garnet"
}) {
  const list = Array.from({
    length: 4
  }, () => items).flat();
  const accentColor = accent === "gold" ? "text-gold" : "text-garnet";
  const lineColor = accent === "gold" ? "bg-gold/40" : "bg-garnet/30";
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: ["relative overflow-hidden py-5 md:py-7 border-y", dark ? "bg-ink text-cream/90 border-cream/10" : "bg-linen text-ink/85 border-earth/15"].join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track whitespace-nowrap"
  }, list.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "inline-flex items-center mr-12"
  }, /*#__PURE__*/React.createElement("span", {
    className: ["font-display italic mr-12 text-[22px] md:text-[28px] leading-none number", accentColor].join(" ")
  }, item.num || "·"), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[11px] md:text-[12px] font-medium mr-12"
  }, item.text), /*#__PURE__*/React.createElement("span", {
    className: ["inline-block w-12 h-px", lineColor].join(" ")
  })))));
}
function Eyebrow({
  children,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["uppercase tracking-wider2 text-[11px] font-medium reveal", dark ? "text-cream/70" : "text-garnet"].join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: ["inline-block w-8 h-px", dark ? "bg-cream/40" : "bg-garnet/50"].join(" ")
  }), children));
}

/* ───────────────────────────  NAV  ────────────────────────── */

function Nav({
  lang,
  setLang,
  t,
  scrolled
}) {
  const link = "uppercase text-[11px] md:text-[12px] font-medium transition-colors duration-500";
  const linkColor = scrolled ? "text-ink/75 hover:text-garnet" : "text-cream/90 hover:text-cream";
  return /*#__PURE__*/React.createElement("header", {
    className: ["fixed top-0 left-0 right-0 z-50 transition-all duration-700", scrolled ? "bg-cream/95 backdrop-blur-md border-b border-ink/10" : "bg-transparent"].join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: ["mx-auto max-w-[1480px] px-4 md:px-7 flex items-center justify-between gap-6 transition-all duration-500", scrolled ? "py-3" : "py-4 md:py-5"].join(" ")
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "flex items-center shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: ["block bg-cream transition-all duration-500", scrolled ? "p-2 md:p-2.5" : "p-3 md:p-3.5", "shadow-[0_1px_4px_rgba(26,20,16,0.08)]"].join(" ")
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.png",
    alt: "Finca Sa Duaia de Dalt",
    className: ["w-auto select-none transition-all duration-500", scrolled ? "h-9 md:h-10" : "h-12 md:h-14"].join(" "),
    draggable: "false"
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center gap-7 lg:gap-10 flex-1 justify-center"
  }, [["#welcome", t.nav.welcome], ["#finca", t.nav.finca], ["#stays", t.nav.stays], ["#restaurant", t.nav.restaurant], ["#surroundings", t.nav.surroundings]].map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    className: [link, linkColor].join(" "),
    style: {
      letterSpacing: "0.28em"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5 md:gap-7 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: ["hidden sm:flex items-center text-[11px] md:text-[12px] font-medium uppercase", scrolled ? "text-ink/65" : "text-cream/85"].join(" "),
    style: {
      letterSpacing: "0.28em"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang("es"),
    className: ["px-1.5 transition-colors duration-300", lang === "es" ? "underline underline-offset-[6px] decoration-1 " + (scrolled ? "text-garnet" : "text-cream") : "hover:" + (scrolled ? "text-ink" : "text-cream")].join(" ")
  }, "ES"), /*#__PURE__*/React.createElement("span", {
    className: scrolled ? "text-ink/30" : "text-cream/50"
  }, "/"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang("en"),
    className: ["px-1.5 transition-colors duration-300", lang === "en" ? "underline underline-offset-[6px] decoration-1 " + (scrolled ? "text-garnet" : "text-cream") : "hover:" + (scrolled ? "text-ink" : "text-cream")].join(" ")
  }, "EN")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.saduaia.com/es/bookcore/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: ["inline-flex items-center justify-center border transition-all duration-500", "px-5 md:px-7 py-3 md:py-3.5", "text-[11px] md:text-[12px] font-medium uppercase", scrolled ? "border-ink text-ink hover:bg-ink hover:text-cream" : "border-cream/70 text-cream hover:bg-cream hover:text-ink"].join(" "),
    style: {
      letterSpacing: "0.28em"
    }
  }, t.nav.book))));
}

/* ───────────────────────────  HERO  (video, wordmark right)  ───────────────────────── */

function Hero({
  t
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink",
    style: {
      backgroundImage: "url(assets/hero-poster.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "absolute inset-0 w-full h-full object-cover",
    src: "assets/hero.mp4",
    poster: "assets/hero-poster.jpg",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 hero-vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 inset-x-0 h-px bg-cream/15"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] w-full px-6 md:px-10 flex justify-center md:justify-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-cream text-center md:text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6 md:mb-8 flex items-center justify-center md:justify-end gap-4 text-cream/85"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline-block w-12 h-px bg-cream/55"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-gold text-[15px] md:text-[17px] tracking-normal leading-none number"
  }, "MCDXXV"), /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-px bg-cream/30"
  }), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[10px] md:text-[11px] font-medium"
  }, t.hero.eyebrow)), /*#__PURE__*/React.createElement("h1", {
    className: "font-display font-bold leading-[0.92] tracking-tight text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block"
  }, t.hero.wordmark1), /*#__PURE__*/React.createElement("span", {
    className: "block"
  }, t.hero.wordmark2), /*#__PURE__*/React.createElement("span", {
    className: "block"
  }, t.hero.wordmark3)), /*#__PURE__*/React.createElement("p", {
    className: "mt-7 md:mt-9 font-display italic text-cream/90 text-[17px] md:text-[22px] max-w-md md:ml-auto"
  }, t.hero.tagline), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 md:mt-10 flex items-stretch justify-center md:justify-end gap-0 text-cream/85"
  }, [{
    n: "XI",
    l: t.hero.specHabs || "Habitaciones"
  }, {
    n: "I",
    l: t.hero.specMesa || "Restaurante"
  }, {
    n: "I",
    l: t.hero.specPool || "Piscina"
  }, {
    n: "30'",
    l: t.hero.specSea || "del mar"
  }].map((s, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ["flex flex-col items-start md:items-end gap-1.5 px-3 md:px-5", i > 0 ? "border-l border-cream/15" : ""].join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-gold text-[22px] md:text-[28px] leading-none number"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[9px] md:text-[10px] font-medium text-cream/70 whitespace-nowrap"
  }, s.l)))), /*#__PURE__*/React.createElement("a", {
    href: "#reviews",
    className: "mt-7 md:mt-9 inline-flex items-center justify-end gap-4 group/g w-auto md:ml-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2.5 px-4 py-2.5 bg-cream/10 backdrop-blur-sm border border-cream/25 hover:bg-cream/20 transition-colors duration-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5",
    style: {
      color: "#C89211"
    }
  }, [0, 1, 2, 3, 4].map(i => {
    const v = 4.3;
    const isFull = i + 1 <= Math.floor(v);
    const isHalf = !isFull && v - i > 0 && v - i < 1;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      viewBox: "0 0 24 24",
      className: "w-[14px] h-[14px]",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2"
    }, /*#__PURE__*/React.createElement("defs", null, isHalf && /*#__PURE__*/React.createElement("linearGradient", {
      id: `hero-star-${i}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "currentColor"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "transparent"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2 l3.09 6.26 6.91 1.01 -5 4.87 1.18 6.88 L12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z",
      fill: isFull ? "currentColor" : isHalf ? `url(#hero-star-${i})` : "none"
    }));
  }))), /*#__PURE__*/React.createElement("span", {
    className: "flex flex-col gap-0.5 text-cream/85 text-left md:text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-cream text-[16px] md:text-[18px] leading-none"
  }, t.hero.heroSocialEs || "+600 reseñas"), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[9px] md:text-[10px] font-medium text-cream/70"
  }, t.hero.heroSocialGuests || "+5000 huéspedes")))))), /*#__PURE__*/React.createElement("a", {
    href: "#welcome",
    className: "absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/75 hover:text-cream transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[10px] font-medium"
  }, t.hero.scroll), /*#__PURE__*/React.createElement("span", {
    className: "block w-px h-12 bg-cream/55 scroll-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-7 left-6 md:left-10 hidden md:flex items-center gap-3 text-cream/55 uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-px bg-cream/40"
  }), /*#__PURE__*/React.createElement("span", null, "Est. 1425")), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-7 right-6 md:right-10 hidden md:flex items-center gap-3 text-cream/55 uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement("span", null, "39\xB0 41\u2032 N \xB7 3\xB0 21\u2032 E"), /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-px bg-cream/40"
  })));
}

/* ───────────────────────────  WELCOME  ───────────────────────── */

function Welcome({
  t
}) {
  const w = t.welcome;
  const stats = [{
    num: "11",
    label: w.s1Label || "Estancias",
    body: w.s1Body || "Once habitaciones únicas en piedra original mallorquina."
  }, {
    num: "XV",
    label: w.s2Label || "Siglo",
    body: w.s2Body || "Desde mil cuatrocientos veinticinco — seis siglos de tierra trabajada."
  }, {
    num: "30'",
    label: w.s3Label || "Al mar",
    body: w.s3Body || "A treinta minutos del Mediterráneo y de las calas vírgenes de Llevant."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "welcome",
    className: "bg-cream py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute right-[-5%] top-[8%] pointer-events-none select-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/[0.05] leading-[0.85]",
    style: {
      fontSize: "clamp(260px, 38vw, 540px)"
    }
  }, "XI")), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-16 md:mt-24 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-9"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, w.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.98] tracking-tight text-[44px] md:text-[80px] lg:text-[96px] whitespace-pre-line"
  }, w.heading))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-8 md:gap-12 items-start"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "md:col-span-6 rise delay-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[3/4] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/bell.jpg",
    alt: "Campana de hierro oxidado en la entrada",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "eager",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 left-4 font-sans uppercase tracking-wider2 text-[10px] text-cream/85 bg-ink/30 backdrop-blur-sm px-2.5 py-1 border border-cream/15"
  }, "I \u2014 La entrada"))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-5 md:col-start-8 md:pt-12 rise delay-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 text-ink/80 text-[17px] md:text-[19px] leading-[1.85] max-w-xl font-light"
  }, w.body.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, line))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-8 border-t border-garnet/25"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet text-[26px] md:text-[30px] leading-[1.2] block"
  }, "\u201CAqu\xED el tiempo se mide en estaciones, no en horas.\u201D")))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-8 md:gap-12 items-start mt-16 md:mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex md:col-span-2 flex-col items-start gap-3 md:pt-32 rise delay-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/80 number",
    style: {
      fontSize: "clamp(60px, 6.5vw, 96px)",
      lineHeight: 0.9
    }
  }, "MCDXXV"), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-earth"
  }, "Desde 1425")), /*#__PURE__*/React.createElement("figure", {
    className: "md:col-span-7 md:col-start-4 rise delay-2 md:-mt-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[3/2] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/welcome-host.jpg",
    alt: "Toni, anfitri\xF3n de Sa Duaia, en la entrada de piedra de la finca",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 left-4 font-sans uppercase tracking-wider2 text-[10px] text-cream/90 bg-ink/40 backdrop-blur-sm px-2.5 py-1 border border-cream/15"
  }, "II \u2014 La bienvenida")), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-4 flex items-center gap-3 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-6 h-px bg-earth/60"
  }), /*#__PURE__*/React.createElement("span", null, "Toni \xB7 anfitri\xF3n, tercera generaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block md:col-span-2 md:col-start-11 md:pt-40 rise delay-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display italic text-ink/70 text-[20px] leading-[1.4]"
  }, "Una casa", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-ink/45"
  }, "que recibe.")), /*#__PURE__*/React.createElement("span", {
    className: "block w-10 h-px bg-earth/40 mt-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-8 md:gap-12 items-start mt-16 md:mt-12"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "md:col-span-5 md:col-start-2 rise delay-2 md:-mt-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[3/4] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/welcome-towels.jpg",
    alt: "Toallas de bienvenida con romero",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 left-4 font-sans uppercase tracking-wider2 text-[10px] text-cream/85 bg-ink/30 backdrop-blur-sm px-2.5 py-1 border border-cream/15"
  }, "III \u2014 El cuarto"))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-5 md:col-start-8 md:pt-20 flex flex-col gap-12 rise delay-3"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pl-6 border-l border-garnet/40 relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute left-0 top-0 w-px h-8 bg-garnet"
  }), /*#__PURE__*/React.createElement("div", {
    className: "font-display italic text-garnet number leading-none",
    style: {
      fontSize: "clamp(48px, 5vw, 72px)"
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 uppercase tracking-wider2 text-[10px] font-medium text-earth"
  }, s.label), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-ink/70 text-[14px] md:text-[15px] leading-[1.7] font-light max-w-xs"
  }, s.body))))))));
}

/* ───────────────────────────  INTERMEZZO  ───────────────────────── */

function Intermezzo({
  t
}) {
  const im = t.intermezzo || {};
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const p = total > 0 ? Math.min(1, scrolled / total) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fade in 0–0.25, hold 0.25–0.75, fade out 0.75–1.
  const fade = (() => {
    if (progress < 0.25) return progress / 0.25;
    if (progress > 0.75) return Math.max(0, 1 - (progress - 0.75) / 0.25);
    return 1;
  })();

  // Subtle vertical line draw — grows top→bottom during fade-in, retracts during fade-out.
  const lineH = Math.min(1, fade);
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "Interludio",
    className: "relative bg-linen"
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      height: "180vh"
    },
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 h-screen flex items-center justify-center overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 inset-x-0 h-px bg-ink/10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 inset-x-0 h-px bg-ink/10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 -translate-x-1/2 top-[14vh] w-px bg-garnet/40 origin-top transition-transform duration-700 ease-out",
    style: {
      height: "8vh",
      transform: `scaleY(${lineH})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative px-6 md:px-10 text-center transition-opacity duration-700 ease-out",
    style: {
      opacity: fade
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-sans uppercase tracking-wider2 text-[10px] md:text-[11px] text-earth",
    style: {
      letterSpacing: "0.32em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-8 h-px bg-earth/50"
  }), im.eyebrow, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-8 h-px bg-earth/50"
  }))), /*#__PURE__*/React.createElement("blockquote", {
    className: "mt-10 md:mt-14 font-display italic font-light text-ink whitespace-pre-line",
    style: {
      fontSize: "clamp(40px, 7.5vw, 116px)",
      lineHeight: 1.02,
      letterSpacing: "-0.01em"
    }
  }, im.quote), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 md:mt-16 flex items-center justify-center gap-4 text-earth uppercase tracking-wider2 text-[10px] md:text-[11px]",
    style: {
      letterSpacing: "0.32em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-10 h-px bg-earth/45"
  }), /*#__PURE__*/React.createElement("span", null, im.mark), /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-10 h-px bg-earth/45"
  }))))));
}

/* ───────────────────────────  LA FINCA (aerial full-bleed)  ───────────────────────── */

function Finca({
  t
}) {
  const f = t.finca;
  const stats = f.stats || [];
  return /*#__PURE__*/React.createElement("section", {
    id: "finca",
    className: "relative bg-linen py-24 md:py-36 overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-x-0 top-[18%] md:top-[14%] pointer-events-none select-none flex justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/[0.06] leading-[0.85] whitespace-nowrap",
    style: {
      fontSize: "clamp(220px, 36vw, 520px)"
    }
  }, "MCDXXV")), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-16 md:mt-24 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 mb-14 md:mb-20 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, f.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[1] tracking-tight text-[44px] md:text-[80px] lg:text-[92px] whitespace-pre-line"
  }, f.heading)), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 md:col-start-9 rise delay-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-light text-ink/80 text-[16px] md:text-[17px] leading-[1.85]"
  }, f.body), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet text-[34px] number leading-none"
  }, "1425"), /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-px bg-garnet/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-earth"
  }, f.since))))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "rise delay-2 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full overflow-hidden ph mx-auto max-w-[1480px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/9]"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/aerial.jpg",
    alt: "Vista a\xE9rea de la finca y la torre",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "eager",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/40 to-ink/0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-6 md:bottom-10 left-6 md:left-12 right-6 md:right-auto md:max-w-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-cream relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -left-3 top-0 bottom-0 w-px bg-gold/70"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-cream text-[22px] md:text-[30px] leading-[1.15] block drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
  }, "\u201CUna finca que ha visto pasar imperios.\u201D"), /*#__PURE__*/React.createElement("span", {
    className: "mt-4 inline-flex items-center gap-3 uppercase tracking-wider2 text-[10px] font-medium text-cream/90"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-6 h-px bg-gold/80"
  }), "Serra de Llevant \xB7 Art\xE0"))))), /*#__PURE__*/React.createElement("figcaption", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10 mt-5 flex items-center justify-between text-earth uppercase tracking-wider2 text-[10px] font-medium gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-6 h-px bg-earth/60"
  }), f.caption || "Vista aérea — Serra de Llevant"), /*#__PURE__*/React.createElement("span", {
    className: "font-display italic not-uppercase tracking-normal text-garnet text-[13px] md:text-[14px]"
  }, "39\xB0 41\u2032 N \xB7 3\xB0 21\u2032 E")))), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-20 md:mt-28 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-3 gap-10 md:gap-16"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ["rise pl-6 md:pl-8 border-l border-garnet/30 relative", "delay-" + (i + 1)].join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute left-0 top-0 w-px h-10 bg-garnet/80"
  }), /*#__PURE__*/React.createElement("div", {
    className: "font-display italic text-garnet text-[60px] md:text-[80px] leading-none number"
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 uppercase tracking-wider2 text-[10px] font-medium text-earth"
  }, s.label), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-ink/70 text-[14px] md:text-[15px] leading-[1.75] font-light max-w-xs"
  }, s.body))))));
}

/* ───────────────────────────  THREE PROMISES  ───────────────────────── */

function Promises({
  t
}) {
  const p = t.promises;
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  const [active, setActive] = useState(-1); // -1 = none yet
  const [hoverIdx, setHoverIdx] = useState(-1);

  // Track which row is centered on screen
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      let best = -1;
      let bestDist = Infinity;
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - vh / 2);
        // Only count rows that are at least partly in the viewport
        if (rect.bottom > 40 && rect.top < vh - 40 && dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Mouse parallax on numerals — only inside the section
  const onMouseMove = e => {
    const el = sectionRef.current;
    if (!el) return;
    const nums = el.querySelectorAll(".promise-num-parallax");
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx; // -1..1
    const dy = (e.clientY - cy) / cy;
    nums.forEach(n => {
      n.style.transform = `translate(${dx * 6}px, ${dy * 4}px)`;
    });
  };
  const focusIdx = hoverIdx >= 0 ? hoverIdx : active;
  const hasActive = focusIdx >= 0;
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    onMouseMove: onMouseMove,
    onMouseLeave: () => setHoverIdx(-1),
    className: "bg-cream py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute left-3 md:left-6 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none",
    style: {
      writingMode: "vertical-rl",
      transform: "translateY(-50%) rotate(180deg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/30 text-[15px] tracking-wider2"
  }, "tres \xB7 cosas \xB7 sa \xB7 duaia")), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:block absolute top-0 bottom-0 right-6 xl:right-10 w-[1px] pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-[42vh] flex flex-col items-end gap-7"
  }, p.items.map((it, i) => {
    const isOn = i === focusIdx;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: ["promise-tick font-display italic leading-none number", isOn ? "text-garnet text-[22px]" : "text-earth/55 text-[16px]"].join(" ")
    }, it.n), /*#__PURE__*/React.createElement("span", {
      className: ["promise-tick-line block h-px", isOn ? "bg-garnet w-12" : "bg-earth/40 w-5"].join(" ")
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1280px] px-6 md:px-10 mt-14 md:mt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-16 md:mb-24 max-w-2xl"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, p.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.98] tracking-tight text-[44px] md:text-[80px]"
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    className: "promises-stack space-y-16 md:space-y-24",
    "data-has-active": hasActive ? "true" : "false"
  }, p.items.map((it, i) => {
    const reverse = i === 1;
    const isActive = i === focusIdx;
    return /*#__PURE__*/React.createElement("article", {
      key: i,
      ref: el => rowRefs.current[i] = el,
      onMouseEnter: () => setHoverIdx(i),
      className: ["promise-row grid md:grid-cols-12 gap-8 md:gap-12 items-start relative", "pt-10 md:pt-14", i === 0 ? "pt-0" : "", isActive ? "is-active" : ""].join(" ")
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: ["promise-rule absolute top-0 left-0 h-px", isActive ? "bg-garnet" : "bg-garnet/15"].join(" "),
      style: {
        width: isActive ? "120px" : "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: ["md:col-span-3 rise", reverse ? "md:order-3" : ""].join(" ")
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-baseline gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: ["promise-num promise-num-parallax font-display italic leading-none number", isActive ? "text-garnet" : "text-garnet/85"].join(" "),
      style: {
        fontSize: "clamp(96px, 13vw, 200px)",
        textShadow: isActive ? "0 6px 24px rgba(124,22,33,0.18)" : "none"
      }
    }, it.n), /*#__PURE__*/React.createElement("span", {
      className: "text-earth uppercase tracking-wider2 text-[10px] font-medium"
    }, "/ III"))), /*#__PURE__*/React.createElement("div", {
      className: ["md:col-span-5 rise delay-1", reverse ? "md:order-2" : ""].join(" ")
    }, /*#__PURE__*/React.createElement("h3", {
      className: ["promise-title font-display leading-[1.05] tracking-tight text-[32px] md:text-[44px]", isActive ? "text-ink" : "text-ink/95"].join(" ")
    }, it.title), /*#__PURE__*/React.createElement("p", {
      className: "promise-body mt-6 text-ink/75 text-[16px] md:text-[17px] leading-[1.85] font-light max-w-md"
    }, it.body)), /*#__PURE__*/React.createElement("div", {
      className: ["md:col-span-4 rise delay-2 md:pt-6", reverse ? "md:order-1" : ""].join(" ")
    }, /*#__PURE__*/React.createElement("div", {
      className: "promise-aside pl-6 border-l border-garnet/40 relative"
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute left-0 top-0 w-px bg-garnet",
      style: {
        height: isActive ? "64px" : "32px",
        transition: "height 700ms cubic-bezier(.22,1,.36,1)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-display italic text-ink/70 text-[18px] md:text-[20px] leading-[1.4] block"
    }, it.aside || ""))));
  }))));
}

/* ───────────────────────────  STAYS  ───────────────────────── */

function Stays({
  t
}) {
  const s = t.stays;
  const imgs = ["assets/room-tradicional.jpg", "assets/room-estudio.jpg", "assets/room-familiar.jpg", "assets/room-deluxe.jpg"];
  return /*#__PURE__*/React.createElement("section", {
    id: "stays",
    className: "bg-linen py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute left-[-3%] bottom-[6%] pointer-events-none select-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/[0.05] leading-[0.85]",
    style: {
      fontSize: "clamp(220px, 30vw, 460px)"
    }
  }, "XI")), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-14 md:mt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, s.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.98] tracking-tight text-[44px] md:text-[80px] lg:text-[92px] whitespace-pre-line"
  }, s.title)), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 md:col-start-9 rise delay-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-ink/75 text-[16px] md:text-[17px] leading-[1.85] font-light"
  }, s.lede), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet text-[40px] number leading-none"
  }, "11"), /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-px bg-garnet/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-earth"
  }, "habitaciones \xB7 30\u201375 m\xB2")))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-20 md:gap-y-28"
  }, s.cards.map((c, i) => {
    // Layout pattern: 0 → wide-left, 1 → narrow-right offset, 2 → narrow-left offset, 3 → wide-right
    const layouts = ["md:col-span-7", "md:col-span-5 md:col-start-9 md:-mt-32", "md:col-span-5 md:col-start-1 md:-mt-12", "md:col-span-7 md:col-start-6 md:-mt-40"];
    const aspect = i % 2 === 0 ? "aspect-[4/5]" : "aspect-[3/4]";
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#book",
      className: ["stay-card rise group cursor-pointer block", "delay-" + (i % 3 + 1), layouts[i] || ""].join(" ")
    }, /*#__PURE__*/React.createElement("div", {
      className: ["relative overflow-hidden ph", aspect].join(" ")
    }, /*#__PURE__*/React.createElement("img", {
      src: imgs[i],
      alt: c.name,
      className: "stay-img absolute inset-0 w-full h-full object-cover",
      loading: "lazy",
      decoding: "async"
    }), /*#__PURE__*/React.createElement("div", {
      className: "stay-overlay absolute inset-0 opacity-0 bg-ink/45"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-5 left-5 right-5 flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-cream uppercase tracking-wider2 text-[10px] font-medium bg-ink/40 backdrop-blur-sm px-3 py-1.5 border border-cream/15"
    }, String(i + 1).padStart(2, "0"), " \xB7 ", c.tag), /*#__PURE__*/React.createElement("span", {
      className: "font-display italic text-cream text-[18px] md:text-[22px] leading-none"
    }, c.size)), /*#__PURE__*/React.createElement("div", {
      className: "stay-overlay absolute inset-0 opacity-0 flex items-end justify-center pb-8"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-2 text-cream uppercase tracking-wider2 text-[11px] font-medium border border-cream/70 px-5 py-2.5"
    }, s.more, /*#__PURE__*/React.createElement(Arrow, {
      className: "w-5 h-3"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "mt-7 flex items-baseline justify-between gap-6 border-t border-earth/20 pt-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-display text-ink text-[26px] md:text-[32px] leading-tight tracking-tight group-hover:text-garnet transition-colors duration-500"
    }, c.name), /*#__PURE__*/React.createElement("p", {
      className: "mt-3 text-ink/70 text-[15px] md:text-[16px] leading-[1.7] font-light max-w-md"
    }, c.line)), /*#__PURE__*/React.createElement("span", {
      className: "font-display italic text-garnet/70 text-[18px] hidden md:inline"
    }, "\u2116", String(i + 1).padStart(2, "0"))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rise delay-3 mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-ink/65 text-[18px] md:text-[22px]"
  }, "\xBFCu\xE1l te llama?"), /*#__PURE__*/React.createElement("a", {
    href: "#book",
    className: "inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 uppercase tracking-wider2 text-[11px] font-medium hover:bg-garnet transition-colors duration-500"
  }, s.cta, /*#__PURE__*/React.createElement(Arrow, {
    className: "w-5 h-3"
  })))));
}

/* ───────────────────────────  RESTAURANT  ───────────────────────── */

function Restaurant({
  t
}) {
  const r = t.restaurant;
  const dishes = r.dishes || [{
    n: "I",
    name: "Pa amb oli",
    note: "pan, tomate, aceite de la finca"
  }, {
    n: "II",
    name: "Tumbet",
    note: "berenjena, calabacín, patata"
  }, {
    n: "III",
    name: "Arroz brut",
    note: "caldo de monte, sobrasada"
  }, {
    n: "IV",
    name: "Greixonera",
    note: "ensaimada, leche, canela"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "restaurant",
    className: "bg-cream py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none",
    style: {
      writingMode: "vertical-rl"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/30 text-[14px] tracking-wider2"
  }, "mesa \xB7 abierta \xB7 sa duaia \xB7 1425")), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-14 md:mt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 mb-14 md:mb-20 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-8"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, r.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.98] tracking-tight text-[44px] md:text-[80px] lg:text-[92px] whitespace-pre-line"
  }, r.title)), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 rise delay-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 px-3 py-1.5 border border-garnet/40 text-garnet uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-garnet animate-pulse"
  }), r.meta1), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, r.meta2))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-8 md:gap-12 items-start"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "md:col-span-6 rise delay-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/5] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/restaurant-dining.jpg",
    alt: "Comensales bajo el carrobo en la terraza del restaurante",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/0 to-ink/0"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 left-4 font-sans uppercase tracking-wider2 text-[10px] text-cream/90 bg-ink/40 backdrop-blur-sm px-2.5 py-1 border border-cream/15"
  }, "Cena bajo el carrobo"))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-6 md:pl-4 rise delay-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 text-ink/80 text-[17px] md:text-[19px] leading-[1.85] font-light"
  }, r.body.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, line))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-8 border-t border-garnet/25"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet text-[24px] md:text-[28px] leading-[1.25] block"
  }, "\u201CSobremesa que se alarga,", /*#__PURE__*/React.createElement("br", null), "vino de la isla.\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-8 border-t border-earth/20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-earth mb-5"
  }, "De la cocina"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3.5"
  }, dishes.map((d, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "slide-r flex items-baseline gap-5",
    style: {
      transitionDelay: 120 + i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/70 text-[14px] number w-8 shrink-0"
  }, d.n), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-ink text-[19px] md:text-[21px] leading-tight"
  }, d.name), /*#__PURE__*/React.createElement("span", {
    className: "flex-1 border-b border-dotted border-earth/40 translate-y-[-3px]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-ink/65 text-[13px] md:text-[14px] font-light italic"
  }, d.note))))))), /*#__PURE__*/React.createElement("figure", {
    className: "mt-16 md:mt-24 rise delay-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[21/9] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/detail-towels.jpg",
    alt: "Toallas con romero \u2014 el cuidado de la mesa",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-4 flex items-center justify-between gap-3 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-6 h-px bg-earth/60"
  }), r.caption), /*#__PURE__*/React.createElement("span", {
    className: "font-display italic not-uppercase tracking-normal text-garnet text-[13px]"
  }, "recetas de la casa")))));
}

/* ───────────────────────────  SURROUNDINGS  ───────────────────────── */

function Surroundings({
  t
}) {
  const s = t.surroundings;
  return /*#__PURE__*/React.createElement("section", {
    id: "surroundings",
    className: "bg-linen py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute left-3 md:left-6 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none",
    style: {
      writingMode: "vertical-rl",
      transform: "translateY(-50%) rotate(180deg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/30 text-[15px] tracking-wider2"
  }, "39\xB0 41\u2032 N \xB7 3\xB0 21\u2032 E \xB7 Mallorca")), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-14 md:mt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 mb-16 md:mb-24 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-9"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, s.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.95] tracking-tight text-[48px] md:text-[96px] lg:text-[120px]"
  }, s.title))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24"
  }, /*#__PURE__*/React.createElement("p", {
    className: "md:col-span-6 rise delay-2 text-ink/80 text-[17px] md:text-[19px] leading-[1.85] font-light max-w-xl"
  }, s.body), /*#__PURE__*/React.createElement("ol", {
    className: "md:col-span-5 md:col-start-8 space-y-7 md:space-y-9"
  }, s.stops.map((st, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "slide-r relative pl-7",
    style: {
      transitionDelay: 200 + i * 140 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute left-0 top-3 w-3 h-3 rounded-full border border-garnet bg-cream"
  }), i < s.stops.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "absolute left-[5.5px] top-7 w-px h-[calc(100%+12px)] bg-garnet/30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet number leading-none",
    style: {
      fontSize: "clamp(40px, 5vw, 64px)"
    }
  }, st.d), /*#__PURE__*/React.createElement("span", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-earth"
  }, st.p)))))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-6 md:gap-8 items-start"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "md:col-span-7 rise delay-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/3] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/window-olives.jpg",
    alt: "Vista hacia olivos desde una ventana",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 left-4 font-sans uppercase tracking-wider2 text-[10px] text-cream/85 bg-ink/30 backdrop-blur-sm px-2.5 py-1 border border-cream/15"
  }, "Ventana al olivar"))), /*#__PURE__*/React.createElement("figure", {
    className: "md:col-span-5 md:mt-32 rise delay-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[3/4] overflow-hidden ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/exterior-tower.jpg",
    alt: "Fachada principal con la torre del siglo XV",
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 left-4 font-sans uppercase tracking-wider2 text-[10px] text-cream/90 bg-ink/40 backdrop-blur-sm px-2.5 py-1 border border-cream/15"
  }, "Torre \xB7 siglo XV")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-24 md:mt-36"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-earth flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-7 h-px bg-earth/60"
  }), "Exteriores"), /*#__PURE__*/React.createElement("h3", {
    className: "rise delay-1 mt-4 font-display italic text-ink leading-[1.05] tracking-tight text-[32px] md:text-[44px]"
  }, "La finca por fuera.")), /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet/70 text-[14px] hidden md:inline"
  }, "VI fotograf\xEDas")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-4 md:gap-6 auto-rows-[90px] md:auto-rows-[130px]"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "col-span-7 md:col-span-5 row-span-4 md:row-span-5 relative overflow-hidden ph rise group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/exterior-pool-palms.jpg",
    alt: "Piscina enmarcada por palmeras",
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-4 left-4 right-4 text-cream font-display italic text-[16px] md:text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[10px] mb-1.5 text-cream/70"
  }, "I \u2014 Piscina"), "Bajo las palmeras")), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-5 md:col-span-4 row-span-2 md:row-span-3 relative overflow-hidden ph rise delay-1 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/exterior-terrace.jpg",
    alt: "Terraza con sillones de mimbre",
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-3 left-4 right-4 text-cream font-display italic text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[9px] mb-1 text-cream/70"
  }, "II \u2014 Terraza"), "La sombra del mediod\xEDa")), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-5 md:col-span-3 row-span-2 md:row-span-3 relative overflow-hidden ph rise delay-2 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/exterior-water.jpg",
    alt: "Superficie del agua",
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-3 left-3 right-3 text-cream font-display italic text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[9px] mb-1 text-cream/70"
  }, "III"), "Agua")), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-12 md:col-span-7 row-span-2 md:row-span-2 relative overflow-hidden ph rise delay-1 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/exterior-fountain.jpg",
    alt: "Fuente con vista a la torre",
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-3 left-4 right-4 text-cream font-display italic text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[9px] mb-1 text-cream/70"
  }, "IV \u2014 Fuente"), "El agua que cae sobre la piedra")), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-6 md:col-span-3 row-span-2 md:row-span-3 relative overflow-hidden ph rise delay-2 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/exterior-mushroom.jpg",
    alt: "Detalle del jard\xEDn",
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-3 left-3 right-3 text-cream font-display italic text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[9px] mb-1 text-cream/70"
  }, "V"), "Detalle")), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-6 md:col-span-6 row-span-2 md:row-span-3 relative overflow-hidden ph rise delay-3 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/window-garden.jpg",
    alt: "Jard\xEDn desde una ventana",
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-3 left-4 right-4 text-cream font-display italic text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[9px] mb-1 text-cream/70"
  }, "VI \u2014 Jard\xEDn"), "Hacia el sur"))))));
}

/* ───────────────────────────  DETAILS  ───────────────────────── */

function Details({
  t
}) {
  const d = t.details;
  const captions = [{
    tag: "I",
    label: "La llave del 17"
  }, {
    tag: "II",
    label: "Toallas con romero"
  }, {
    tag: "III",
    label: "Romero del jardín"
  }, {
    tag: "IV",
    label: "Rincón en piedra"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-cream py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-14 md:mt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 mb-14 md:mb-20 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, d.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.98] tracking-tight text-[44px] md:text-[80px]"
  }, d.title)), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 md:col-start-9 rise delay-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-display italic text-ink/70 text-[18px] md:text-[22px] leading-[1.4]"
  }, "\u201CLo que se mira de cerca, se queda.\u201D"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-12 gap-4 md:gap-6 auto-rows-[90px] md:auto-rows-[120px]"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "col-span-6 md:col-span-4 row-span-5 md:row-span-6 relative overflow-hidden ph rise group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/detail-key.jpg",
    alt: captions[0].label,
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-5 left-5 right-5 text-cream font-display italic text-[18px] md:text-[22px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[10px] mb-2 text-cream/70"
  }, captions[0].tag), captions[0].label)), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-6 md:col-span-5 row-span-3 md:row-span-3 relative overflow-hidden ph rise delay-1 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/detail-towels.jpg",
    alt: captions[1].label,
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-4 left-4 right-4 text-cream font-display italic text-[16px] md:text-[18px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[10px] mb-1 text-cream/70"
  }, captions[1].tag), captions[1].label)), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-6 md:col-span-3 row-span-3 md:row-span-3 relative overflow-hidden ph rise delay-2 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/detail-rosemary.jpg",
    alt: captions[2].label,
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-4 left-4 right-4 text-cream font-display italic text-[16px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[10px] mb-1 text-cream/70"
  }, captions[2].tag), captions[2].label)), /*#__PURE__*/React.createElement("figure", {
    className: "col-span-12 md:col-span-8 row-span-3 md:row-span-3 relative overflow-hidden ph rise delay-1 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/detail-bedroom.jpg",
    alt: captions[3].label,
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-5 left-5 right-5 text-cream font-display italic text-[18px] md:text-[22px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block font-sans not-italic uppercase tracking-wider2 text-[10px] mb-2 text-cream/70"
  }, captions[3].tag), captions[3].label))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, captions.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "slide-r flex items-center gap-3",
    style: {
      transitionDelay: 80 + i * 80 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet not-uppercase tracking-normal text-[13px]"
  }, c.tag), /*#__PURE__*/React.createElement("span", {
    className: "inline-block flex-1 h-px bg-earth/40"
  }), /*#__PURE__*/React.createElement("span", null, c.label))))));
}

/* ───────────────────────────  REVIEWS  ───────────────────────── */

function Stars({
  value = 5
}) {
  const full = Math.floor(value);
  const frac = value - full;
  const v = full + (frac >= 0.25 && frac <= 0.75 ? 0.5 : frac > 0.75 ? 1 : 0);
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1",
    style: {
      color: "#C89211"
    },
    "aria-label": `${value} de 5 estrellas`
  }, Array.from({
    length: 5
  }).map((_, i) => {
    const isFull = i + 1 <= v;
    const isHalf = !isFull && v - i > 0 && v - i < 1;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      className: "star w-[14px] h-[14px]",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2"
    }, /*#__PURE__*/React.createElement("defs", null, isHalf && /*#__PURE__*/React.createElement("linearGradient", {
      id: `half-${i}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "currentColor"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "transparent"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2 l3.09 6.26 6.91 1.01 -5 4.87 1.18 6.88 L12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z",
      fill: isFull ? "currentColor" : isHalf ? `url(#half-${i})` : "none"
    }));
  }));
}
function GoogleMark({
  label = "Google Reviews"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider2 font-medium text-earth text-right"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    className: "w-3.5 h-3.5 shrink-0",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22 12.2c0-.7-.06-1.4-.18-2.1H12v4h5.6c-.24 1.3-.97 2.4-2.06 3.13v2.6h3.33c1.95-1.8 3.07-4.45 3.07-7.63z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 22c2.78 0 5.11-.92 6.81-2.5l-3.33-2.58c-.92.62-2.1.99-3.48.99-2.67 0-4.94-1.8-5.75-4.23H2.8v2.66C4.49 19.7 7.99 22 12 22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC04",
    d: "M6.25 13.68a6.04 6.04 0 0 1 0-3.36V7.66H2.8a10 10 0 0 0 0 8.68l3.45-2.66z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.78c1.51 0 2.87.52 3.94 1.54l2.95-2.95C17.1 2.83 14.78 2 12 2 7.99 2 4.49 4.3 2.8 7.66l3.45 2.66C7.06 7.58 9.33 5.78 12 5.78z"
  })), /*#__PURE__*/React.createElement("span", null, label));
}
function Reviews({
  t
}) {
  const r = t.reviews;
  if (!r) return null;
  const items = r.items;
  // 3 visible slots — each shows one review from items at a time. We cycle them
  // ONE AT A TIME (round-robin) so adjacent cards never swap together.
  const [idxs, setIdxs] = useState([0, 1, 2]);
  useEffect(() => {
    if (!items || items.length <= 3) return;
    let tick = 0;
    const id = setInterval(() => {
      setIdxs(prev => {
        const next = [...prev];
        const col = tick % 3;
        // Find a review not currently shown in any column
        const visible = new Set(next);
        let candidate = (next[col] + 3) % items.length;
        // Walk forward until we land on one not currently visible
        let safety = 0;
        while (visible.has(candidate) && safety < items.length) {
          candidate = (candidate + 1) % items.length;
          safety++;
        }
        next[col] = candidate;
        return next;
      });
      tick++;
    }, 3200); // one column swaps every 3.2s — gentle, attention-grabbing without being noisy
    return () => clearInterval(id);
  }, [items]);

  // Subtle deterministic rotations
  const rotMap = [-1.0, 0.6, -0.8];
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "bg-linen py-24 md:py-36 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute left-[-2%] top-[10%] pointer-events-none select-none review-quote-mark",
    style: {
      color: "rgba(124, 22, 33, 0.10)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic leading-[0.7]",
    style: {
      fontSize: "clamp(280px, 36vw, 540px)"
    }
  }, "\u201C")), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1320px] px-6 md:px-10 mt-14 md:mt-20 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 mb-14 md:mb-20 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, r.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rise delay-1 mt-7 font-display italic text-ink leading-[0.98] tracking-tight text-[44px] md:text-[80px] whitespace-pre-line"
  }, r.title)), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 md:col-start-9 rise delay-2 space-y-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-ink/75 text-[15.5px] md:text-[17px] leading-[1.8] font-light"
  }, r.lede), /*#__PURE__*/React.createElement("div", {
    className: "pt-5 border-t border-earth/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-garnet text-[36px] md:text-[44px] leading-none number"
  }, r.countLabel || "+600")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Stars, {
    value: r.ratingValue || 4.7
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-earth text-[13px]"
  }, "casi 5 estrellas")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(GoogleMark, {
    label: r.sourceLabel
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 perspective-1000"
  }, idxs.map((idx, col) => {
    const it = items[idx];
    return /*#__PURE__*/React.createElement("div", {
      key: col,
      className: "relative",
      style: {
        minHeight: "320px"
      }
    }, /*#__PURE__*/React.createElement("article", {
      key: `${col}-${idx}`,
      className: "review-card review-card-cycle absolute inset-0 bg-cream border border-earth/20 p-7 md:p-8 flex flex-col",
      style: {
        "--rot": rotMap[col] + "deg",
        "--d": "0ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      className: "absolute top-3 right-4 font-display italic text-garnet/15 text-[64px] leading-none select-none"
    }, "\u201D"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-5"
    }, /*#__PURE__*/React.createElement(Stars, {
      value: 5
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-earth uppercase tracking-wider2 text-[9px] font-medium"
    }, String(idx + 1).padStart(2, "0"), " / ", String(items.length).padStart(2, "0"))), /*#__PURE__*/React.createElement("p", {
      className: "font-display text-ink text-[16.5px] md:text-[18px] leading-[1.55] tracking-tight flex-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-garnet font-display italic text-[22px] leading-none align-text-top mr-0.5"
    }, "\u201C"), it.text, /*#__PURE__*/React.createElement("span", {
      className: "text-garnet font-display italic text-[22px] leading-none align-text-bottom ml-0.5"
    }, "\u201D")), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 pt-5 border-t border-earth/20 flex items-end justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-display italic text-ink text-[16px] leading-tight"
    }, it.name), /*#__PURE__*/React.createElement("div", {
      className: "text-earth uppercase tracking-wider2 text-[9px] font-medium mt-1.5"
    }, it.city)), /*#__PURE__*/React.createElement("div", {
      className: "text-earth text-[11px] font-light italic shrink-0 text-right"
    }, it.when))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rise mt-14 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
  }, /*#__PURE__*/React.createElement("a", {
    href: r.mapsUrl || "#",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: e => {
      // In sandboxed previews target="_blank" may be blocked.
      // Try programmatic window.open as a fallback.
      if (window.top !== window.self) {
        e.preventDefault();
        try {
          const w = window.open(r.mapsUrl, "_blank", "noopener,noreferrer");
          if (!w) window.top.location.href = r.mapsUrl;
        } catch {
          window.location.href = r.mapsUrl;
        }
      }
    },
    className: "inline-flex items-center gap-3 bg-ink text-cream px-6 py-3 uppercase tracking-wider2 text-[10px] md:text-[11px] font-medium hover:bg-garnet transition-colors duration-500 group/cta"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    className: "w-4 h-4",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22 12.2c0-.7-.06-1.4-.18-2.1H12v4h5.6c-.24 1.3-.97 2.4-2.06 3.13v2.6h3.33c1.95-1.8 3.07-4.45 3.07-7.63z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 22c2.78 0 5.11-.92 6.81-2.5l-3.33-2.58c-.92.62-2.1.99-3.48.99-2.67 0-4.94-1.8-5.75-4.23H2.8v2.66C4.49 19.7 7.99 22 12 22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC04",
    d: "M6.25 13.68a6.04 6.04 0 0 1 0-3.36V7.66H2.8a10 10 0 0 0 0 8.68l3.45-2.66z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.78c1.51 0 2.87.52 3.94 1.54l2.95-2.95C17.1 2.83 14.78 2 12 2 7.99 2 4.49 4.3 2.8 7.66l3.45 2.66C7.06 7.58 9.33 5.78 12 5.78z"
  })), r.mapsLabel || "Ver perfil en Google Maps", /*#__PURE__*/React.createElement(Arrow, {
    className: "w-5 h-3 transition-transform duration-500 group-hover/cta:translate-x-1"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, r.countLabel || "+600 reseñas", " \xB7 ", r.sourceLabel || "Google · Booking"))));
}

/* ───────────────────────────  BOOKING + FOOTER  ───────────────────────── */

function Booking({
  t
}) {
  const b = t.booking;
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    className: "bg-cream pt-20 md:pt-32 pb-20 md:pb-28"
  }, /*#__PURE__*/React.createElement(SectionOpener, null), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-6 md:px-10 mt-16 md:mt-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-12 md:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-7"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, b.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "reveal-iris delay-1 mt-6 font-display text-ink text-[42px] md:text-[64px] leading-[1.02] tracking-tight"
  }, b.title)), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-5 reveal delay-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-display italic text-ink/80 text-[18px] md:text-[20px]"
  }, b.lede), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, b.note))), /*#__PURE__*/React.createElement("div", {
    className: "reveal booking-shell rounded-[6px] overflow-hidden bg-linen border border-earth/15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-5 md:px-7 py-4 border-b border-earth/15 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement(Crest, {
    className: "w-4 h-4 text-garnet"
  }), "saduaia.com \xB7 reservas oficiales"), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-garnet/70"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-gold/70"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-earth/40"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 md:px-10 py-16 md:py-24 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display italic text-garnet text-[18px] md:text-[20px] mb-6"
  }, "Disponibilidad en tiempo real"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-ink text-[32px] md:text-[44px] leading-[1.05] tracking-tight max-w-xl mx-auto"
  }, "Reserva directa, sin intermediarios."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-ink/70 text-[15px] md:text-[16px] leading-[1.8] font-light max-w-md mx-auto"
  }, "Mejor precio garantizado en la web oficial. Calendario, tarifas y confirmaci\xF3n instant\xE1nea."), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.saduaia.com/es/bookcore/",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: e => {
      if (window.top !== window.self) {
        e.preventDefault();
        try {
          const w = window.open("https://www.saduaia.com/es/bookcore/", "_blank", "noopener,noreferrer");
          if (!w) window.top.location.href = "https://www.saduaia.com/es/bookcore/";
        } catch {
          window.location.href = "https://www.saduaia.com/es/bookcore/";
        }
      }
    },
    className: "inline-flex items-center gap-3 bg-ink text-cream px-7 py-4 uppercase tracking-wider2 text-[11px] font-medium hover:bg-garnet transition-colors duration-500 group/r"
  }, "Reservar ahora", /*#__PURE__*/React.createElement(Arrow, {
    className: "w-5 h-3 transition-transform duration-500 group-hover/r:translate-x-1"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/34971589164",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-3 border border-ink/30 text-ink px-6 py-4 uppercase tracking-wider2 text-[11px] font-medium hover:border-ink hover:bg-ink hover:text-cream transition-all duration-500"
  }, "WhatsApp \xB7 +34 971 589 164")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 pt-8 border-t border-earth/20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-earth uppercase tracking-wider2 text-[10px] font-medium"
  }, /*#__PURE__*/React.createElement("span", null, "Mejor precio garantizado"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Sin comisiones"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Cancelaci\xF3n flexible"))))));
}
function Footer({
  t,
  lang,
  setLang
}) {
  const f = t.footer;
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-ink text-cream/85"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-6 md:px-10 pt-20 md:pt-28 pb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Crest, {
    className: "w-8 h-8 text-gold"
  }), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-cream text-[22px] leading-none"
  }, "Finca Sa Duaia", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-cream/60 text-[16px] italic font-normal"
  }, "de Dalt"))), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 font-display italic text-cream/70 text-[18px] max-w-sm leading-snug"
  }, f.sign), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 uppercase tracking-wider2 text-[10px] font-medium text-cream/50"
  }, "Est. 1425 \xB7 Restored with respect")), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-gold mb-5"
  }, f.contact), /*#__PURE__*/React.createElement("address", {
    className: "not-italic text-cream/80 text-[14px] leading-[1.85] font-light"
  }, f.address.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-1 text-[14px] font-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+34971000000",
    className: "hover:text-gold transition"
  }, "+34 971 00 00 00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:hola@saduaia.com",
    className: "hover:text-gold transition"
  }, "hola@saduaia.com")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/34971000000",
    className: "hover:text-gold transition"
  }, "WhatsApp")))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-gold mb-5"
  }, f.hours), /*#__PURE__*/React.createElement("div", {
    className: "text-cream/80 text-[14px] font-light"
  }, f.hoursVal), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 uppercase tracking-wider2 text-[10px] font-medium text-gold mb-3"
  }, "Idioma"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-[12px] font-medium tracking-wider2 uppercase"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang("es"),
    className: ["pr-2", lang === "es" ? "text-gold" : "text-cream/55 hover:text-cream"].join(" ")
  }, "ES"), /*#__PURE__*/React.createElement("span", {
    className: "text-cream/30"
  }, "|"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang("en"),
    className: ["pl-2", lang === "en" ? "text-gold" : "text-cream/55 hover:text-cream"].join(" ")
  }, "EN"))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uppercase tracking-wider2 text-[10px] font-medium text-gold mb-5"
  }, "Social"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-[14px] font-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-gold transition"
  }, "Instagram \u2197")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-gold transition"
  }, "Facebook \u2197"))))), /*#__PURE__*/React.createElement("div", {
    className: "hairline mt-16 mb-7 text-cream"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-wider2 text-cream/55 font-medium"
  }, /*#__PURE__*/React.createElement("div", null, f.copy), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-6 gap-y-2"
  }, f.legal.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || "#",
    className: "hover:text-gold transition"
  }, l.label || l)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] uppercase tracking-wider2 text-cream/55 font-medium"
  }, "Dise\xF1o & desarrollo"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline-block w-8 h-px bg-cream/25"
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://vocai.es",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group/credit inline-flex items-center gap-3 text-cream hover:text-gold transition-colors duration-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display italic text-[20px] md:text-[24px] leading-none tracking-tight"
  }, "VOCAI"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-1.5 h-1.5 rounded-full bg-gold/80 group-hover/credit:bg-gold transition-colors"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] uppercase tracking-wider2 text-cream/65 group-hover/credit:text-cream font-medium"
  }, "Estudio digital")))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-cream/[0.045] text-[18vw] leading-[0.85] tracking-tight text-center pb-2 select-none"
  }, "SA DUAIA")));
}

/* ──────────────────────  SCROLL UI  ────────────────────── */

/* Hairline progress bar at the very top of the page — adapts color over hero. */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [overDark, setOverDark] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setProgress(Math.max(0, Math.min(1, p)));
      setOverDark(window.scrollY < window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "fixed top-0 left-0 right-0 z-[60] pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: ["h-[2px] origin-left transition-transform duration-200 ease-out", overDark ? "bg-gold" : "bg-garnet/85"].join(" "),
    style: {
      transform: `scaleX(${progress})`
    }
  }));
}

/* Right-side section indicator — minimalist dots with hover labels. */
function ScrollNav({
  t,
  lang
}) {
  const sections = useMemo(() => [{
    id: "top",
    n: "—",
    name: lang === "es" ? "Inicio" : "Top"
  }, {
    id: "welcome",
    n: "I",
    name: t.nav.welcome
  }, {
    id: "finca",
    n: "II",
    name: t.nav.finca
  }, {
    id: "stays",
    n: "III",
    name: t.nav.stays
  }, {
    id: "restaurant",
    n: "IV",
    name: t.nav.restaurant
  }, {
    id: "surroundings",
    n: "V",
    name: t.nav.surroundings
  }, {
    id: "book",
    n: "VI",
    name: t.nav.book
  }], [t, lang]);
  const [active, setActive] = useState(0);
  const [overDark, setOverDark] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const trigger = vh * 0.4;
      let current = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= trigger) current = i;
      }
      setActive(current);
      setOverDark(window.scrollY < vh * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);
  const goTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis && window.__lenis.scrollTo) {
      window.__lenis.scrollTo(el, {
        offset: 0,
        duration: 1.4
      });
    } else {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Secci\xF3n",
    className: "fixed right-5 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col items-end gap-5"
  }, sections.map((s, i) => {
    const isActive = i === active;
    const activeColor = overDark ? "text-gold" : "text-garnet";
    const dimColor = overDark ? "text-paper/65" : "text-ink/70";
    const dimDot = overDark ? "bg-paper/35" : "bg-ink/25";
    const hoverDot = overDark ? "group-hover:bg-paper/70" : "group-hover:bg-ink/55";
    const activeDot = overDark ? "bg-gold" : "bg-garnet";
    return /*#__PURE__*/React.createElement("li", {
      key: s.id
    }, /*#__PURE__*/React.createElement("a", {
      href: "#" + s.id,
      onClick: e => goTo(e, s.id),
      className: "group flex items-center gap-3 cursor-pointer",
      "aria-current": isActive ? "true" : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: ["font-display italic whitespace-nowrap transition-all duration-500 ease-out", "text-[13px] leading-none", isActive ? activeColor + " opacity-100 translate-x-0" : dimColor + " opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"].join(" ")
    }, s.name), /*#__PURE__*/React.createElement("span", {
      className: ["font-sans uppercase text-[9px] tracking-wider2 transition-opacity duration-300 hidden lg:inline", isActive ? activeColor + "/80 opacity-100" : dimColor + "/40 opacity-0 group-hover:opacity-100"].join(" "),
      "aria-hidden": "true"
    }, s.n), /*#__PURE__*/React.createElement("span", {
      className: ["block rounded-full transition-all duration-500 ease-out", isActive ? "w-[7px] h-[7px] " + activeDot : "w-[5px] h-[5px] " + dimDot + " " + hoverDot + " group-hover:scale-125"].join(" ")
    })));
  })));
}

/* Floating mobile CTA — slides up after hero, only on small screens. */
function FloatingBookButton({
  t,
  scrolled
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "https://www.saduaia.com/es/bookcore/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: ["fixed bottom-5 right-5 md:hidden z-40 inline-flex items-center gap-2", "bg-ink text-cream px-5 py-3 text-[11px] uppercase tracking-wider2 font-medium", "border border-ink shadow-[0_8px_24px_-8px_rgba(26,20,16,0.55)]", "transition-all duration-500 ease-out", scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"].join(" "),
    "aria-label": t.nav.book
  }, t.nav.book, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 12",
    className: "w-5 h-3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.1",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 6h22M16 1l5 5-5 5"
  })));
}

/* ───────────────────────────  APP  ────────────────────────── */

function App() {
  const [lang, setLang] = useState("es");
  const [scrolled, setScrolled] = useState(false);
  const t = useMemo(() => CONTENT[lang], [lang]);
  useReveal();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-cream text-ink"
  }, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(ScrollNav, {
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: setLang,
    t: t,
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement(Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(Welcome, {
    t: t
  }), /*#__PURE__*/React.createElement(Marquee, {
    items: [{
      num: "1425",
      text: "Siglo XV"
    }, {
      num: "11",
      text: "Habitaciones"
    }, {
      num: "30'",
      text: "del mar abierto"
    }, {
      num: "VI",
      text: "siglos de oficio"
    }, {
      num: "—",
      text: "Mallorca · Artà"
    }]
  }), /*#__PURE__*/React.createElement(Intermezzo, {
    t: t
  }), /*#__PURE__*/React.createElement(Reviews, {
    t: t
  }), /*#__PURE__*/React.createElement(Finca, {
    t: t
  }), /*#__PURE__*/React.createElement(Promises, {
    t: t
  }), /*#__PURE__*/React.createElement(Marquee, {
    dark: true,
    accent: "gold",
    items: [{
      num: "·",
      text: "agroturismo · Sa Duaia de Dalt"
    }, {
      num: "·",
      text: "Serra de Llevant · Artà"
    }, {
      num: "·",
      text: "Once habitaciones · piedra original"
    }, {
      num: "·",
      text: "Mesa abierta · cocina mallorquina"
    }]
  }), /*#__PURE__*/React.createElement(Stays, {
    t: t
  }), /*#__PURE__*/React.createElement(Restaurant, {
    t: t
  }), /*#__PURE__*/React.createElement(Marquee, {
    items: [{
      num: "8'",
      text: "Artà"
    }, {
      num: "20'",
      text: "Cala Torta"
    }, {
      num: "30'",
      text: "Mar abierto"
    }, {
      num: "39°",
      text: "41′ N · 3° 21′ E"
    }]
  }), /*#__PURE__*/React.createElement(Surroundings, {
    t: t
  }), /*#__PURE__*/React.createElement(Details, {
    t: t
  }), /*#__PURE__*/React.createElement(Booking, {
    t: t
  }), /*#__PURE__*/React.createElement(Footer, {
    t: t,
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(FloatingBookButton, {
    t: t,
    scrolled: scrolled
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
