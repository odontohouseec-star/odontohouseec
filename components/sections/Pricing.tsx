"use client";

import React, { useState } from "react";
import { Check, DollarSign, ChevronDown, Calculator } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { waLink } from "@/lib/constants";
import { Dictionary } from "@/lib/dictionary";


export const Pricing = ({ t, locale }: { t: Dictionary; locale: string }) => {
  const [showPrices, setShowPrices] = useState(false);
  const content = t.pricing;

  return (
    <section id="pricing" className="py-14 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">
            {locale === "en" ? "Transparent Pricing" : "Precios Transparentes"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3 mb-4">
            {content.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* Special All-Inclusive Package */}
        <Reveal delay={100} className="mb-12">
          <div className="bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            {/* Animated decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-brand-gold)]/10 rounded-full group-hover:bg-[var(--color-brand-gold)]/20 transition-colors duration-700 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: "4s" }}></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-[var(--color-brand-gold)] rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: "0.2s" }}></div>
            
            <div className="relative z-10">
              <span className="inline-block bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-4 py-1 rounded-full text-sm mb-4 animate-bounce" style={{ animationDuration: "3s" }}>
                {locale === "en" ? "BEST VALUE" : "MEJOR VALOR"}
              </span>
              <h3 className="text-white font-extrabold text-2xl md:text-4xl mb-2 group-hover:scale-[1.02] transition-transform duration-300">
                {content.specialPackage.title}
              </h3>
              <p className="text-white/80 text-lg mb-6 group-hover:text-white transition-colors duration-300">
                {content.specialPackage.subtitle}
              </p>
              
               <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <a 
                  href={waLink(content.specialPackage.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/price cursor-pointer block focus:outline-none"
                >
                  <span className="text-white/60 text-sm block">{content.specialPackage.priceLabel}</span>
                  <div className="text-4xl font-black text-[var(--color-brand-gold)] group-hover/price:scale-105 transition-all duration-300 flex items-center gap-2">
                    {content.specialPackage.priceHidden ? (
                      <>
                        <span className="text-white/90">?</span>
                        <span className="text-2xl text-white/70 font-medium">{locale === "en" ? "Ask us" : "Consultános"}</span>
                      </>
                    ) : null}
                  </div>
                  <span className="text-white/50 text-xs mt-1 block group-hover/price:text-white/70 transition-colors">
                    {locale === "en" ? "Click to inquire" : "Clic para consultar"}
                  </span>
                </a>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                  {content.specialPackage.features.map((feature: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 text-white/90 group-hover/feature:text-white group-hover/feature:translate-x-1 transition-all duration-300"
                    >
                      <Check className="w-5 h-5 text-[var(--color-brand-gold)] flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href={waLink(content.specialPackage.whatsappMsg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 shadow-lg animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                <DollarSign className="w-5 h-5" />
                {content.specialPackage.cta}
              </a>
            </div>
          </div>
        </Reveal>

        {/* What's Included Card */}
        <div className="bg-[var(--color-brand-blue)] rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Check className="w-6 h-6 text-[var(--color-brand-gold)]" />
            {content.included}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.includedList.map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-white/90">
                <Check className="w-4 h-4 text-[var(--color-brand-gold)] flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table - Collapsible */}
        <div className="mt-8">
          {/* Collapsible Button */}
          <button 
            onClick={() => setShowPrices(!showPrices)}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-300 group"
          >
            <Calculator className="w-5 h-5 text-[var(--color-brand-blue)] group-hover:scale-110 transition-transform" />
            <span className="font-bold text-[var(--color-brand-blue)]">
              {locale === "en" ? "Curious about savings? See price comparison" : "¿Curioso sobre los ahorros? Ver comparación de precios"}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showPrices ? "rotate-180" : ""}`} />
          </button>

          {/* Collapsible Content */}
          <div className={`overflow-hidden transition-all duration-500 ${showPrices ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-4 font-bold text-[var(--color-brand-blue)] text-lg">
                      {content.tableTitle}
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-gray-500 text-sm uppercase tracking-wider">
                      USA
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-[var(--color-brand-blue)] text-sm uppercase tracking-wider">
                      Ecuador
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-green-600 text-sm uppercase tracking-wider">
                      {content.saving}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.treatments.map((treatment, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="py-4 px-4">
                        <div className="font-bold text-[var(--color-brand-blue)]">{treatment.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{treatment.unit}</div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-gray-400 line-through text-sm">{treatment.usa}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="font-bold text-[var(--color-brand-blue)] text-lg">{treatment.ecuador}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
                          {treatment.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href={waLink(content.whatsappMsg)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <DollarSign className="w-5 h-5" />
            {content.cta}
          </a>
          <p className="text-gray-400 text-sm mt-4 italic">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
};