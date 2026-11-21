import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { en } from "@/locales/en";
import { es } from "@/locales/es";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { WhatsAppClickTracker } from "@/components/layout/WhatsAppClickTracker";
import { BASE_URL, GOOGLE_ADS_ID } from "@/lib/constants";
import { getConsentDefaults } from "@/lib/consent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

/**
 * Country of the current visitor, used to pick the right Consent Mode default.
 * The site runs on Vercel (x-vercel-ip-country); cf-ipcountry covers Cloudflare.
 * An empty string means unknown, which keeps consent denied.
 */
async function getVisitorCountry(): Promise<string> {
  try {
    const requestHeaders = await headers();
    return (
      requestHeaders.get("x-vercel-ip-country") ??
      requestHeaders.get("cf-ipcountry") ??
      ""
    );
  } catch {
    return "";
  }
}

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

  const country = await getVisitorCountry();
  const consentDefaults = getConsentDefaults(country);
  const consentGranted = consentDefaults.ad_storage === "granted";

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Consent Mode v2 — opt-in only where the law requires it (EEA/UK/CH) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var consent = ${JSON.stringify(consentDefaults)};
              try {
                var stored = localStorage.getItem('cookie_consent');
                if (stored) {
                  var prefs = JSON.parse(stored);
                  consent.analytics_storage = prefs.analytics ? 'granted' : 'denied';
                  consent.ad_storage = prefs.marketing ? 'granted' : 'denied';
                  consent.ad_user_data = prefs.marketing ? 'granted' : 'denied';
                }
              } catch(e) {}
              gtag('consent', 'default', consent);
            `,
          }}
        />
        {/* Google Analytics — loads as soon as the page is interactive so fast ad clicks are measured */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              cookie_flags: 'SameSite=Lax;Secure'
            });
            gtag('config', '${GOOGLE_ADS_ID}');
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
          <CookieConsent
            initialPreferences={{ analytics: consentGranted, marketing: consentGranted }}
          />
          <WhatsAppClickTracker />
        </LanguageProvider>
      </body>
    </html>
  );
}
