"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const translations = {
  es: {
    title: "Política de Privacidad",
    lastUpdate: "Última actualización",
    date: "Noviembre 2026",
    intro: "En Odonto House, entendemos la importancia de tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.",
    sections: {
      collection: {
        title: "Información que recopilamos",
        items: [
          "Información de contacto (nombre, email, teléfono)",
          "Datos de consulta médica",
          "Información de pago",
          "Cookies y datos de navegación",
        ],
        text: "",
      },
      use: {
        title: "Cómo usamos tu información",
        items: [
          "Proporcionar servicios dentales",
          "Comunicarte sobre tu tratamiento",
          "Mejorar nuestra atención",
          "Medir y optimizar campañas publicitarias mediante Google Ads",
          "Cumplir requisitos legales",
        ],
        text: "",
      },
      cookies: {
        title: "Cookies y Publicidad (Google Ads)",
        items: [
          "Cookies necesarias: esenciales para el funcionamiento del sitio",
          "Cookies analíticas: nos ayudan a entender el uso del sitio",
          "Cookies de publicidad y seguimiento (Google Ads): utilizamos la plataforma Google Ads y etiquetas de conversión para medir la efectividad de nuestras campañas publicitarias y evaluar acciones de contacto relevantes (como envíos de formularios o clics a WhatsApp)",
          "Puedes gestionar tus preferencias de cookies en cualquier momento desde nuestro banner de configuración o inhabilitar la personalización de anuncios en adssettings.google.com",
        ],
      },
      sharing: {
        title: "Compartir información",
        items: [
          "No vendemos tus datos personales",
          "Compartimos solo con profesionales médicos autorizados",
          "Proveedores de servicios tecnológicos y publicitarios (incluyendo Google para análisis agregado de rendimiento de campañas)",
          "Podemos compartir datos con autoridades legales si es requerido",
        ],
      },
      security: {
        title: "Seguridad",
        items: [
          "Cifrado SSL/TLS para datos sensibles",
          "Acceso restringido a información personal",
          "Auditorías regulares de seguridad",
        ],
      },
      rights: {
        title: "Tus derechos",
        items: [
          "Acceder a tu información personal",
          "Corregir datos incorrectos",
          "Solicitar eliminación de tus datos",
          "Opt-out de cookies analíticas y publicitarias",
        ],
      },
      contact: {
        title: "Contáctanos",
        items: [],
      },
    },
  },
  en: {
    title: "Privacy Policy",
    lastUpdate: "Last updated",
    date: "November 2026",
    intro: "At Odonto House, we understand the importance of your privacy. This policy describes how we collect, use, and protect your personal information.",
    sections: {
      collection: {
        title: "Information we collect",
        items: [
          "Contact information (name, email, phone)",
          "Medical consultation data",
          "Payment information",
          "Cookies and browsing data",
        ],
      },
      use: {
        title: "How we use your information",
        items: [
          "Provide dental services",
          "Communicate about your treatment",
          "Improve our care",
          "Measure and optimize advertising campaigns through Google Ads",
          "Comply with legal requirements",
        ],
      },
      cookies: {
        title: "Cookies and Advertising (Google Ads)",
        items: [
          "Necessary cookies: essential for site functionality",
          "Analytics cookies: help us understand site usage",
          "Advertising and tracking cookies (Google Ads): we use the Google Ads platform and conversion tracking tags to measure the effectiveness of our advertising campaigns and analyze relevant contact actions (such as form submissions or clicks to WhatsApp)",
          "You can manage your cookie preferences at any time via our settings banner or opt out of personalized ads at adssettings.google.com",
        ],
      },
      sharing: {
        title: "Sharing information",
        items: [
          "We do not sell your personal data",
          "Share only with authorized medical professionals",
          "Technology and advertising service providers (including Google for aggregate campaign performance analysis)",
          "May share data with legal authorities if required",
        ],
      },
      security: {
        title: "Security",
        items: [
          "SSL/TLS encryption for sensitive data",
          "Restricted access to personal information",
          "Regular security audits",
        ],
      },
      rights: {
        title: "Your rights",
        items: [
          "Access your personal information",
          "Correct inaccurate data",
          "Request deletion of your data",
          "Opt-out of analytics and advertising cookies",
        ],
      },
      contact: {
        title: "Contact us",
        items: [],
      },
    },
  },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.es;

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[var(--color-brand-blue)]/10 rounded-full">
            <Shield className="w-8 h-8 text-[var(--color-brand-blue)]" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand-blue)]">{t.title}</h1>
            <p className="text-sm text-gray-500">{t.lastUpdate}: {t.date}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-10 leading-relaxed">{t.intro}</p>

        <div className="space-y-8">
          {Object.entries(t.sections).map(([key, section]) => (
            <section key={key} className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[var(--color-brand-blue)] mb-4">{section.title}</h2>
              {key === "contact" ? (
                <div className="text-gray-600">
                  <p className="mb-4 text-sm">
                    {language === "en"
                      ? "If you have questions about this policy, contact us:"
                      : "Si tienes preguntas sobre esta política, contáctanos:"}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[var(--color-brand-gold)]" />
                      <a href="mailto:odontohouse.ec@gmail.com" className="hover:underline">odontohouse.ec@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[var(--color-brand-gold)]" />
                      <span>+593 99 090 4443</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--color-brand-gold)]" />
                      <span>Guayaquil, Ecuador</span>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-[var(--color-brand-gold)] rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
