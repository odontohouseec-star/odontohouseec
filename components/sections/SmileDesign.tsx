"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeftRight, ImageIcon } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";

export const SmileDesign = ({ t }: { t: Dictionary }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const imagesReady = beforeLoaded && afterLoaded;

  return (
    <section id="results" className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 md:mb-12">
          <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">{t.smileDesign.results}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3 mb-3 md:mb-4">
            {t.smileDesign.title}
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {t.smileDesign.description}
          </p>
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className={`relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl select-none touch-pan-y ${imagesReady ? "cursor-col-resize" : "cursor-default"}`}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Placeholder when images are not uploaded */}
          {!imagesReady && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 z-40">
              <ImageIcon className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 font-semibold text-lg">{t.smileDesign.comingSoon}</p>
              <p className="text-gray-300 text-sm mt-2">{t.smileDesign.upload} <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">before.jpg</code> {t.smileDesign.and} <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">after.jpg</code> {t.smileDesign.to} <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">public/</code></p>
            </div>
          )}

          {/* After Image (Background — full width, color) */}
          <div className="absolute inset-0">
            <Image
              src="/after2.webp"
              alt="Smile after dental treatment"
              fill
              unoptimized
              className="object-cover"
              draggable={false}
              onError={() => setAfterLoaded(false)}
              onLoad={() => setAfterLoaded(true)}
            />
          </div>

          {/* Before Image (Foreground — clipped to left side, grayscale) */}
          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/before2.webp"
              alt="Smile before dental treatment"
              fill
              unoptimized
              className="object-cover grayscale"
              draggable={false}
              onError={() => setBeforeLoaded(false)}
              onLoad={() => setBeforeLoaded(true)}
            />
          </div>

          {/* Fixed labels — always visible when images are loaded */}
          {imagesReady && (
            <>
              <div className="absolute top-4 left-4 z-30 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm pointer-events-none">
                {t.smileDesign.before}
              </div>
              <div className="absolute top-4 right-4 z-30 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg pointer-events-none">
                {t.smileDesign.after}
              </div>
            </>
          )}

          {/* Slider Handle */}
          {imagesReady && (
            <div
              className="absolute top-0 bottom-0 z-20 w-0.5 bg-white cursor-col-resize"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[var(--color-brand-gold)]">
                <ArrowLeftRight className="w-5 h-5 text-[var(--color-brand-blue)]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
