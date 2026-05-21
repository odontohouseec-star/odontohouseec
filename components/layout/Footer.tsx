"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, CheckCircle, MessageCircle, Map } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";
import { WA_NUMBER, MAP_SRC, SOCIAL } from "@/lib/constants";

export const Footer = ({ t, locale }: { t: Dictionary; locale: string }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", treatment: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const treatment = form.treatment || t.footer.treatmentOptions[0];
    const message = locale === "es"
      ? `¡Hola! Me gustaría solicitar una cotización gratuita de Odonto House.\n\n👤 *Nombre:* ${form.name}\n📧 *Email:* ${form.email}\n📞 *Teléfono:* ${form.phone}\n🦷 *Tratamiento:* ${treatment}`
      : `Hello! I'd like to request a free quote from Odonto House.\n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📞 *Phone:* ${form.phone}\n🦷 *Treatment:* ${treatment}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank", "noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <footer className="bg-[var(--color-brand-blue)] text-white py-12 md:py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-brand-gold-light)] leading-snug">
              {t.footer.ready}
            </h2>
            <div className="space-y-4 mb-8 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-brand-gold)]" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-brand-gold)]" />
                <span>{t.footer.phoneText}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-brand-gold)]" />
                <span>{t.footer.emailText}</span>
              </div>
            </div>

            {/* Map - Native Lazy Loaded */}
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative shadow-inner">
              <iframe
                src={MAP_SRC}
                title="Odonto House location map"
                className="block w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-[var(--color-brand-blue)] p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-1">{t.footer.requestQuote}</h3>
            <p className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-green-500" />
              {t.footer.replyInstantly}
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.name}</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                  placeholder={t.footer.placeholderName}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.email}</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                  placeholder={t.footer.placeholderEmail}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="treatment-select" className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.treatment}</label>
                <select
                  id="treatment-select"
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-gold)] bg-white transition-colors"
                >
                  {t.footer.treatmentOptions.map((option: string, idx: number) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className={`w-full font-bold py-4 rounded-lg transition-all duration-300 mt-4 flex items-center justify-center gap-2 ${
                  sent
                    ? "bg-green-500 text-white scale-95"
                    : "bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue)] hover:scale-[1.02] shadow-lg"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t.footer.whatsappOpened}
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    {t.footer.submit}
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-[var(--color-brand-blue)] flex flex-col items-center gap-5">
          {/* Social Media Links */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a
              href={SOCIAL.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">
              {locale === "es" ? "Política de Privacidad" : "Privacy Policy"}
            </a>
            <span>&copy; {new Date().getFullYear()} {t.footer.allRightsReserved}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
