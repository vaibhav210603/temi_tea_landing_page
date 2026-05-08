import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-temi.jpg";
import teaCup from "@/assets/tea-cup.jpg";
import legacyImg from "@/assets/legacy-garden.jpg";
import ctaMist from "@/assets/cta-mist.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Temi Tea Estate — Sip the Soul of the Himalayas | Est. 1969" },
      {
        name: "description",
        content:
          "India's only Government-owned organic tea garden. Certified organic, geotagged & globally awarded. Buy directly from Sikkim's legendary Temi Tea Estate.",
      },
      { property: "og:title", content: "Temi Tea Estate — Sikkim's Only Tea. The World's Pride." },
      {
        property: "og:description",
        content:
          "Government of Sikkim's organic tea garden since 1969. IMO Switzerland certified. Direct from the Himalayas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-temi.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

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
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[oklch(0.32_0.05_150/0.92)] backdrop-blur-md py-3 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-cream">
          <span className="font-serif text-2xl tracking-wide text-cream">Temi</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-gold">Est. 1969</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-cream/85">
          <a href="#legacy" className="hover:text-gold transition">Legacy</a>
          <a href="#why" className="hover:text-gold transition">Why Temi</a>
          <a href="#products" className="hover:text-gold transition">Teas</a>
          <a href="#benefits" className="hover:text-gold transition">Benefits</a>
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
        src={heroImg}
        alt="Temi Tea Estate at sunrise with mist rolling over Himalayan tea garden and Kanchenjunga range"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-forest-deep/30 to-forest-deep/90" />
      {/* mist layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-20 top-1/3 h-40 bg-white/15 blur-3xl animate-mist" />
        <div className="absolute -inset-x-20 bottom-20 h-48 bg-white/10 blur-3xl animate-mist" style={{ animationDelay: "-7s" }} />
      </div>
      {/* falling leaves */}
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
              Sip the Soul of the <em className="not-italic text-gold">Himalayas</em>
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
    <section className="bg-forest-deep text-cream border-y border-gold/30 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap py-5">
        {row.map((t, i) => (
          <span key={i} className="px-8 text-xs sm:text-sm uppercase tracking-[0.3em] flex items-center gap-8">
            <span className="text-gold">✦</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function WhyTemi() {
  const cols = [
    {
      icon: "🏛️",
      title: "Government-Owned. State-Backed.",
      body:
        "Owned and operated by the Government of Sikkim since 1969. When you buy Temi Tea, you buy from the source — not a distributor, not a marketplace. Direct from the garden.",
    },
    {
      icon: "📍",
      title: "Geotagged & 100% Traceable",
      body:
        "Every batch is geotagged to 27°14′12″N, 88°25′20″E — Temi, South Sikkim. What you receive is exactly what the mountain gives. No blending, no adulteration. Pure Sikkim in every cup.",
    },
    {
      icon: "🌿",
      title: "Certified Organic Since 2008",
      body:
        "Certified under the Institute of Marketecology (IMO), Switzerland. Zero synthetic pesticides, zero chemicals. Natural composting, vermi-culture, and Himalayan rainwater — nothing else.",
    },
  ];
  return (
    <section id="why" className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">The Difference</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-deep text-balance">
              Why Temi is unlike any tea you've tasted
            </h2>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full bg-card p-10 border border-border hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-4xl mb-6">{c.icon}</div>
                <h3 className="font-serif text-2xl text-forest-deep mb-4 leading-snug">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
              src={legacyImg}
              alt="Terraced rows of Temi tea garden disappearing into Himalayan mist"
              width={1280}
              height={1600}
              loading="lazy"
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
    ["🛡️", "Rich in Antioxidants", "Fights free radicals, slows cell ageing."],
    ["💚", "Anti-Inflammatory", "Clinically studied inhibitory action against histamine, serotonin & prostaglandin-induced inflammation."],
    ["🫀", "Heart Health", "Supports healthy cholesterol and cardiovascular function."],
    ["✨", "Skin Glow", "Antioxidants promote radiant, clear skin."],
    ["🧠", "Mental Clarity", "L-theanine + gentle caffeine — alert without the crash."],
    ["🌿", "Zero Chemicals", "No pesticides, no synthetics. Pure mountain goodness."],
  ];
  return (
    <section id="benefits" className="py-28 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">Wellness</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-deep text-balance">
              Nature's Most Powerful Cup
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              High-altitude, slow-grown, organic — Temi Tea is not just exceptional in
              taste. It's exceptional for you.
            </p>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map(([icon, title, body], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="bg-card p-10 h-full hover:bg-secondary transition">
                <div className="text-3xl mb-5">{icon}</div>
                <h3 className="font-serif text-xl text-forest-deep mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
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
    },
    {
      name: "Temi Tea Special",
      desc: "The pride of the garden. Aromatic, rich, deeply satisfying.",
      price: "₹530",
      tag: "Bestseller",
    },
    {
      name: "Green Tea",
      desc: "Smooth second flush. Toasty amber brew with all the gusto of summer.",
      price: "₹421",
      tag: "Organic",
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
              <article className="group bg-card border border-border hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden bg-forest-deep">
                  <img
                    src={teaCup}
                    alt={`${p.name} — Temi Tea`}
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-cream/95 text-forest-deep text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
                    {p.tag}
                  </span>
                  {/* steam */}
                  <span className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-1.5 h-10 bg-white/30 blur-md rounded-full animate-steam" />
                  <span className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-1 h-8 bg-white/40 blur-md rounded-full animate-steam" style={{ animationDelay: "1.5s" }} />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl text-forest-deep">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-serif text-2xl text-forest-deep">{p.price}</span>
                    <a
                      href={SHOP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-[0.25em] text-forest-deep border-b border-gold pb-1 hover:text-gold transition"
                    >
                      Buy Now →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const awards = [
    "🏆 All India Quality Award · Tea Board of India (1994 & 1995)",
    "🇨🇭 IMO Certified Organic · Switzerland",
    "🇯🇵 Preferred by Japan & European luxury markets",
    "🌍 Exported to premium international buyers",
    "🌿 Organic Certification active since 2008 · annually inspected",
  ];
  return (
    <section className="bg-forest-deep text-cream py-24 relative">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">Global Recognition</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">Laurels from Around the World</h2>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {awards.map((a) => (
              <span
                key={a}
                className="border border-gold/40 text-cream/90 px-5 py-3 text-xs sm:text-sm tracking-wide hover:bg-gold/10 transition"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "The floral aroma with a hint of honey made my mornings brighter. A perfect cup that reflects the beauty of Sikkim.",
      a: "Anita Sharma",
      r: "Tea Enthusiast",
    },
    {
      q: "Temi stands out with smooth muscatel notes. Refreshing as Darjeeling but with its own distinct soul.",
      a: "Rajat Sen",
      r: "Travel Blogger",
    },
    {
      q: "The First Flush is outstanding — better than many expensive imported teas I've tried.",
      a: "James Wilson",
      r: "Tea Collector",
    },
  ];
  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">In Their Words</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-deep text-balance">
              Loved by connoisseurs worldwide
            </h2>
            <div className="gold-divider w-32 mx-auto mt-8" />
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((t, i) => (
            <Reveal key={t.a} delay={i * 120}>
              <figure className="bg-card border border-border p-10 h-full flex flex-col">
                <span className="font-serif text-6xl text-gold leading-none">"</span>
                <blockquote className="font-serif text-xl text-forest-deep italic leading-snug mt-2 flex-1">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-medium text-forest-deep">{t.a}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.r}</div>
                </figcaption>
              </figure>
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
        src={ctaMist}
        alt="Misty Himalayan mountains at dawn"
        width={1920}
        height={1080}
        loading="lazy"
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
            <a
              href={OFFERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/50 text-cream px-8 py-4 text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition"
            >
              View Offers
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
    <footer className="bg-[oklch(0.22_0.04_150)] text-cream/80 py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="font-serif text-3xl text-cream">Temi</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mt-1">Tea Estate</div>
          <p className="mt-5 text-sm text-cream/70 max-w-xs">
            Established 1969 · The Pride of Sikkim
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {[
            ["Home", "#top"],
            ["All Products", SHOP_URL],
            ["About", "#legacy"],
            ["Offers", OFFERS_URL],
            ["Blog", "https://temiteaestate.com/blogs/news"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-gold transition">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex md:justify-end gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-cream/30 w-10 h-10 flex items-center justify-center hover:border-gold hover:text-gold transition">
            ◉
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-cream/30 w-10 h-10 flex items-center justify-center hover:border-gold hover:text-gold transition">
            f
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t border-cream/10 text-xs text-cream/50 flex flex-wrap justify-between gap-4">
        <span>© 2026 Temi Tea Estate · Govt. of Sikkim</span>
        <span>Geotagged 27°14′12″N, 88°25′20″E</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <WhyTemi />
        <Legacy />
        <Benefits />
        <Products />
        <Awards />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
