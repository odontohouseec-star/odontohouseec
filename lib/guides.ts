import type { Locale } from "@/lib/dictionary";

export type GuideSlug =
  | "dental-tourism-ecuador-guide"
  | "dental-implants-abroad-cost"
  | "veneers-abroad-guide";

export const GUIDE_SLUGS: GuideSlug[] = [
  "dental-tourism-ecuador-guide",
  "dental-implants-abroad-cost",
  "veneers-abroad-guide",
];

/** Shown on every guide and in the Article schema. Update when the content changes. */
export const GUIDES_UPDATED = "2026-11-17";

export type GuideSection = { h2: string; paragraphs?: string[]; bullets?: string[] };

export type GuideContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Direct answer first: AI engines quote the opening paragraph most. */
  answer: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  waMsg: string;
};

export const GUIDE_UI: Record<Locale, {
  guides: string; updated: string; by: string; faq: string; related: string; home: string; indexTitle: string; indexIntro: string; read: string;
}> = {
  en: {
    guides: "Guides",
    updated: "Updated",
    by: "Reviewed by Dr. Elena Barroso, Odonto House",
    faq: "Frequently Asked Questions",
    related: "Keep reading",
    home: "Home",
    indexTitle: "Dental Tourism Guides",
    indexIntro: "Clear answers for US patients thinking about veneers or dental implants in Ecuador.",
    read: "Read guide",
  },
  es: {
    guides: "Guías",
    updated: "Actualizado",
    by: "Revisado por la Dra. Elena Barroso, Odonto House",
    faq: "Preguntas frecuentes",
    related: "Sigue leyendo",
    home: "Inicio",
    indexTitle: "Guías de turismo dental",
    indexIntro: "Respuestas claras para pacientes de EE. UU. que piensan hacerse carillas o implantes en Ecuador.",
    read: "Leer guía",
  },
};

