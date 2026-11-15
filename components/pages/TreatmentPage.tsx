import React from "react";
import Image from "next/image";
import { ArrowRight, Check, MessageCircle, ChevronDown } from "lucide-react";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { getDictionary, Locale } from "@/lib/dictionary";
import { BASE_URL, waLink } from "@/lib/constants";
import { TREATMENT_PAGES, TreatmentSlug } from "@/lib/treatmentPages";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  return (cookieStore.get("NEXT_LOCALE")?.value as Locale) || "en";
};

export const treatmentMetadata = async (slug: TreatmentSlug): Promise<Metadata> => {
  const c = TREATMENT_PAGES[slug][await getLocale()];
  const url = `${BASE_URL}/${slug}`;
  return {
    title: { absolute: `${c.metaTitle} | Odonto House` },
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url, images: [`${BASE_URL}/hero.jpg`] },
    robots: { index: true, follow: true },
  };
};

const gold = "text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm";
const h2 = "text-3xl md:text-4xl font-extrabold text-[var(--color-brand-blue)] mt-3";

export const TreatmentPage = async ({ slug }: { slug: TreatmentSlug }) => {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const c = TREATMENT_PAGES[slug][locale];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[var(--color-brand-blue)] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={c.heroImage} alt={c.heroAlt} fill priority unoptimized className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051A2F] via-[#051A2F]/85 to-[#051A2F]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[var(--color-brand-gold-light)] font-bold uppercase tracking-widest text-xs md:text-sm">{c.eyebrow}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mt-3 mb-4">{c.h1}</h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">{c.intro}</p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 mb-8">
              {c.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Check className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0" aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue)] px-6 py-3 rounded-full font-extrabold text-sm transition-all flex items-center gap-2 shadow-xl min-h-[48px]">
                {c.ctaQuote} <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <a href={waLink(c.waMsg)} target="_blank" rel="noreferrer" className="border border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 min-h-[48px]">
                <MessageCircle className="w-4 h-4 shrink-0" /> {c.ctaWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="pricing" className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className={h2}>{c.pricesTitle}</h2>
            <p className="text-gray-500 mt-3">{c.pricesSubtitle}</p>
          </div>
          <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_auto] gap-4 bg-gray-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-400">
              <span>{c.colTreatment}</span><span>{c.colUsa}</span><span>{c.colEcuador}</span><span>{c.saveLabel}</span>
            </div>
            {c.prices.map((p) => (
              <div key={p.name} className="grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_auto] gap-x-4 gap-y-1 px-6 py-4 border-t border-gray-100 items-center">
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-bold text-[var(--color-brand-blue)]">{p.name}</p>
                  <p className="text-xs text-gray-400">{p.unit}</p>
                </div>
                <p className="text-gray-400 text-sm"><span className="sm:hidden">{c.colUsa}: </span><span className="line-through">{p.usa}</span></p>
                <p className="font-extrabold text-[var(--color-brand-blue)] text-lg">{p.ecuador}</p>
                <span className="justify-self-start sm:justify-self-end bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">-{p.savings}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">{c.priceNote}</p>
        </div>
      </section>

      {/* Results (smile design only) */}
      {c.results && (
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={h2}>{c.results.title}</h2>
            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8">
              {[{ src: "/before2.webp", label: c.results.before }, { src: "/after2.webp", label: c.results.after }].map((img) => (
                <figure key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white">
                  <Image src={img.src} alt={`${c.results!.title} – ${img.label}`} fill unoptimized className="object-cover" />
                  <figcaption className="absolute top-3 left-3 bg-white/90 text-[var(--color-brand-blue)] text-xs font-bold px-3 py-1 rounded-full">{img.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Steps */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${h2} text-center mb-10`}>{c.stepsTitle}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="w-9 h-9 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-extrabold flex items-center justify-center mb-4">{i + 1}</span>
                <h3 className="font-bold text-[var(--color-brand-blue)] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          {c.stepsNote && <p className="text-sm text-gray-500 text-center mt-8 max-w-2xl mx-auto">{c.stepsNote}</p>}
        </div>
      </section>

      {/* Included + doctor */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={h2}>{c.includedTitle}</h2>
            <ul className="mt-6 space-y-3">
              {c.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-sm">
            <Image src="/doctora.jpg" alt="Dr. Elena Barroso" width={160} height={160} unoptimized className="w-32 h-32 rounded-full object-cover object-top shrink-0" />
            <div>
              <span className={gold}>Odonto House</span>
              <h3 className="text-xl font-extrabold text-[var(--color-brand-blue)] mt-1 mb-2">{c.doctorTitle}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.doctorText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${h2} text-center mb-8`}>{c.faqTitle}</h2>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-gray-100 shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-[var(--color-brand-blue)]">
                  {f.q}
                  <ChevronDown className="w-5 h-5 shrink-0 text-[var(--color-brand-gold)] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-gray-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className={h2}>{c.finalTitle}</h2>
          <p className="text-gray-500 mt-3 mb-6">{c.finalText}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waLink(c.waMsg)} target="_blank" rel="noreferrer" className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue)] px-6 py-3 rounded-full font-extrabold text-sm transition-all flex items-center gap-2 shadow-lg min-h-[48px]">
              <MessageCircle className="w-4 h-4 shrink-0" /> {c.ctaWhatsApp}
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            {c.otherLabel}:{" "}
            <a href={c.otherHref} className="font-bold text-[var(--color-brand-blue)] underline underline-offset-4 hover:text-[#8f6d21]">{c.otherText}</a>
            {" · "}
            <a href="/" className="font-bold text-[var(--color-brand-blue)] underline underline-offset-4 hover:text-[#8f6d21]">{c.homeLabel}</a>
          </p>
        </div>
      </section>

      <Footer t={t} locale={locale} defaultTreatment={c.formOption} />
      <FloatingWhatsApp />
    </main>
  );
};
