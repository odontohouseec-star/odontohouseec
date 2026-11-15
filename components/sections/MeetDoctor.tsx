import React from "react";
import Image from "next/image";
import { ShieldCheck, Languages, Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { waLink } from "@/lib/constants";
import { Dictionary } from "@/lib/dictionary";

export const MeetDoctor = ({ t }: { t: Dictionary }) => {
  const credentials = [
    { icon: <Star className="w-5 h-5" />, text: t.doctor.cred1 },
    { icon: <Languages className="w-5 h-5" />, text: t.doctor.cred2 },
    { icon: <ShieldCheck className="w-5 h-5" />, text: t.doctor.cred3 },
  ];

  return (
    <section id="doctor" className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* Image */}
          <Reveal 
            direction="right" 
            distance={100} 
            className="w-full lg:w-5/12 relative flex-shrink-0 aspect-[3/4] min-h-[400px] md:min-h-[500px]"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl group relative">
              <Image
                src="/doctora.jpg"
                alt="Dr. Elena Barroso, specialist in aesthetic dentistry"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={75}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] rounded-2xl shadow-xl px-6 py-4 text-center">
              <div className="text-3xl font-black">{t.doctor.yearsExpValue}</div>
              <div className="text-xs font-bold uppercase tracking-wider">{t.doctor.yearsExpLabel}</div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal direction="left" distance={100} delay={300} className="w-full lg:w-7/12">
            <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">{t.doctor.specialist}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3 mb-2">
              {t.doctor.meet}
            </h2>
            <p className="text-[#8f6d21] font-semibold mb-8 text-lg">{t.doctor.credentials}</p>
            <p className="text-base md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed">{t.doctor.bio}</p>

            <div className="space-y-4 mb-10">
              {credentials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)] flex items-center justify-center text-[var(--color-brand-gold)] flex-shrink-0 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-blue)] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={waLink(t.doctor.whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--color-brand-blue)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-blue)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.doctor.bookConsultation}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
