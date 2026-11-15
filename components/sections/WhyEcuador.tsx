import React from "react";
import { Plane, PiggyBank, Award, Languages, HeartHandshake } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Dictionary } from "@/lib/dictionary";

export const WhyEcuador = ({ t }: { t: Dictionary }) => {
  const cardBase =
    "transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]";

  return (
    <section id="why-ecuador" className="py-14 md:py-24 bg-[var(--color-brand-blue)] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none animate-[ping_6s_ease-in-out_infinite]" style={{ animationDuration: "6s" }} />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-[var(--color-brand-gold)]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-xs md:text-sm">{t.whyEcuador.dentalTourism}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            {t.whyEcuador.title}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t.whyEcuador.subtitle}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Big card */}
          <Reveal delay={100} className="md:col-span-2">
            <div className={`bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between min-h-64 backdrop-blur-sm hover:bg-white/10 ${cardBase} h-full`}>
              <PiggyBank className="w-12 h-12 text-[var(--color-brand-gold)] mb-4 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-3">{t.whyEcuador.savingsTitle}</h3>
                <p className="text-gray-300 leading-relaxed">{t.whyEcuador.savingsDesc}</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="text-5xl font-black text-[var(--color-brand-gold)]">70%</div>
                <div className="text-gray-400 text-sm">{t.whyEcuador.averageSavings}<br/>{t.whyEcuador.vsUsCosts}</div>
              </div>
            </div>
          </Reveal>

          {/* Small card 1 — gold */}
          <Reveal delay={200}>
            <div className={`bg-[var(--color-brand-gold)] rounded-3xl p-8 flex flex-col justify-between ${cardBase} h-full`}>
              <Award className="w-10 h-10 text-[var(--color-brand-blue)] mb-4" />
              <div>
                <h3 className="text-xl font-extrabold text-[var(--color-brand-blue)] mb-2">{t.whyEcuador.qualityTitle}</h3>
                <p className="text-[var(--color-brand-blue)]/80 text-sm leading-relaxed">{t.whyEcuador.qualityDesc}</p>
              </div>
            </div>
          </Reveal>

          {/* Small card 2 */}
          <Reveal delay={300}>
            <div className={`bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 ${cardBase} h-full`}>
              <Languages className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
              <h3 className="text-xl font-extrabold text-white mb-2">{t.whyEcuador.englishStaffTitle}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t.whyEcuador.englishStaffDesc}</p>
            </div>
          </Reveal>

          {/* Small card 3 */}
          <Reveal delay={400}>
            <div className={`bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 ${cardBase} h-full`}>
              <Plane className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
              <h3 className="text-xl font-extrabold text-white mb-2">{t.whyEcuador.travelAssistanceTitle}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t.whyEcuador.travelAssistanceDesc}</p>
            </div>
          </Reveal>

          {/* Small card 4 */}
          <Reveal delay={500}>
            <div className={`bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 ${cardBase} h-full`}>
              <HeartHandshake className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
              <h3 className="text-xl font-extrabold text-white mb-2">{t.whyEcuador.conciergeTitle}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t.whyEcuador.conciergeDesc}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
