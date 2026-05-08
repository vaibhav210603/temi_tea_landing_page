"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const SHOP_URL = "https://temiteaestate.com/collections/bs";
const OFFERS_URL = "https://temiteaestate.com/collections/offers";

const assets = {
  heroImg: "/assets/hero-temi.jpg",
  teaCup: "/assets/tea-cup.jpg",
  legacyImg: "/assets/legacy-garden.jpg",
  ctaMist: "/assets/cta-mist.jpg",
  temiLogo: "/assets/temitea.png",
  mrcLogo: "/assets/MRC_LOGO.png",
  benefitAntioxidants: "/assets/benefit-antioxidants.png",
  benefitInflammation: "/assets/benefit-inflammation.png",
  benefitHeart: "/assets/benefit-heart.png",
  benefitSkin: "/assets/benefit-skin.png",
  benefitClarity: "/assets/benefit-clarity.png",
  benefitPurity: "/assets/benefit-purity.png",
  firstPluck: "/assets/first_pluck.png",
  greenTea: "/assets/green_tea.png",
  specialTea: "/assets/special.png",
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/10 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={assets.temiLogo} alt="Temi Tea Logo" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wide leading-none text-forest-deep">Temi Tea Estate</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-gold mt-1">Est. 1969</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-forest-deep/80">
          <a href="#legacy" className="hover:text-gold transition">Legacy</a>
          <a href="#benefits" className="hover:text-gold transition">Wellness</a>
          <a href="#products" className="hover:text-gold transition">Collection</a>
          <a href="#contact" className="hover:text-gold transition">Visit</a>
        </nav>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold/90 transition"
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={assets.heroImg}
        alt="Temi Tea Estate at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-forest-deep/30 to-forest-deep/90" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-20 top-1/3 h-40 bg-white/15 blur-3xl animate-mist" />
        <div className="absolute -inset-x-20 bottom-20 h-48 bg-white/10 blur-3xl animate-mist" style={{ animationDelay: "-7s" }} />
      </div>
      {[0, 3, 6, 9, 12].map((d, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute top-0 text-gold/70 animate-leaf"
          style={{ left: `${10 + i * 18}%`, animationDelay: `${d}s`, fontSize: 20 }}
        >
          ❦
        </span>
      ))}

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-8 text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Government of Sikkim · Estd. 1969
            </div>
            <h1 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
              Sip the Soul of the <em className="not-italic text-white">Himalayas</em>
            </h1>
            <p className="mt-8 text-cream/85 text-lg md:text-xl max-w-2xl leading-relaxed">
              India's only government-owned organic tea garden — straight from the
              hills of Sikkim to your cup.
            </p>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-cream/80 text-xs sm:text-sm">
              {[
                "🌿 100% Certified Organic",
                "📍 Geotagged Estate",
                "🏛️ Government of Sikkim",
                "🌍 Globally Recognised",
                "✅ IMO Switzerland",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold/90 transition shadow-2xl"
              >
                Shop Directly from the Garden
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#legacy" className="text-cream/80 text-sm uppercase tracking-[0.2em] hover:text-gold transition">
                Discover the Legacy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] tracking-[0.4em] uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "Est. 1969",
    "Sikkim's Legacy",
    "Only Tea Garden in Sikkim",
    "Certified Organic Since 2008",
    "IMO Switzerland",
    "All India Quality Award Winners",
    "Preferred by Europe & Japan",
    "Buy Direct. No Middlemen.",
  ];
  const row = [...items, ...items];
  return (
    <section className="bg-cream text-forest-deep border-y-2 border-gold/40 overflow-hidden shadow-inner">
      <div className="flex animate-ticker whitespace-nowrap py-4">
        {row.map((t, i) => (
          <span key={i} className="px-8 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] flex items-center gap-8">
            <span className="text-gold animate-pulse">✦</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Legacy() {
  return (
    <section id="legacy" className="relative bg-forest-deep text-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center relative">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">Sikkim's Legacy</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Sikkim's Only Tea. <br />
            <em className="not-italic text-gold">The World's Pride.</em>
          </h2>
          <div className="mt-8 space-y-5 text-cream/85 text-lg leading-relaxed">
            <p>
              Temi Tea Estate was born from a vision — a government's promise to
              transform raw Himalayan land into one of the world's finest tea
              gardens. At elevations of 1,200 to 2,100 metres, where mist kisses
              the leaves every morning and the Kanchenjunga watches over, Temi
              Tea grows slowly, patiently, and perfectly.
            </p>
            <p>
              Spanning 177 hectares, producing 1,00,000 kg per year, awarded by
              the Tea Board of India, and sought after by luxury houses in
              Europe and Japan — Temi Tea isn't just a drink. It is Sikkim's
              living legacy.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-y-6 gap-x-4 border-t border-gold/30 pt-8">
            {[
              ["1969", "Established"],
              ["177 ha", "Garden Area"],
              ["1,200–2,100m", "Altitude"],
              ["100%", "Organic"],
              ["Global", "Exports"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl text-gold">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/40" />
            <img
              src={assets.legacyImg}
              alt="Temi tea garden"
              className="relative w-full h-[560px] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: "🛡️",
      title: "Rich in Antioxidants",
      body: "Fights free radicals, slows cell ageing.",
      color: "from-blue-900/40",
      image: assets.benefitAntioxidants,
    },
    {
      icon: "💚",
      title: "Anti-Inflammatory",
      body: "Clinically studied inhibitory action against histamine, serotonin & prostaglandin-induced inflammation.",
      color: "from-green-900/40",
      image: assets.benefitInflammation,
    },
    {
      icon: "🫀",
      title: "Heart Health",
      body: "Supports healthy cholesterol and cardiovascular function.",
      color: "from-red-900/40",
      image: assets.benefitHeart,
    },
    {
      icon: "✨",
      title: "Skin Glow",
      body: "Antioxidants promote radiant, clear skin.",
      color: "from-amber-900/40",
      image: assets.benefitSkin,
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      body: "L-theanine + gentle caffeine — alert without the crash.",
      color: "from-purple-900/40",
      image: assets.benefitClarity,
    },
    {
      icon: "🌿",
      title: "Zero Chemicals",
      body: "No pesticides, no synthetics. Pure mountain goodness.",
      color: "from-emerald-900/40",
      image: assets.benefitPurity,
    },
  ];
  return (
    <section id="benefits" className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute -right-20 top-20 text-[300px] text-gold/5 pointer-events-none select-none rotate-12">
        🌿
      </div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">Wellness</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-deep text-balance leading-tight">
              Nature's Most Powerful Cup
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              High-altitude, slow-grown, organic — Temi Tea is not just exceptional in
              taste. It's exceptional for you.
            </p>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group relative h-[420px] overflow-hidden border border-border transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="relative z-10">
                    <div className="text-4xl mb-6 transition-transform group-hover:scale-110 duration-500 w-fit drop-shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-cream mb-4 group-hover:text-gold transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.body}
                    </p>
                    <div className="w-12 h-0.5 bg-gold group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      name: "First Pluck (Spring Flush)",
      desc: "Among the rarest teas in the world. Light floral finish, golden liquor, delicate muscatel.",
      price: "₹1,160",
      tag: "Limited Harvest",
      image: assets.firstPluck,
      link: "https://temiteaestate.com/products/firstpluck-nat",
    },
    {
      name: "Temi Tea Special",
      desc: "The pride of the garden. Aromatic, rich, deeply satisfying.",
      price: "₹530",
      tag: "Bestseller",
      image: assets.specialTea,
      link: "https://temiteaestate.com/products/temiteaspecial-nat",
    },
    {
      name: "Green Tea",
      desc: "Smooth second flush. Toasty amber brew with all the gusto of summer.",
      price: "₹421",
      tag: "Organic",
      image: assets.greenTea,
      link: "https://temiteaestate.com/products/greentea-nat",
    },
  ];
  return (
    <section id="products" className="py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">The Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-deep text-balance">
              Featured Teas from the Estate
            </h2>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <a 
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full"
              >
                <article className="flex flex-col h-full">
                  <div className="relative aspect-[4/5] overflow-hidden bg-forest-deep">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-cream/95 text-forest-deep text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
                      {p.tag}
                    </span>
                    <span className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-1.5 h-10 bg-white/30 blur-md rounded-full animate-steam" />
                    <span className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-1 h-8 bg-white/40 blur-md rounded-full animate-steam" style={{ animationDelay: "1.5s" }} />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl text-forest-deep">{p.name}</h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-serif text-2xl text-forest-deep">{p.price}</span>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-forest-deep border-b border-gold pb-1 group-hover:text-gold transition">
                        Buy Now →
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        src={assets.ctaMist}
        alt="Misty Himalayas"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/85" />
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center text-cream">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">Direct from the Estate</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-balance">
            No Middlemen. <em className="not-italic text-gold">No Compromise.</em>
          </h2>
          <p className="mt-6 text-cream/85 text-lg max-w-2xl mx-auto">
            Buy 100% genuine Temi Tea directly from the Government-owned estate.
            Geotagged. Certified. Delivered fresh.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold/90 transition shadow-2xl"
            >
              Shop All Products
            </a>
          </div>
          <p className="mt-10 text-cream/70 text-sm">
            📍 Temi Tea Estate, P.O. Temi, South Sikkim — 731 134 &nbsp;·&nbsp; 📞 +91 7045045451
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white text-forest-deep/80 py-12 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <div>
            <img src={assets.temiLogo} alt="Temi Tea Logo" className="h-12 w-auto mb-4" />
            <p className="text-[9px] uppercase tracking-[0.2em] text-gold">Produced By</p>
            <div className="font-serif text-2xl text-forest-deep mt-1">Temi Tea Estate</div>
            <p className="mt-3 text-xs text-forest-deep/70 max-w-xs leading-relaxed">
              Established 1969 · India's only government-owned organic tea garden.
            </p>
          </div>
          <div className="pt-6 border-t border-forest-deep/5">
            <img src={assets.mrcLogo} alt="MRC Agrotech Logo" className="h-10 w-auto mb-3" />
            <p className="text-[9px] uppercase tracking-[0.2em] text-gold">Marketed & Distributed By</p>
            <p className="text-xs font-medium text-forest-deep mt-1">MRC Agrotech Ltd</p>
            <p className="mt-2 text-[10px] text-forest-deep/60 leading-relaxed max-w-[240px]">
              404, 4th Floor, Sagar Tech Plaza (B Wing), Sakinaka Junction, Next to Sakinaka Metro Station, Andheri East, Mumbai - 400072.
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">Navigation</p>
          {[
            ["Home", "#top"],
            ["All Products", SHOP_URL],
            ["About Temi", "#legacy"],
            ["Special Offers", OFFERS_URL],
            ["Tea Journal", "https://temiteaestate.com/blogs/news"],
            ["Contact Us", "#contact"],
          ].map(([l, h]) => (
            <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-xs hover:text-gold transition-colors w-fit">
              {l}
            </a>
          ))}
        </nav>

      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-forest-deep/5 text-[9px] uppercase tracking-widest text-forest-deep/40 flex flex-wrap justify-between gap-4">
        <span>© 2026 Temi Tea Estate · Govt. of Sikkim</span>
        <span>Geotagged 27°14′12″N, 88°25′20″E</span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Legacy />
        <Benefits />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
