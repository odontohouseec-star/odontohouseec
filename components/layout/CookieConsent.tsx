"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { Cookie, X } from "lucide-react";

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

const translations = {
  es: {
    title: "Usamos cookies",
    description:
      "Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Puedes aceptar todas las cookies o gestionarlas individualmente.",
    acceptAll: "Aceptar todo",
    reject: "Rechazar",
    manage: "Gestionar preferencias",
    openSettings: "Configurar cookies",
    necessary: "Necesarias",
    necessaryDesc: "Siempre activas - esenciales para el funcionamiento del sitio",
    analytics: "Analíticas",
    analyticsDesc: "Nos ayudan a entender cómo los visitantes interactúan con el sitio",
    marketing: "Marketing",
    marketingDesc: "Se usan para mostrar anuncios relevantes",
    savePreferences: "Guardar preferencias",
    privacyPolicy: "Política de Privacidad",
  },
  en: {
    title: "We use cookies",
    description:
      "We use cookies to improve your experience and analyze site traffic. You can accept all cookies or manage them individually.",
    acceptAll: "Accept all",
    reject: "Reject",
    manage: "Manage preferences",
    openSettings: "Cookie settings",
    necessary: "Necessary",
    necessaryDesc: "Always active - essential for site functionality",
    analytics: "Analytics",
    analyticsDesc: "Help us understand how visitors interact with the site",
    marketing: "Marketing",
    marketingDesc: "Used to display relevant advertisements",
    savePreferences: "Save preferences",
    privacyPolicy: "Privacy Policy",
  },
};

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const applyConsent = (prefs: CookiePreferences) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: prefs.analytics ? "granted" : "denied",
      ad_storage: prefs.marketing ? "granted" : "denied",
      ad_user_data: prefs.marketing ? "granted" : "denied",
      ad_personalization: prefs.marketing ? "granted" : "denied",
    });
  }
};

export const CookieConsent = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const t = translations[language as keyof typeof translations] || translations.es;
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const isPrivacyPage = pathname === "/privacy";

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(stored) as CookiePreferences;
      setPreferences(parsed);
      applyConsent(parsed);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true };
    setPreferences(newPrefs);
    localStorage.setItem("cookie_consent", JSON.stringify(newPrefs));
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(false);
    applyConsent(newPrefs);
  };

  const handleReject = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false };
    setPreferences(newPrefs);
    localStorage.setItem("cookie_consent", JSON.stringify(newPrefs));
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(isPrivacyPage);
    applyConsent(newPrefs);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(isPrivacyPage);
    applyConsent(preferences);
  };

  const shouldShowFloating = showFloatingButton || isPrivacyPage;

  if (!showBanner && !showSettings && !shouldShowFloating) return null;

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Cookie className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0" />
              <p className="line-clamp-2 md:line-clamp-1">{t.description}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
              >
                {t.reject}
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-[var(--color-brand-blue)] font-medium text-sm hover:underline"
              >
                {t.manage}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold rounded-full text-sm hover:bg-[var(--color-brand-gold-light)] transition-colors"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowSettings(false)} />
          <div className="relative w-full max-w-lg mx-4 mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[var(--color-brand-blue)]">{t.manage}</h3>
                <button onClick={() => setShowSettings(false)} className="p-1 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{t.necessary}</p>
                    <p className="text-xs text-gray-500">{t.necessaryDesc}</p>
                  </div>
                  <input type="checkbox" checked disabled className="mt-1 w-4 h-4 accent-[var(--color-brand-blue)]" />
                </div>

                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{t.analytics}</p>
                    <p className="text-xs text-gray-500">{t.analyticsDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[var(--color-brand-blue)]"
                  />
                </div>

                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{t.marketing}</p>
                    <p className="text-xs text-gray-500">{t.marketingDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[var(--color-brand-blue)]"
                  />
                </div>
              </div>

              <button
                onClick={handleSavePreferences}
                className="w-full px-4 py-2.5 bg-[var(--color-brand-blue)] text-white font-bold rounded-full text-sm hover:bg-[var(--color-brand-blue)]/90 transition-colors"
              >
                {t.savePreferences}
              </button>
            </div>
          </div>
        </div>
      )}

      {shouldShowFloating && !showBanner && !showSettings && (
        <button
          onClick={() => setShowSettings(true)}
          className="fixed bottom-4 right-4 z-50 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] px-4 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-[var(--color-brand-gold-light)] transition-all flex items-center gap-2"
        >
          <Cookie className="w-4 h-4" />
          {t.openSettings}
        </button>
      )}
    </>
  );
};