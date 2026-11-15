import React from "react";
import { ArrowRight, Smile, Syringe, Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Dictionary } from "@/lib/dictionary";

export const Services = ({ t }: { t: Dictionary }) => {

  const services = [
    {
      title: t.services.orthoTitle,
      description: t.services.orthoDesc,
      icon: <Smile className="w-10 h-10" />,
      tag: t.services.mostPopular,
    },
    {
      title: t.services.wisdomTitle,
      description: t.services.wisdomDesc,
      icon: <Syringe className="w-10 h-10" />,
      tag: t.services.painless,
    },
    {
      title: t.services.whiteningTitle,
      description: t.services.whiteningDesc,
      icon: <Sparkles className="w-10 h-10" />,
      tag: t.services.oneSession,
    },
  ];

  return (
    <section id="services" className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">{t.services.whatWeOffer}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3 mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service: { title: string; description: string; icon: React.ReactNode; tag: string }, idx: number) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <div
                className="group h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col relative overflow-hidden"
              >
                {/* Animated gradient glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, var(--color-brand-gold)/8%, transparent 60%)" }} />

                {/* Tag */}
                <span className="absolute top-5 right-5 text-xs font-bold text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/20 px-3 py-1 rounded-full">
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-blue)] flex items-center justify-center text-[var(--color-brand-gold)] mb-6 group-hover:bg-[var(--color-brand-gold)] group-hover:text-white transition-colors duration-300 group-hover:rotate-3 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="text-xl font-extrabold text-[var(--color-brand-blue)] mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{service.description}</p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[var(--color-brand-blue)] font-bold group-hover:text-[var(--color-brand-gold)] transition-colors"
                >
                  {t.services.learnMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
