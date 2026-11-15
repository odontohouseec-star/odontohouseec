"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, MessageCircle } from "lucide-react";
import { SOCIAL, waLink } from "@/lib/constants";

const SocialIcon = ({ href, label, children, isScrolled }: {
  href: string; label: string; children: React.ReactNode; isScrolled: boolean;
}) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label}
    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group ${isScrolled ? "bg-gray-100 hover:bg-[var(--color-brand-gold)]" : "bg-white/10 hover:bg-[var(--color-brand-gold)]"}`}>
    <span className={`w-4 h-4 transition-colors group-hover:text-[var(--color-brand-blue)] ${isScrolled ? "text-gray-600" : "text-white"}`} aria-hidden="true">
      {children}
    </span>
  </a>
);

const SocialIconLg = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label}
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 active:scale-95 group">
    <span className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue)] transition-colors" aria-hidden="true">
      {children}
    </span>
  </a>
);

const IGIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);
const TTIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z" /></svg>
);
const FBIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayLang = language;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav aria-label="Main navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          <a href="/" aria-label="Odonto House home" className="flex items-center">
            <Image src="/logo-dark.webp" alt="Odonto House" width={160} height={80} priority fetchPriority="high" unoptimized={true}
              className={`h-14 md:h-20 w-auto object-contain transition-all duration-500 ${isScrolled ? "" : "brightness-0 invert"}`}
              style={isScrolled ? {} : { filter: "brightness(0) invert(1)" }}
            />
          </a>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SocialIcon href={SOCIAL.instagram} label={t.nav.followInstagram} isScrolled={isScrolled}><IGIcon /></SocialIcon>
              <SocialIcon href={SOCIAL.tiktok} label={t.nav.followTikTok} isScrolled={isScrolled}><TTIcon /></SocialIcon>
              <SocialIcon href={SOCIAL.facebook} label={t.nav.followFacebook} isScrolled={isScrolled}><FBIcon /></SocialIcon>
            </div>
            <div className={`w-px h-5 ${isScrolled ? "bg-gray-300" : "bg-white/20"}`} aria-hidden="true" />
            <div className={`flex items-center gap-1 p-1 rounded-full transition-colors ${isScrolled ? "bg-gray-100" : "bg-white/10 backdrop-blur-sm"}`} role="group" aria-label="Select language">
              <button onClick={() => setLanguage("en")} aria-label="Switch to English" aria-pressed={displayLang === "en"}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${displayLang === "en" ? "bg-white text-[var(--color-brand-blue)] shadow" : isScrolled ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"}`}>EN</button>
              <span className={`text-xs opacity-30 ${isScrolled ? "text-gray-400" : "text-white"}`} aria-hidden="true">|</span>
              <button onClick={() => setLanguage("es")} aria-label="Switch to Spanish" aria-pressed={displayLang === "es"}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${displayLang === "es" ? "bg-white text-[var(--color-brand-blue)] shadow" : isScrolled ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"}`}>ES</button>
            </div>
            <a href={waLink(t.nav.whatsappMsg)} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue)] px-5 py-2.5 rounded-full font-extrabold text-sm transition-all shadow-lg hover:scale-105">
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              {t.nav.bookConsultation}
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
            className={`md:hidden focus:outline-none transition-colors z-[60] relative ${isMobileMenuOpen ? "text-white" : isScrolled ? "text-[var(--color-brand-blue)]" : "text-white"}`}>
            {isMobileMenuOpen ? <X className="w-7 h-7" aria-hidden="true" /> : <Menu className="w-7 h-7" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true"
        className={`md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

      <div id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu"
        className={`md:hidden fixed top-0 right-0 h-full w-[78vw] max-w-xs z-[58] bg-[var(--color-brand-blue)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <Image src="/logo-dark.webp" alt="Odonto House" width={120} height={40} fetchPriority="high" unoptimized={true} className="h-10 w-auto object-contain brightness-0 invert" />
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 pt-8">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">{t.nav.language}</p>
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full self-start" role="group" aria-label="Select language">
            <button onClick={() => { setLanguage("en"); setIsMobileMenuOpen(false); }} aria-label="Switch to English" aria-pressed={displayLang === "en"}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${displayLang === "en" ? "bg-white text-[var(--color-brand-blue)]" : "text-white/60 hover:text-white"}`}>EN</button>
            <span className="text-white/20 text-xs" aria-hidden="true">|</span>
            <button onClick={() => { setLanguage("es"); setIsMobileMenuOpen(false); }} aria-label="Switch to Spanish" aria-pressed={displayLang === "es"}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${displayLang === "es" ? "bg-white text-[var(--color-brand-blue)]" : "text-white/60 hover:text-white"}`}>ES</button>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col gap-5">
            <a href={waLink(t.nav.whatsappMsg)} target="_blank" rel="noopener noreferrer"
              onClick={() => {
                // Deferir el cierre del menú para evitar bloquear el hilo principal durante la navegación
                setTimeout(() => {
                  setIsMobileMenuOpen(false);
                }, 150);
              }}
              className="flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] px-6 py-3.5 rounded-full font-extrabold text-sm w-full shadow-lg active:scale-95 transition-transform">
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              {t.nav.bookConsultation}
            </a>
            <div className="flex items-center justify-center gap-4 pt-2">
              <SocialIconLg href={SOCIAL.instagram} label={t.nav.followInstagram}><IGIcon /></SocialIconLg>
              <SocialIconLg href={SOCIAL.tiktok} label={t.nav.followTikTok}><TTIcon /></SocialIconLg>
              <SocialIconLg href={SOCIAL.facebook} label={t.nav.followFacebook}><FBIcon /></SocialIconLg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
