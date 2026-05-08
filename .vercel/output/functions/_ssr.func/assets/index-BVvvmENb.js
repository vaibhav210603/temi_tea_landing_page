import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
const heroImg = "/assets/hero-temi-BgU9xspF.jpg";
const legacyImg = "/assets/legacy-garden-DeNH3khA.jpg";
const ctaMist = "/assets/cta-mist-BwOVDT_B.jpg";
const temiLogo = "/assets/temitea-CGPSPaL4.png";
const mrcLogo = "/assets/MRC_LOGO-lXeI1wpn.png";
const benefitAntioxidants = "/assets/benefit-antioxidants-5myoAyFZ.png";
const benefitInflammation = "/assets/benefit-inflammation-Dbqc8jLh.png";
const benefitHeart = "/assets/benefit-heart-Y-TE3-HW.png";
const benefitSkin = "/assets/benefit-skin-DxHsWdde.png";
const benefitClarity = "/assets/benefit-clarity-8G8cFR9b.png";
const benefitPurity = "/assets/benefit-purity-y9_TUQce.png";
const firstPluck = "/assets/first_pluck-BVwkMMhC.png";
const greenTea = "/assets/green_tea-Dy1VfVts.png";
const specialTea = "/assets/special-BqmkfCf9.png";
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${delay}ms`;
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsx("div", { ref, className: `reveal ${className}`, children });
}
const SHOP_URL = "https://temiteaestate.com/collections/bs";
const OFFERS_URL = "https://temiteaestate.com/collections/offers";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/10 ${scrolled ? "py-3" : "py-4"}`, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("img", { src: temiLogo, alt: "Temi Tea Logo", className: "h-10 w-auto" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif text-xl tracking-wide leading-none text-forest-deep", children: "Temi Tea Estate" }),
        /* @__PURE__ */ jsx("span", { className: "text-[8px] uppercase tracking-[0.3em] text-gold mt-1", children: "Est. 1969" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-9 text-sm text-forest-deep/80", children: [
      /* @__PURE__ */ jsx("a", { href: "#legacy", className: "hover:text-gold transition", children: "Legacy" }),
      /* @__PURE__ */ jsx("a", { href: "#benefits", className: "hover:text-gold transition", children: "Wellness" }),
      /* @__PURE__ */ jsx("a", { href: "#products", className: "hover:text-gold transition", children: "Collection" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-gold transition", children: "Visit" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: SHOP_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-gold text-gold-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold/90 transition", children: "Shop Now" })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Temi Tea Estate at sunrise with mist rolling over Himalayan tea garden and Kanchenjunga range", width: 1920, height: 1280, className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-forest-deep/30 to-forest-deep/90" }),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-x-20 top-1/3 h-40 bg-white/15 blur-3xl animate-mist" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-x-20 bottom-20 h-48 bg-white/10 blur-3xl animate-mist", style: {
        animationDelay: "-7s"
      } })
    ] }),
    [0, 3, 6, 9, 12].map((d, i) => /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute top-0 text-gold/70 animate-leaf", style: {
      left: `${10 + i * 18}%`,
      animationDelay: `${d}s`,
      fontSize: 20
    }, children: "❦" }, i)),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 flex min-h-screen items-center", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 pt-28 pb-20 w-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 mb-8 text-[11px] uppercase tracking-[0.4em] text-gold", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-gold" }),
        "Government of Sikkim · Estd. 1969"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-balance", children: [
        "Sip the Soul of the ",
        /* @__PURE__ */ jsx("em", { className: "not-italic text-white", children: "Himalayas" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-cream/85 text-lg md:text-xl max-w-2xl leading-relaxed", children: "India's only government-owned organic tea garden — straight from the hills of Sikkim to your cup." }),
      /* @__PURE__ */ jsx("ul", { className: "mt-10 flex flex-wrap gap-x-6 gap-y-3 text-cream/80 text-xs sm:text-sm", children: ["🌿 100% Certified Organic", "📍 Geotagged Estate", "🏛️ Government of Sikkim", "🌍 Globally Recognised", "✅ IMO Switzerland"].map((b) => /* @__PURE__ */ jsx("li", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("span", { children: b }) }, b)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-5", children: [
        /* @__PURE__ */ jsxs("a", { href: SHOP_URL, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold/90 transition shadow-2xl", children: [
          "Shop Directly from the Garden",
          /* @__PURE__ */ jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#legacy", className: "text-cream/80 text-sm uppercase tracking-[0.2em] hover:text-gold transition", children: "Discover the Legacy" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] tracking-[0.4em] uppercase animate-pulse", children: "Scroll" })
  ] });
}
function Ticker() {
  const items = ["Est. 1969", "Sikkim's Legacy", "Only Tea Garden in Sikkim", "Certified Organic Since 2008", "IMO Switzerland", "All India Quality Award Winners", "Preferred by Europe & Japan", "Buy Direct. No Middlemen."];
  const row = [...items, ...items];
  return /* @__PURE__ */ jsx("section", { className: "bg-cream text-forest-deep border-y-2 border-gold/40 overflow-hidden shadow-inner", children: /* @__PURE__ */ jsx("div", { className: "flex animate-ticker whitespace-nowrap py-4", children: row.map((t, i) => /* @__PURE__ */ jsxs("span", { className: "px-8 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] flex items-center gap-8", children: [
    /* @__PURE__ */ jsx("span", { className: "text-gold animate-pulse", children: "✦" }),
    t
  ] }, i)) }) });
}
function Legacy() {
  return /* @__PURE__ */ jsxs("section", { id: "legacy", className: "relative bg-forest-deep text-cream overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grain opacity-40" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center relative", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.4em] text-gold mb-5", children: "Sikkim's Legacy" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-6xl leading-[1.05] text-balance", children: [
          "Sikkim's Only Tea. ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "not-italic text-gold", children: "The World's Pride." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-cream/85 text-lg leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { children: "Temi Tea Estate was born from a vision — a government's promise to transform raw Himalayan land into one of the world's finest tea gardens. At elevations of 1,200 to 2,100 metres, where mist kisses the leaves every morning and the Kanchenjunga watches over, Temi Tea grows slowly, patiently, and perfectly." }),
          /* @__PURE__ */ jsx("p", { children: "Spanning 177 hectares, producing 1,00,000 kg per year, awarded by the Tea Board of India, and sought after by luxury houses in Europe and Japan — Temi Tea isn't just a drink. It is Sikkim's living legacy." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-5 gap-y-6 gap-x-4 border-t border-gold/30 pt-8", children: [["1969", "Established"], ["177 ha", "Garden Area"], ["1,200–2,100m", "Altitude"], ["100%", "Organic"], ["Global", "Exports"]].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-serif text-2xl text-gold", children: n }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-cream/60 mt-1", children: l })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 border border-gold/40" }),
        /* @__PURE__ */ jsx("img", { src: legacyImg, alt: "Terraced rows of Temi tea garden disappearing into Himalayan mist", width: 1280, height: 1600, loading: "lazy", className: "relative w-full h-[560px] object-cover" })
      ] }) })
    ] })
  ] });
}
function Benefits() {
  const items = [{
    icon: "🛡️",
    title: "Rich in Antioxidants",
    body: "Fights free radicals, slows cell ageing.",
    color: "from-blue-900/40",
    image: benefitAntioxidants
  }, {
    icon: "💚",
    title: "Anti-Inflammatory",
    body: "Clinically studied inhibitory action against histamine, serotonin & prostaglandin-induced inflammation.",
    color: "from-green-900/40",
    image: benefitInflammation
  }, {
    icon: "🫀",
    title: "Heart Health",
    body: "Supports healthy cholesterol and cardiovascular function.",
    color: "from-red-900/40",
    image: benefitHeart
  }, {
    icon: "✨",
    title: "Skin Glow",
    body: "Antioxidants promote radiant, clear skin.",
    color: "from-amber-900/40",
    image: benefitSkin
  }, {
    icon: "🧠",
    title: "Mental Clarity",
    body: "L-theanine + gentle caffeine — alert without the crash.",
    color: "from-purple-900/40",
    image: benefitClarity
  }, {
    icon: "🌿",
    title: "Zero Chemicals",
    body: "No pesticides, no synthetics. Pure mountain goodness.",
    color: "from-emerald-900/40",
    image: benefitPurity
  }];
  return /* @__PURE__ */ jsxs("section", { id: "benefits", className: "py-28 bg-cream relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 top-20 text-[300px] text-gold/5 pointer-events-none select-none rotate-12", children: "🌿" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.4em] text-gold mb-5", children: "Wellness" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-forest-deep text-balance leading-tight", children: "Nature's Most Powerful Cup" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: "High-altitude, slow-grown, organic — Temi Tea is not just exceptional in taste. It's exceptional for you." }),
        /* @__PURE__ */ jsx("div", { className: "gold-divider w-32 mx-auto mt-8" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: items.map((item, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: `group relative h-[420px] overflow-hidden border border-border transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-2`, children: [
        /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500` }),
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500` }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 p-10 flex flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-6 transition-transform group-hover:scale-110 duration-500 w-fit drop-shadow-lg", children: item.icon }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-cream mb-4 group-hover:text-gold transition-colors duration-500", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-cream/80 text-sm leading-relaxed mb-6 line-clamp-3", children: item.body }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-0.5 bg-gold group-hover:w-full transition-all duration-700" })
        ] }) })
      ] }) }, item.title)) })
    ] })
  ] });
}
function Products() {
  const products = [{
    name: "First Pluck (Spring Flush)",
    desc: "Among the rarest teas in the world. Light floral finish, golden liquor, delicate muscatel.",
    price: "₹1,160",
    tag: "Limited Harvest",
    image: firstPluck,
    link: "https://temiteaestate.com/products/firstpluck-nat"
  }, {
    name: "Temi Tea Special",
    desc: "The pride of the garden. Aromatic, rich, deeply satisfying.",
    price: "₹530",
    tag: "Bestseller",
    image: specialTea,
    link: "https://temiteaestate.com/products/temiteaspecial-nat"
  }, {
    name: "Green Tea",
    desc: "Smooth second flush. Toasty amber brew with all the gusto of summer.",
    price: "₹421",
    tag: "Organic",
    image: greenTea,
    link: "https://temiteaestate.com/products/greentea-nat"
  }];
  return /* @__PURE__ */ jsx("section", { id: "products", className: "py-28 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.4em] text-gold mb-5", children: "The Collection" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-forest-deep text-balance", children: "Featured Teas from the Estate" }),
      /* @__PURE__ */ jsx("div", { className: "gold-divider w-32 mx-auto mt-8" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: products.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsx("a", { href: p.link, target: "_blank", rel: "noopener noreferrer", className: "group block bg-card border border-border hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full", children: /* @__PURE__ */ jsxs("article", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-forest-deep", children: [
        /* @__PURE__ */ jsx("img", { src: p.image, alt: `${p.name} — Temi Tea`, width: 1280, height: 1280, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 bg-cream/95 text-forest-deep text-[10px] uppercase tracking-[0.25em] px-3 py-1.5", children: p.tag }),
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-1.5 h-10 bg-white/30 blur-md rounded-full animate-steam" }),
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-1 h-8 bg-white/40 blur-md rounded-full animate-steam", style: {
          animationDelay: "1.5s"
        } })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-7 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-forest-deep", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground text-sm leading-relaxed flex-1", children: p.desc }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif text-2xl text-forest-deep", children: p.price }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-forest-deep border-b border-gold pb-1 group-hover:text-gold transition", children: "Buy Now →" })
        ] })
      ] })
    ] }) }) }, p.name)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: ctaMist, alt: "Misty Himalayan mountains at dawn", width: 1920, height: 1080, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-forest-deep/85" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-4xl px-6 py-32 text-center text-cream", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.4em] text-gold mb-6", children: "Direct from the Estate" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-5xl md:text-6xl leading-tight text-balance", children: [
        "No Middlemen. ",
        /* @__PURE__ */ jsx("em", { className: "not-italic text-gold", children: "No Compromise." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-cream/85 text-lg max-w-2xl mx-auto", children: "Buy 100% genuine Temi Tea directly from the Government-owned estate. Geotagged. Certified. Delivered fresh." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsx("a", { href: SHOP_URL, target: "_blank", rel: "noopener noreferrer", className: "bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold/90 transition shadow-2xl", children: "Shop All Products" }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-cream/70 text-sm", children: "📍 Temi Tea Estate, P.O. Temi, South Sikkim — 731 134  ·  📞 +91 7045045451" })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-white text-forest-deep/80 py-12 border-t border-gold/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: temiLogo, alt: "Temi Tea Logo", className: "h-12 w-auto mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] uppercase tracking-[0.2em] text-gold", children: "Produced By" }),
          /* @__PURE__ */ jsx("div", { className: "font-serif text-2xl text-forest-deep mt-1", children: "Temi Tea Estate" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-forest-deep/70 max-w-xs leading-relaxed", children: "Established 1969 · India's only government-owned organic tea garden." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-forest-deep/5", children: [
          /* @__PURE__ */ jsx("img", { src: mrcLogo, alt: "MRC Agrotech Logo", className: "h-10 w-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] uppercase tracking-[0.2em] text-gold", children: "Marketed & Distributed By" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-forest-deep mt-1", children: "MRC Agrotech Ltd" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] text-forest-deep/60 leading-relaxed max-w-[240px]", children: "404, 4th Floor, Sagar Tech Plaza (B Wing), Sakinaka Junction, Next to Sakinaka Metro Station, Andheri East, Mumbai - 400072." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-1", children: "Navigation" }),
        [["Home", "#top"], ["All Products", SHOP_URL], ["About Temi", "#legacy"], ["Special Offers", OFFERS_URL], ["Tea Journal", "https://temiteaestate.com/blogs/news"], ["Contact Us", "#contact"]].map(([l, h]) => /* @__PURE__ */ jsx("a", { href: h, target: h.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "text-xs hover:text-gold transition-colors w-fit", children: l }, l))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:items-end gap-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-1", children: "Follow the Journey" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "border border-forest-deep/10 w-10 h-10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-500", children: "◉" }),
          /* @__PURE__ */ jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "border border-forest-deep/10 w-10 h-10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-500", children: "f" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-forest-deep/5 text-[9px] uppercase tracking-widest text-forest-deep/40 flex flex-wrap justify-between gap-4", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 Temi Tea Estate · Govt. of Sikkim" }),
      /* @__PURE__ */ jsx("span", { children: "Geotagged 27°14′12″N, 88°25′20″E" })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Ticker, {}),
      /* @__PURE__ */ jsx(Legacy, {}),
      /* @__PURE__ */ jsx(Benefits, {}),
      /* @__PURE__ */ jsx(Products, {}),
      /* @__PURE__ */ jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
