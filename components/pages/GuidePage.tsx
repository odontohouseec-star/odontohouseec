import React from "react";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { Check, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { getDictionary, Locale } from "@/lib/dictionary";
import { BASE_URL, waLink } from "@/lib/constants";
import { GUIDES, GUIDE_SLUGS, GUIDE_UI, GUIDES_UPDATED, GuideSlug } from "@/lib/guides";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  return (cookieStore.get("NEXT_LOCALE")?.value as Locale) || "en";
};

const h2 = "text-2xl md:text-3xl font-extrabold text-[var(--color-brand-blue)]";
const link = "font-bold text-[var(--color-brand-blue)] underline underline-offset-4 hover:text-[#8f6d21]";

const formatDate = (iso: string, locale: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === "es" ? "es-EC" : "en-US", { year: "numeric", month: "long", day: "numeric" });

// Dark band behind the fixed navbar, whose logo and links are white until you scroll.
const Header = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <section className="bg-[var(--color-brand-blue)] pt-32 pb-12 md:pt-40 md:pb-16">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <span className="text-[var(--color-brand-gold-light)] font-bold uppercase tracking-widest text-xs md:text-sm">{eyebrow}</span>
      <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mt-3">{title}</h1>
      {intro && <p className="text-white/80 text-base md:text-lg leading-relaxed mt-4">{intro}</p>}
    </div>
  </section>
);

export const guideMetadata = async (slug: GuideSlug): Promise<Metadata> => {
  const g = GUIDES[slug][await getLocale()];
  const url = `${BASE_URL}/guides/${slug}`;
  return {
    title: { absolute: `${g.metaTitle} | Odonto House` },
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: g.metaTitle, description: g.metaDescription, url, type: "article", images: [`${BASE_URL}/hero.jpg`] },
    robots: { index: true, follow: true },
  };
};

export const GuidePage = async ({ slug }: { slug: GuideSlug }) => {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const ui = GUIDE_UI[locale];
  const g = GUIDES[slug][locale];
  const url = `${BASE_URL}/guides/${slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.h1,
      description: g.metaDescription,
      url,
      inLanguage: locale,
      datePublished: GUIDES_UPDATED,
      dateModified: GUIDES_UPDATED,
      image: `${BASE_URL}/hero.jpg`,
      author: { "@id": `${BASE_URL}/#doctor` },
      reviewedBy: { "@id": `${BASE_URL}/#doctor` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      about: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home, item: BASE_URL },
        { "@type": "ListItem", position: 2, name: ui.guides, item: `${BASE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: g.h1, item: url },
      ],
    },
  ];

  const others = GUIDE_SLUGS.filter((s) => s !== slug);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <Header eyebrow={g.eyebrow} title={g.h1} />

      <article className="bg-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-[#8f6d21]">{ui.home}</a> / <a href="/guides" className="hover:text-[#8f6d21]">{ui.guides}</a>
          </nav>
          <p className="text-xs text-gray-400 mb-6">
            {ui.updated}: <time dateTime={GUIDES_UPDATED}>{formatDate(GUIDES_UPDATED, locale)}</time> · {ui.by}
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-4 border-[var(--color-brand-gold)] pl-5 mb-10">{g.answer}</p>

          {g.sections.map((s) => (
            <section key={s.h2} className="mb-10">
              <h2 className={`${h2} mb-4`}>{s.h2}</h2>
              {s.bullets && (
                <ul className="space-y-3 mb-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <Check className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-gray-600 leading-relaxed mb-4">{p}</p>
              ))}
            </section>
          ))}

          <section className="mb-10">
            <h2 className={`${h2} mb-4`}>{ui.faq}</h2>
            <div className="space-y-3">
              {g.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-gray-100 shadow-sm">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-[var(--color-brand-blue)]">
                    {f.q}
                    <ChevronDown className="w-5 h-5 shrink-0 text-[var(--color-brand-gold)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="px-5 pb-5 text-gray-500 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gray-50 p-6 md:p-8 text-center mb-10">
            <h2 className={h2}>{g.ctaTitle}</h2>
            <p className="text-gray-500 mt-3 mb-6">{g.ctaText}</p>
            <a href={waLink(g.waMsg)} target="_blank" rel="noreferrer" className="inline-flex bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue)] px-6 py-3 rounded-full font-extrabold text-sm transition-all items-center gap-2 shadow-lg min-h-[48px]">
              <MessageCircle className="w-4 h-4 shrink-0" /> {g.ctaButton}
            </a>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-[var(--color-brand-blue)] mb-3">{ui.related}</h2>
            <ul className="space-y-2">
              {others.map((s) => (
                <li key={s}><a href={`/guides/${s}`} className={link}>{GUIDES[s][locale].h1}</a></li>
              ))}
              <li><a href="/dental-implants-ecuador" className={link}>{locale === "es" ? "Implantes Dentales en Ecuador" : "Dental Implants in Ecuador"}</a></li>
              <li><a href="/veneers-ecuador" className={link}>{locale === "es" ? "Carillas y Diseño de Sonrisa en Ecuador" : "Veneers & Smile Design in Ecuador"}</a></li>
            </ul>
          </section>
        </div>
      </article>

      <Footer t={t} locale={locale} />
      <FloatingWhatsApp />
    </main>
  );
};

export const guidesIndexMetadata = async (): Promise<Metadata> => {
  const ui = GUIDE_UI[await getLocale()];
  return {
    title: ui.indexTitle,
    description: ui.indexIntro,
    alternates: { canonical: `${BASE_URL}/guides` },
  };
};

export const GuidesIndexPage = async () => {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const ui = GUIDE_UI[locale];
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <Header eyebrow="Odonto House" title={ui.indexTitle} intro={ui.indexIntro} />
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6">
          {GUIDE_SLUGS.map((s) => {
            const g = GUIDES[s][locale];
            return (
              <a key={s} href={`/guides/${s}`} className="group rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition flex flex-col">
                <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs">{g.eyebrow}</span>
                <h2 className="text-lg font-extrabold text-[var(--color-brand-blue)] mt-2 mb-3">{g.h1}</h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{g.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--color-brand-blue)] group-hover:text-[#8f6d21]">
                  {ui.read} <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </section>
      <Footer t={t} locale={locale} />
      <FloatingWhatsApp />
    </main>
  );
};
