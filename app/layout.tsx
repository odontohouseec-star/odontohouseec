import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { en } from "@/locales/en";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { BASE_URL } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Odonto House | Premium Dental Tourism in Ecuador",
    template: "%s | Odonto House",
  },
  description: en.hero.headline + " " + en.hero.subtitle,
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
    "blanqueamiento dental Guayaquil"
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Odonto House | Dental Tourism Ecuador - Save 70% on Implants, Veneers & Smile Design",
    description: "Get your dream smile in Ecuador for a fraction of the US cost. Premium dental implants, Hollywood Smile, porcelain veneers & full mouth restoration. Save up to 70% vs USA prices.",
    url: BASE_URL,
    siteName: "Odonto House",
    locale: "en_US",
    alternateLocale: "es_EC",
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
    title: "Odonto House | Dental Tourism Ecuador - Save 70%",
    description: "Premium dental implants, Hollywood Smile & veneers in Ecuador. Save up to 70% vs USA prices.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google": "notranslate",
  },
};

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
      translate="no"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
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


