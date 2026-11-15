import React from "react";
import { Star, Quote } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Dictionary } from "@/lib/dictionary";

export const Testimonials = ({ t }: { t: Dictionary }) => {
  return (
    <section id="testimonials" className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">{t.testimonials.patientStories}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.reviews.map((review, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div
                className={`rounded-3xl p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full ${
                  idx === 1
                    ? "bg-[var(--color-brand-blue)] text-white"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <Quote
                  className={`w-10 h-10 mb-6 transition-transform duration-300 hover:scale-110 ${
                    idx === 1 ? "text-[var(--color-brand-gold)]" : "text-gray-200"
                  }`}
                />
                <p className={`text-lg leading-relaxed mb-8 flex-grow ${idx === 1 ? "text-gray-300" : "text-gray-600"}`}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-extrabold ${idx === 1 ? "text-white" : "text-[var(--color-brand-blue)]"}`}>
                      {review.name}
                    </h3>
                    <span className={`text-sm ${idx === 1 ? "text-white/70" : "text-gray-500"}`}>{review.location}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]"
                      />
                    ))}
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
