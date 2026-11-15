"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Dictionary } from "@/lib/dictionary";

export const FAQ = ({ t }: { t: Dictionary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === idx
                    ? "border-[var(--color-brand-gold)] bg-gray-50/50 shadow-md"
                    : "border-gray-100 hover:border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 ${openIndex === idx ? "text-[var(--color-brand-blue)]" : "text-gray-700"}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180 text-[var(--color-brand-gold)]" : "text-gray-400"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
