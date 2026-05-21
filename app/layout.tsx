import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { en } from "@/locales/en";
import { es } from "@/locales/es";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { BASE_URL } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value as "en" | "es") || "en";
  const t = locale === "es" ? es : en;

  const titleDefault =
    locale === "es"
      ? "Odonto House | Turismo Dental Premium en Ecuador"
      : "Odonto House | Premium Dental Tourism in Ecuador";

  const ogTitle =
    locale === "es"
      ? "Odonto House | Turismo Dental Ecuador - Ahorra 70% en Implantes, Carillas y Diseño de Sonrisa"
      : "Odonto House | Dental Tourism Ecuador - Save 70% on Implants, Veneers & Smile Design";

  const ogDescription =
    locale === "es"
      ? "Consigue la sonrisa de tus sueños en Ecuador por una fracción del costo en USA. Implantes dentales premium, Hollywood Smile, carillas de porcelana y restauración bucal completa. Ahorra hasta 70% vs precios de USA."
      : "Get your dream smile in Ecuador for a fraction of the US cost. Premium dental implants, Hollywood Smile, porcelain veneers & full mouth restoration. Save up to 70% vs USA prices.";

  const twitterTitle =
    locale === "es"
      ? "Odonto House | Turismo Dental Ecuador - Ahorra 70%"
      : "Odonto House | Dental Tourism Ecuador - Save 70%";

  const twitterDescription =
    locale === "es"
      ? "Implantes dentales premium, Hollywood Smile y carillas en Ecuador. Ahorra hasta 70% vs precios de USA."
      : "Premium dental implants, Hollywood Smile & veneers in Ecuador. Save up to 70% vs USA prices.";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: titleDefault,
      template: "%s | Odonto House",
    },
    description: t.hero.headline + " " + t.hero.subtitle,
    keywords: [
      "dental tourism ecuador",
      "smile design ecuador",
      "dentist guayaquil",
      "dental implants ecuador",
      "Hollywood Smile ecuador",
      "all on 4 ecuador",
      "all on 6 ecuador",
      "porcelain veneers ecuador",
      "Emax veneers ecuador",
      "zirconia crowns ecuador",
      "full mouth restoration ecuador",
      "affordable dental care",
      "turismo dental ecuador",
      "dental tourism guayaquil",
      "diseño de sonrisa",
      "carillas dentales Ecuador",
      "ortodoncia Ecuador",
      "blanqueamiento dental Guayaquil",
    ],
    icons: {
      icon: [
        {
          url: "/icon.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    alternates: {
      canonical: BASE_URL,
      languages: {
        en: BASE_URL,
        es: BASE_URL,
        "x-default": BASE_URL,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: BASE_URL,
      siteName: "Odonto House",
      locale: locale === "es" ? "es_EC" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_EC",
      type: "website",
      images: [
        {
          url: "/hero.jpg",
          width: 1200,
          height: 630,
          alt: "Odonto House - Premium Dental Clinic in Guayaquil, Ecuador. Dental tourism experts.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: ["/hero.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value as "en" | "es") || "en";
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-VQCZE8V921";

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Consent Mode v2 — default to denied until user interacts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var consent = { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', functionality_storage: 'granted', personalization_storage: 'granted', security_storage: 'granted' };
              try {
                var stored = localStorage.getItem('cookie_consent');
                if (stored) {
                  var prefs = JSON.parse(stored);
                  if (prefs.analytics) consent.analytics_storage = 'granted';
                  if (prefs.marketing) { consent.ad_storage = 'granted'; consent.ad_user_data = 'granted'; consent.ad_personalization = 'granted'; }
                }
              } catch(e) {}
              gtag('consent', 'default', consent);
            `,
          }}
        />
        {/* Google Analytics — loads with consent already defaulted */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              anonymize_ip: true,
              cookie_flags: 'SameSite=Lax;Secure'
            });
          `}
        </Script>
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "54ef4c1bf0bb4b15af3b1cd16bfd2616"}'
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLanguage={locale}>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
