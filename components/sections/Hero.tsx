import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";
import { waLink } from "@/lib/constants";

export const Hero = ({ t }: { t: Dictionary }) => {

  return (
    <section className="relative h-[620px] md:min-h-screen flex items-end md:items-center overflow-hidden bg-white">
      {/* Full-bleed background image — priority preloads LCP element */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Odonto House dental clinic"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        {/* Mobile: bottom-heavy gradient to keep faces clear at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051A2F]/95 via-[#051A2F]/40 to-transparent md:hidden" />
        {/* Desktop: gradient from left — original design */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#051A2F]/85 via-[#051A2F]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-full px-6 sm:px-8 lg:pl-14 relative z-20 pb-24 pt-28 md:pt-28 md:pb-24">
        <div className="max-w-sm md:max-w-lg">

          <h1
            className="animate-slide-right-fade text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-2 md:mb-3"
          >
            {t.hero.headline}
          </h1>

          <p
            className="animate-slide-right-fade delay-150 text-xs sm:text-sm md:text-base text-white/70 mb-4 md:mb-6 leading-relaxed max-w-sm md:max-w-lg"
          >
            {t.hero.subtitle}
          </p>

          <div
            className="animate-slide-right-fade delay-300 flex flex-row flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue)] px-6 py-3 rounded-full font-extrabold text-sm whitespace-nowrap transition-all flex items-center justify-center gap-2 shadow-xl min-h-[48px]"
            >
              {t.hero.getQuote} <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a
              href={waLink(t.hero.whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex shrink-0 border border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all items-center justify-center gap-2 backdrop-blur-sm min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" /> {t.hero.chatWhatsApp}
            </a>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      {/* Animated Bottom waves using a GPU-accelerated double-slider carousel pattern for 100% seamless infinite loops without cuts */}
      <div className="absolute bottom-0 left-0 right-0 h-[170px] md:h-[200px] lg:h-[280px] xl:h-[360px] z-10 pointer-events-none translate-y-[2px] overflow-hidden">
        {/* Layer 1 (Back) */}
        <div className="absolute inset-0 w-[200%] h-full flex animate-wave-back" style={{ width: "200%" }}>
          <svg
            viewBox="0 -240 1440 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-full block"
          >
            <path d="M0,50 C360,100 1080,0 1440,50 V120 H0 Z" fill="white" opacity="0.3" />
          </svg>
          <svg
            viewBox="0 -240 1440 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-full block"
          >
            <path d="M0,50 C360,100 1080,0 1440,50 V120 H0 Z" fill="white" opacity="0.3" />
          </svg>
        </div>

        {/* Layer 2 (Middle) */}
        <div className="absolute inset-0 w-[200%] h-full flex animate-wave-middle" style={{ width: "200%" }}>
          <svg
            viewBox="0 -240 960 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-full block"
          >
            <path d="M0,65 C240,110 720,20 960,65 V120 H0 Z" fill="white" opacity="0.6" />
          </svg>
          <svg
            viewBox="0 -240 960 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-full block"
          >
            <path d="M0,65 C240,110 720,20 960,65 V120 H0 Z" fill="white" opacity="0.6" />
          </svg>
        </div>

        {/* Layer 3 (Front) */}
        <div className="absolute inset-0 w-[200%] h-full flex animate-wave-front" style={{ width: "200%" }}>
          <svg
            viewBox="0 -240 720 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-full block"
          >
            <path d="M0,80 C180,115 540,45 720,80 V120 H0 Z" fill="white" />
          </svg>
          <svg
            viewBox="0 -240 720 360"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-full block"
          >
            <path d="M0,80 C180,115 540,45 720,80 V120 H0 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};