const tourism: Record<Locale, GuideContent> = {
  en: {
    metaTitle: "Dental Tourism in Ecuador: A Guide for US Patients (2026)",
    metaDescription:
      "How dental tourism in Ecuador works for US patients: prices in US dollars, no visa for US citizens, direct flights to Guayaquil, how long to stay and how to plan your trip.",
    eyebrow: "Guide · Dental tourism",
    h1: "Dental Tourism in Ecuador: A Complete Guide for US Patients",
    answer:
      "Ecuador is a practical choice for US patients who want veneers or dental implants abroad. It uses the US dollar, US citizens do not need a visa for short stays, and Guayaquil has direct flights from Miami. At Odonto House in Guayaquil, average prices are up to 70% below typical US prices, the lead dentist speaks fluent English, and most Smile Design cases take 3 to 5 days.",
    sections: [
      {
        h2: "Why US patients choose Ecuador",
        bullets: [
          "Ecuador uses the US dollar, so there is no currency exchange and prices are easy to compare.",
          "US citizens can visit as tourists without a visa for up to 90 days.",
          "Guayaquil (GYE) has direct flights from Miami, about 4 hours.",
          "Ecuador is on Eastern Standard Time (UTC-5), so it is easy to talk with the clinic before you travel.",
          "Average savings of up to 70% on veneers, crowns and implants compared with typical US prices.",
        ],
      },
      {
        h2: "How it works, step by step",
        bullets: [
          "Free virtual consultation: send photos (and X-rays if you have them) on WhatsApp and talk to the dentist in English.",
          "You get a personal treatment plan and quote before you book flights.",
          "Pickup at José Joaquín de Olmedo International Airport (GYE).",
          "Treatment at the clinic, with a guest suite available on site.",
          "Final check before you fly home, and follow-up by WhatsApp.",
        ],
      },
      {
        h2: "How long should I stay?",
        paragraphs: [
          "For porcelain veneers (Smile Design), most cases take 3 to 5 days. For dental implants, plan on two trips: one to place the implants and one for the final teeth after healing, which often takes 3 to 6 months. Your exact schedule is confirmed in your consultation.",
        ],
      },
      {
        h2: "What does it cost?",
        paragraphs: [
          "Average prices at Odonto House: porcelain veneers $350 per tooth (about $1,500 in the US), a Hollywood Smile of 10-12 veneers $4,200 (about $18,000 in the US), a single implant $950 (about $4,500 in the US) and All-on-4 $8,500 per arch (about $28,000 in the US). Your final price is given after your consultation. Remember to add flights and personal expenses to your budget.",
        ],
      },
      {
        h2: "Safety and travel tips",
        paragraphs: [
          "Like any trip abroad, plan ahead. Check the US State Department travel advisory for Ecuador before you book, since it lists areas to avoid, including parts of Guayaquil. Travel with arranged transport rather than taking taxis from the street.",
          "At Odonto House we pick you up at the airport and you can stay in the guest suites at the clinic, so you move as little as possible during your treatment.",
        ],
      },
      {
        h2: "What to bring",
        bullets: [
          "A passport valid for your whole stay.",
          "Any recent dental X-rays and a list of your medications.",
          "Travel insurance that covers your trip.",
          "A card, Zelle, cash or wire transfer for payment.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a visa to visit Ecuador for dental treatment?", a: "US citizens do not need a visa for tourist stays of up to 90 days. You need a passport valid for your whole stay." },
      { q: "What currency is used in Ecuador?", a: "Ecuador uses the US dollar, so prices are the same currency you use at home." },
      { q: "Is the dentist English-speaking?", a: "Yes. Dr. Elena Barroso and the main team at Odonto House speak fluent English." },
      { q: "How do I get to Guayaquil from the US?", a: "Guayaquil's airport (GYE) has direct flights from Miami, about 4 hours, and connections from other US cities." },
    ],
    ctaTitle: "Plan your dental trip",
    ctaText: "Send us your case on WhatsApp. We reply with a personal plan and quote.",
    ctaButton: "Chat on WhatsApp",
    waMsg: "Hi! I read your dental tourism guide and I'd like to plan a trip.",
  },
  es: {
    metaTitle: "Turismo dental en Ecuador: guía para pacientes de EE. UU. (2026)",
    metaDescription:
      "Cómo funciona el turismo dental en Ecuador: precios en dólares, sin visa para ciudadanos de EE. UU., vuelos directos a Guayaquil, cuánto quedarse y cómo planear el viaje.",
    eyebrow: "Guía · Turismo dental",
    h1: "Turismo dental en Ecuador: guía completa para pacientes de EE. UU.",
    answer:
      "Ecuador es una opción práctica para pacientes de EE. UU. que quieren carillas o implantes en el extranjero. Usa el dólar, los ciudadanos de EE. UU. no necesitan visa para estadías cortas y Guayaquil tiene vuelos directos desde Miami. En Odonto House, en Guayaquil, los precios promedio son hasta 70% más bajos que en EE. UU., la doctora habla inglés con fluidez y la mayoría de los Diseños de Sonrisa toman de 3 a 5 días.",
    sections: [
      {
        h2: "Por qué los pacientes de EE. UU. eligen Ecuador",
        bullets: [
          "Ecuador usa el dólar: no hay cambio de moneda y los precios se comparan fácil.",
          "Los ciudadanos de EE. UU. pueden entrar como turistas sin visa hasta 90 días.",
          "Guayaquil (GYE) tiene vuelos directos desde Miami, de unas 4 horas.",
          "Ecuador está en la hora del Este (UTC-5), así que es fácil hablar con la clínica antes de viajar.",
          "Ahorro promedio de hasta 70% en carillas, coronas e implantes frente a precios típicos de EE. UU.",
        ],
      },
      {
        h2: "Cómo funciona, paso a paso",
        bullets: [
          "Consulta virtual gratis: envía fotos (y radiografías si tienes) por WhatsApp y habla con la doctora.",
          "Recibes un plan y una cotización personal antes de comprar pasajes.",
          "Te recogemos en el Aeropuerto José Joaquín de Olmedo (GYE).",
          "Tratamiento en la clínica, con suite para huéspedes en el mismo lugar.",
          "Revisión final antes de volver y seguimiento por WhatsApp.",
        ],
      },
      {
        h2: "¿Cuánto tiempo debo quedarme?",
        paragraphs: [
          "Para carillas de porcelana (Diseño de Sonrisa), la mayoría de los casos toman de 3 a 5 días. Para implantes, planea dos viajes: uno para colocarlos y otro para los dientes definitivos tras la cicatrización, que suele tomar de 3 a 6 meses. Tu calendario exacto se confirma en la consulta.",
        ],
      },
      {
        h2: "¿Cuánto cuesta?",
        paragraphs: [
          "Precios promedio en Odonto House: carilla de porcelana $350 por diente (unos $1.500 en EE. UU.), Hollywood Smile de 10-12 carillas $4.200 (unos $18.000 en EE. UU.), implante unitario $950 (unos $4.500 en EE. UU.) y All-on-4 $8.500 por arcada (unos $28.000 en EE. UU.). El precio final se da tras la consulta. Suma a tu presupuesto los pasajes y gastos personales.",
        ],
      },
      {
        h2: "Seguridad y consejos de viaje",
        paragraphs: [
          "Como en cualquier viaje al extranjero, planea con tiempo. Revisa la alerta de viaje del Departamento de Estado de EE. UU. para Ecuador antes de reservar, porque indica zonas a evitar, incluidas partes de Guayaquil. Muévete con transporte coordinado en lugar de tomar taxis en la calle.",
          "En Odonto House te recogemos en el aeropuerto y puedes quedarte en las suites de la clínica, así te desplazas lo menos posible durante el tratamiento.",
        ],
      },
      {
        h2: "Qué llevar",
        bullets: [
          "Pasaporte vigente durante toda tu estadía.",
          "Radiografías dentales recientes y la lista de tus medicamentos.",
          "Un seguro de viaje que cubra tu viaje.",
          "Tarjeta, Zelle, efectivo o transferencia para pagar.",
        ],
      },
    ],
    faqs: [
      { q: "¿Necesito visa para ir a Ecuador a un tratamiento dental?", a: "Los ciudadanos de EE. UU. no necesitan visa para estadías turísticas de hasta 90 días. Necesitas un pasaporte vigente durante toda la estadía." },
      { q: "¿Qué moneda se usa en Ecuador?", a: "Ecuador usa el dólar estadounidense." },
      { q: "¿La doctora habla inglés?", a: "Sí. La Dra. Elena Barroso y el equipo principal de Odonto House hablan inglés con fluidez." },
      { q: "¿Cómo llego a Guayaquil desde EE. UU.?", a: "El aeropuerto de Guayaquil (GYE) tiene vuelos directos desde Miami, de unas 4 horas, y conexiones desde otras ciudades de EE. UU." },
    ],
    ctaTitle: "Planea tu viaje dental",
    ctaText: "Envíanos tu caso por WhatsApp. Te respondemos con un plan y una cotización personal.",
    ctaButton: "Escríbenos por WhatsApp",
    waMsg: "¡Hola! Leí su guía de turismo dental y quiero planear un viaje.",
  },
};

const implants: Record<Locale, GuideContent> = {
  en: {
    metaTitle: "How Much Do Dental Implants Cost Abroad? Ecuador vs. US (2026)",
    metaDescription:
      "Dental implant prices in Ecuador vs. the US: single implant avg. $950 vs. about $4,500, All-on-4 avg. $8,500 vs. about $28,000 per arch. What's included, how many trips and how to compare clinics.",
    eyebrow: "Guide · Dental implants",
    h1: "How Much Do Dental Implants Cost Abroad? Ecuador vs. the US",
    answer:
      "At Odonto House in Guayaquil, Ecuador, a single dental implant averages $950, compared with about $4,500 in the US. All-on-4 averages $8,500 per arch (about $28,000 in the US) and All-on-6 averages $12,000 per arch (about $35,000 in the US). The clinic uses Straumann and Nobel Biocare implants, and most cases need two trips.",
    sections: [
      {
        h2: "Implant prices: Ecuador vs. US",
        bullets: [
          "Single dental implant: $950 in Ecuador vs. about $4,500 in the US (save about 79%).",
          "All-on-4, per arch: $8,500 vs. about $28,000 (save about 70%).",
          "All-on-6, per arch: $12,000 vs. about $35,000 (save about 66%).",
          "Zirconia crown: $400 vs. about $1,800 (save about 78%).",
        ],
        paragraphs: ["These are average prices. Your final quote comes after a free virtual consultation, once the dentist has seen your photos or X-rays."],
      },
      {
        h2: "Why implants cost less in Ecuador",
        paragraphs: [
          "The difference comes mostly from lower clinic, staff and lab costs, not from cheaper materials. Odonto House works with Straumann and Nobel Biocare, two of the best-known implant brands in the world. Ask any clinic you compare which implant brand it uses.",
        ],
      },
      {
        h2: "How many trips do implants need?",
        paragraphs: [
          "Most implant cases need two trips. On the first, the dentist examines you and places the implants. The implants then bond with the bone at home, often over 3 to 6 months. On the second trip you get your final crowns or full-arch bridge. Your exact plan depends on your case.",
        ],
      },
      {
        h2: "How to compare implant clinics abroad",
        bullets: [
          "Which implant brand do you use, and can I see it on my records?",
          "Who places the implants, and how many years of experience do they have?",
          "Is the price per implant, or does it include the abutment and crown?",
          "How many trips will I need, and how long is each one?",
          "What happens if something needs adjusting after I go home?",
        ],
      },
      {
        h2: "Budget for the whole trip",
        paragraphs: [
          "Add flights and personal expenses to the treatment price. At Odonto House, airport pickup is included and guest suites are available at the clinic. Ecuador uses the US dollar, so there are no exchange-rate surprises.",
        ],
      },
    ],
    faqs: [
      { q: "How much is one dental implant in Ecuador?", a: "At Odonto House a single implant averages $950, compared with about $4,500 in the US. The final price comes after your free consultation." },
      { q: "How much is All-on-4 in Ecuador?", a: "All-on-4 averages $8,500 per arch at Odonto House, compared with about $28,000 per arch in the US." },
      { q: "Which implant brands are used?", a: "Straumann and Nobel Biocare." },
      { q: "Can I get implants in one trip?", a: "Most cases need two trips: one to place the implants and one for the final teeth after healing. The dentist confirms your plan in the consultation." },
    ],
    ctaTitle: "Get your implant quote",
    ctaText: "Send us photos or X-rays on WhatsApp for a free, personal quote.",
    ctaButton: "Chat on WhatsApp",
    waMsg: "Hi! I read your implant cost guide and I'd like a quote.",
  },
  es: {
    metaTitle: "¿Cuánto cuestan los implantes dentales en el extranjero? Ecuador vs. EE. UU. (2026)",
    metaDescription:
      "Precios de implantes en Ecuador vs. EE. UU.: implante unitario promedio $950 vs. unos $4.500; All-on-4 promedio $8.500 vs. unos $28.000 por arcada. Qué incluye, cuántos viajes y cómo comparar clínicas.",
    eyebrow: "Guía · Implantes dentales",
    h1: "¿Cuánto cuestan los implantes dentales en el extranjero? Ecuador vs. EE. UU.",
    answer:
      "En Odonto House, en Guayaquil, Ecuador, un implante unitario cuesta en promedio $950, frente a unos $4.500 en EE. UU. El All-on-4 cuesta en promedio $8.500 por arcada (unos $28.000 en EE. UU.) y el All-on-6 $12.000 por arcada (unos $35.000 en EE. UU.). La clínica usa implantes Straumann y Nobel Biocare, y la mayoría de los casos necesitan dos viajes.",
    sections: [
      {
        h2: "Precios de implantes: Ecuador vs. EE. UU.",
        bullets: [
          "Implante unitario: $950 en Ecuador vs. unos $4.500 en EE. UU. (ahorro de ~79%).",
          "All-on-4, por arcada: $8.500 vs. unos $28.000 (ahorro de ~70%).",
          "All-on-6, por arcada: $12.000 vs. unos $35.000 (ahorro de ~66%).",
          "Corona de zirconio: $400 vs. unos $1.800 (ahorro de ~78%).",
        ],
        paragraphs: ["Son precios promedio. La cotización final se da tras una consulta virtual gratuita, cuando la doctora ve tus fotos o radiografías."],
      },
      {
        h2: "Por qué los implantes cuestan menos en Ecuador",
        paragraphs: [
          "La diferencia viene sobre todo de costos más bajos de clínica, personal y laboratorio, no de materiales más baratos. Odonto House trabaja con Straumann y Nobel Biocare, dos de las marcas de implantes más reconocidas del mundo. Pregunta a cualquier clínica que compares qué marca usa.",
        ],
      },
      {
        h2: "¿Cuántos viajes necesitan los implantes?",
        paragraphs: [
          "La mayoría de los casos necesitan dos viajes. En el primero, la doctora te evalúa y coloca los implantes. Luego el implante se une al hueso en casa, normalmente en 3 a 6 meses. En el segundo viaje recibes tus coronas o tu puente de arcada completa. Tu plan exacto depende de tu caso.",
        ],
      },
      {
        h2: "Cómo comparar clínicas de implantes en el extranjero",
        bullets: [
          "¿Qué marca de implante usan y aparece en mi historia clínica?",
          "¿Quién coloca los implantes y cuántos años de experiencia tiene?",
          "¿El precio es solo el implante o incluye pilar y corona?",
          "¿Cuántos viajes necesitaré y cuánto dura cada uno?",
          "¿Qué pasa si algo necesita ajuste cuando vuelva a casa?",
        ],
      },
      {
        h2: "Presupuesto del viaje completo",
        paragraphs: [
          "Suma pasajes y gastos personales al precio del tratamiento. En Odonto House la recogida en el aeropuerto está incluida y hay suites para huéspedes en la clínica. Ecuador usa el dólar, así que no hay sorpresas con el tipo de cambio.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuánto cuesta un implante dental en Ecuador?", a: "En Odonto House un implante unitario cuesta en promedio $950, frente a unos $4.500 en EE. UU. El precio final se da tras la consulta gratuita." },
      { q: "¿Cuánto cuesta el All-on-4 en Ecuador?", a: "El All-on-4 cuesta en promedio $8.500 por arcada en Odonto House, frente a unos $28.000 en EE. UU." },
      { q: "¿Qué marcas de implantes usan?", a: "Straumann y Nobel Biocare." },
      { q: "¿Puedo ponerme implantes en un solo viaje?", a: "La mayoría de los casos necesitan dos viajes: uno para colocar los implantes y otro para los dientes definitivos tras la cicatrización. La doctora confirma tu plan en la consulta." },
    ],
    ctaTitle: "Cotiza tus implantes",
    ctaText: "Envíanos fotos o radiografías por WhatsApp para una cotización personal y gratis.",
    ctaButton: "Escríbenos por WhatsApp",
    waMsg: "¡Hola! Leí su guía de precios de implantes y quiero una cotización.",
  },
};

const veneers: Record<Locale, GuideContent> = {
  en: {
    metaTitle: "Getting Veneers Abroad: What to Know Before You Go (2026)",
    metaDescription:
      "A practical guide to porcelain veneers abroad: prices in Ecuador vs. the US, porcelain vs. composite, how many days you need, questions to ask the clinic and aftercare.",
    eyebrow: "Guide · Veneers",
    h1: "Getting Veneers Abroad: What to Know Before You Go",
    answer:
      "Porcelain veneers abroad can cost a fraction of US prices: at Odonto House in Guayaquil, Ecuador, Emax porcelain veneers average $350 per tooth (about $1,500 in the US) and a full Hollywood Smile of 10-12 veneers averages $4,200 (about $18,000 in the US). Most Smile Design cases take 3 to 5 days. Before you go, check the material, who does the work and what aftercare you get.",
    sections: [
      {
        h2: "Porcelain vs. composite veneers",
        paragraphs: [
          "Porcelain veneers, such as Emax, are made in a lab, resist stains and often last 10 to 15 years or more with good care. Composite veneers are sculpted directly on the tooth, cost less and are faster, but they stain and chip more easily and usually need more upkeep. Ask which type is in your quote: a very low price is often for composite.",
        ],
      },
      {
        h2: "Veneer prices: Ecuador vs. US",
        bullets: [
          "Emax porcelain veneer: $350 per tooth vs. about $1,500 in the US.",
          "Hollywood Smile (10-12 veneers): $4,200 vs. about $18,000.",
          "Zirconia crown: $400 vs. about $1,800.",
          "Laser whitening: $250 per session vs. about $800.",
        ],
        paragraphs: ["Average prices; your final quote comes after a free virtual consultation."],
      },
      {
        h2: "How many days do I need?",
        paragraphs: [
          "Most Smile Design cases with porcelain veneers take 3 to 5 days: an exam and smile design, preparation of the teeth, making and trying in the veneers, and final placement. Plan to stay for the whole treatment so the dentist can check the result before you fly home.",
        ],
      },
      {
        h2: "Questions to ask any clinic",
        bullets: [
          "Are the veneers porcelain (which brand) or composite?",
          "How much of my natural tooth will be removed?",
          "Will I see a design or try-in of my new smile before final placement?",
          "Who does the work, and can I see real before-and-after cases?",
          "What happens if a veneer chips or comes off after I go home?",
        ],
      },
      {
        h2: "Aftercare",
        bullets: [
          "Brush twice a day and floss; veneers need the same care as natural teeth.",
          "Wear a night guard if you grind your teeth.",
          "Avoid biting very hard things like ice or bottle caps.",
          "See a dentist for regular checkups at home.",
        ],
      },
    ],
    faqs: [
      { q: "How much do veneers cost in Ecuador?", a: "At Odonto House, Emax porcelain veneers average $350 per tooth, and a Hollywood Smile of 10-12 veneers averages $4,200." },
      { q: "How long does it take to get veneers abroad?", a: "Most Smile Design cases with porcelain veneers take 3 to 5 days at Odonto House." },
      { q: "Do veneers damage your teeth?", a: "Porcelain veneers usually require removing a thin layer of enamel. The dentist should explain exactly what your case needs before you decide." },
      { q: "How long do porcelain veneers last?", a: "With good care, porcelain veneers often last 10 to 15 years or more." },
    ],
    ctaTitle: "Get your smile quote",
    ctaText: "Send us smile photos on WhatsApp for a free, personal quote.",
    ctaButton: "Chat on WhatsApp",
    waMsg: "Hi! I read your veneers guide and I'd like a quote.",
  },
  es: {
    metaTitle: "Carillas en el extranjero: lo que debes saber antes de ir (2026)",
    metaDescription:
      "Guía práctica de carillas de porcelana en el extranjero: precios en Ecuador vs. EE. UU., porcelana vs. resina, cuántos días necesitas, preguntas para la clínica y cuidados.",
    eyebrow: "Guía · Carillas",
    h1: "Carillas en el extranjero: lo que debes saber antes de ir",
    answer:
      "Las carillas de porcelana en el extranjero pueden costar una fracción del precio en EE. UU.: en Odonto House, en Guayaquil, Ecuador, la carilla Emax cuesta en promedio $350 por diente (unos $1.500 en EE. UU.) y un Hollywood Smile de 10-12 carillas $4.200 (unos $18.000 en EE. UU.). La mayoría de los Diseños de Sonrisa toman de 3 a 5 días. Antes de ir, revisa el material, quién hace el trabajo y qué seguimiento recibes.",
    sections: [
      {
        h2: "Carillas de porcelana vs. de resina",
        paragraphs: [
          "Las carillas de porcelana, como las Emax, se fabrican en laboratorio, resisten manchas y suelen durar de 10 a 15 años o más con buen cuidado. Las de resina se moldean directo sobre el diente, cuestan menos y son más rápidas, pero se manchan y se astillan con más facilidad y necesitan más mantenimiento. Pregunta qué tipo incluye tu cotización: un precio muy bajo suele ser de resina.",
        ],
      },
      {
        h2: "Precios de carillas: Ecuador vs. EE. UU.",
        bullets: [
          "Carilla de porcelana Emax: $350 por diente vs. unos $1.500 en EE. UU.",
          "Hollywood Smile (10-12 carillas): $4.200 vs. unos $18.000.",
          "Corona de zirconio: $400 vs. unos $1.800.",
          "Blanqueamiento láser: $250 por sesión vs. unos $800.",
        ],
        paragraphs: ["Precios promedio; la cotización final se da tras una consulta virtual gratuita."],
      },
      {
        h2: "¿Cuántos días necesito?",
        paragraphs: [
          "La mayoría de los Diseños de Sonrisa con carillas de porcelana toman de 3 a 5 días: evaluación y diseño, preparación de los dientes, fabricación y prueba de las carillas, y colocación final. Planea quedarte todo el tratamiento para que la doctora revise el resultado antes de que vuelvas.",
        ],
      },
      {
        h2: "Preguntas para cualquier clínica",
        bullets: [
          "¿Las carillas son de porcelana (qué marca) o de resina?",
          "¿Cuánto de mi diente natural se va a retirar?",
          "¿Veré un diseño o una prueba de mi nueva sonrisa antes de la colocación final?",
          "¿Quién hace el trabajo y puedo ver casos reales de antes y después?",
          "¿Qué pasa si una carilla se astilla o se despega cuando ya esté en casa?",
        ],
      },
      {
        h2: "Cuidados después",
        bullets: [
          "Cepíllate dos veces al día y usa hilo dental; las carillas necesitan el mismo cuidado que los dientes naturales.",
          "Usa una férula de noche si aprietas o rechinas los dientes.",
          "Evita morder cosas muy duras como hielo o tapas de botella.",
          "Haz controles regulares con tu dentista en casa.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuánto cuestan las carillas en Ecuador?", a: "En Odonto House la carilla de porcelana Emax cuesta en promedio $350 por diente, y un Hollywood Smile de 10-12 carillas $4.200." },
      { q: "¿Cuánto tiempo toma ponerse carillas en el extranjero?", a: "La mayoría de los Diseños de Sonrisa con carillas de porcelana toman de 3 a 5 días en Odonto House." },
      { q: "¿Las carillas dañan los dientes?", a: "Las carillas de porcelana suelen requerir retirar una capa delgada de esmalte. La doctora debe explicarte qué necesita tu caso antes de que decidas." },
      { q: "¿Cuánto duran las carillas de porcelana?", a: "Con buen cuidado, suelen durar de 10 a 15 años o más." },
    ],
    ctaTitle: "Cotiza tu sonrisa",
    ctaText: "Envíanos fotos de tu sonrisa por WhatsApp para una cotización personal y gratis.",
    ctaButton: "Escríbenos por WhatsApp",
    waMsg: "¡Hola! Leí su guía de carillas y quiero una cotización.",
  },
};

export const GUIDES: Record<GuideSlug, Record<Locale, GuideContent>> = {
  "dental-tourism-ecuador-guide": tourism,
  "dental-implants-abroad-cost": implants,
  "veneers-abroad-guide": veneers,
};
